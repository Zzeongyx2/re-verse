import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CandyCustomOne(props) {
  const { nodes, materials } = useGLTF("/assets/customcandy/customfirst.gltf");
  return (
    <group
      {...props}
      dispose={null}
      position={[79, 0, 40]}
      rotation={[0, -Math.PI / 1.3, 0]}
      scale={1.5}
    >
      <mesh
        geometry={nodes.Mintstar_06_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[5.39, 0.03, -1.15]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.29}
      />
      <mesh
        geometry={nodes.Mintstar_05_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[-2.17, 0.03, -2.03]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.44, 0.44, 0.41]}
      />
      <mesh
        geometry={nodes.Mintstar_04_LOD1_Mat_Candy_Specular_0001.geometry}
        material={materials["Mat_Candy_Specular.002"]}
        position={[2.19, 0.03, 2.5]}
        rotation={[-1.55, 0.32, -0.47]}
        scale={0.64}
      />
      <mesh
        geometry={nodes.Mintstar_04_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[-0.76, 0.03, -3.89]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.Mint_C_02_LOD1_Mat_Candy_0.geometry}
        material={materials.Mat_Candy}
        position={[1.07, 0.03, -4.74]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.Lollipop_B_02_LOD1_Mat_Candy_0.geometry}
        material={materials.Mat_Candy}
        position={[-4.54, 0.03, -0.84]}
        rotation={[0, 0.31, 0]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.Lollipop_B_02_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[-4.54, 0.03, -0.84]}
        rotation={[0, 0.31, 0]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.Lollipop_B_01_LOD1_Mat_Candy_0.geometry}
        material={materials.Mat_Candy}
        position={[-6.54, 0.03, 0.36]}
        rotation={[-0.18, 0.7, 0.11]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.Lollipop_B_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[-6.54, 0.03, 0.36]}
        rotation={[-0.18, 0.7, 0.11]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.Lollipop_A_03_LOD1_Mat_Candy_0.geometry}
        material={materials.Mat_Candy}
        position={[3.7, 0.03, -4.6]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.49}
      />
      <mesh
        geometry={nodes.Lollipop_A_03_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[3.7, 0.03, -4.6]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.49}
      />
      <mesh
        geometry={nodes.Lollipop_A_02_LOD1_Mat_Candy_0.geometry}
        material={materials.Mat_Candy}
        position={[5.05, 0.03, -3.12]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.Lollipop_A_02_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[5.05, 0.03, -3.12]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.Donut_A_04_LOD1_Mat_Pastry_0.geometry}
        material={materials.Mat_Pastry}
        position={[-0.86, 0.03, 0.88]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.56, 0.56, 0.41]}
      />
      <mesh
        geometry={nodes.Donut_A_01_LOD1_Mat_Pastry_0001.geometry}
        material={materials["Mat_Pastry.002"]}
        position={[-6.08, 0.03, -1.74]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.CookieNut_02_LOD1_Mat_Pastry_0.geometry}
        material={materials.Mat_Pastry}
        position={[3.5, 0.03, -2.18]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.CookieNut_01_LOD1_Mat_Pastry_0.geometry}
        material={materials.Mat_Pastry}
        position={[1.97, 0.03, -0.07]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.CandyPlant_A_03_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[0.41, 0.03, -3.01]}
        rotation={[0, 0.49, 0]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.Candybar_A_02_LOD1_Mat_Candy_Specular_0001.geometry}
        material={materials["Mat_Candy_Specular.005"]}
        position={[-4.27, 0.31, -4.61]}
        rotation={[0, 0, -1.08]}
        scale={0.24}
      />
      <mesh
        geometry={nodes.Candybar_A_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[-3, 0, -4.94]}
        rotation={[-Math.PI / 2, 0, -0.4]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.Candy_D_03_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[2.67, 0.03, -4.21]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.Candy_D_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[3.95, 0.03, -0.18]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.Candy_B_03_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[-0.53, 0.03, 3.74]}
        scale={0.41}
      />
    </group>
  );
}

useGLTF.preload("/customfirst.gltf");
