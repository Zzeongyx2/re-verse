import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function AnnivStoneRoad(props) {
  const { nodes, materials } = useGLTF(
    "/assets/texture_deco/customroadthird.gltf"
  );
  return (
    <group
      {...props}
      dispose={null}
      scale={0.4}
      position={[-1, -0.22, 10]}
      rotation={[0, -Math.PI / 2.3, 0]}
    >
      <mesh
        castShadow
        geometry={nodes.Herb_C_02_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.144"]}
        position={[-65.99, 0, 26.48]}
        scale={0.17}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_06_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.147"]}
        position={[-43.57, 0, 8.14]}
        scale={0.13}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_06_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.148"]}
        position={[-43.73, 0, 10.14]}
        scale={0.16}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_03_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.148"]}
        position={[-55.14, 0, 49.39]}
        scale={0.21}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.150"]}
        position={[42.65, 0, -38.79]}
        scale={0.16}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.151"]}
        position={[46.69, 0, -38.87]}
        scale={0.2}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.148"]}
        position={[5.64, 0, 4.93]}
        scale={0.17}
      />
      <mesh
        geometry={nodes.Alley_Gray_0001.geometry}
        material={materials["Gray.003"]}
        position={[-0.6, 0, 1.66]}
        rotation={[-Math.PI / 2, 0, 1.82]}
        scale={17.66}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_A_01_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.167"]}
        position={[50.01, 0, -14.17]}
        scale={0.12}
      />
      <mesh
        castShadow
        geometry={nodes.Buds_A_01_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.168"]}
        position={[50.01, 0, -14.17]}
        scale={0.12}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.169"]}
        position={[-56.97, 0, 50.72]}
        scale={0.12}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_03_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.170"]}
        position={[-55.81, 0, 51.98]}
        scale={0.12}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_C_02_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.171"]}
        position={[-58.36, 0, 52.85]}
        rotation={[0, -0.55, 0]}
        scale={0.12}
      />
      <mesh
        castShadow
        geometry={nodes.Mintstar_06_LOD1_Mat_Candy_Specular_0003.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[52.34, 0.02, -15.63]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.46}
      />
      <mesh
        castShadow
        geometry={nodes.Mintstar_05_LOD1_Mat_Candy_Specular_0003.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-16.91, 0, -7.92]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.91, 0.91, 0.85]}
      />
      <mesh
        castShadow
        geometry={nodes.Mintstar_04_LOD1_Mat_Candy_Specular_0007.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[27.32, 0.02, -0.79]}
        rotation={[-Math.PI / 2, 0, -0.43]}
        scale={0.69}
      />
      <mesh
        castShadow
        geometry={nodes.Lollipop_B_02_LOD1_Mat_Candy_0003.geometry}
        material={materials["Mat_Candy.001"]}
        position={[-32.32, 0.15, 37.39]}
        rotation={[0, 1.41, 0]}
        scale={0.36}
      />
      <mesh
        castShadow
        geometry={nodes.Lollipop_B_02_LOD1_Mat_Candy_Specular_0003.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-32.32, 0.15, 37.39]}
        rotation={[0, 1.41, 0]}
        scale={0.36}
      />
      <mesh
        castShadow
        geometry={nodes.Lollipop_B_01_LOD1_Mat_Candy_0005.geometry}
        material={materials["Mat_Candy.001"]}
        position={[-32.18, 0.15, 39.43]}
        rotation={[-2.62, 1.3, 2.63]}
        scale={0.36}
      />
      <mesh
        castShadow
        geometry={nodes.Lollipop_B_01_LOD1_Mat_Candy_Specular_0005.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-32.18, 0.15, 39.43]}
        rotation={[-2.62, 1.3, 2.63]}
        scale={0.36}
      />
      <mesh
        castShadow
        geometry={nodes.Candybar_A_02_LOD1_Mat_Candy_Specular_0004.geometry}
        material={materials["Mat_Candy_Specular.015"]}
        position={[31.01, 0.48, 0.86]}
        rotation={[0, 0, -1.08]}
        scale={0.3}
      />
      <mesh
        castShadow
        geometry={nodes.Candybar_A_01_LOD1_Mat_Candy_Specular_0005.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[32.63, 0.08, 0.43]}
        rotation={[-Math.PI / 2, 0, -0.4]}
        scale={0.52}
      />
      <mesh
        castShadow
        geometry={nodes.Candy_D_03_LOD1_Mat_Candy_Specular_0003.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-38.15, 0.02, 43.75]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.66}
      />
      <mesh
        castShadow
        geometry={nodes.Candy_D_01_LOD1_Mat_Candy_Specular_0003.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[4.53, 0.02, -23.74]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.69}
      />
      <mesh
        castShadow
        geometry={nodes.Candy_B_03_LOD1_Mat_Candy_Specular_0003.geometry}
        material={materials["Mat_Candy_Specular.001"]}
        position={[-27.79, 0.61, 34.84]}
        scale={0.54}
      />
      <mesh
        castShadow
        geometry={nodes.Mintstar_06_LOD1_Mat_Candy_Specular_0001.geometry}
        material={materials["Mat_Candy_Specular.003"]}
        position={[30.3, 0.02, -1.99]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.6}
      />
      <mesh
        castShadow
        geometry={nodes.Candy_D_03_LOD1_Mat_Candy_Specular_0001.geometry}
        material={materials["Mat_Candy_Specular.004"]}
        position={[16.28, 0.02, -18.86]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.85}
      />
      <mesh
        castShadow
        geometry={nodes.CookieNut_02_LOD1_Mat_Pastry_0001.geometry}
        material={materials["Mat_Pastry.001"]}
        position={[8.27, 0.02, -24.69]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.85}
      />
      <mesh
        castShadow
        geometry={nodes.Donut_A_01_LOD1_Mat_Pastry_0001.geometry}
        material={materials["Mat_Pastry.002"]}
        position={[-26.49, 0.14, 37.19]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.47}
      />
      <mesh
        castShadow
        geometry={nodes.Candy_B_03_LOD1_Mat_Candy_Specular_0001.geometry}
        material={materials["Mat_Candy_Specular.006"]}
        position={[-28.64, 0.61, 36.43]}
        rotation={[0, 0.41, 0]}
        scale={-0.34}
      />
      <mesh
        castShadow
        geometry={nodes.Mintstar_04_LOD1_Mat_Candy_Specular_0001.geometry}
        material={materials["Mat_Candy_Specular.010"]}
        position={[-24.91, 0.3, -2.07]}
        rotation={[-1.55, 0.32, -0.47]}
        scale={0.64}
      />
      <mesh
        castShadow
        geometry={nodes.Lolly_B_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.008"]}
        position={[7.61, 0.27, 2.84]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.45}
      />
      <mesh
        castShadow
        geometry={nodes.Lollipop_A_02_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.003"]}
        position={[-2.7, 0.3, 22.44]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.41}
      />
      <mesh
        castShadow
        geometry={nodes.Lollipop_A_02_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.008"]}
        position={[-2.7, 0.3, 22.44]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.41}
      />
      <mesh
        castShadow
        geometry={nodes.Candy_B_03_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.008"]}
        position={[-26.92, 0.3, -1.75]}
        scale={0.41}
      />
      <mesh
        castShadow
        geometry={nodes.Lolly_B_01_LOD1_Mat_Candy_Specular_0001.geometry}
        material={materials["Mat_Candy_Specular.017"]}
        position={[45.32, 0.27, -30.92]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.45}
      />
      <mesh
        castShadow
        geometry={nodes.Candycane_01_LOD1_Mat_Candy_Specular_0001.geometry}
        material={materials["Mat_Candy_Specular.018"]}
        position={[-10.74, 0.3, -1.93]}
        rotation={[Math.PI, -0.99, Math.PI]}
        scale={0.35}
      />
      <mesh
        castShadow
        geometry={nodes.Waffle_03_LOD1_Mat_Pastry_0.geometry}
        material={materials["Mat_Pastry.004"]}
        position={[-56.4, 0, 19.42]}
        rotation={[Math.PI / 2, 0, 1.43]}
        scale={0.52}
      />
      <mesh
        castShadow
        geometry={nodes.Tree_CottonCandy_02_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.004"]}
        position={[54.82, 0, -38.41]}
        rotation={[-Math.PI / 2, 0, -0.81]}
        scale={0.82}
      />
      <mesh
        castShadow
        geometry={nodes.Tree_CottonCandy_02_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.019"]}
        position={[54.82, 0, -38.41]}
        rotation={[-Math.PI / 2, 0, -0.81]}
        scale={0.82}
      />
      <mesh
        castShadow
        geometry={nodes.Tree_CottonCandy_01_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.004"]}
        position={[-17.29, 0, 28.37]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={0.68}
      />
      <mesh
        castShadow
        geometry={nodes.Tree_CottonCandy_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.019"]}
        position={[-17.29, 0, 28.37]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={0.68}
      />
      <mesh
        castShadow
        geometry={nodes.Tree_Candy_01_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.004"]}
        position={[-41.03, 0, 9.07]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={0.57}
      />
      <mesh
        castShadow
        geometry={nodes.Tree_Candy_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.019"]}
        position={[-41.03, 0, 9.07]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={0.57}
      />
      <mesh
        castShadow
        geometry={nodes.Pretzel_01_LOD1_Mat_Pastry_0.geometry}
        material={materials["Mat_Pastry.004"]}
        position={[1.69, 0, -4.28]}
        rotation={[-Math.PI / 2, 0, -1.43]}
        scale={0.37}
      />
      <mesh
        castShadow
        geometry={nodes.Jellybean_03_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.019"]}
        position={[-46.4, 0, 18.62]}
        rotation={[0, -0.94, 0]}
        scale={0.42}
      />
      <mesh
        castShadow
        geometry={nodes.Jellybean_02_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.019"]}
        position={[-47.18, 0, 19.9]}
        rotation={[0, 0.06, 0]}
        scale={0.51}
      />
      <mesh
        castShadow
        geometry={nodes.Gummy_C_03_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.004"]}
        position={[71.41, 0, -13.18]}
        rotation={[-Math.PI / 2, 0, -0.97]}
        scale={0.64}
      />
      <mesh
        castShadow
        geometry={nodes.Gummy_C_02_LOD1_Mat_Candy_0.geometry}
        material={materials["Mat_Candy.004"]}
        position={[73.72, 0.41, -13.97]}
        rotation={[-1.9, 0.44, -0.89]}
        scale={0.44}
      />
      <mesh
        castShadow
        geometry={nodes.Gum_A_01_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.019"]}
        position={[-45.04, 0.03, 20.47]}
        scale={0.41}
      />
      <mesh
        castShadow
        geometry={nodes.Chocwhite_03_LOD1_Mat_Candy_Specular_0.geometry}
        material={materials["Mat_Candy_Specular.019"]}
        position={[-6.11, 0.03, 10.05]}
        rotation={[-Math.PI / 2, 0, 0.33]}
        scale={0.41}
      />
      <mesh
        castShadow
        geometry={nodes.Pretzel_01_LOD1_Mat_Pastry_0001.geometry}
        material={materials["Mat_Pastry.006"]}
        position={[-62.2, 0, 43.04]}
        rotation={[-Math.PI / 2, 0, 0.83]}
        scale={0.37}
      />
      <mesh
        castShadow
        geometry={nodes.Pretzel_01_LOD1_Mat_Pastry_0002.geometry}
        material={materials["Mat_Pastry.007"]}
        position={[62.27, 0, -49.12]}
        rotation={[-Math.PI / 2, 0, -0.69]}
        scale={0.37}
      />
      <mesh
        castShadow
        geometry={nodes.Candy_D_02_LOD1_Mat_Candy_Specular_0001.geometry}
        material={materials["Mat_Candy_Specular.028"]}
        position={[-7.72, 0.03, 12.77]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.41}
      />
      <mesh
        castShadow
        geometry={nodes.Candy_D_02_LOD1_Mat_Candy_Specular_0002.geometry}
        material={materials["Mat_Candy_Specular.029"]}
        position={[-68.4, 0.03, 27.54]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.41}
      />
    </group>
  );
}

useGLTF.preload("/customroadthird.gltf");
