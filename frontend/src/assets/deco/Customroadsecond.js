import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function DiaryStoneRoad(props) {
  const { nodes, materials } = useGLTF(
    "/assets/texture_deco/customroadsecond.gltf"
  );
  return (
    <group
      {...props}
      dispose={null}
      scale={0.24}
      position={[-64, -0.22, -63]}
      rotation={[0, Math.PI / 1.7, 0]}
    >
      <mesh
        castShadow
        geometry={nodes.Plant_B_02_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.143"]}
        position={[91.9, 0, -28.29]}
        scale={0.37}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_B_02_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.144"]}
        position={[26.59, 0, -55.49]}
        scale={0.39}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_A_01_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.144"]}
        position={[15.16, 0, -42.58]}
        scale={0.36}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_C_02_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.145"]}
        position={[97.24, 0, -64.85]}
        scale={0.28}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_C_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.146"]}
        position={[-40.62, 0, 52.82]}
        scale={0.28}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_C_02_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.144"]}
        position={[-108.23, 0, 42.51]}
        scale={0.28}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_06_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.147"]}
        position={[-70.67, 0, 11.77]}
        scale={0.23}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_06_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.148"]}
        position={[-70.93, 0, 15.13]}
        scale={0.27}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.148"]}
        position={[-66.24, 0, 12.2]}
        scale={0.33}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_03_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.148"]}
        position={[-90.05, 0, 80.9]}
        scale={0.35}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.149"]}
        position={[-25.96, 0, 46.88]}
        scale={0.48}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_02_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.148"]}
        position={[-49.17, 0, 27.67]}
        scale={0.33}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.150"]}
        position={[73.82, 0, -66.87]}
        scale={0.26}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.151"]}
        position={[80.59, 0, -67]}
        scale={0.34}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.148"]}
        position={[11.8, 0, 6.41]}
        scale={0.28}
      />
      <mesh
        castShadow
        geometry={nodes.Fungus_A_02_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.144"]}
        position={[104.46, 0, -22.05]}
        rotation={[0, 1.49, 0]}
        scale={0.47}
      />
      <mesh
        castShadow
        geometry={nodes.Fungus_A_01_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.152"]}
        position={[63.14, 0, -56.53]}
        scale={0.8}
      />
      <mesh
        castShadow
        geometry={nodes.Fungus_A_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.153"]}
        position={[-75.62, 0, 30.23]}
        scale={0.8}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0005.geometry}
        material={materials["Mat_Nature.154"]}
        position={[-8.3, 0, 29.62]}
        scale={[0.5, 0.23, 0.5]}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.155"]}
        position={[46.32, 0, -49.84]}
        scale={[0.5, 0.23, 0.5]}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.156"]}
        position={[-74.51, 0, 78.78]}
        scale={[0.5, 0.23, 0.5]}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.157"]}
        position={[-62.66, 0, 15.52]}
        scale={[0.5, 0.23, 0.5]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0005.geometry}
        material={materials["Mat_Nature.154"]}
        position={[-8.3, 0, 29.62]}
        scale={[0.5, 0.23, 0.5]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.155"]}
        position={[46.32, 0, -49.84]}
        scale={[0.5, 0.23, 0.5]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.156"]}
        position={[-74.51, 0, 78.78]}
        scale={[0.5, 0.23, 0.5]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.157"]}
        position={[-62.66, 0, 15.52]}
        scale={[0.5, 0.23, 0.5]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.158"]}
        position={[37.3, 0, 0.77]}
        scale={0.42}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_03_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.144"]}
        position={[42.33, 0, -0.85]}
        rotation={[0, -0.32, 0]}
        scale={0.31}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.159"]}
        position={[124.35, 0, -25.06]}
        rotation={[0, -0.83, 0]}
        scale={[0.44, 0.3, 0.44]}
      />
      <mesh
        castShadow
        geometry={nodes.Buds_A_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.160"]}
        position={[15.16, 0, -42.58]}
        scale={0.36}
      />
      <mesh
        geometry={nodes.Alley_Gray_0001.geometry}
        material={materials["Gray.003"]}
        position={[1.35, 0, 0.93]}
        rotation={[-Math.PI / 2, 0, 1.82]}
        scale={29.6}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.161"]}
        position={[35.55, 0, -38.29]}
        scale={0.28}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.162"]}
        position={[35.1, 0, -34.74]}
        scale={0.19}
      />
      <mesh
        castShadow
        geometry={nodes.Fungus_A_01_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.163"]}
        position={[-16.76, 0, -23.71]}
        scale={0.28}
      />
      <mesh
        castShadow
        geometry={nodes.Fungus_A_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.164"]}
        position={[-18.55, 0, -25.95]}
        rotation={[0, 1.49, 0]}
        scale={0.47}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_A_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.165"]}
        position={[15.16, 0, -42.58]}
        scale={0.36}
      />
      <mesh
        castShadow
        geometry={nodes.Buds_A_01_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.166"]}
        position={[15.16, 0, -42.58]}
        scale={0.36}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_A_01_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.167"]}
        position={[86.16, 0, -25.6]}
        scale={0.2}
      />
      <mesh
        castShadow
        geometry={nodes.Buds_A_01_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.168"]}
        position={[86.17, 0, -25.6]}
        scale={0.2}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.169"]}
        position={[-93.12, 0, 83.13]}
        scale={0.19}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_03_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.170"]}
        position={[-91.18, 0, 85.25]}
        scale={0.19}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_C_02_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.171"]}
        position={[-95.45, 0, 86.7]}
        rotation={[0, -0.55, 0]}
        scale={0.2}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_B_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.172"]}
        position={[5.93, 0, 19.84]}
        scale={0.27}
      />
      <mesh
        castShadow
        geometry={nodes.Fungus_A_01_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.173"]}
        position={[-103.22, 0, 88.31]}
        scale={0.65}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_B_03_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.174"]}
        position={[-16.32, 0, -6.35]}
        scale={0.29}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_B_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.175"]}
        position={[5.79, 0, 24.59]}
        scale={0.19}
      />
    </group>
  );
}

useGLTF.preload("/customroadsecond.gltf");
