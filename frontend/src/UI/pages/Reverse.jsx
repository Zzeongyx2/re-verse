import React, { Suspense, useRef, useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as THREE from "three";
import { Vector3 } from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/core/OrbitControls.js";

import { TextureLoader } from "three/src/loaders/TextureLoader";

import { getArchiveDetail } from "../../api/reverse.js";

import { setInfo, setSelectStuff } from "../../modules/reverse.js";

import { SkyTube } from "../../assets/deco/SkyTube.js";
import { ObjectTest } from "../../assets/deco/ObjectTest.js";
import { Polaroid } from "../../assets/deco/Polaroid.js";
import { CartoonCampingKit } from "../../assets/deco/CartoonCampingKit.js";
import { FireAnimated } from "../../assets/deco/FireAnimated.js";
import { Notebook } from "../../assets/deco/Notebook.js";
import { Christmas } from "../../assets/deco/Christmas.js";
import { EasterPack } from "../../assets/deco/EasterPack.js";

import ReverseNavbar from "../organisms/ReverseNavbar.jsx";
import TravelWriteModal from "../organisms/TravelWriteModal.jsx";
import TravelReadModal from "../organisms/TravelReadModal.jsx";

import { HackerRoom } from "../../assets/deco/HackerRoom.js";
import { Fireworks } from "../../assets/deco/Fireworks.js";
import SelectedMyPlayer from "../atoms/SelectedMyPlayer.jsx";
import SelectedOtherPlayer from "../atoms/SelectedOtherPlayer.jsx";
import { Physics } from "@react-three/cannon";
import ThreeFloor from "../atoms/ThreeFloor.jsx";
import { ReverseFloor } from "../../assets/deco/ReverseFloor.js";
import { CampingMod } from "../../assets/deco/CampMod.js";
import AudioZone from "../../assets/deco/AudioZone.js";
import { Radio } from "../../assets/deco/Radio.js";
import { StonesMod } from "../../assets/deco/StonesMod.js";
import { Toast } from "../atoms/Toast.jsx";
import Loading from "../organisms/Loading.jsx";
import { setLoadingPage } from "../../modules/loading.js";
import { CustomForest } from "../../assets/deco/Customforest.js";
import { Banana } from "../../assets/deco/Banana.js";
import { Sky } from "@react-three/drei";
import { VendingMachine } from "../../assets/deco/Vendingmachinemod.js";
import { ArcadeMachine } from "../../assets/deco/ArcadeMachine.js";
import { CandyCustomOne } from "../../assets/deco/Customfirst.js";
import { CandyCustomTwo } from "../../assets/deco/Customsecond.js";
import { CustomForestSecond } from "../../assets/deco/Customforestsecond.js";
import { CandyCustomThird } from "../../assets/deco/Customthird.js";
import {
  setEye,
  setKeyA,
  setKeyD,
  setKeyS,
  setKeyW,
  setOnOne,
  setOnThree,
  setPosition,
} from "../../modules/camera.js";
import { CustomTree } from "../../assets/deco/Customtree.js";
import { CustomRoadFirst } from "../../assets/deco/Customroadfirst.js";
import { DiaryStoneRoad } from "../../assets/deco/Customroadsecond.js";
import { AnnivStoneRoad } from "../../assets/deco/Customroadthird.js";
import { Eggs } from "../../assets/deco/Eggs.js";
import { ScreenMod } from "../../assets/deco/Screen.js";

var channels = [];
var channelUsers = new Map();
var friendToName = new Map();
var audioMap = new Map();
var rtcPeers = new Map();
var ws1;
let localStream;

function Reverse() {
  const [destinationPoint, setDestinationPoint] = useState(new Vector3(-30, 0, -30));
  const destRef = useRef(destinationPoint);
  const floorTexture = useLoader(TextureLoader, "/textures/map_texture.jpg");
  if (floorTexture) {
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.x = 10;
    floorTexture.repeat.y = 10;
  }
  const [visible, setVisible] = useState(false);
  const handleVisible = (data) => {
    setVisible(data);
  };

  // orthographic camera
  const aspect = window.innerWidth / window.innerHeight;

  const [isPressed, setIsPressed] = useState(false);
  const [others, setOthers] = useState([]);
  const [userId, setUserId] = useState("");
  const othersRef = useRef(others);
  const addOther = (value) => {
    setOthers((others) => {
      let temp = [...others, value];
      othersRef.current = temp;
      return temp;
    });
  };
  const removeOther = (value) => {
    setOthers((others) => {
      let temp = othersRef.current.filter((other) => other !== value);
      othersRef.current = temp;
      return temp;
    });
  };
  const [otherCharacterMap, setMap] = useState(new Map());
  const addMap = (key, value) => {
    setMap((prev) => new Map([...prev, [key, value]]));
  };
  const upsertMap = (key, value) => {
    setMap((prev) => new Map(prev).set(key, value));
  };
  const deleteMap = (key) => {
    setMap((prev) => {
      const newState = new Map(prev);
      newState.delete(key);
      return newState;
    });
  };
  const [rtcPeers2, setRtcPeers2] = useState("");

  useEffect(() => {
    othersRef.current = others;
  }, [others]);
  useEffect(() => {}, [otherCharacterMap]);
  useEffect(() => {
    destRef.current = destinationPoint;
    if (destinationPoint.x > 0 && destinationPoint.z < 0) {
      dispatch(setSelectStuff(0));
    } else if (destinationPoint.x < 0 && destinationPoint.z < 0) {
      dispatch(setSelectStuff(2));
    } else if (destinationPoint.x > 0 && destinationPoint.z > 0) {
      dispatch(setSelectStuff(1));
    }
  }, [destinationPoint]);

  const preventClose = (e) => {
    disconnectAll();
  };
  useEffect(() => {
    (() => {
      window.addEventListener("unload", preventClose);
    })();
    login();
  }, []);
  var signal1 = {
    userId: null,
    type: null,
    data: null,
    toUid: null,
    archiveId: null,
  };
  var channelData = {
    userId: null,
    data: null,
    type: null,
  };

  var userId2 = "";

  const webrtcRedux = useSelector((state) => state.webrtc);
  useEffect(() => {
    if (localStream) {
      if (webrtcRedux.micCheck) {
        localStream.getAudioTracks().forEach((element) => {
          element.enabled = true;
        });
      } else {
        localStream.getAudioTracks().forEach((element) => {
          element.enabled = false;
        });
      }
    }
  }, [webrtcRedux.micCheck]);

  useEffect(() => {
    const audioSet = document.getElementById("user-audio").childNodes;
    if (audioSet) {
      if (webrtcRedux.headCheck) {
        for (let i = audioSet.length - 1; i >= 0; i--) {
          audioSet[i].muted = false;
        }
      } else {
        for (let i = audioSet.length - 1; i >= 0; i--) {
          audioSet[i].muted = true;
        }
      }
    }
  }, [webrtcRedux.headCheck]);

  async function login() {
    await navigator.mediaDevices
      .getUserMedia({ audio: { echoCancellation: true } })
      .then(handleAudio)
      .catch((e) => {});
    startWebSocket();
  }
  function handleAudio(stream) {
    localStream = stream;
    const audio = document.getElementById("myAudio");
    const audioTracks = localStream.getAudioTracks();
    localStream.oninactive = function () {};
    audio.srcObject = localStream;
  }

  function startWebSocket() {
    ws1 = new WebSocket("wss://re-verse.kr/socket");

    ws1.onopen = (event) => {
      signal1.userId = "";
      signal1.type = "Login";
      signal1.data = "";
      signal1.archiveId = archiveId;
      ws1.send(JSON.stringify(signal1));
    };

    ws1.onerror = (error) => {
      alert("Error connecting to signalling server, please try login again");
    };

    ws1.onclose = (event) => {};

    ws1.onmessage = (event) => {
      var data1 = JSON.parse(event.data);
      var data2 = null;
      if (data1.userId === userId2 || data1.userId.length < 2) {
        return;
      } else if (data1.type === "NewMember") {
        handleNewMemberAndOffer(data1);
      } else if (data1.type === "UserId") {
        setUserId(data1.data);
        userId2 = data1.data;

        newMember(userId2);
      } else if (data1.type === "Offer") {
        data2 = JSON.parse(data1.data);
        handleNewMemberAndOffer(data1);
      } else if (data1.type === "Ice") {
        data2 = JSON.parse(data1.data);
        if (data2) {
          let peer1 = rtcPeers.get(data1.userId);

          if (peer1) {
            peer1.addIceCandidate(new RTCIceCandidate(data2)).catch((error) => {});
          }
        }
      } else if (data1.type === "Answer") {
        data2 = JSON.parse(data1.data);
        let peer1 = rtcPeers.get(data1.userId);
        peer1.setRemoteDescription(new RTCSessionDescription(data2));
      }
    };
  }

  function handleNewMemberAndOffer(data1) {
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
    localStream.getTracks().forEach((track) => {
      rtcPeer.addTrack(track, localStream);
    });

    setRtcPeers2(rtcPeers2);

    if (data1.type === "NewMember") {
      let channel1 = rtcPeer.createDataChannel(Math.floor(Math.random() * 10000000000));
      channelConfig(channel1);

      //create offer
      rtcPeer
        .createOffer()
        .then((a) => {
          signal1.userId = userId2;
          signal1.type = "Offer";
          signal1.data = JSON.stringify(a);
          signal1.toUid = data1.userId;
          ws1.send(JSON.stringify(signal1));
          rtcPeer.setLocalDescription(a);
        })
        .then(() => {})
        .catch((err) => {});
    }
    //when not new member
    else {
      let data2 = JSON.parse(data1.data);
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
      channelConfig(channel2, peerId);
    };
    rtcPeer.ontrack = (event) => {
      let newUser = document.createElement("li");
      let div1 = document.createElement("div");
      let h2 = document.createElement("h2");
      h2.innerText = peerId;
      let div2 = document.createElement("div");
      let userAudio = document.createElement("audio");
      userAudio.id = peerId;
      userAudio.autoplay = true;
      userAudio.controls = true;
      userAudio.hidden = true;
      div2.appendChild(userAudio);
      div1.appendChild(h2);
      newUser.appendChild(div1);
      newUser.appendChild(div2);
      document.getElementById("user-audio").appendChild(userAudio);
      const peerAudio = document.getElementById(peerId);
      peerAudio.srcObject = event.streams[0];
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

    rtcPeers.set(peerId, rtcPeer);
  }
  function channelConfig(channel1, peerId) {
    channel1.onclose = (event) => {
      let friendId = channelUsers.get(channel1);
      let friendName = friendToName.get(friendId);

      if (friendName) {
        document.getElementById(friendId).remove();
        removeOther(friendName);
        deleteMap(friendName);
      }
      addUserOnChat(friendToName.get(friendId), false);
      friendToName.delete(friendId);
    };

    channel1.onmessage = (event) => {
      let dataChannel1 = JSON.parse(event.data);
      if (dataChannel1.type === "message") {
        addChatLine(dataChannel1.data, "you", dataChannel1.userId);
      } else if (dataChannel1.type === "handshake") {
        friendToName.set(dataChannel1.data.uuid, dataChannel1.data.username);
        channelUsers.set(channel1, dataChannel1.data.uuid);

        upsertMap(dataChannel1.userId, dataChannel1.data.position);
        setOthers((other) => {
          return [...other, dataChannel1.userId];
        });
      } else if (dataChannel1.type === "move") {
        upsertMap(dataChannel1.userId, dataChannel1.data);
      }
    };

    channel1.onopen = () => {
      channelData.userId = loginUser.nickname;
      channelData.type = "handshake";
      console.log(cameraState);
      channelData.data = {
        position: cameraState.position,
        username: loginUser.nickname,
        uuid: userId2,
      };
      channel1.send(JSON.stringify(channelData));
    };
    channels.push(channel1);
  }
  function addChatLine(data1, listClass, pengirim) {
    let list = document.createElement("li");
    list.className = "flex my-0.5";
    let entete = document.createElement("div");
    entete.className = "entete";
    let span1 = document.createElement("span");
    let h2 = document.createElement("h2");
    h2.innerText = pengirim;
    if (h2.innerText === "나 : ") {
      h2.id = "my-name";
    } else {
      h2.id = "others-name";
    }
    h2.className = "mt-0.5 text-sm font-semibold whitespace-nowrap";
    entete.appendChild(h2);

    let message = document.createElement("message");
    message.className = "message";
    message.innerHTML = data1;
    list.appendChild(entete);
    list.appendChild(message);
    if (listClass === "you") {
      message.className = "others-message";
    }

    let chatWindow = document.getElementById("chat");
    chatWindow.appendChild(list);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
  function addUserOnChat(pengirim, join1) {
    let chatWindow = document.getElementById("chat");
    let child1 = document.createElement("p");
    if (join1) {
      child1.className = "text-white text-center m-2 bg-success";
      child1.innerText = pengirim + " joined";
    } else {
      child1.className = "text-white text-center m-2 bg-danger";
      child1.innerText = pengirim + " leaved";
    }

    chatWindow.appendChild(child1);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function sendChat() {
    channels.forEach((a) => {
      let dataToSend = document.getElementById("toSend").value;
      channelData.userId = `${loginUser.nickname} : `;
      channelData.type = "message";
      channelData.data = dataToSend;
      if (a.readyState === "open") {
        a.send(JSON.stringify(channelData));
      }
    });
    addChatLine(document.getElementById("toSend").value, "me", "나 : ");
    document.getElementById("toSend").value = "";
  }

  function sendPosition(position) {
    channels.forEach((a) => {
      channelData.userId = loginUser.nickname;
      channelData.type = "move";
      channelData.data = position;
      if (a.readyState === "open") {
        a.send(JSON.stringify(channelData));
      }
    });
  }
  function newMember(data1) {
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
      const senders = a.getSenders();

      // 만약 안들린다면 삭제해보기
      senders.forEach((sender) => a.removeTrack(sender));
      a.close();
    });
    const audioSet = document.getElementById("user-audio").childNodes;
    for (let i = audioSet.length - 1; i >= 0; i--) {
      audioSet[i].remove();
    }
    for (let i = others.length - 1; i >= 0; i--) {
      removeOther(others[i]);
    }
    rtcPeers.clear();
    audioMap.clear();
    channels = [];
    channelUsers.clear();
  }

  const location = useLocation();
  const archiveId = location.pathname.substring(9);
  const loginUser = useSelector((state) => state.user.loginUser);

  const dispatch = useDispatch();
  const reverse = useSelector((state) => state.reverse);
  const cameraState = useSelector((state) => state.camera);
  const [cameraKeyPress, setCameraKeyPress] = useState(false);
  const [pressT, setPressT] = useState(false);
  const [pressW, setPressW] = useState(false);
  const [pressA, setPressA] = useState(false);
  const [pressS, setPressS] = useState(false);
  const [pressD, setPressD] = useState(false);

  useEffect(() => {
    sendPosition(cameraState.position);
  }, [cameraState.keyPress]);

  const upHandler = ({ key }) => {
    if (key === "y") {
      setCameraKeyPress(false);
    }
    if (key === "t") {
      setPressT(false);
    }
    if (key === "w") {
      setPressW(false);
    }
    if (key === "a") {
      setPressA(false);
    }
    if (key === "s") {
      setPressS(false);
    }
    if (key === "d") {
      setPressD(false);
    }
  };
  const downHandler = ({ key }) => {
    if (key === "y") {
      setCameraKeyPress(true);
    }
    if (key === "t") {
      setPressT(true);
    }
    if (key === "w") {
      setPressW(true);
    }
    if (key === "a") {
      setPressA(true);
    }
    if (key === "s") {
      setPressS(true);
    }
    if (key === "d") {
      setPressD(true);
    }
  };
  useEffect(() => {
    if (cameraKeyPress) {
      changeView();
    }
  }, [cameraKeyPress]);
  useEffect(() => {
    if (pressT) {
      changeViewEye();
    }
  }, [pressT]);
  // 이동 키 누르기
  useEffect(() => {
    if (pressW) {
      dispatch(setKeyW(true));
    } else {
      dispatch(setKeyW(false));
    }
  }, [pressW]);

  useEffect(() => {
    if (pressA) {
      dispatch(setKeyA(true));
    } else {
      dispatch(setKeyA(false));
    }
  }, [pressA]);

  useEffect(() => {
    if (pressS) {
      dispatch(setKeyS(true));
    } else {
      dispatch(setKeyS(false));
    }
  }, [pressS]);

  useEffect(() => {
    if (pressD) {
      dispatch(setKeyD(true));
    } else {
      dispatch(setKeyD(false));
    }
  }, [pressD]);

  const changeViewEye = () => {
    if (cameraState.characterEye) {
      dispatch(setOnThree());
    } else {
      dispatch(setEye());
    }
  };
  const changeView = () => {
    if (cameraState.characterThree) {
      dispatch(setOnOne());
    } else {
      dispatch(setOnThree());
    }
  };
  useEffect(() => {
    dispatch(setLoadingPage(true));
    getArchiveDetail(archiveId, getArchiveDetailSuccess, getArchiveDetailFail);
    dispatch(setOnThree());

    window.addEventListener("keyup", upHandler);
    window.addEventListener("keydown", downHandler);

    return () => {
      window.addEventListener("keyup", upHandler);
      window.addEventListener("keydown", downHandler);
    };
  }, []);

  const getArchiveDetailSuccess = (res) => {
    dispatch(
      setInfo({
        ...reverse.info,
        archiveId: archiveId,
        stuffs: res.data.stuffs,
      })
    );
  };

  const navigate = useNavigate();
  const getArchiveDetailFail = (err) => {
    Toast.fire({
      icon: "warning",
      title: "초대받지 않은 아카이브 입니다",
      timer: 1500,
    });
    navigate("/lobby");
  };

  const refCanvas = useRef();

  const [checkNull, setCheckNull] = useState("");
  const handleCheckNull = (e) => {
    setCheckNull(e.target.value);
  };
  const loadingPage = useSelector((state) => state.loading.loadingPage);

  function Directional() {
    return (
      <directionalLight
        position={(0, 10, 100)}
        castShadow
        // shadow quality
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-200}
        shadow-camera-right={200}
        shadow-camera-top={200}
        shadow-camera-bottom={-200}
        intensity={0.5}
        color={"#FFFBE7"}
      />
    );
  }

  return (
    <div className="h-screen overflow-hidden relative">
      {/* loading page... */}
      <div>{loadingPage && <Loading />}</div>
      <audio id="myAudio" autoPlay hidden muted controls></audio>
      <div className="w-full h-[0.15] absolute z-10">
        <ul id="user-audio"></ul>
      </div>
      <div className="w-full h-[0.15] absolute z-10">
        <ReverseNavbar joinMembers={others} />
      </div>

      {/* chatting */}
      <div className="w-1/4 h-2/5 min-w-[240px] absolute z-20 bottom-0 ml-4">
        <div
          id="chat"
          className="h-4/5 bg-base1/10 p-1.5 rounded-md overflow-y-scroll scrollbar list-none"
        ></div>
        {checkNull.length ? (
          <div className="flex justify-between items-center border rounded-md bg-white mt-1 px-0.5">
            <input
              id="toSend"
              type="text"
              className="text-sm placeholder:text-sm px-2 w-5/6 py-1.5 focus:outline-none"
              placeholder="메세지를 입력해 보세요"
              onChange={handleCheckNull}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  sendChat();
                  setCheckNull("");
                }
              }}
            />

            <div
              id="btnSend"
              className="w-1/6 cursor-pointer mr-1 flex justify-center font-semibold text-basic3 hover:text-extra3 pb-0.5"
              onClick={() => {
                sendChat();
                setCheckNull("");
              }}
            >
              send
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center border rounded-md bg-white mt-1 px-0.5">
            <input
              id="toSend"
              type="text"
              className="text-sm placeholder:text-sm px-2 w-5/6 py-1.5 focus:outline-none"
              placeholder="메세지를 입력해 보세요"
              onChange={handleCheckNull}
            />
            <div
              id="btnSend"
              className="w-1/6 cursor-pointer mr-1 flex justify-center font-semibold text-basic3 hover:text-extra3 pb-0.5"
            >
              send
            </div>{" "}
          </div>
        )}
      </div>

      <Canvas
        ref={refCanvas}
        shadows
        orthographic
        dpr={[1, 2]}
        camera={{
          fov: 60,
          position: [-29, 5, -25],
          left: `-${aspect}`,
          right: `${aspect}`,
          top: 1,
          bottom: -1,
          zoom: 2.5,
          near: -1000,
          far: 1000,
        }}
      >
        {/* <Sky sunPosition={[100, 50, 100]} /> */}
        <OrbitControls
        // enableZoom={true}
        // enableRotate={false}
        // enablePan={false}
        // 얘는 뺄까
        // minZoom={8.5}
        // maxZoom={20}
        />
        {/* camera */}
        {/* perspective; 원근감 o, ortho; 원근감 x */}
        {/* light */}

        <ambientLight intensity={0.5} color={"#FFFDF5"} />
        <Directional />
        {/* character */}
        <Physics gravity={[0, -10, 0]}>
          <Suspense fallback={null}>
            {/* !important : characters */}
            {/* {others.map((other, idx) => {
              return (
                <SelectedOtherPlayer
                  key={idx}
                  destinationPoint={otherCharacterMap.get(other)}
                  handleVisible={handleVisible}
                  userName={other}
                />
              );
            })}

            <SelectedMyPlayer
              destinationPoint={destinationPoint}
              handleVisible={handleVisible}
            /> */}

            <CartoonCampingKit />
            <FireAnimated />
            <CampingMod />

            {/* anniv zone */}
            <Christmas />

            {/* diary zone */}
            <HackerRoom />

            {/* easter egg zone */}
            <EasterPack />

            {/* etc */}
            <ObjectTest visible={visible} />
            <Fireworks />
            <SkyTube />
            <CustomForest />
            <CustomForestSecond />
            <CustomTree />
            <CandyCustomOne />
            <CandyCustomTwo />
            <CandyCustomThird />
            <Eggs />

            {/* easter eggs */}
            {/* <VendingMachine /> */}
            <ArcadeMachine />
            <ScreenMod />

            {/* audiozone = 소리 나오는 구간  &  radio = theme song 바꾸는거 */}
            <AudioZone />
            <Radio />
            <Banana />

            {/* floor */}
            {/* <ReverseFloor /> */}
            {/* camping road */}
            <StonesMod />
            <CustomRoadFirst />
            {/* anniv road */}
            <AnnivStoneRoad />
            {/* diary road */}
            <DiaryStoneRoad />

            {/* polaroid = 글 보기 오브젝트 , notebook = 글 쓰기 오브젝트 */}
            {/* 여행 */}
            <Polaroid position={[71, 4, -43]} rotation={[-Math.PI / 2, 0, Math.PI / 5]} />
            <Notebook position={[71, 3.4, -38]} rotation={[-Math.PI / 2, 0, -Math.PI / 1.2]} />
            {/* 기념일 */}
            <Polaroid position={[38, 1.1, 62]} rotation={[-Math.PI / 2, 0, 0]} />
            <Notebook position={[35, 0.3, 66]} rotation={[-Math.PI / 2, 0, -Math.PI / 0.2]} />
            {/* 일기 */}
            <Polaroid position={[-115, 7.7, -129]} rotation={[-Math.PI / 2, 0, Math.PI / 1.2]} />
            <Notebook position={[-110, 6.9, -131]} rotation={[-Math.PI / 2, 0, -Math.PI / 3]} />
          </Suspense>
          {/* floor */}
          <mesh
            onPointerDown={(e) => {
              if (e.point.z > 114) {
                return;
              }
              setDestinationPoint(e.point);
              // sendPosition(e.point);
            }}
            rotation={[-0.5 * Math.PI, 0, 0]}
            receiveShadow
          >
            {/* <planeBufferGeometry attach="geometry" args={[400, 400]} /> */}
            <planeGeometry attach="geometry" args={[400, 400]} />
            <meshStandardMaterial map={floorTexture} />
          </mesh>
          <ThreeFloor position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        </Physics>
      </Canvas>

      {reverse.info.stuffs.length > 0 && (
        <>
          {/* travel, anniv, diary */}
          <TravelWriteModal />
          <TravelReadModal />
        </>
      )}
    </div>
  );
}

export default Reverse;
