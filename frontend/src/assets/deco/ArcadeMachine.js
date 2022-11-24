import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import Game from "../../UI/three/minesweeper/Game";
import { useBox } from "@react-three/cannon";

export function ArcadeMachine(props) {
  const { nodes, materials } = useGLTF("/assets/arcade/arcade_machine.gltf");
  const [boxCollider] = useBox((props) => ({
    mass: 100000,
    args: [15, 10, 13],
    type: "Static",
    position: [-56, 0, -91],
    ...props,
  }));
  return (
    <group
      {...props}
      dispose={null}
      position={[-56, -8, -91]}
      rotation={[0, 0, 0]}
    >
      <mesh ref={boxCollider}>
        <meshLambertMaterial color={"white"} />
      </mesh>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.initialShadingGroup}
        />
        <mesh>
          <Html
            transform
            occlude
            className="bg-blue-400 w-[364px] h-[296px] rounded-md border-[18px] border-black p-1"
            rotation={[Math.PI / 2.2, 0, 0]}
            position={[0, 0.22, 14.5169]}
            zIndexRange={[-100, 100]}
          >
            <Game />
          </Html>
        </mesh>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.lambert4SG}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.lambert7SG}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.lambert8SG}
        />
        <mesh
          castShadow
          geometry={nodes.Object_7.geometry}
          material={materials.lambert3SG}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.lambert5SG}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.lambert6SG}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/arcade_machine.gltf");
