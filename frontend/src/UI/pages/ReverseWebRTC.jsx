import * as THREE from "three";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/core/OrbitControls.js";
// import { OrthographicCamera } from "@react-three/drei";

import { TextureLoader } from "three/src/loaders/TextureLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CatAnimations from "../../assets/players/Cat_Animations.js";
import { SkyTube } from "../../assets/deco/SkyTube.js";
import ReverseNavbar from "../organisms/ReverseNavbar.jsx";

var channels = [];
var channelUsers = new Map();
var friendToName = new Map();
var audioMap = new Map();
var rtcPeers = new Map();
var ws1;
let localStream;

function ReverseWebRTC() {
  // default action = idle
  const refCanvas = useRef();
  const [action, setAction] = useState("Idle_A");
  // const [characterPosition, setCharacterPosition] = useState();
  const [destinationPoint, setDestinationPoint] = useState();
  const floorTexture = useLoader(TextureLoader, "/textures/grid.png");
  if (floorTexture) {
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.x = 10;
    floorTexture.repeat.y = 10;
  }

  // orthographic camera
  const aspect = window.innerWidth / window.innerHeight;

  const [isPressed, setIsPressed] = useState(false);

  const [userId, setUserId] = useState("");
  const [archiveId, setArchiveId] = useState("");
  const [rtcPeers2, setRtcPeers2] = useState("");
  const offerOptions = {
    offerToReceiveAudio: true,
  };
  var signal1 = {
    userId: null,
    type: null,
    data: null,
    toUid: null,
    archiveId: null,
  };
  var chatData = {
    userId: null,
    data: null,
    type: null,
  };
  const archiveidHandle = (e) => {
    setArchiveId(e.target.value);
  };
  var userId2 = "";
  async function login() {
    let inputName = document.getElementById("myUsername");
    if (archiveId.length < 1) {
      toast.error("archive Id cannot be blank");
      return;
    }
    if (inputName.value.length < 1) {
      toast.error("Username cannot be blank");
      return;
    }
    await navigator.mediaDevices
      .getUserMedia({ audio: { echoCancellation: true } })
      .then(handleAudio)
      .catch((e) => {
        //console.lo(e);
      });
    startWebSocket();
  }
  function handleAudio(stream) {
    localStream = stream;
    const audio = document.getElementById("myAudio");
    //console.lo(audio);
    const audioTracks = localStream.getAudioTracks();
    //console.lo(audioTracks);
    localStream.oninactive = function () {
      //console.lo("stream ended");
    };
    // window.stream = localStream;
    audio.srcObject = localStream;
  }

  function startWebSocket() {
    console.log("startWebSocket");
    ws1 = new WebSocket("wss://re-verse.co.kr/socket");
    console.log(ws1);
    let sessionStorage = window.sessionStorage;
    sessionStorage.setItem("archive", archiveId);

    ws1.onopen = (event) => {
      signal1.userId = "";
      signal1.type = "Login";
      signal1.data = "";
      signal1.archiveId = archiveId;
      ws1.send(JSON.stringify(signal1));
    };

    ws1.onerror = (error) => {
      toast.error(
        "Error connecting to signalling server, please try login again"
      );
    };

    ws1.onclose = (event) => {
      // document.getElementById("status-offline").style.display = "block";
      // document.getElementById("status-online").style.display = "none";
      // document.getElementById("myUsername").removeAttribute("readOnly");
      // let myStatus = document.getElementById("myStatus");
      // myStatus.className = "status orange";
      // document.getElementById("h3-myStatus").innerText = "offline";
      // document.getElementById("h3-myStatus").appendChild(myStatus);
      // document.getElementById("btnLogin").style.display = "block";
      // document.getElementById("toSend").setAttribute("disabled", "true");
      // document.getElementById("btnSend").setAttribute("disabled", "true");
    };

    ws1.onmessage = (event) => {
      var data1 = JSON.parse(event.data);

      var data2 = null;
      console.log("here is onmessage");
      if (data1.userId === userId2 || data1.userId.length < 2) {
        return;
      } else if (data1.type === "NewMember") {
        handleNewMemberAndOffer(data1);
      } else if (data1.type === "UserId") {
        setUserId(data1.data);

        userId2 = data1.data;
        // document.getElementById("status-offline").style.display = "none";
        // document.getElementById("status-online").style.display = "block";
        // document.getElementById("toSend").removeAttribute("disabled");
        // document.getElementById("btnSend").removeAttribute("disabled");
        // document.getElementById("btnLogin").style.display = "none";
        // document.getElementById("myUsername").setAttribute("readOnly", "true");

        // let myStatus = document.getElementById("myStatus");
        // myStatus.className = "status green";
        // document.getElementById("h3-myStatus").innerText = "online";
        // document.getElementById("h3-myStatus").appendChild(myStatus);
        // document.getElementById('btnShowLogin').click();
        toast.success(
          "Connected to Signalling Server. Please click the Show Login/Chat button"
        );
        newMember(userId2);
      } else if (data1.type === "Offer") {
        data2 = JSON.parse(data1.data);
        console.log("Receive offer:");
        handleNewMemberAndOffer(data1);
      } else if (data1.type === "Ice") {
        data2 = JSON.parse(data1.data);
        if (data2) {
          let peer1 = rtcPeers.get(data1.userId);

          if (peer1) {
            peer1
              .addIceCandidate(new RTCIceCandidate(data2))
              .catch((error) => {});
          }
        }
      } else if (data1.type === "Answer") {
        console.log("Receive answer:");
        data2 = JSON.parse(data1.data);
        console.log(data2);
        let peer1 = rtcPeers.get(data1.userId);
        peer1.setRemoteDescription(new RTCSessionDescription(data2));
      }
    };
  }

  function handleNewMemberAndOffer(data1) {
    console.log("handle new member");
    let data3 = JSON.parse(data1.data);
    let peerId = data1.userId;
    let rtcPeer = new RTCPeerConnection({
      offerToReceiveAudio: true,
      iceServers: [
        {
          urls: "stun:re-verse.co.kr:8997",
        },
        {
          urls: "turn:re-verse.co.kr:8997?transport=tcp",
          username: "reverse",
          credential: "flQjtm1024",
        },
      ],
    });
    console.log(localStream);
    localStream.getTracks().forEach((track) => {
      console.log("in the rtcpeer make phase track");
      rtcPeer.addTrack(track, localStream);
    });

    setRtcPeers2(rtcPeers2);

    if (data1.type === "NewMember") {
      let channel1 = rtcPeer.createDataChannel(
        Math.floor(Math.random() * 10000000000)
      );
      channelConfig(channel1);

      //create offer
      rtcPeer
        .createOffer()
        .then((a) => {
          console.log("Sending offer");
          console.log(a);
          signal1.userId = userId2;
          signal1.type = "Offer";
          signal1.data = JSON.stringify(a);
          signal1.toUid = data1.userId;
          ws1.send(JSON.stringify(signal1));
          rtcPeer.setLocalDescription(a);
        })
        .then(() => {})
        .catch((err) => {
          console.log("Error Offer:" + err);
        });
    }
    //when not new member
    else {
      let data2 = JSON.parse(data1.data);
      console.log("Sending answer");
      rtcPeer.setRemoteDescription(data2).then(() => {
        rtcPeer.createAnswer().then((a) => {
          signal1.userId = userId2;
          signal1.type = "Answer";
          signal1.data = JSON.stringify(a);
          signal1.toUid = data1.userId;
          rtcPeer.setLocalDescription(a);
          ws1.send(JSON.stringify(signal1));
        });
      });
    }
    rtcPeer.ondatachannel = (event) => {
      let channel2 = event.channel;
      channelConfig(channel2);
    };
    rtcPeer.ontrack = (event) => {
      console.log("here is ontrack phase");
      // console.log("this is answer ontrack");
      console.log(friendToName);
      console.log(peerId);
      console.log(audioMap.size);
      audioMap.set(peerId, "audio" + audioMap.size);
      console.log(audioMap);

      let newUser = document.createElement("li");
      let div1 = document.createElement("div");
      let h2 = document.createElement("h2");
      h2.innerText = peerId;
      let div2 = document.createElement("div");
      let userAudio = document.createElement("audio");
      userAudio.id = audioMap.get(peerId);
      console.log("this is userAudio id : " + userAudio.id);
      userAudio.autoplay = true;
      userAudio.controls = true;
      div2.appendChild(userAudio);
      div1.appendChild(h2);
      newUser.appendChild(div1);
      newUser.appendChild(div2);
      document.getElementById("user-audio").appendChild(newUser);
      const peerAudio = document.getElementById(audioMap.get(peerId));
      console.log(event.streams);
      if (peerAudio.srcObject !== event.streams[0]) {
        peerAudio.srcObject = event.streams[0];
      }
      console.log(event.streams);
      //console.lo(audioComp);
      //console.lo(peerAudio);
    };
    rtcPeer.onicecandidate = (event) => {
      if (event.candidate) {
        signal1.userId = userId2;
        signal1.type = "Ice";
        signal1.data = JSON.stringify(event.candidate);
        signal1.toUid = data1.userId;
      }
      if (event.candidate) {
        if (Object.keys(event.candidate.candidate).length > 1) {
          ws1.send(JSON.stringify(signal1));
        }
      }
    };
    rtcPeer.onicecandidateerror = (event) => {};

    rtcPeer.onicegatheringstatechange = (event) => {};

    rtcPeer.oniceconnectionstatechange = (event) => {};
    rtcPeers.set(peerId, rtcPeer);
  }
  function channelConfig(channel1: RTCDataChannel) {
    channel1.onclose = (event) => {
      //console.lo("Close channel:");
      let friendId = channelUsers.get(channel1);
      document.getElementById(friendId).remove();

      // addUserOnChat(friendToName.get(friendId), false);
      friendToName.delete(friendId);
    };
    channel1.onmessage = (event) => {
      //console.lo("Receive msg datachannel:" + event.data);
      let dataChat1 = JSON.parse(event.data);
      // if (dataChat1.type === "message") {
      //   addChatLine(dataChat1.data, "you", dataChat1.userId);
      // } else {
      //   friendToName.set(dataChat1.userId, dataChat1.data);
      //   addUser(dataChat1.data, dataChat1.userId);
      //   channelUsers.set(channel1, dataChat1.userId);
      // }
    };

    channel1.onopen = () => {
      //console.lo("Now it's open");
      chatData.userId = userId2;
      chatData.type = "handshake";
      chatData.data = document.getElementById("myUsername").value;
      channel1.send(JSON.stringify(chatData));
    };
    channels.push(channel1);
  }
  function newMember(data1: String) {
    signal1.userId = data1;
    signal1.type = "NewMember";
    signal1.toUid = "signaling";
    signal1.data = "Join";
    signal1.archiveId = archiveId;
    ws1.send(JSON.stringify(signal1));
  }

  function disconnectAll() {
    ws1.close();
    rtcPeers.forEach((a, b) => {
      a.close();
    });
    rtcPeers.clear();
    channels = [];
    channelUsers.forEach((a, b) => document.getElementById(a).remove());
    channelUsers.clear();
  }

  return (
    <div className="h-screen overflow-hidden relative">
      <input
        type="text"
        id="archive"
        value={archiveId}
        onChange={archiveidHandle}
        placeholder="Put Archive Id"
      />
      <br></br>
      <input type="text" id="myUsername" placeholder="Put Username" />
      <br></br>
      <button id="btnLogin" className="bg-white" onClick={() => login()}>
        Login
      </button>
      &nbsp; &nbsp; &nbsp;
      <button
        id="btnLogin"
        className="bg-white"
        onClick={() => disconnectAll()}
      >
        Logout
      </button>
      <audio id="myAudio" autoPlay hidden muted controls></audio>
      {/* <div className=" mt-4">
        <button
          className="bg-white mx-2 text-lg px-4"
          onClick={() => {
            setAction("Idle_A");
          }}
        >
          idle
        </button>
        <button
          className="bg-white mx-2 text-lg px-4"
          onClick={() => {
            setAction("Roll");
          }}
        >
          roll
        </button>
        <button
          className="bg-white mx-2 text-lg px-4"
          onClick={() => {
            setAction("Jump");
          }}
        >
          jump
        </button>
        <button
          className="bg-white mx-2 text-lg px-4"
          onClick={() => {
            setAction("Walk");
          }}
        >
          walk
        </button>
      </div> */}
      {/* <Canvas shadows camera={{ position: [-3, 2, 5], fov: 90 }}> */}
      <div className="w-full h-[0.15] absolute z-10">
        <ReverseNavbar />
      </div>
      <Canvas
        ref={refCanvas}
        shadows
        orthographic
        camera={{
          position: [1, 5, 5],
          left: `-${aspect}`,
          right: `${aspect}`,
          top: 1,
          bottom: -1,
          zoom: 28,
          near: -1000,
          far: 1000,
        }}
      >
        <OrbitControls />
        {/* camera */}
        {/* perspective; 원근감 o, ortho; 원근감 x */}
        {/* light */}
        <directionalLight
          intensity={0.4}
          position={[-50, 50, 50]}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-near={-100}
          shadow-camera-far={100}
          shadow-camera-left={-100}
          shadow-camera-right={100}
          shadow-camera-top={100}
          shadow-camera-bottom={-100}
        />
        <ambientLight intensity={0.3} />
        {/* character */}
        <Suspense fallback={null}>
          <CatAnimations
            action={action}
            destinationPoint={destinationPoint}
            // position={characterPosition ? characterPosition : null}
            isPressed={isPressed}
          />
          <SkyTube />
        </Suspense>
        {/* floor */}
        <mesh
          onPointerDown={(e) => {
            // console.log(e);  // intersects와 동일한거
            setDestinationPoint(e.point);
          }}
          rotation={[-0.5 * Math.PI, 0, 0]}
          receiveShadow
        >
          <planeBufferGeometry attach="geometry" args={[300, 300]} />
          <meshStandardMaterial map={floorTexture} />
        </mesh>
        {/* pointer mesh; 클릭할 때 내가 어디로 가는지 확인하려고,, 나중에 지울지도 */}
        <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          position={[0, 0.01, 0]}
          receiveShadow
        >
          <planeBufferGeometry attach="geometry" args={[5, 5]} />
          <meshBasicMaterial color="black" transparent opacity={0.2} />
        </mesh>
      </Canvas>
      <div>
        <ul id="user-audio"></ul>
      </div>
    </div>
  );
}

export default ReverseWebRTC;
