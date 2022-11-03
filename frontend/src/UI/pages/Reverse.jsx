import * as THREE from "three";
import React, { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/core/OrbitControls.js";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import CatAnimations from "../../assets/animals/Cat_Animations.js";

function Reverse() {
  // default action = idle
  const [action, setAction] = useState("Idle_A");
  const floorTexture = useLoader(TextureLoader, "/textures/grid.png");
  if (floorTexture) {
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.x = 20;
    floorTexture.repeat.y = 20;
  }
  return (
    <div className="h-screen">
      <div className=" mt-4">
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
      </div>
      <Canvas shadows camera={{ position: [-3, 2, 5], fov: 90 }}>
        <OrbitControls />
        {/* light */}
        <directionalLight
          intensity={0.3}
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <ambientLight intensity={0.2} />
        {/* character */}
        <Suspense fallback={null}>
          <CatAnimations action={action} />
        </Suspense>
        {/* floor */}
        <mesh rotation={[-0.5 * Math.PI, 0, 0]} receiveShadow>
          <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
          <meshStandardMaterial map={floorTexture} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Reverse;
