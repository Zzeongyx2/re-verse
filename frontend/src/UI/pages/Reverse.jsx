import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import CatAnimations from "../../assets/animals/Cat_Animations.js";
import { OrbitControls } from "@react-three/drei/core/OrbitControls.js";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Reverse() {
  const [action, setAction] = useState("Idle_A");
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
      <Canvas>
        <OrbitControls />
        <directionalLight intensity={0.3} />
        <ambientLight intensity={0.2} />
        <pointLight intensity={2} position={[-1, 1, 3]} color="red" />
        <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
        <pointLight intensity={2} position={[0, 3, -10]} color="white" />
        <Suspense fallback={null}>
          <CatAnimations action={action} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Reverse;
