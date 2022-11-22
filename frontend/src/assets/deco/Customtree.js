import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CustomTree(props) {
  const { nodes, materials } = useGLTF("/assets/texture_deco/customtree.gltf");
  return (
    <group
      {...props}
      dispose={null}
      scale={0.52}
      rotation={[0, Math.PI / 2.4, 0]}
      position={[24, 0, -125]}
    >
      <mesh
        castShadow
        geometry={nodes.Tree_E_01_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.101"]}
        position={[-84.5, -0.04, -106.38]}
        rotation={[-Math.PI, 0.45, -Math.PI]}
        scale={0.42}
      />
      <mesh
        castShadow
        geometry={nodes.Rock_B_06_LOD1_Mat_Nature_0008.geometry}
        material={materials["Mat_Nature.044"]}
        position={[-80.11, -0.04, -57.96]}
        rotation={[-Math.PI, 0.97, -Math.PI]}
        scale={0.32}
      />
      <mesh
        castShadow
        geometry={nodes.Rock_B_06_LOD1_Mat_Nature_0.geometry}
        material={materials.Mat_Nature}
        position={[-73.31, 0.21, -94.13]}
        rotation={[Math.PI, -0.42, Math.PI]}
        scale={0.43}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_B_02_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.095"]}
        position={[-12.96, 0, -0.96]}
        rotation={[0, 0.25, 0]}
        scale={0.2}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_B_02_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.089"]}
        position={[-7.08, 0, -3.66]}
        rotation={[0, 0.25, 0]}
        scale={0.26}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_A_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.023"]}
        position={[-88.29, 0, -158.7]}
        scale={0.15}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_A_01_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.018"]}
        position={[-85.26, 0, -156.64]}
        scale={0.25}
      />
      <mesh
        castShadow
        geometry={nodes.Pine_05_LOD1_Mat_Nature_0009.geometry}
        material={materials["Mat_Nature.003"]}
        position={[-20.16, -0.04, -55.02]}
        rotation={[0, -0.38, 0]}
        scale={0.74}
      />
      <mesh
        castShadow
        geometry={nodes.Pine_05_LOD1_Mat_Nature_0008.geometry}
        material={materials["Mat_Nature.064"]}
        position={[5.47, -0.04, -31.32]}
        rotation={[0, -0.38, 0]}
        scale={1.56}
      />
      <mesh
        castShadow
        geometry={nodes.Pine_05_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.047"]}
        position={[-65.16, -0.04, -96.15]}
        scale={1.13}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_B_03_LOD1_Mat_Nature_0005.geometry}
        material={materials["Mat_Nature.061"]}
        position={[-84.14, -0.04, -109.45]}
        rotation={[0, 0.42, 0]}
        scale={0.16}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_B_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.049"]}
        position={[-87.03, -0.04, -108.61]}
        scale={0.21}
      />
      <mesh
        castShadow
        geometry={nodes["Group012_Material_#11267_0"].geometry}
        material={materials.Material_11267}
        position={[-27.55, 0, -134.72]}
        rotation={[-1.57, 0, 2.17]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes["Group011_Material_#11267_0002"].geometry}
        material={materials["Material_11267.002"]}
        position={[-82.01, 0, -177.23]}
        rotation={[-1.57, 0, -1.71]}
        scale={0.02}
      />
      <mesh
        castShadow
        geometry={nodes["Group011_Material_#11267_0001"].geometry}
        material={materials["Material_11267.001"]}
        position={[-31.16, 0, -80.89]}
        rotation={[-1.57, 0, -1.71]}
        scale={0.03}
      />
      <mesh
        castShadow
        geometry={nodes["Group011_Material_#11267_0"].geometry}
        material={materials.Material_11267}
        position={[-31.16, 0, -80.89]}
        rotation={[-1.57, 0, -1.71]}
        scale={0.03}
      />
      <mesh
        castShadow
        geometry={nodes["Group010_Material_#11267_0"].geometry}
        material={materials.Material_11267}
        position={[-30.9, 0, -27.42]}
        rotation={[-Math.PI / 2, 0, 2.3]}
        scale={0.03}
      />
      <mesh
        castShadow
        geometry={nodes["Group009_Material_#11267_0"].geometry}
        material={materials.Material_11267}
        position={[-71.11, 0, -142.02]}
        rotation={[-1.57, 0, 1.79]}
        scale={0.04}
      />
      <mesh
        castShadow
        geometry={nodes["Group002_Material_#11267_0"].geometry}
        material={materials.Material_11267}
        position={[-71.8, 0, -63.4]}
        rotation={[-Math.PI / 2, 0, -1.13]}
        scale={0.05}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0033.geometry}
        material={materials["Mat_Nature.039"]}
        position={[-48.63, -0.04, -178.29]}
        rotation={[0, 0.85, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0032.geometry}
        material={materials["Mat_Nature.035"]}
        position={[-48.95, -0.04, -182.07]}
        rotation={[0, 0.85, 0]}
        scale={0.26}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0031.geometry}
        material={materials["Mat_Nature.033"]}
        position={[-41.23, -0.04, -181.3]}
        rotation={[0, -0.5, 0]}
        scale={0.26}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0030.geometry}
        material={materials["Mat_Nature.031"]}
        position={[-44.84, -0.04, -180.13]}
        rotation={[0, -0.5, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0029.geometry}
        material={materials["Mat_Nature.029"]}
        position={[-28.71, -0.04, -46.29]}
        rotation={[0, 1.01, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0028.geometry}
        material={materials["Mat_Nature.028"]}
        position={[-29.63, -0.04, -49.97]}
        rotation={[0, 1.01, 0]}
        scale={0.26}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0027.geometry}
        material={materials["Mat_Nature.026"]}
        position={[-57.27, -0.04, -119.92]}
        rotation={[0, 1.01, 0]}
        scale={0.26}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0026.geometry}
        material={materials["Mat_Nature.025"]}
        position={[-56.35, -0.04, -116.24]}
        rotation={[0, 1.01, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0025.geometry}
        material={materials["Mat_Nature.011"]}
        position={[-57.43, 0, -15.6]}
        rotation={[0, 0.84, 0]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0024.geometry}
        material={materials["Mat_Nature.010"]}
        position={[-58.76, 0.45, -16.8]}
        rotation={[0, 0.84, 0]}
        scale={0.12}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0023.geometry}
        material={materials["Mat_Nature.007"]}
        position={[-60.41, 0.45, -14.11]}
        rotation={[0, 0.84, 0]}
        scale={0.16}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0022.geometry}
        material={materials["Mat_Nature.006"]}
        position={[-68.88, 0.21, -24.4]}
        rotation={[0, 1.01, 0]}
        scale={0.23}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0021.geometry}
        material={materials["Mat_Nature.005"]}
        position={[-67.24, 0.21, -28.56]}
        rotation={[0, 1.01, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0020.geometry}
        material={materials["Mat_Nature.004"]}
        position={[-65.1, 0, -27.21]}
        rotation={[0, 1.01, 0]}
        scale={0.11}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.013"]}
        position={[-66.67, 0, -103.04]}
        rotation={[0, 1.01, 0]}
        scale={0.11}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.008"]}
        position={[-68.8, 0.21, -104.38]}
        rotation={[0, 1.01, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.001"]}
        position={[-78.66, 0.21, -88.92]}
        rotation={[0, 1.01, 0]}
        scale={0.23}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0.geometry}
        material={materials.Mat_Nature}
        position={[-70.45, 0.21, -100.23]}
        rotation={[0, 1.01, 0]}
        scale={0.23}
      />
      <mesh
        castShadow
        geometry={nodes.Fungus_A_02_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.103"]}
        position={[-87.5, -0.04, -140.13]}
        rotation={[Math.PI, -0.5, Math.PI]}
        scale={0.28}
      />
      <mesh
        castShadow
        geometry={nodes.Fungus_A_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.034"]}
        position={[-9.08, -0.04, 7.37]}
        rotation={[0, 0.33, 0]}
        scale={0.64}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0.geometry}
        material={materials.Mat_Nature}
        position={[-83.09, -0.95, -104.23]}
        rotation={[0, 0.66, 0]}
        scale={0.19}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0.geometry}
        material={materials.Mat_Nature}
        position={[-82.84, -0.25, -104.25]}
        rotation={[0, 0.66, 0]}
        scale={0.19}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_02_LOD1_Mat_Nature_0006.geometry}
        material={materials["Mat_Nature.017"]}
        position={[-94.52, -0.04, -178.73]}
        rotation={[-Math.PI, 0.61, -Math.PI]}
        scale={0.12}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_02_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.036"]}
        position={[-80.01, -0.04, -125.23]}
        scale={0.18}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.015"]}
        position={[-93.64, -0.04, -176.13]}
        scale={0.18}
      />
      <mesh
        castShadow
        geometry={nodes.Conifer_04_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.009"]}
        position={[-4.94, -0.04, 1.29]}
        scale={[1.07, 0.88, 1.07]}
      />
      <mesh
        castShadow
        geometry={nodes.Conifer_04_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.002"]}
        position={[-45.07, -0.04, -186.21]}
        rotation={[0, -0.38, 0]}
        scale={[1.39, 1.14, 1.39]}
      />
      <mesh
        castShadow
        geometry={nodes.Conifer_03_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.040"]}
        position={[-62.47, -0.04, -19.35]}
        scale={1.02}
      />
      <mesh
        castShadow
        geometry={nodes.Bush_D_02_LOD1_Mat_Nature_0.geometry}
        material={materials.Mat_Nature}
        position={[-76.04, 0.21, -102.64]}
        rotation={[-Math.PI, 0.1, -Math.PI]}
        scale={0.34}
      />
      <mesh
        castShadow
        geometry={nodes.Bush_B_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.012"]}
        position={[-80.16, -0.04, -131.26]}
        scale={0.43}
      />
      <mesh
        castShadow
        geometry={nodes.Buds_A_01_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.024"]}
        position={[-88.29, 0, -158.7]}
        scale={0.15}
      />
      <mesh
        castShadow
        geometry={nodes.Buds_A_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.087"]}
        position={[-85.26, 0, -156.64]}
        scale={0.25}
      />
    </group>
  );
}

useGLTF.preload("/customtree.gltf");
