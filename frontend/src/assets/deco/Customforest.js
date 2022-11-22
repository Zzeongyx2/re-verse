import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CustomForest(props) {
  const { nodes, materials } = useGLTF(
    "/assets/texture_deco/customforest.gltf"
  );
  return (
    <group {...props} dispose={null} scale={0.5} position={[-110, 0, -15]}>
      <mesh
        castShadow
        geometry={nodes.TreeSimple_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.015"]}
        position={[10.88, 0, 20.63]}
        rotation={[0, -1.23, 0]}
        scale={0.59}
      />
      <mesh
        castShadow
        geometry={nodes.TreeGiant_B_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.010"]}
        position={[-36.03, 0, -2.5]}
        rotation={[0, -1.23, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.TreeGiant_A_02_LOD1_Mat_Nature_0005.geometry}
        material={materials["Mat_Nature.019"]}
        position={[-47.5, 0, 70.08]}
        rotation={[0, -0.97, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.TreeGiant_A_02_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.012"]}
        position={[-51.88, 0, -50.12]}
        rotation={[Math.PI, -0.79, Math.PI]}
        scale={0.64}
      />
      <mesh
        castShadow
        geometry={nodes.TreeGiant_A_02_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.003"]}
        position={[-20.4, 0, -72.06]}
        rotation={[-Math.PI, 1.06, -Math.PI]}
      />
      <mesh
        castShadow
        geometry={nodes.TreeGiant_A_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.011"]}
        position={[-6.51, 0, 35.85]}
        rotation={[0, -1.23, 0]}
        scale={0.73}
      />
      <mesh
        castShadow
        geometry={nodes.Tree_F_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.016"]}
        position={[30.17, 0, 26.4]}
        rotation={[0, -1.23, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.Tree_F_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.005"]}
        position={[5.86, 0, -98.54]}
        rotation={[-Math.PI, 1.06, -Math.PI]}
      />
      <mesh
        castShadow
        geometry={nodes.Tree_E_01_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.026"]}
        position={[-5.14, 0, -30.33]}
        rotation={[0, -1.49, 0]}
        scale={1.04}
      />
      <mesh
        castShadow
        geometry={nodes.Tree_E_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.004"]}
        position={[-20.1, 0, -115.66]}
        rotation={[-Math.PI, 1.06, -Math.PI]}
      />
      <mesh
        castShadow
        geometry={nodes.Tree_D_Top_03_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.044"]}
        position={[19.61, -18.58, -61.98]}
        rotation={[0, -1.23, 0]}
        scale={0.6}
      />
      <mesh
        castShadow
        geometry={nodes.Tree_D_Top_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.033"]}
        position={[28.81, -24.73, -45.73]}
        rotation={[0, -1.23, 0]}
        scale={0.79}
      />
      <mesh
        castShadow
        geometry={nodes.Tree_Btm_D_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.017"]}
        position={[2.51, 0, 5.55]}
        rotation={[0, -1.23, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.Tree_Btm_D_01_LOD1_Mat_Nature_0.geometry}
        material={materials.Mat_Nature}
        position={[13.98, 1.95, 72.85]}
        rotation={[0, -1.23, 0]}
        scale={[0.45, 0.71, 0.45]}
      />
      <mesh
        castShadow
        geometry={nodes.Tree_Btm_A_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.018"]}
        position={[6.74, 0, -81.8]}
        rotation={[0, -1.23, 0]}
        scale={0.65}
      />
      <mesh
        castShadow
        geometry={nodes.Root_01_LOD1_Mat_Nature_0.geometry}
        material={materials.Mat_Nature}
        position={[2.89, 8.54, -115.12]}
        rotation={[0, -1.23, 0]}
        scale={0.42}
      />
      <mesh
        castShadow
        geometry={nodes.Rock_C_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.059"]}
        position={[41.23, 8.54, 45.28]}
        rotation={[0, -1.23, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_B_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.082"]}
        position={[-1.44, 2.07, -102.48]}
        rotation={[0, -0.98, 0]}
        scale={0.68}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_A_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.088"]}
        position={[26.98, 0, 69.84]}
        rotation={[0, -1.23, 0]}
        scale={0.73}
      />
      <mesh
        castShadow
        geometry={nodes.Pine_05_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.048"]}
        position={[11.87, 0, 62.05]}
        rotation={[0, -1.23, 0]}
        scale={0.57}
      />
      <mesh
        castShadow
        geometry={nodes.Pine_05_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.047"]}
        position={[-4.01, 0, 75.45]}
        rotation={[0, -1.23, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.Pine_04_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.025"]}
        position={[-29.78, 0, -104.51]}
        rotation={[0, -1.23, 0]}
        scale={0.81}
      />
      <mesh
        castShadow
        geometry={nodes.Pine_04_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.024"]}
        position={[-53.49, 0, -104.47]}
        rotation={[0, -1.23, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_A_03_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.031"]}
        position={[5.36, 1.56, -110.63]}
        rotation={[0, -0.21, 0]}
        scale={0.46}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_A_03_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.029"]}
        position={[-20.17, 1.56, -32.46]}
        rotation={[0, -1.23, 0]}
        scale={[0.31, 0.56, 0.31]}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_A_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.028"]}
        position={[42.67, 1.56, -5.27]}
        rotation={[0, -1.23, 0]}
        scale={0.56}
      />
      <mesh
        castShadow
        geometry={nodes.Fungus_A_03_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.086"]}
        position={[12.67, 0, -86.74]}
        rotation={[0, -0.42, 0]}
        scale={0.59}
      />
      <mesh
        castShadow
        geometry={nodes.Fungus_A_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.084"]}
        position={[17.26, 0, -76.89]}
        rotation={[-Math.PI, 1.26, -Math.PI]}
        scale={0.59}
      />
      <mesh
        castShadow
        geometry={nodes.Fungus_A_02_LOD1_Mat_Nature_0.geometry}
        material={materials.Mat_Nature}
        position={[13.65, 8.54, 48.69]}
        rotation={[0, -1.23, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.Fungus_A_01_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.085"]}
        position={[20.84, 0, -82.87]}
        rotation={[0, -1.23, 0]}
        scale={0.64}
      />
      <mesh
        castShadow
        geometry={nodes.Fungus_A_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.056"]}
        position={[31.07, 0, -59.83]}
        rotation={[0, -1.23, 0]}
        scale={0.64}
      />
      <mesh
        castShadow
        geometry={nodes.FlowerBush_A_03_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.032"]}
        position={[29.25, 1.09, 0.61]}
        rotation={[0, -0.78, 0]}
        scale={0.51}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.092"]}
        position={[45.16, 2.2, 26.8]}
        rotation={[0, -1.23, 0]}
        scale={[0.64, 0.29, 0.64]}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.091"]}
        position={[2.79, 2.2, -12.69]}
        rotation={[0, -1.23, 0]}
        scale={[0.64, 0.29, 0.64]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.092"]}
        position={[45.16, 2.41, 26.8]}
        rotation={[0, -1.23, 0]}
        scale={[0.64, 0.29, 0.64]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.091"]}
        position={[2.79, 2.41, -12.69]}
        rotation={[0, -1.23, 0]}
        scale={[0.64, 0.29, 0.64]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.061"]}
        position={[2.64, 0.94, -45.77]}
        rotation={[0, -1.23, 0]}
        scale={0.55}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_02_LOD1_Mat_Nature_0.geometry}
        material={materials.Mat_Nature}
        position={[43.05, 0.94, 15.5]}
        rotation={[0, -1.23, 0]}
        scale={0.6}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_01_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.094"]}
        position={[-40.12, 0, -86.72]}
        rotation={[0, -1.23, 0]}
        scale={[0.73, 0.5, 0.73]}
      />
      <mesh
        castShadow
        geometry={nodes.Conifer_05_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.023"]}
        position={[-64.5, 0, -80.88]}
        rotation={[0, -1.23, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.Conifer_04_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.009"]}
        position={[17.89, 0, -7.36]}
        rotation={[0, -1.23, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.Conifer_04_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.006"]}
        position={[17.78, 0, -34.8]}
        rotation={[0, -1.23, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.Conifer_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.007"]}
        position={[34.03, 0, -23.53]}
        rotation={[0, -1.23, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.Bush_B_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.063"]}
        position={[5.06, 8.54, -56.43]}
        rotation={[0, -1.23, 0]}
        scale={0.71}
      />
      <mesh
        castShadow
        geometry={nodes.Buds_A_01_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.090"]}
        position={[26.98, 0, 69.84]}
        rotation={[0, -1.23, 0]}
        scale={0.73}
      />
    </group>
  );
}

useGLTF.preload("/customforest.gltf");
