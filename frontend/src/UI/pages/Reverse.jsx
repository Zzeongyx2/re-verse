import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import CatAnimations from "../../assets/animals/Cat_Animations.js";
import { OrbitControls } from "@react-three/drei/core/OrbitControls.js";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Reverse() {
  return (
    <div className="h-screen">
      <Canvas>
        <OrbitControls />
        <directionalLight intensity={0.3} />
        <ambientLight intensity={0.2} />
        {/* <Suspense fallback={null}> */}
        <CatAnimations />
        {/* </Suspense> */}
      </Canvas>
    </div>
  );
}

export default Reverse;
