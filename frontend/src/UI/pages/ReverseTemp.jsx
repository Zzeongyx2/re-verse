import * as THREE from "three";
import React, { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/core/OrbitControls.js";
// import { OrthographicCamera } from "@react-three/drei";

import { TextureLoader } from "three/src/loaders/TextureLoader";

import CatAnimations from "../../assets/animals/Cat_Animations.js";

function Reverse() {
  // default action = idle
  const [action, setAction] = useState("Idle_A");
  const floorTexture = useLoader(TextureLoader, "/textures/grid.png");
  if (floorTexture) {
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.x = 30;
    floorTexture.repeat.y = 30;
  }

  // orthographic camera
  const aspect = window.innerWidth / window.innerHeight;

  const scene = new THREE.Scene();

  // renderer
  const renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.innerHTML = "";
  document.body.appendChild(renderer.domElement);

  // mesh
  const meshes = [];

  // floormesh
  const floorMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshStandardMaterial({
      map: floorTexture,
    })
  );
  // console.log(floorMesh);
  floorMesh.name = "floor";
  floorMesh.rotation.x = -Math.PI / 2;
  floorMesh.receiveShadow = true;
  scene.add(floorMesh);
  meshes.push(floorMesh);

  // console.log(meshes);

  // pointermesh
  const pointerMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({
      color: "black",
      transparent: "true",
      opacity: "0.2",
    })
  );
  pointerMesh.rotation.x = -Math.PI / 2;
  pointerMesh.position.y = 0.01;
  pointerMesh.receiveShadow = true;
  scene.add(pointerMesh);

  // spotmesh
  const spotMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(3, 3),
    new THREE.MeshStandardMaterial({
      color: "yellow",
      transparent: true,
      opacity: 0.4,
    })
  );

  spotMesh.position.set(5, 0.005, 5);
  spotMesh.rotation.x = -Math.PI / 2;
  spotMesh.receiveShadow = true;
  scene.add(spotMesh);

  return (
    <div className="h-screen overflow-hidden">
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
      {/* <Canvas shadows camera={{ position: [-3, 2, 5], fov: 90 }}> */}
      <Canvas
        shadows
        orthographic
        camera={{
          position: [1, 5, 5],
          left: `-${aspect}`,
          right: `${aspect}`,
          top: 1,
          bottom: -1,
          zoom: 30,
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
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <ambientLight intensity={0.3} />
        {/* character */}
        <Suspense fallback={null}>
          <CatAnimations action={action} />
        </Suspense>
        {/* floor */}
        <mesh rotation={[-0.5 * Math.PI, 0, 0]} receiveShadow>
          <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
          <meshStandardMaterial map={floorTexture} />
        </mesh>
        {/* pointer mesh; 클릭할 때 내가 어디로 가는지 확인하려고,, 나중에 지울지도 */}
        <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          position={[0, 0.01, 0]}
          castShadow
          receiveShadow
        >
          <planeBufferGeometry attach="geometry" args={[5, 5]} />
          <meshBasicMaterial color="black" transparent opacity={0.2} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Reverse;
