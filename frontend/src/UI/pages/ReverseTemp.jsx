import * as THREE from "three";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/core/OrbitControls.js";
// import { OrthographicCamera } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import CatAnimations from "../../assets/players/Cat_Animations.js";
import { SkyTube } from "../../assets/deco/SkyTube.js";
import { ObjectTest } from "../../assets/deco/ObjectTest.js";
import { CampingPack } from "../../assets/deco/CampingPack.js";

import ReverseNavbar from "../organisms/ReverseNavbar.jsx";
import { useEffect } from "react";

function ReverseTemp() {
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
  // const [currentPosition, setCurrentPosition] = useState(); // player -> reverse

  // const handleCurrentPosition = (data) => {
  //   setCurrentPosition(data);
  //   // console.log(currentPosition);

  //   // setCurrentPlayerPosition(data);
  // };

  // useEffect(
  //   (data) => {
  //     setCurrentPosition(data);
  //     console.log(data);
  //   },
  //   [currentPosition]
  // );

  // player -> reverse
  const [visible, setVisible] = useState(false);
  const handleVisible = (data) => {
    setVisible(data);
  };

  return (
    <div className="h-screen overflow-hidden relative">
      <div className="w-full h-[0.15] absolute z-10">
        <ReverseNavbar />
      </div>
      <Canvas
        ref={refCanvas}
        shadows
        orthographic
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
        {/* character */}
        <Suspense fallback={null}>
          {/* // TODO: 오브젝트 배치할 때에는 캐릭터 빼고 하는게 좋아 */}
          {/* <CatAnimations
            // action={action}
            destinationPoint={destinationPoint}
            // isPressed={isPressed}
            handleVisible={handleVisible}
            // handleCurrentPosition={handleCurrentPosition}
          /> */}
          <SkyTube />
          <ObjectTest visible={visible} />
          {/* <ObjectTest currentPosition={currentPosition} /> */}
          <CampingPack />
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
        {/* 오브젝트 이벤트 발생 가능한 지점 */}
        {/* <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          receiveShadow
          position={[-20, 0.01, 3]}
        >
          <planeBufferGeometry attach="geometry" args={[8, 8]} />
          <meshBasicMaterial color="yellow" opacity={0.5} transparent />
        </mesh> */}
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
    </div>
  );
}

export default ReverseTemp;
