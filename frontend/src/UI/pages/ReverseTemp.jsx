import * as THREE from "three";
import React, { Suspense, useRef, useState } from "react";
import { useEffect } from "react";

import { Canvas, useLoader } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei/core/OrbitControls.js";
// import { OrthographicCamera } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import CatAnimations from "../../assets/players/Cat_Animations.js";
import { SkyTube } from "../../assets/deco/SkyTube.js";
import { ObjectTest } from "../../assets/deco/ObjectTest.js";
import { CampingPack } from "../../assets/deco/CampingPack.js";
// import { FireAnimated } from "../../assets/deco/FireAnimated.js";
import { Polaroid } from "../../assets/deco/Polaroid.js";
import { CartoonCampingKit } from "../../assets/deco/CartoonCampingKit.js";
import { FireAnimated } from "../../assets/deco/FireAnimated.js";
import { Notebook } from "../../assets/deco/Notebook.js";

import ReverseNavbar from "../organisms/ReverseNavbar.jsx";
import TravelWriteModal from "../organisms/TravelWriteModal.jsx";
import ReverseFooter from "../organisms/ReverseFooter.jsx";
import { getArchiveDetail } from "../../api/reverse.js";
import { useLocation } from "react-router-dom";
import TravelReadModal from "../organisms/TravelReadModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setInfo } from "../../modules/reverse.js";

function ReverseTemp() {
  const location = useLocation();
  console.log(location.pathname);
  console.log(location.pathname.substring(13));
  const archiveId = location.pathname.substring(13);

  const dispatch = useDispatch();
  const reverse = useSelector((state) => state.reverse);

  useEffect(() => {
    getArchiveDetail(archiveId, getArchiveDetailSuccess, getArchiveDetailFail);
  }, []);

  const getArchiveDetailSuccess = (res) => {
    console.log(res);
    dispatch(
      setInfo({
        ...reverse.info,
        archiveId: archiveId,
        stuffs: res.data.stuffs,
      })
    );
  };

  const getArchiveDetailFail = (err) => {
    console.log(err);
  };
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

  // test object
  const [visible, setVisible] = useState(false);
  const handleVisible = (data) => {
    setVisible(data);
  };

  useEffect(() => {}, []);

  return (
    <div className="h-screen overflow-hidden relative">
      <div className="w-full h-[0.15] absolute z-10">
        <ReverseNavbar />
      </div>
      <div className="w-1/4 h-2/5 absolute z-20 bottom-0">
        <ReverseFooter />
      </div>
      <Canvas
        ref={refCanvas}
        shadows
        orthographic
        dpr={[1, 2]}
        camera={{
          // player의 초기 위치: [-30, 0, -30]
          position: [-29, 5, -25],
          // position: [1, 5, 5],
          left: `-${aspect}`,
          right: `${aspect}`,
          top: 1,
          bottom: -1,
          zoom: 28,
          near: -1000,
          far: 1000,
        }}
      >
        {/* // TODO: 컴포넌트 배치할 때에는 키고 하는게 편함 */}
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
          shadow-camera-far={2000}
          shadow-camera-left={-2000}
          shadow-camera-right={2000}
          shadow-camera-top={2000}
          shadow-camera-bottom={-2000}
        />
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.5} position={[100, 1000, 100]} />
        {/* character */}
        <Suspense fallback={null}>
          {/* // TODO: 오브젝트 배치할 때에는 캐릭터 빼고 하는게 좋아 */}
          <CatAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
            // handleEvent={handleEvent}
          />

          <SkyTube />
          <ObjectTest visible={visible} />
          {/* <ObjectTest currentPosition={currentPosition} /> */}
          <CampingPack />
          <CartoonCampingKit />
          <FireAnimated />

          {/* polaroid = 글 보기 오브젝트 , notebook = 글 쓰기 오브젝트 */}
          <Polaroid />
          <Notebook />
          {/* <Polaroid event={event} />
          <Notebook event={event} /> */}
          {/* <Polaroid position={new THREE.Vector3(38.5, 0.8, -70)} /> */}
        </Suspense>
        {/* floor */}
        <mesh
          onPointerDown={(e) => {
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
          position={[-30, 0.01, -30]}
          receiveShadow
        >
          <planeBufferGeometry attach="geometry" args={[5, 5]} />
          <meshBasicMaterial color="black" transparent opacity={0.3} />
        </mesh>
      </Canvas>
      {/* // TODO: travel = 0, anniv = 1, diary = 2 */}
      {reverse.info.stuffs.length > 0 && (
        <>
          <TravelWriteModal
          // archiveId={reverse.info.archiveId}
          // stuffId={reverse.info.stuffsId[0]}
          />
          <TravelReadModal
          // archiveId={reverse.info.archiveId}
          // stuffId={reverse.info.stuffsId[0]}
          />
        </>
      )}
    </div>
  );
}

export default ReverseTemp;
