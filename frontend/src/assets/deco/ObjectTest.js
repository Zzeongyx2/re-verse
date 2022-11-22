import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import GLTFLoader from "gltfjsx/src/utils/glftLoader";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

export function ObjectTest({ visible }) {
  const { nodes, materials } = useGLTF("/assets/house.glb");

  const houseRef = useRef();
  const spotRef = useRef();

  useFrame((state) => {
    if (visible) {
      gsap.to(houseRef.current.position, {
        duration: 0.5,
        y: 1.3,
        ease: "Bounce.easeOut",
      });
      gsap.to(state.camera.position, {
        duration: 1,
        y: 3,
      });
    } else if (!visible) {
      gsap.to(houseRef.current.position, {
        duration: 0.5,
        y: -1.3,
        ease: "Bounce.easeOut",
      });
      gsap.to(state.camera.position, {
        duration: 1,
        y: 5,
      });
    }
  });

  return (
    <group>
      <group ref={houseRef} dispose={null} position={[-20, -1.3, -3]}>
        <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
      </group>
      <group ref={spotRef}>
        <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          receiveShadow
          position={[-13, 0.01, 3]}
        >
          {/* <planeBufferGeometry attach="geometry" args={[8, 8]} /> */}
          <planeGeometry attach="geometry" args={[8, 8]} />
          <meshBasicMaterial color="red" opacity={0} transparent />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/house.glb");
