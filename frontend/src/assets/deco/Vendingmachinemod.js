import React from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import Members from "../../UI/three/Members";

export function VendingMachine(props) {
  const { nodes, materials } = useGLTF(
    "/assets/vendingmachine/vendingmachinemod.glb"
  );
  const [boxCollider] = useBox((props) => ({
    mass: 100000,
    args: [15, 10, 20],
    type: "Static",
    position: [-40, 0, 120],
    ...props,
  }));
  return (
    <group {...props} dispose={null}>
      <group
        position={[-40, -10, 120]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={2.4}
      >
        <mesh ref={boxCollider}>
          <meshLambertMaterial color={"white"} />
        </mesh>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh position={[2.19, 6, 0.03]}>
            <Html
              className="w-[150px] h-[150px] bg-gray-200 border-2 rounded-lg"
              transform
              occlude
              rotation={[0, Math.PI / 2, 0]}
              position={[0, 0, 0]}
              distanceFactor={10}
            >
              <Members />
            </Html>
          </mesh>
          <mesh
            geometry={nodes.vending_crystal_lambert32_0001.geometry}
            material={materials["lambert32.001"]}
            position={[0.95, 4.26, -0.44]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/vendingmachinemod.glb");
