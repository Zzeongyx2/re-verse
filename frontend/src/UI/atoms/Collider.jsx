import React, { useEffect, useRef, useState } from "react";
import { useBox } from "@react-three/cannon";
import * as THREE from "three";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
export const Box = ({ destinationPoint }) => {
  const [ref, api] = useBox(() => ({
    mass: 100000,
    args: [2, 2, 2],
    type: "Static",
    // args: [1, 5, 1],
    position: [destinationPoint.x, 1, destinationPoint.z],
  }));
  //   const realRef = useRef(ref);
  useEffect(() => {
    console.log(ref);
    if (destinationPoint) {
      api.position.set(destinationPoint.x, 1, destinationPoint.z);
      // console.log(group.current);
    } else {
      api.position.set(-30, 1, -30);
    }
  }, [destinationPoint]);
  useFrame(() => {
    // console.log(destinationPoint);
  });
  return (
    <mesh ref={ref} castShadow={true}>
      <boxGeometry args={[2, 2, 2]} />
      <meshLambertMaterial color={"hotpink"} />
    </mesh>
  );
};
