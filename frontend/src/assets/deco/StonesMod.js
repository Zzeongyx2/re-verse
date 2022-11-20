import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function StonesMod(props) {
  const { nodes, materials } = useGLTF("/assets/stones/stones-mod.gltf");
  return (
    <group {...props} dispose={null} scale={7} position={[-45, -0.22, -70]}>
      {/* travel photobook */}
      <mesh
        geometry={nodes.Alley_Gray_0002.geometry}
        material={materials["Gray.004"]}
        position={[9.5, 0, 4]}
        rotation={[-Math.PI / 2, 0, 1.5]}
      />
    </group>
  );
}

useGLTF.preload("/stones-mod.gltf");
