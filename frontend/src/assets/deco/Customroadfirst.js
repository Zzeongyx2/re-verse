import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CustomRoadFirst(props) {
  const { nodes, materials } = useGLTF(
    "/assets/texture_deco/customroadfirst.gltf"
  );
  return (
    <group
      {...props}
      dispose={null}
      scale={0.44}
      position={[21, 0, -42]}
      rotation={[0, -Math.PI / 10, 0]}
    >
      <mesh
        castShadow
        geometry={nodes.Plant_B_02_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.143"]}
        position={[49.58, 0, -15.27]}
        scale={0.2}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_B_02_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.144"]}
        position={[14.18, 0, -30.02]}
        scale={0.29}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_A_01_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.144"]}
        position={[-4.95, 0, 8.37]}
        scale={0.26}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_C_02_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.145"]}
        position={[52.48, 0, -35.09]}
        scale={0.15}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_C_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.146"]}
        position={[-22.26, 0, 28.71]}
        scale={0.15}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_C_02_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.144"]}
        position={[-58.91, 0, 23.12]}
        scale={0.15}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_06_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.147"]}
        position={[-38.55, 0, 6.45]}
        scale={0.12}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_06_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.148"]}
        position={[-38.69, 0, 8.27]}
        scale={0.15}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.148"]}
        position={[-36.15, 0, 6.68]}
        scale={0.18}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_03_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.148"]}
        position={[-49.06, 0, 43.93]}
        scale={0.19}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.149"]}
        position={[-14.31, 0, 25.49]}
        scale={0.26}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_02_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.148"]}
        position={[-26.89, 0, 15.07]}
        scale={0.18}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.150"]}
        position={[39.78, 0, -36.18]}
        scale={0.14}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.151"]}
        position={[43.46, 0, -36.25]}
        scale={0.19}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.148"]}
        position={[6.16, 0, 3.54]}
        scale={0.15}
      />
      <mesh
        castShadow
        geometry={nodes.Fungus_A_02_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.144"]}
        position={[56.4, 0, -11.88]}
        rotation={[0, 1.49, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        geometry={nodes.Fungus_A_01_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.152"]}
        position={[33.99, 0, -30.58]}
        scale={0.43}
      />
      <mesh
        castShadow
        geometry={nodes.Fungus_A_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.153"]}
        position={[-41.23, 0, 16.46]}
        scale={0.43}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0005.geometry}
        material={materials["Mat_Nature.154"]}
        position={[-20.76, 0, -6.97]}
        scale={[0.27, 0.12, 0.27]}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.155"]}
        position={[24.88, 0, -26.95]}
        scale={[0.27, 0.12, 0.27]}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.156"]}
        position={[-40.63, 0, 42.78]}
        scale={[0.27, 0.12, 0.27]}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.157"]}
        position={[16.82, 0, 2.13]}
        scale={[0.27, 0.12, 0.27]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0005.geometry}
        material={materials["Mat_Nature.154"]}
        position={[-20.76, 0, -6.97]}
        scale={[0.27, 0.12, 0.27]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.155"]}
        position={[24.88, 0, -26.95]}
        scale={[0.27, 0.12, 0.27]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.156"]}
        position={[-40.63, 0, 42.78]}
        scale={[0.27, 0.12, 0.27]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.157"]}
        position={[16.82, 0, 2.13]}
        scale={[0.27, 0.12, 0.27]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.158"]}
        position={[19.99, 0, 0.49]}
        scale={0.23}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_03_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.144"]}
        position={[-24.41, 0, -3.94]}
        scale={0.23}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.159"]}
        position={[67.18, 0, -13.52]}
        rotation={[0, -0.83, 0]}
        scale={[0.24, 0.16, 0.24]}
      />
      <mesh
        castShadow
        geometry={nodes.Buds_A_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.160"]}
        position={[-4.95, 0, 8.37]}
        scale={0.26}
      />
    </group>
  );
}

useGLTF.preload("/customroadfirst.gltf");
