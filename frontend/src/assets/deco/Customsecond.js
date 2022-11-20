import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CandyCustomTwo(props) {
  const { nodes, materials } = useGLTF("/assets/customcandy/customsecond.gltf");
  return (
    <group
      {...props}
      dispose={null}
      position={[110, 0.8, 6.5]}
      rotation={[0, Math.PI / 1.1, 0]}
      scale={0.56}
    >
      <mesh
        geometry={nodes.Waffle_03_LOD1_Mat_Pastry_0.geometry}
        material={materials["Mat_Pastry.001"]}
        position={[14.91, -0.14, -23.77]}
        rotation={[Math.PI / 2, 0, 1.43]}
        scale={1.79}
      />
      <mesh
        geometry={nodes.Tree_CottonCandy_03_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.001"]}
        position={[11.1, -0.14, -43.26]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.17}
      />
      <mesh
        geometry={nodes.Tree_CottonCandy_03_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[11.1, -0.14, -43.26]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.17}
      />
      <mesh
        geometry={nodes.Tree_CottonCandy_02_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.001"]}
        position={[-11.35, -0.14, -4.76]}
        rotation={[-Math.PI / 2, 0, -0.81]}
        scale={2.83}
      />
      <mesh
        geometry={nodes.Tree_CottonCandy_02_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-11.35, -0.14, -4.76]}
        rotation={[-Math.PI / 2, 0, -0.81]}
        scale={2.83}
      />
      <mesh
        geometry={nodes.Tree_CottonCandy_01_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.001"]}
        position={[-19.15, -0.14, 14.29]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={2.33}
      />
      <mesh
        geometry={nodes.Tree_CottonCandy_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-19.15, -0.14, 14.29]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={2.33}
      />
      <mesh
        geometry={nodes.Tree_Candy_06_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.001"]}
        position={[11.15, -0.14, -32.11]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={1.27}
      />
      <mesh
        geometry={nodes.Tree_Candy_06_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[11.15, -0.14, -32.11]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={1.27}
      />
      <mesh
        geometry={nodes.Tree_Candy_02_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.001"]}
        position={[-20.09, -0.14, -1.37]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={1.09}
      />
      <mesh
        geometry={nodes.Tree_Candy_02_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-20.09, -0.14, -1.37]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={1.09}
      />
      <mesh
        geometry={nodes.Tree_Candy_01_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.001"]}
        position={[-4.6, -0.14, -40.69]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={1.97}
      />
      <mesh
        geometry={nodes.Tree_Candy_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-4.6, -0.14, -40.69]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={1.97}
      />
      <mesh
        geometry={nodes.Pudding_A_02_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[18.71, -0.14, -13.84]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={1.27}
      />
      <mesh
        geometry={nodes.Pretzel_01_LOD1_Mat_Pastry_0.geometry}
        material={materials["Mat_Pastry.001"]}
        position={[-7.99, -0.14, 1.17]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={1.27}
      />
      <mesh
        geometry={nodes.Pokka_01_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.001"]}
        position={[-8.76, -0.14, 29.71]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={1.27}
      />
      <mesh
        geometry={nodes.Pokka_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-8.76, -0.14, 29.71]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={1.27}
      />
      <mesh
        geometry={nodes.Mintstar_03_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-0.12, -0.02, 9.1]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.09}
      />
      <mesh
        geometry={nodes.Marshmallow_B_03_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.001"]}
        position={[-4.87, 2, -27.77]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.42}
      />
      <mesh
        geometry={nodes.Lolly_B_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[0.41, -0.14, -31.62]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.17}
      />
      <mesh
        geometry={nodes.Lollipop_B_01_LOD1_Mat_Candy_0001.geometry}
        material={materials["Mat_Candy.003"]}
        position={[0.33, -0.02, 32.99]}
        rotation={[Math.PI, -0.81, 0]}
        scale={1.42}
      />
      <mesh
        geometry={nodes.Lollipop_B_01_LOD1_Mat_Candy_Specular_0001.geometry}
        material={materials["Mat_Candy_Specular.003"]}
        position={[0.33, -0.02, 32.99]}
        rotation={[Math.PI, -0.81, 0]}
        scale={1.42}
      />
      <mesh
        geometry={nodes.Lollipop_A_01_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.001"]}
        position={[-8.93, -0.02, 18.59]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.42}
      />
      <mesh
        geometry={nodes.Lollipop_A_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-8.93, -0.02, 18.59]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.42}
      />
      <mesh
        geometry={nodes.Jellybean_03_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[13.83, -0.14, -6.16]}
        rotation={[0, -0.94, 0]}
        scale={1.47}
      />
      <mesh
        geometry={nodes.Jellybean_02_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[11.15, -0.14, -1.72]}
        rotation={[0, 0.06, 0]}
        scale={1.77}
      />
      <mesh
        geometry={nodes.Jellybean_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-9.89, -0.14, -15.67]}
        scale={2.17}
      />
      <mesh
        geometry={nodes.Heartcandy_03_LOD1_Mat_Candy_Specular_0002.geometry}
        material={materials["Mat_Candy_Specular.018"]}
        position={[15.8, -0.14, 25.74]}
        rotation={[-Math.PI / 2, 0, 0.87]}
        scale={1.47}
      />
      <mesh
        geometry={nodes.Heartcandy_03_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[4.66, -0.14, -38.81]}
        rotation={[-Math.PI / 2, 0, 1.45]}
        scale={1.5}
      />
      <mesh
        geometry={nodes.Heartcandy_02_LOD1_Mat_Candy_Specular_0002.geometry}
        material={materials["Mat_Candy_Specular.017"]}
        position={[5.77, -0.14, 17.08]}
        rotation={[-Math.PI / 2, 0, 0.47]}
        scale={0.98}
      />
      <mesh
        geometry={nodes.Heartcandy_02_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[7.82, -0.14, 22.7]}
        rotation={[-Math.PI / 2, 0, 2.04]}
        scale={0.98}
      />
      <mesh
        geometry={nodes.Heartcandy_01_LOD1_Mat_Candy_Specular_0002.geometry}
        material={materials["Mat_Candy_Specular.019"]}
        position={[13.03, -0.14, 16.3]}
        rotation={[-Math.PI / 2, 0, 1.72]}
        scale={1.32}
      />
      <mesh
        geometry={nodes.Gummy_C_03_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.001"]}
        position={[0.68, -0.14, -5.35]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.23}
      />
      <mesh
        geometry={nodes.Gummy_C_02_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.001"]}
        position={[2.96, 1.29, -13.48]}
        rotation={[-2.11, 0, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Gummy_C_01_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.001"]}
        position={[-23.97, -0.14, 6.1]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.51}
      />
      <mesh
        geometry={nodes.Gummy_B_02_LOD1_Mat_Candy_0002.geometry}
        material={materials["Mat_Candy.008"]}
        position={[10.23, 0.89, 10.22]}
        rotation={[-1.8, 0, -3.02]}
        scale={1.33}
      />
      <mesh
        geometry={nodes.Gummy_A_03_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.001"]}
        position={[3.52, -0.14, -24.72]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.17}
      />
      <mesh
        geometry={nodes.Gummy_A_02_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.001"]}
        position={[-16.59, -0.02, 23.23]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.42}
      />
      <mesh
        geometry={nodes.Gum_A_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-1.25, -0.02, 39.77]}
        scale={1.42}
      />
      <mesh
        geometry={nodes.Donut_Icing_02_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-9.5, 0.7, 35.23]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.42}
      />
      <mesh
        geometry={nodes.Donut_Icing_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-9.5, -0.02, 35.23]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.42}
      />
      <mesh
        geometry={nodes.Donut_A_06_LOD1_Mat_Pastry_0.geometry}
        material={materials["Mat_Pastry.001"]}
        position={[-9.7, -0.02, 41.69]}
        rotation={[-0.69, 0, 0]}
        scale={1.42}
      />
      <mesh
        geometry={nodes.Donut_A_03_LOD1_Mat_Pastry_0.geometry}
        material={materials["Mat_Pastry.001"]}
        position={[-22.92, -0.02, -23.26]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.02}
      />
      <mesh
        geometry={nodes.Chocwhite_03_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[7.31, -0.02, 32.63]}
        rotation={[-Math.PI / 2, 0, 0.33]}
        scale={1.42}
      />
      <mesh
        geometry={nodes.Chocmilk_02_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-11.76, -0.02, 7.19]}
        rotation={[-Math.PI / 2, 0, -0.7]}
        scale={1.42}
      />
      <mesh
        geometry={nodes.CandyPlant_B_02_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[1.45, -0.02, 25.09]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.99}
      />
      <mesh
        geometry={nodes.CandyPlant_B_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[19.91, -0.02, -34.38]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.42}
      />
      <mesh
        geometry={nodes.Candybar_A_02_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-7.63, -0.02, -21.21]}
        scale={1.42}
      />
      <mesh
        geometry={nodes.Candy_D_02_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[10.79, -0.02, -13.73]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.42}
      />
      <mesh
        geometry={nodes.Candy_C_03_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-11.19, -0.02, -9.82]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.42}
      />
      <mesh
        geometry={nodes.Candy_C_02_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-8.66, -0.02, 14.27]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.42}
      />
      <mesh
        geometry={nodes.Candy_C_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-3.37, -0.02, 18.57]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.09}
      />
      <mesh
        geometry={nodes.Breadstick_03_LOD1_Mat_Pastry_0.geometry}
        material={materials["Mat_Pastry.001"]}
        position={[-17.3, -0.02, 30.21]}
        rotation={[-Math.PI / 2, 0, -0.79]}
        scale={1.42}
      />
      <mesh
        geometry={nodes.Biscuit_02_LOD1_Mat_Pastry_0.geometry}
        material={materials["Mat_Pastry.001"]}
        position={[23.92, -0.02, -43.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.17}
      />
      <mesh
        geometry={nodes.Biscuit_02_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.001"]}
        position={[23.92, -0.02, -43.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.17}
      />
      <mesh
        geometry={nodes.Biscuit_01_LOD1_Mat_Pastry_0.geometry}
        material={materials["Mat_Pastry.001"]}
        position={[15.68, -0.02, -49.38]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.42}
      />
      <mesh
        geometry={nodes.Biscuit_01_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.001"]}
        position={[15.68, -0.02, -49.38]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.42}
      />
    </group>
  );
}

useGLTF.preload("/customsecond.gltf");
