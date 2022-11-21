import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CandyCustomThird(props) {
  const { nodes, materials } = useGLTF("/assets/customcandy/customthird.gltf");
  return (
    <group
      {...props}
      dispose={null}
      scale={0.1}
      position={[-7, 0, 120]}
      rotation={[0, Math.PI, 0]}
    >
      <mesh
        geometry={nodes.Tree_CottonCandy_01_LOD1_Mat_Candy_0001.geometry}
        material={materials["Mat_Candy.005"]}
        position={[63.93, -0.3, -27.9]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={4.25}
      />
      <mesh
        geometry={
          nodes.Tree_CottonCandy_01_LOD1_Mat_Candy_Specular_0001.geometry
        }
        material={materials["Mat_Candy_Specular.009"]}
        position={[63.93, -0.3, -27.9]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={4.25}
      />
      <mesh
        geometry={nodes.Tree_Candy_03_LOD1_Mat_Candy_0.geometry}
        material={materials.Mat_Candy}
        position={[83.78, -0.3, -19.69]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={2.31}
      />
      <mesh
        geometry={nodes.Tree_Candy_03_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[83.78, -0.3, -19.69]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={2.31}
      />
      <mesh
        geometry={nodes.Mintstar_06_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[95.29, -0.09, 6.62]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.82}
      />
      <mesh
        geometry={nodes.Mintstar_05_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[47.65, -0.09, 1.09]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[2.76, 2.76, 2.59]}
      />
      <mesh
        geometry={nodes.Mintstar_04_LOD1_Mat_Candy_Specular_0001.geometry}
        material={materials["Mat_Candy_Specular.002"]}
        position={[75.13, -0.09, 29.59]}
        rotation={[-1.55, 0.32, -0.47]}
        scale={4.02}
      />
      <mesh
        geometry={nodes.Mintstar_04_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[56.59, -0.09, -10.64]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.59}
      />
      <mesh
        geometry={nodes.Mint_C_02_LOD1_Mat_Candy_0.geometry}
        material={materials.Mat_Candy}
        position={[68.11, -0.09, -16]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.59}
      />
      <mesh
        geometry={nodes.Mint_A_01_LOD1_Mat_Candy_Specular_0002.geometry}
        material={materials["Mat_Candy_Specular.021"]}
        position={[127.47, -0.09, -4.29]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.75}
      />
      <mesh
        geometry={nodes.Mint_A_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[118.15, -0.09, 1.46]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.78}
      />
      <mesh
        geometry={nodes.Lolly_B_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[97.64, -0.3, -23.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={3.96}
      />
      <mesh
        geometry={nodes.Lollipop_B_02_LOD1_Mat_Candy_0.geometry}
        material={materials.Mat_Candy}
        position={[32.76, -0.09, 8.59]}
        rotation={[0, 0.31, 0]}
        scale={2.59}
      />
      <mesh
        geometry={nodes.Lollipop_B_02_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[32.76, -0.09, 8.59]}
        rotation={[0, 0.31, 0]}
        scale={2.59}
      />
      <mesh
        geometry={nodes.Lollipop_B_01_LOD1_Mat_Candy_0.geometry}
        material={materials.Mat_Candy}
        position={[20.16, -0.09, 16.16]}
        rotation={[-0.18, 0.7, 0.11]}
        scale={2.59}
      />
      <mesh
        geometry={nodes.Lollipop_B_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[20.16, -0.09, 16.16]}
        rotation={[-0.18, 0.7, 0.11]}
        scale={2.59}
      />
      <mesh
        geometry={nodes.Lollipop_A_03_LOD1_Mat_Candy_0.geometry}
        material={materials.Mat_Candy}
        position={[127.5, -0.09, 8.63]}
        rotation={[0, -1.18, 0]}
        scale={3.12}
      />
      <mesh
        geometry={nodes.Lollipop_A_03_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[127.5, -0.09, 8.63]}
        rotation={[0, -1.18, 0]}
        scale={3.12}
      />
      <mesh
        geometry={nodes.Lollipop_A_02_LOD1_Mat_Candy_0.geometry}
        material={materials.Mat_Candy}
        position={[108.55, -0.09, -18.35]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.59}
      />
      <mesh
        geometry={nodes.Lollipop_A_02_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[108.55, -0.09, -18.35]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.59}
      />
      <mesh
        geometry={nodes.Heartcandy_01_LOD1_Mat_Candy_Specular_0003.geometry}
        material={materials["Mat_Candy_Specular.020"]}
        position={[115.55, 4.36, -7.15]}
        rotation={[-Math.PI / 2, 0, 0.69]}
        scale={2.67}
      />
      <mesh
        geometry={nodes.Donut_A_04_LOD1_Mat_Pastry_0.geometry}
        material={materials.Mat_Pastry}
        position={[55.96, -0.09, 19.43]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[3.54, 3.54, 2.59]}
      />
      <mesh
        geometry={nodes.CookieNut_02_LOD1_Mat_Pastry_0.geometry}
        material={materials.Mat_Pastry}
        position={[83.42, -0.09, 0.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.59}
      />
      <mesh
        geometry={nodes.CookieNut_01_LOD1_Mat_Pastry_0.geometry}
        material={materials.Mat_Pastry}
        position={[73.78, -0.09, 13.41]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.59}
      />
      <mesh
        geometry={nodes.Chocwhite_03_LOD1_Mat_Candy_Specular_0001.geometry}
        material={materials["Mat_Candy_Specular.009"]}
        position={[106.44, -0.09, 3.48]}
        rotation={[-Math.PI / 2, 0, 0.33]}
        scale={1.53}
      />
      <mesh
        geometry={nodes.CandyPlant_A_03_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[63.96, -0.09, -5.12]}
        rotation={[0, 0.49, 0]}
        scale={2.59}
      />
      <mesh
        geometry={nodes.Candycane_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[23.62, -0.09, 10.52]}
        rotation={[-Math.PI, 0.66, -Math.PI]}
        scale={1.79}
      />
      <mesh
        geometry={nodes.Candybar_A_02_LOD1_Mat_Candy_Specular_0001.geometry}
        material={materials["Mat_Candy_Specular.005"]}
        position={[34.42, 1.67, -15.14]}
        rotation={[0, 0, -1.08]}
        scale={1.49}
      />
      <mesh
        geometry={nodes.Candybar_A_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[42.46, -0.3, -17.24]}
        rotation={[-Math.PI / 2, 0, -0.4]}
        scale={2.59}
      />
      <mesh
        geometry={nodes.Candy_D_03_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[78.19, -0.09, -12.66]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.59}
      />
      <mesh
        geometry={nodes.Candy_D_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[86.25, -0.09, 12.7]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.59}
      />
      <mesh
        geometry={nodes.Candy_B_03_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials.Mat_Candy_Specular}
        position={[57.99, -0.09, 37.44]}
        scale={2.59}
      />
      <mesh
        geometry={nodes.Candy_A_02_LOD1_Mat_Candy_Specular_0002.geometry}
        material={materials["Mat_Candy_Specular.022"]}
        position={[123.82, -0.09, -19.68]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={3.19}
      />
      <mesh
        geometry={nodes.Breadstick_01_LOD1_Mat_Pastry_0.geometry}
        material={materials.Mat_Pastry}
        position={[93.76, -0.09, -11.73]}
        rotation={[-1.57, -0.06, 1.18]}
        scale={1.53}
      />
    </group>
  );
}

useGLTF.preload("/customthird.gltf");
