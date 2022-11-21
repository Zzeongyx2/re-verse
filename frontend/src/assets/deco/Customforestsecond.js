import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CustomForestSecond(props) {
  const { nodes, materials } = useGLTF(
    "/assets/texture_deco/customforestsecond.gltf"
  );
  return (
    <group
      {...props}
      dispose={null}
      scale={0.3}
      position={[-14, 0, 132]}
      rotation={[0, -Math.PI / 2.6, 0]}
    >
      <mesh
        geometry={nodes.Tree_F_03_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.051"]}
        position={[-20.19, -0.05, 68.23]}
        rotation={[0, -0.38, 0]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.Tree_F_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.001"]}
        position={[-6.09, -0.05, -22.1]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.Tree_E_01_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.101"]}
        position={[-48.88, -0.05, -47.5]}
        rotation={[-Math.PI, 0.45, -Math.PI]}
        scale={0.53}
      />
      <mesh
        geometry={nodes.Tree_Btm_D_01_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.053"]}
        position={[-10.32, -0.05, 77.29]}
        rotation={[0, -1.28, 0]}
        scale={[0.51, 0.8, 0.51]}
      />
      <mesh
        geometry={nodes.Tree_Btm_D_01_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.052"]}
        position={[-29.1, -0.05, 63.83]}
        rotation={[-Math.PI, 0.71, -Math.PI]}
        scale={[0.34, 0.54, 0.34]}
      />
      <mesh
        geometry={nodes.Tree_Btm_D_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.038"]}
        position={[-15.99, -0.05, -22.92]}
        rotation={[-Math.PI, 0.33, -Math.PI]}
        scale={[0.34, 0.54, 0.34]}
      />
      <mesh
        geometry={nodes.Tree_Btm_D_01_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.002"]}
        position={[6.42, -0.05, -17.3]}
        rotation={[0, -0.91, 0]}
        scale={[0.51, 0.8, 0.51]}
      />
      <mesh
        geometry={nodes.Rock_C_03_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.053"]}
        position={[-19.84, -0.05, 23.54]}
        rotation={[0, 0.99, 0]}
        scale={0.35}
      />
      <mesh
        geometry={nodes.Rock_C_03_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.002"]}
        position={[-22.18, -0.05, -63.8]}
        rotation={[0, 1.36, 0]}
        scale={0.35}
      />
      <mesh
        geometry={nodes.Rock_B_06_LOD1_Mat_Nature_0007.geometry}
        material={materials["Mat_Nature.053"]}
        position={[-7.96, -0.05, 112.89]}
        rotation={[-Math.PI, 0.97, -Math.PI]}
        scale={0.78}
      />
      <mesh
        geometry={nodes.Rock_B_06_LOD1_Mat_Nature_0006.geometry}
        material={materials["Mat_Nature.057"]}
        position={[-24.34, -0.05, 42.61]}
        rotation={[0, 1.42, 0]}
        scale={0.52}
      />
      <mesh
        geometry={nodes.Rock_B_06_LOD1_Mat_Nature_0005.geometry}
        material={materials["Mat_Nature.055"]}
        position={[-16.21, -0.05, 48.25]}
        rotation={[0, 0.25, 0]}
        scale={0.3}
      />
      <mesh
        geometry={nodes.Rock_B_06_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.054"]}
        position={[-13.43, -0.05, 42.11]}
        rotation={[Math.PI, -0.4, Math.PI]}
        scale={0.2}
      />
      <mesh
        geometry={nodes.Rock_B_06_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.021"]}
        position={[-9.4, -0.05, -48.88]}
        rotation={[Math.PI, -0.77, Math.PI]}
        scale={0.2}
      />
      <mesh
        geometry={nodes.Rock_B_06_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.020"]}
        position={[-9.73, -0.05, -42.15]}
        rotation={[0, 0.62, 0]}
        scale={0.3}
      />
      <mesh
        geometry={nodes.Rock_B_06_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.014"]}
        position={[-19.35, -0.05, -44.41]}
        rotation={[-Math.PI, 1.34, -Math.PI]}
        scale={0.52}
      />
      <mesh
        geometry={nodes.Rock_B_06_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.002"]}
        position={[21.7, -0.05, 14.93]}
        rotation={[-Math.PI, 0.59, -Math.PI]}
        scale={0.78}
      />
      <mesh
        geometry={nodes.Plant_B_02_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.095"]}
        position={[11.18, 3.58, 95.12]}
        rotation={[0, 0.25, 0]}
        scale={0.23}
      />
      <mesh
        geometry={nodes.Plant_B_02_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.089"]}
        position={[23.27, 3.58, 44.92]}
        rotation={[0, 0.25, 0]}
        scale={0.3}
      />
      <mesh
        geometry={nodes.Pine_05_LOD1_Mat_Nature_0008.geometry}
        material={materials["Mat_Nature.064"]}
        position={[-11.13, -0.05, 97.57]}
        rotation={[0, -0.38, 0]}
        scale={1.75}
      />
      <mesh
        geometry={nodes.Pine_05_LOD1_Mat_Nature_0007.geometry}
        material={materials["Mat_Nature.062"]}
        position={[4.88, -0.05, 66.49]}
        rotation={[0, -0.38, 0]}
      />
      <mesh
        geometry={nodes.Pine_05_LOD1_Mat_Nature_0006.geometry}
        material={materials["Mat_Nature.060"]}
        position={[-34.42, -0.05, 36.8]}
        rotation={[0, -0.38, 0]}
        scale={0.7}
      />
      <mesh
        geometry={nodes.Pine_05_LOD1_Mat_Nature_0005.geometry}
        material={materials["Mat_Nature.058"]}
        position={[-14.68, -0.05, 26.6]}
        rotation={[0, -0.38, 0]}
        scale={0.87}
      />
      <mesh
        geometry={nodes.Pine_05_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.042"]}
        position={[-16.26, -0.05, -62.84]}
        scale={0.87}
      />
      <mesh
        geometry={nodes.Pine_05_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.041"]}
        position={[-30.87, -0.05, -46.11]}
        scale={0.7}
      />
      <mesh
        geometry={nodes.Pine_05_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.008"]}
        position={[16.6, -0.05, -32.94]}
      />
      <mesh
        geometry={nodes.Pine_05_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.013"]}
        position={[13.12, -0.05, 1.85]}
        scale={1.75}
      />
      <mesh
        geometry={nodes.Herb_B_03_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.066"]}
        position={[-9.3, -0.05, 22.44]}
        rotation={[0, -0.38, 0]}
        scale={0.23}
      />
      <mesh
        geometry={nodes.Herb_B_03_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.065"]}
        position={[-39.51, -0.05, 39.08]}
        rotation={[0, -0.38, 0]}
        scale={0.23}
      />
      <mesh
        geometry={nodes.Herb_B_03_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.050"]}
        position={[-34.76, -0.05, -42.12]}
        scale={0.23}
      />
      <mesh
        geometry={nodes.Herb_B_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.049"]}
        position={[-12.78, -0.05, -68.69]}
        scale={0.23}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0019.geometry}
        material={materials["Mat_Nature.097"]}
        position={[-24.3, -0.05, 132.9]}
        rotation={[0, -0.38, 0]}
        scale={0.1}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0018.geometry}
        material={materials["Mat_Nature.096"]}
        position={[-23.44, -0.05, 130.73]}
        rotation={[0, -0.38, 0]}
        scale={0.16}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0017.geometry}
        material={materials["Mat_Nature.053"]}
        position={[3.79, -0.05, 115.98]}
        rotation={[0, -0.38, 0]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0016.geometry}
        material={materials["Mat_Nature.074"]}
        position={[-18.95, -0.05, 105.09]}
        rotation={[0, -0.38, 0]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0015.geometry}
        material={materials["Mat_Nature.073"]}
        position={[11.7, -0.05, 117.55]}
        rotation={[0, -0.38, 0]}
        scale={0.31}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0014.geometry}
        material={materials["Mat_Nature.072"]}
        position={[10, -0.04, 121.78]}
        rotation={[0, -0.38, 0]}
        scale={0.2}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0013.geometry}
        material={materials["Mat_Nature.071"]}
        position={[-14.69, -0.05, 57.19]}
        rotation={[0, -0.38, 0]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0012.geometry}
        material={materials["Mat_Nature.070"]}
        position={[-20.07, -0.05, 59.68]}
        rotation={[0, -0.38, 0]}
        scale={0.26}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0011.geometry}
        material={materials["Mat_Nature.069"]}
        position={[-28.59, -0.05, 49.74]}
        rotation={[0, -0.38, 0]}
        scale={0.35}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0010.geometry}
        material={materials["Mat_Nature.068"]}
        position={[-15.33, -0.05, 30.29]}
        rotation={[0, -0.38, 0]}
        scale={0.17}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0009.geometry}
        material={materials["Mat_Nature.067"]}
        position={[-10.93, -0.05, 28.82]}
        rotation={[0, -0.38, 0]}
        scale={0.13}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0008.geometry}
        material={materials["Mat_Nature.045"]}
        position={[-11.96, -0.05, -62.16]}
        scale={0.13}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0007.geometry}
        material={materials["Mat_Nature.043"]}
        position={[-15.51, -0.05, -59.18]}
        scale={0.17}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0006.geometry}
        material={materials["Mat_Nature.030"]}
        position={[-20.69, -0.05, -36.21]}
        scale={0.35}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0005.geometry}
        material={materials["Mat_Nature.027"]}
        position={[-9.12, -0.05, -30.1]}
        scale={0.26}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.022"]}
        position={[-5.03, -0.05, -34.39]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.034"]}
        position={[41.68, 4.42, 16.6]}
        scale={0.2}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.035"]}
        position={[41.7, -0.05, 12.05]}
        scale={0.31}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.036"]}
        position={[8.62, -0.05, 11.72]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.002"]}
        position={[33.77, -0.05, 13.5]}
        scale={0.41}
      />
      <mesh
        geometry={nodes.Fungus_A_02_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.076"]}
        position={[-2.23, -0.05, 94.18]}
        rotation={[0, -0.05, 0]}
        scale={0.72}
      />
      <mesh
        geometry={nodes.Fungus_A_02_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.075"]}
        position={[-0.36, -0.05, 124.26]}
        rotation={[0, -1.22, 0]}
        scale={0.72}
      />
      <mesh
        geometry={nodes.Fungus_A_02_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.103"]}
        position={[-46.86, -0.05, -51]}
        rotation={[Math.PI, -0.36, Math.PI]}
        scale={0.32}
      />
      <mesh
        geometry={nodes.Fungus_A_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.037"]}
        position={[20.16, -0.05, -4.57]}
        rotation={[0, 0.33, 0]}
        scale={0.72}
      />
      <mesh
        geometry={nodes.FlowerBush_A_03_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.078"]}
        position={[-31.24, -0.05, 34.67]}
        rotation={[-Math.PI, 0.95, -Math.PI]}
        scale={0.13}
      />
      <mesh
        geometry={nodes.FlowerBush_A_03_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.077"]}
        position={[-15.96, -0.05, 64.8]}
        rotation={[-Math.PI, 0.75, -Math.PI]}
        scale={0.23}
      />
      <mesh
        geometry={nodes.FlowerBush_A_03_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.039"]}
        position={[-3.41, -0.05, -26.85]}
        rotation={[-Math.PI, 0.37, -Math.PI]}
        scale={0.23}
      />
      <mesh
        geometry={nodes.FlowerBush_A_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.046"]}
        position={[-28.69, -0.05, -49.26]}
        rotation={[-Math.PI, 0.58, -Math.PI]}
        scale={0.13}
      />
      <mesh
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.053"]}
        position={[2.01, -1.17, 61.48]}
        rotation={[0, 0.28, 0]}
        scale={0.3}
      />
      <mesh
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.002"]}
        position={[12.08, -1.17, -36.54]}
        rotation={[0, 0.66, 0]}
        scale={0.3}
      />
      <mesh
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.053"]}
        position={[2.39, -0.47, 61.58]}
        rotation={[0, 0.28, 0]}
        scale={0.3}
      />
      <mesh
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.002"]}
        position={[12.47, -0.47, -36.58]}
        rotation={[0, 0.66, 0]}
        scale={0.3}
      />
      <mesh
        geometry={nodes.Flora_A_02_LOD1_Mat_Nature_0005.geometry}
        material={materials["Mat_Nature.080"]}
        position={[9.08, -0.05, 70.43]}
        rotation={[0, -0.38, 0]}
        scale={0.39}
      />
      <mesh
        geometry={nodes.Flora_A_02_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.079"]}
        position={[-11.22, -0.05, 52.24]}
        rotation={[0, 1.11, 0]}
        scale={0.39}
      />
      <mesh
        geometry={nodes.Flora_A_02_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.040"]}
        position={[-3.62, -0.05, -40.27]}
        rotation={[0, 1.49, 0]}
        scale={0.39}
      />
      <mesh
        geometry={nodes.Flora_A_02_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.081"]}
        position={[21.95, -0.05, -30.82]}
        scale={0.39}
      />
      <mesh
        geometry={nodes.Conifer_04_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.083"]}
        position={[-22.55, -0.05, 52.8]}
        rotation={[0, -0.38, 0]}
        scale={[1.75, 1.44, 1.75]}
      />
      <mesh
        geometry={nodes.Conifer_04_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.087"]}
        position={[-13.95, -0.05, -35.59]}
        scale={[1.75, 1.44, 1.75]}
      />
      <mesh
        geometry={nodes.Conifer_03_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.093"]}
        position={[-27.33, -0.05, 130.12]}
        rotation={[0, -0.38, 0]}
        scale={1.15}
      />
      <mesh
        geometry={nodes.Conifer_03_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.098"]}
        position={[10.02, -0.05, 38.08]}
        scale={1.15}
      />
      <mesh
        geometry={nodes.Bush_D_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.053"]}
        position={[6.25, -0.05, 105.28]}
        rotation={[-Math.PI, 1.49, -Math.PI]}
        scale={0.61}
      />
      <mesh
        geometry={nodes.Bush_D_02_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.002"]}
        position={[32.12, -0.05, 2.63]}
        rotation={[-Math.PI, 1.11, -Math.PI]}
        scale={0.61}
      />
      <mesh
        geometry={nodes.Bush_B_03_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.099"]}
        position={[-34.77, -0.05, -50.6]}
        scale={0.36}
      />
      <mesh
        geometry={nodes.Bush_B_03_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.100"]}
        position={[3.2, -0.05, -1.36]}
        scale={0.48}
      />
    </group>
  );
}

useGLTF.preload("/customforestsecond.gltf");
