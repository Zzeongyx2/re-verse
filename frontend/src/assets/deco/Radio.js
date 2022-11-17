/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: media_mas (https://sketchfab.com/media_mas)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/radio-lowpoly-b36f73e09f3447e092a0463d9ce157aa
title: Radio - Lowpoly
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { setMusicTheme } from "../../modules/webrtc";
import { useBox } from "@react-three/cannon";
export function Radio(props) {
  const { nodes, materials } = useGLTF("/assets/radio/scene.gltf");
  const dispatch = useDispatch();
  const webrtcRedux = useSelector((state) => state.webrtc);
  // const [click, setClick] = useState(0);
  const handleClick = () => {
    dispatch(setMusicTheme((webrtcRedux.musicTheme + 1) % 5));
    // setClick((prev) => (prev + 1) % 5);
    // dispatch(setMusicTheme(click));
  };
  // useEffect(() => {
  //   dispatch(setMusicTheme(click));
  // }, [click]);
  console.log(webrtcRedux);
const [boxCollider] = useBox((props) => ({
  mass: 100000,
  args: [20, 10, 15],
  type: "Static",
  position: [-128, 1, -100],
  ...props,
  // args: [1, 5, 1],
}));
  return (
    <group
      {...props}
      dispose={null}
      position={[-128, 0, -99]}
      scale={0.5}
      onPointerOver={(e) => {
        document.getElementsByTagName("body")[0].style.cursor = "pointer";
      }}
      onPointerLeave={(e) => {
        document.getElementsByTagName("body")[0].style.cursor = "";
      }}
    >
      <mesh ref={boxCollider} scale={50}></mesh>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            rotation={[-Math.PI / 2, 0, 0]}
            onClick={() => {
              handleClick();
            }}
          >
            <group
              position={[-14.17, -5.67, 7.89]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <mesh
                geometry={nodes["radio_00_04_-_Default_0"].geometry}
                material={materials["04_-_Default"]}
              />
              <mesh
                geometry={nodes["radio_00_05_-_Default_0"].geometry}
                material={materials["05_-_Default"]}
              />
              <mesh
                geometry={nodes["radio_00_10_-_Default_0"].geometry}
                material={materials["10_-_Default"]}
              />
              <mesh
                geometry={nodes["radio_00_03_-_Default_0"].geometry}
                material={materials["03_-_Default"]}
              />
              <mesh
                geometry={nodes["radio_00_02_-_Default_0"].geometry}
                material={materials["02_-_Default"]}
              />
              <mesh
                geometry={nodes["radio_00_08_-_Default_0"].geometry}
                material={materials["08_-_Default"]}
              />
              <mesh
                geometry={nodes["radio_00_09_-_Default_0"].geometry}
                material={materials["09_-_Default"]}
              />
              <mesh
                geometry={nodes["radio_00_07_-_Default_0"].geometry}
                material={materials["07_-_Default"]}
              />
              <mesh
                geometry={nodes["radio_00_11_-_Default_0"].geometry}
                material={materials["11_-_Default"]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
