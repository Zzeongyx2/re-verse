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
import { ForestKit } from "../../assets/deco/ForestKit.js";

function ReverseTemp() {
  const refCanvas = useRef();
  const location = useLocation();

  const floorTexture = useLoader(TextureLoader, "/textures/grid.png");
  if (floorTexture) {
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.x = 10;
    floorTexture.repeat.y = 10;
  }

  // orthographic camera
  const aspect = window.innerWidth / window.innerHeight;

  return (
    <div className="h-screen overflow-hidden relative">
      <div className="w-full h-[0.15] absolute z-10">
        <ReverseNavbar />
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
          <SkyTube />
          {/* <ObjectTest currentPosition={currentPosition} /> */}
          <ForestKit />
        </Suspense>
        {/* floor */}
        <mesh rotation={[-0.5 * Math.PI, 0, 0]} receiveShadow>
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
    </div>
  );
}

export default ReverseTemp;
