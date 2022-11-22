import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Eggs(props) {
  const { nodes, materials } = useGLTF("/assets/texture_deco/eggs.gltf");
  return (
    <group {...props} dispose={null} position={[-38.5, 0, -9.5]}>
      <group
        position={[10.52, 0.79, -40.48]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.94}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
      <mesh
        castShadow
        geometry={nodes.Rock_C_03_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.245"]}
        position={[-1.19, 0, -4.05]}
        scale={0.03}
      />
      <mesh
        castShadow
        geometry={nodes.Rock_C_03_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.243"]}
        position={[2.11, 0, -5.06]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Rock_B_06_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.243"]}
        position={[0.07, 0, 4.19]}
        scale={0.1}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_B_02_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.176"]}
        position={[-2.21, -0.05, 3.81]}
        scale={0.1}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_A_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.247"]}
        position={[-5.73, 0, -6.92]}
        scale={0.1}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_A_01_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.211"]}
        position={[2.99, -0.37, 0.47]}
        scale={0.17}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_A_01_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.177"]}
        position={[2.82, 0, 6.42]}
        scale={0.14}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_C_02_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.240"]}
        position={[-3.67, -0.05, -6.93]}
        rotation={[0, -0.06, 0]}
        scale={0.13}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_C_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.179"]}
        position={[-6.11, -0.05, -2.32]}
        rotation={[0, 0.47, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_A_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.218"]}
        position={[-0.29, 0, 6.97]}
        scale={0.13}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_06_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.180"]}
        position={[1.63, 0, -3.26]}
        rotation={[Math.PI, -1.55, Math.PI]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_06_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.181"]}
        position={[0.63, 0, -3.37]}
        rotation={[Math.PI, -1.55, Math.PI]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.181"]}
        position={[1.47, 0, -1.93]}
        rotation={[Math.PI, -1.55, Math.PI]}
        scale={0.1}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_02_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.247"]}
        position={[-0.33, 0, -8.11]}
        scale={0.09}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0007.geometry}
        material={materials["Mat_Nature.239"]}
        position={[-6.57, -0.05, 0.49]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0006.geometry}
        material={materials["Mat_Nature.238"]}
        position={[-5.66, -0.05, 0.92]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0005.geometry}
        material={materials["Mat_Nature.237"]}
        position={[-5.97, -0.05, -0.17]}
        scale={0.1}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.236"]}
        position={[-2.18, -0.05, -5.83]}
        scale={0.12}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.235"]}
        position={[-2.87, -0.05, -4.16]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.183"]}
        position={[-6.78, 0, 2.11]}
        rotation={[0, -0.82, 0]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.184"]}
        position={[-5.8, 0, 2.08]}
        rotation={[0, -0.82, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        geometry={nodes.FlowerBush_A_03_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.223"]}
        position={[-0.18, 0, 1.52]}
        rotation={[0, 0.53, 0]}
        scale={0.12}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0007.geometry}
        material={materials["Mat_Nature.234"]}
        position={[-0.03, -0.05, -5.64]}
        scale={[0.25, 0.12, 0.25]}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0005.geometry}
        material={materials["Mat_Nature.187"]}
        position={[-1.47, -0.05, -1.84]}
        rotation={[0, -0.32, 0]}
        scale={[0.28, 0.13, 0.28]}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.188"]}
        position={[1.72, 0, 3.43]}
        scale={[0.15, 0.07, 0.15]}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.224"]}
        position={[3.94, 0, 4.13]}
        rotation={[Math.PI, -1.3, Math.PI]}
        scale={[0.15, 0.07, 0.15]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0007.geometry}
        material={materials["Mat_Nature.234"]}
        position={[-0.02, -0.05, -5.64]}
        scale={[0.25, 0.12, 0.25]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0005.geometry}
        material={materials["Mat_Nature.187"]}
        position={[-1.47, -0.05, -1.84]}
        rotation={[0, -0.32, 0]}
        scale={[0.28, 0.13, 0.28]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.188"]}
        position={[1.72, 0, 3.43]}
        scale={[0.15, 0.07, 0.15]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.224"]}
        position={[3.94, 0, 4.13]}
        rotation={[Math.PI, -1.3, Math.PI]}
        scale={[0.15, 0.07, 0.15]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_03_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.177"]}
        position={[-3.2, -0.05, 2.18]}
        scale={0.2}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_02_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.246"]}
        position={[2.69, 0.86, -6.53]}
        rotation={[0.71, 0.91, -0.29]}
        scale={0.12}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_02_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.241"]}
        position={[4.02, 0, -2.45]}
        rotation={[0, 0.65, 0]}
        scale={0.15}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_02_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.207"]}
        position={[-4.4, 0, -3.68]}
        rotation={[0, 1.18, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        geometry={nodes.Bush_B_03_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.243"]}
        position={[-2.3, 0, 6.04]}
        scale={0.13}
      />
      <mesh
        castShadow
        geometry={nodes.Buds_A_01_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.233"]}
        position={[2.99, -0.37, 0.47]}
        scale={0.17}
      />
      <mesh
        castShadow
        geometry={nodes.Buds_A_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.193"]}
        position={[2.82, 0, 6.42]}
        scale={0.14}
      />
      <mesh
        castShadow
        geometry={nodes.Rock_C_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.001"]}
        position={[-14.13, 0, -16.41]}
        rotation={[-Math.PI, 0.79, -Math.PI]}
        scale={0.03}
      />
      <mesh
        castShadow
        geometry={nodes.Rock_C_03_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.002"]}
        position={[-17.17, 0, -18.04]}
        rotation={[-Math.PI, 0.79, -Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_A_03_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.004"]}
        position={[-12.97, 0, -11.17]}
        rotation={[-Math.PI, 0.79, -Math.PI]}
        scale={0.1}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_A_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.005"]}
        position={[-11.21, -0.37, -23.2]}
        rotation={[0, 0.34, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_A_01_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.006"]}
        position={[-13.56, 0, -23.55]}
        rotation={[-Math.PI, 0.79, -Math.PI]}
        scale={0.14}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_C_02_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.007"]}
        position={[-14.43, -0.05, -12.62]}
        rotation={[-Math.PI, 0.85, -Math.PI]}
        scale={0.13}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_C_02_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.008"]}
        position={[-9.44, -0.05, -14.14]}
        rotation={[-Math.PI, 0.32, -Math.PI]}
        scale={0.1}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_A_03_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.009"]}
        position={[-15.56, 0, -24.17]}
        rotation={[-Math.PI, 0.79, -Math.PI]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_06_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.010"]}
        position={[-15.56, 0, -18.97]}
        rotation={[0, 0.76, 0]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_06_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.011"]}
        position={[-14.93, 0, -18.18]}
        rotation={[0, 0.76, 0]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.011"]}
        position={[-14.51, 0, -19.79]}
        rotation={[0, 0.76, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.004"]}
        position={[-17.62, 0, -14.16]}
        rotation={[-Math.PI, 0.79, -Math.PI]}
        scale={0.09}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0008.geometry}
        material={materials["Mat_Nature.012"]}
        position={[-7.71, -0.05, -15.78]}
        rotation={[-Math.PI, 0.79, -Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0009.geometry}
        material={materials["Mat_Nature.013"]}
        position={[-8.04, -0.05, -16.73]}
        rotation={[-Math.PI, 0.79, -Math.PI]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0010.geometry}
        material={materials["Mat_Nature.014"]}
        position={[-8.6, -0.05, -15.74]}
        rotation={[-Math.PI, 0.79, -Math.PI]}
        scale={0.1}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0011.geometry}
        material={materials["Mat_Nature.015"]}
        position={[-14.7, -0.05, -14.45]}
        rotation={[-Math.PI, 0.79, -Math.PI]}
        scale={0.12}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0012.geometry}
        material={materials["Mat_Nature.016"]}
        position={[-13.03, -0.05, -15.14]}
        rotation={[-Math.PI, 0.79, -Math.PI]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0013.geometry}
        material={materials["Mat_Nature.017"]}
        position={[-6.41, 0, -16.77]}
        rotation={[0, 1.53, 0]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0014.geometry}
        material={materials["Mat_Nature.018"]}
        position={[-7.12, 0, -17.45]}
        rotation={[0, 1.53, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.020"]}
        position={[-16.08, -0.05, -16.12]}
        rotation={[-Math.PI, 0.79, -Math.PI]}
        scale={[0.25, 0.12, 0.25]}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.021"]}
        position={[-12.37, -0.05, -17.77]}
        rotation={[-Math.PI, 1.11, -Math.PI]}
        scale={[0.28, 0.13, 0.28]}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0006.geometry}
        material={materials["Mat_Nature.022"]}
        position={[-12.53, 0, -21.03]}
        rotation={[0, 0.34, 0]}
        scale={[0.15, 0.07, 0.15]}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0008.geometry}
        material={materials["Mat_Nature.023"]}
        position={[-10.2, 0, -21.1]}
        rotation={[0, -1.5, 0]}
        scale={[0.15, 0.07, 0.15]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.020"]}
        position={[-16.09, -0.05, -16.11]}
        rotation={[-Math.PI, 0.79, -Math.PI]}
        scale={[0.25, 0.12, 0.25]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.021"]}
        position={[-12.37, -0.05, -17.77]}
        rotation={[-Math.PI, 1.11, -Math.PI]}
        scale={[0.28, 0.13, 0.28]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0006.geometry}
        material={materials["Mat_Nature.022"]}
        position={[-12.53, 0, -21.03]}
        rotation={[0, 0.34, 0]}
        scale={[0.15, 0.07, 0.15]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0008.geometry}
        material={materials["Mat_Nature.023"]}
        position={[-10.2, 0, -21.1]}
        rotation={[0, -1.5, 0]}
        scale={[0.15, 0.07, 0.15]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.006"]}
        position={[-8.29, -0.05, -19.37]}
        rotation={[-Math.PI, 0.79, -Math.PI]}
        scale={0.2}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.024"]}
        position={[-18.63, 0.86, -17.42]}
        rotation={[2.72, -0.23, -2.94]}
        scale={0.12}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_02_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.025"]}
        position={[-16.67, 0, -21.24]}
        rotation={[-Math.PI, 0.14, -Math.PI]}
        scale={0.15}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_02_LOD1_Mat_Nature_0005.geometry}
        material={materials["Mat_Nature.026"]}
        position={[-11.61, 0, -14.39]}
        rotation={[Math.PI, -0.39, Math.PI]}
        scale={0.18}
      />
      <mesh
        castShadow
        geometry={nodes.Buds_A_01_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.027"]}
        position={[-11.21, -0.37, -23.2]}
        rotation={[0, 0.34, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        geometry={nodes.Buds_A_01_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.028"]}
        position={[-13.56, 0, -23.55]}
        rotation={[-Math.PI, 0.79, -Math.PI]}
        scale={0.14}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0015.geometry}
        material={materials["Mat_Nature.029"]}
        position={[-9.99, 0, -26.22]}
        rotation={[0, 0.92, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0016.geometry}
        material={materials["Mat_Nature.030"]}
        position={[-9.8, 0, -25.26]}
        rotation={[0, 0.92, 0]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0017.geometry}
        material={materials["Mat_Nature.031"]}
        position={[-12.19, -0.05, -25.68]}
        rotation={[-Math.PI, 1.41, -Math.PI]}
        scale={0.1}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0018.geometry}
        material={materials["Mat_Nature.032"]}
        position={[-11.16, -0.05, -26.17]}
        rotation={[-Math.PI, 1.41, -Math.PI]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0019.geometry}
        material={materials["Mat_Nature.033"]}
        position={[-11.43, -0.05, -25.2]}
        rotation={[-Math.PI, 1.41, -Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Rock_C_03_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.034"]}
        position={[-13.39, 0, -22.31]}
        rotation={[-Math.PI, 0.79, -Math.PI]}
        scale={0.03}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0020.geometry}
        material={materials["Mat_Nature.035"]}
        position={[-21.41, -0.05, -8.63]}
        rotation={[-Math.PI, 1.41, -Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0021.geometry}
        material={materials["Mat_Nature.036"]}
        position={[-21.13, -0.05, -9.59]}
        rotation={[-Math.PI, 1.41, -Math.PI]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0022.geometry}
        material={materials["Mat_Nature.037"]}
        position={[-22.16, -0.05, -9.1]}
        rotation={[-Math.PI, 1.41, -Math.PI]}
        scale={0.1}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0023.geometry}
        material={materials["Mat_Nature.038"]}
        position={[-19.77, 0, -8.68]}
        rotation={[0, 0.92, 0]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0024.geometry}
        material={materials["Mat_Nature.039"]}
        position={[-19.96, 0, -9.65]}
        rotation={[0, 0.92, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0025.geometry}
        material={materials["Mat_Nature.040"]}
        position={[-2.01, -0.01, -12.24]}
        rotation={[0, 0.92, 0]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0026.geometry}
        material={materials["Mat_Nature.041"]}
        position={[-1.86, -0.01, -11.49]}
        rotation={[0, 0.92, 0]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0027.geometry}
        material={materials["Mat_Nature.042"]}
        position={[-3.69, -0.04, -11.82]}
        rotation={[-Math.PI, 1.41, -Math.PI]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0028.geometry}
        material={materials["Mat_Nature.043"]}
        position={[-2.9, -0.04, -12.19]}
        rotation={[-Math.PI, 1.41, -Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0029.geometry}
        material={materials["Mat_Nature.044"]}
        position={[-3.11, -0.04, -11.45]}
        rotation={[-Math.PI, 1.41, -Math.PI]}
        scale={0.05}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0030.geometry}
        material={materials["Mat_Nature.045"]}
        position={[-18.98, -0.04, -26.33]}
        rotation={[Math.PI, -1.4, Math.PI]}
        scale={0.05}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0031.geometry}
        material={materials["Mat_Nature.046"]}
        position={[-19.42, -0.04, -25.71]}
        rotation={[Math.PI, -1.4, Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0032.geometry}
        material={materials["Mat_Nature.047"]}
        position={[-18.55, -0.04, -25.8]}
        rotation={[Math.PI, -1.4, Math.PI]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0033.geometry}
        material={materials["Mat_Nature.048"]}
        position={[-20.17, -0.01, -26.7]}
        rotation={[Math.PI, -0.58, Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0034.geometry}
        material={materials["Mat_Nature.049"]}
        position={[-20.28, -0.01, -25.96]}
        rotation={[Math.PI, -0.58, Math.PI]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0035.geometry}
        material={materials["Mat_Nature.050"]}
        position={[-19.67, -0.01, -28]}
        rotation={[0, 0.89, 0]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0036.geometry}
        material={materials["Mat_Nature.051"]}
        position={[-19.55, -0.01, -27.26]}
        rotation={[0, 0.89, 0]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0037.geometry}
        material={materials["Mat_Nature.052"]}
        position={[-21.36, -0.04, -27.63]}
        rotation={[-Math.PI, 1.43, -Math.PI]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0038.geometry}
        material={materials["Mat_Nature.053"]}
        position={[-20.57, -0.04, -27.98]}
        rotation={[-Math.PI, 1.43, -Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0039.geometry}
        material={materials["Mat_Nature.054"]}
        position={[-20.8, -0.04, -27.25]}
        rotation={[-Math.PI, 1.43, -Math.PI]}
        scale={0.05}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0009.geometry}
        material={materials["Mat_Nature.190"]}
        position={[9.11, 0, 1.25]}
        scale={[0.15, 0.07, 0.15]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0009.geometry}
        material={materials["Mat_Nature.190"]}
        position={[9.11, 0, 1.25]}
        scale={[0.15, 0.07, 0.15]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_03_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.191"]}
        position={[10.88, 0, 0.34]}
        scale={0.13}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0010.geometry}
        material={materials["Mat_Nature.055"]}
        position={[-19.69, 0, -6.96]}
        scale={[0.15, 0.07, 0.15]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0010.geometry}
        material={materials["Mat_Nature.055"]}
        position={[-19.69, 0, -6.96]}
        scale={[0.15, 0.07, 0.15]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_03_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.056"]}
        position={[-17.93, 0, -7.87]}
        scale={0.13}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0040.geometry}
        material={materials["Mat_Nature.057"]}
        position={[22.35, -0.04, -9]}
        rotation={[-Math.PI, 1.43, -Math.PI]}
        scale={0.05}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0041.geometry}
        material={materials["Mat_Nature.058"]}
        position={[22.58, -0.04, -9.73]}
        rotation={[-Math.PI, 1.43, -Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0042.geometry}
        material={materials["Mat_Nature.059"]}
        position={[21.79, -0.04, -9.37]}
        rotation={[-Math.PI, 1.43, -Math.PI]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0043.geometry}
        material={materials["Mat_Nature.060"]}
        position={[23.6, -0.01, -9]}
        rotation={[0, 0.89, 0]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0044.geometry}
        material={materials["Mat_Nature.061"]}
        position={[23.48, -0.01, -9.75]}
        rotation={[0, 0.89, 0]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0045.geometry}
        material={materials["Mat_Nature.062"]}
        position={[22.88, -0.01, -7.7]}
        rotation={[Math.PI, -0.58, Math.PI]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0046.geometry}
        material={materials["Mat_Nature.063"]}
        position={[22.98, -0.01, -8.45]}
        rotation={[Math.PI, -0.58, Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0047.geometry}
        material={materials["Mat_Nature.064"]}
        position={[24.6, -0.04, -7.55]}
        rotation={[Math.PI, -1.4, Math.PI]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0048.geometry}
        material={materials["Mat_Nature.065"]}
        position={[23.74, -0.04, -7.45]}
        rotation={[Math.PI, -1.4, Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0049.geometry}
        material={materials["Mat_Nature.066"]}
        position={[24.18, -0.04, -8.08]}
        rotation={[Math.PI, -1.4, Math.PI]}
        scale={0.05}
      />
      <mesh
        castShadow
        geometry={nodes.Bush_B_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.067"]}
        position={[-15.13, 0, -21.3]}
        scale={0.11}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0.geometry}
        material={materials["Mat_Nature.068"]}
        position={[-2.74, 0, -23.06]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Egg10_Mat10_0.geometry}
        material={materials.Mat10}
        position={[-9.2, 0.79, -29.43]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.94}
      />
      <mesh
        castShadow
        geometry={nodes.Egg09_Mat09_0.geometry}
        material={materials.Mat09}
        position={[22.52, 0.79, -8.07]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.21}
      />
      <mesh
        castShadow
        geometry={nodes.Egg08_Mat08_0.geometry}
        material={materials.Mat08}
        position={[-21.92, 0.79, -9.7]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.11}
      />
      <mesh
        castShadow
        geometry={nodes.Egg07_Mat07_0.geometry}
        material={materials.Mat07}
        position={[6.39, 0.79, 2.53]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.94}
      />
      <mesh
        castShadow
        geometry={nodes.Egg06_Mat06_0.geometry}
        material={materials.Mat06}
        position={[-15.4, 0.95, -9.4]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.94}
      />
      <mesh
        castShadow
        geometry={nodes.Egg05_Mat05_0.geometry}
        material={materials.Mat05}
        position={[16.31, 0.79, -48.8]}
        rotation={[-Math.PI / 2, 0, -0.47]}
        scale={0.94}
      />
      <mesh
        castShadow
        geometry={nodes.Egg04_Mat04_0.geometry}
        material={materials.Mat04}
        position={[17.64, 0.79, -34.14]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.94}
      />
      <mesh
        castShadow
        geometry={nodes.Egg03_Mat03_0.geometry}
        material={materials.Mat03}
        position={[-15.97, 0.79, -27.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.94}
      />
      <mesh
        castShadow
        geometry={nodes.Egg02_Mat02_0.geometry}
        material={materials.Mat02}
        position={[18.56, 0.79, -47.28]}
        rotation={[-Math.PI / 2, 0, -0.47]}
        scale={0.94}
      />
      <mesh
        castShadow
        geometry={nodes.Egg01_Mat01_0.geometry}
        material={materials.Mat01}
        position={[25.64, 0.79, -9.72]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.94}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0050.geometry}
        material={materials["Mat_Nature.069"]}
        position={[-4.24, -0.04, -24.05]}
        rotation={[-Math.PI, 1.41, -Math.PI]}
        scale={0.05}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0051.geometry}
        material={materials["Mat_Nature.070"]}
        position={[-4.03, -0.04, -24.79]}
        rotation={[-Math.PI, 1.41, -Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0052.geometry}
        material={materials["Mat_Nature.071"]}
        position={[-4.82, -0.04, -24.41]}
        rotation={[-Math.PI, 1.41, -Math.PI]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0053.geometry}
        material={materials["Mat_Nature.072"]}
        position={[-2.99, -0.01, -24.09]}
        rotation={[0, 0.92, 0]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0054.geometry}
        material={materials["Mat_Nature.073"]}
        position={[-3.14, -0.01, -24.83]}
        rotation={[0, 0.92, 0]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Rock_C_03_LOD1_Mat_Nature_0005.geometry}
        material={materials["Mat_Nature.074"]}
        position={[13.31, 0, -40.57]}
        rotation={[-Math.PI, 0.09, -Math.PI]}
        scale={0.03}
      />
      <mesh
        castShadow
        geometry={nodes.Rock_C_03_LOD1_Mat_Nature_0006.geometry}
        material={materials["Mat_Nature.075"]}
        position={[9.93, 0, -39.87]}
        rotation={[-Math.PI, 0.09, -Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Plant_A_03_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.076"]}
        position={[17.56, 0, -37.28]}
        rotation={[-Math.PI, 0.09, -Math.PI]}
        scale={0.1}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_C_02_LOD1_Mat_Nature_0005.geometry}
        material={materials["Mat_Nature.077"]}
        position={[15.51, -0.05, -37.46]}
        rotation={[-Math.PI, 0.15, -Math.PI]}
        scale={0.13}
      />
      <mesh
        castShadow
        geometry={nodes.Herb_C_02_LOD1_Mat_Nature_0006.geometry}
        material={materials["Mat_Nature.078"]}
        position={[18.37, -0.05, -41.83]}
        rotation={[Math.PI, -0.37, Math.PI]}
        scale={0.1}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_06_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.079"]}
        position={[10.57, 0, -41.61]}
        rotation={[0, 1.45, 0]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_06_LOD1_Mat_Nature_0005.geometry}
        material={materials["Mat_Nature.080"]}
        position={[11.56, 0, -41.42]}
        rotation={[0, 1.45, 0]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.080"]}
        position={[10.85, 0, -42.93]}
        rotation={[0, 1.45, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_02_LOD1_Mat_Nature_0002.geometry}
        material={materials["Mat_Nature.076"]}
        position={[12.07, 0, -36.6]}
        rotation={[-Math.PI, 0.09, -Math.PI]}
        scale={0.09}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0055.geometry}
        material={materials["Mat_Nature.081"]}
        position={[14.52, -0.04, -33.02]}
        rotation={[0, -1.5, 0]}
        scale={0.05}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0056.geometry}
        material={materials["Mat_Nature.082"]}
        position={[14.24, -0.04, -32.3]}
        rotation={[0, -1.5, 0]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0057.geometry}
        material={materials["Mat_Nature.083"]}
        position={[15.06, -0.04, -32.6]}
        rotation={[0, -1.5, 0]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0058.geometry}
        material={materials["Mat_Nature.084"]}
        position={[13.28, -0.01, -33.09]}
        rotation={[Math.PI, -0.82, Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0059.geometry}
        material={materials["Mat_Nature.085"]}
        position={[13.35, -0.01, -32.34]}
        rotation={[Math.PI, -0.82, Math.PI]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0060.geometry}
        material={materials["Mat_Nature.086"]}
        position={[14.12, -0.05, -38.7]}
        rotation={[-Math.PI, 0.09, -Math.PI]}
        scale={0.12}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0061.geometry}
        material={materials["Mat_Nature.087"]}
        position={[14.96, -0.05, -40.29]}
        rotation={[-Math.PI, 0.09, -Math.PI]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0011.geometry}
        material={materials["Mat_Nature.088"]}
        position={[12, -0.05, -39.09]}
        rotation={[-Math.PI, 0.09, -Math.PI]}
        scale={[0.25, 0.12, 0.25]}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0012.geometry}
        material={materials["Mat_Nature.089"]}
        position={[13.8, -0.05, -42.74]}
        rotation={[-Math.PI, 0.42, -Math.PI]}
        scale={[0.28, 0.13, 0.28]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0011.geometry}
        material={materials["Mat_Nature.088"]}
        position={[12, -0.05, -39.09]}
        rotation={[-Math.PI, 0.09, -Math.PI]}
        scale={[0.25, 0.12, 0.25]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0012.geometry}
        material={materials["Mat_Nature.089"]}
        position={[13.79, -0.05, -42.74]}
        rotation={[-Math.PI, 0.42, -Math.PI]}
        scale={[0.28, 0.13, 0.28]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_02_LOD1_Mat_Nature_0006.geometry}
        material={materials["Mat_Nature.090"]}
        position={[9.21, 0.86, -38.46]}
        rotation={[2.5, -0.84, 2.94]}
        scale={0.12}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_02_LOD1_Mat_Nature_0007.geometry}
        material={materials["Mat_Nature.091"]}
        position={[8.27, 0, -42.65]}
        rotation={[Math.PI, -0.56, Math.PI]}
        scale={0.15}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_02_LOD1_Mat_Nature_0008.geometry}
        material={materials["Mat_Nature.092"]}
        position={[16.54, 0, -40.64]}
        rotation={[Math.PI, -1.09, Math.PI]}
        scale={0.18}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0062.geometry}
        material={materials["Mat_Nature.093"]}
        position={[20.64, -0.01, -47.54]}
        rotation={[Math.PI, -0.82, Math.PI]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0063.geometry}
        material={materials["Mat_Nature.094"]}
        position={[20.56, -0.01, -48.29]}
        rotation={[Math.PI, -0.82, Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0064.geometry}
        material={materials["Mat_Nature.095"]}
        position={[22.35, -0.04, -47.8]}
        rotation={[0, -1.5, 0]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0065.geometry}
        material={materials["Mat_Nature.096"]}
        position={[21.53, -0.04, -47.5]}
        rotation={[0, -1.5, 0]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0066.geometry}
        material={materials["Mat_Nature.097"]}
        position={[21.81, -0.04, -48.22]}
        rotation={[0, -1.5, 0]}
        scale={0.05}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0067.geometry}
        material={materials["Mat_Nature.098"]}
        position={[18.49, -0.01, -49.22]}
        rotation={[Math.PI, -0.82, Math.PI]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0068.geometry}
        material={materials["Mat_Nature.099"]}
        position={[18.41, -0.01, -49.97]}
        rotation={[Math.PI, -0.82, Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0069.geometry}
        material={materials["Mat_Nature.100"]}
        position={[20.2, -0.04, -49.48]}
        rotation={[0, -1.5, 0]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0070.geometry}
        material={materials["Mat_Nature.101"]}
        position={[19.38, -0.04, -49.18]}
        rotation={[0, -1.5, 0]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0071.geometry}
        material={materials["Mat_Nature.102"]}
        position={[19.66, -0.04, -49.89]}
        rotation={[0, -1.5, 0]}
        scale={0.05}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0013.geometry}
        material={materials["Mat_Nature.103"]}
        position={[8.32, -0.05, -35.9]}
        rotation={[-Math.PI, 0.09, -Math.PI]}
        scale={[0.19, 0.09, 0.19]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0013.geometry}
        material={materials["Mat_Nature.103"]}
        position={[8.32, -0.05, -35.9]}
        rotation={[-Math.PI, 0.09, -Math.PI]}
        scale={[0.19, 0.09, 0.19]}
      />
      <mesh
        castShadow
        geometry={nodes.FlowerBush_A_03_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.104"]}
        position={[6.55, 0, -39.57]}
        rotation={[-Math.PI, 1.5, -Math.PI]}
        scale={0.13}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0072.geometry}
        material={materials["Mat_Nature.105"]}
        position={[15.07, -0.04, -46.68]}
        rotation={[0, 0.96, 0]}
        scale={0.05}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0073.geometry}
        material={materials["Mat_Nature.106"]}
        position={[15.74, -0.04, -47.06]}
        rotation={[0, 0.96, 0]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0074.geometry}
        material={materials["Mat_Nature.107"]}
        position={[14.91, -0.04, -47.35]}
        rotation={[0, 0.96, 0]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0075.geometry}
        material={materials["Mat_Nature.108"]}
        position={[15.99, -0.01, -45.84]}
        rotation={[0, 0.14, 0]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0076.geometry}
        material={materials["Mat_Nature.109"]}
        position={[16.41, -0.01, -46.47]}
        rotation={[0, 0.14, 0]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0077.geometry}
        material={materials["Mat_Nature.110"]}
        position={[19.88, -0.01, -44.79]}
        rotation={[0, -1.52, 0]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0078.geometry}
        material={materials["Mat_Nature.111"]}
        position={[19.29, -0.01, -45.26]}
        rotation={[0, -1.52, 0]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0079.geometry}
        material={materials["Mat_Nature.112"]}
        position={[20.89, -0.04, -46.2]}
        rotation={[0, -0.7, 0]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0080.geometry}
        material={materials["Mat_Nature.113"]}
        position={[20.54, -0.04, -45.41]}
        rotation={[0, -0.7, 0]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0081.geometry}
        material={materials["Mat_Nature.114"]}
        position={[20.22, -0.04, -46.11]}
        rotation={[0, -0.7, 0]}
        scale={0.05}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0082.geometry}
        material={materials["Mat_Nature.115"]}
        position={[26.74, 0, -12.69]}
        rotation={[-Math.PI, 1, -Math.PI]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0083.geometry}
        material={materials["Mat_Nature.116"]}
        position={[27.48, 0, -12.57]}
        rotation={[-Math.PI, 1, -Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0084.geometry}
        material={materials["Mat_Nature.117"]}
        position={[26.47, 0, -11.83]}
        rotation={[-Math.PI, 0.18, -Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0014.geometry}
        material={materials["Mat_Nature.118"]}
        position={[28.52, 0, -8.8]}
        scale={[0.15, 0.07, 0.15]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0014.geometry}
        material={materials["Mat_Nature.118"]}
        position={[28.52, 0, -8.8]}
        scale={[0.15, 0.07, 0.15]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_03_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.119"]}
        position={[30.29, 0, -9.72]}
        scale={0.13}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0015.geometry}
        material={materials["Mat_Nature.120"]}
        position={[27.88, 0, -10.95]}
        rotation={[0, -1.56, 0]}
        scale={[0.11, 0.05, 0.11]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0015.geometry}
        material={materials["Mat_Nature.120"]}
        position={[27.88, 0, -10.95]}
        rotation={[0, -1.56, 0]}
        scale={[0.11, 0.05, 0.11]}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0085.geometry}
        material={materials["Mat_Nature.121"]}
        position={[30.34, 0, -6.49]}
        rotation={[-Math.PI, 0.18, -Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0086.geometry}
        material={materials["Mat_Nature.122"]}
        position={[31.35, 0, -7.23]}
        rotation={[-Math.PI, 1, -Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0087.geometry}
        material={materials["Mat_Nature.123"]}
        position={[30.6, 0, -7.35]}
        rotation={[-Math.PI, 1, -Math.PI]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Rock_B_06_LOD1_Mat_Nature_0007.geometry}
        material={materials["Mat_Nature.124"]}
        position={[30.18, -0.04, -14.25]}
        rotation={[Math.PI, -0.84, Math.PI]}
        scale={0.14}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0017.geometry}
        material={materials["Mat_Nature.124"]}
        position={[30.23, -0.04, -16.36]}
        rotation={[0, 1.43, 0]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0015.geometry}
        material={materials["Mat_Nature.125"]}
        position={[30.17, -0.04, -17.76]}
        rotation={[0, 1.43, 0]}
        scale={0.05}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_04_LOD1_Mat_Nature_0014.geometry}
        material={materials["Mat_Nature.126"]}
        position={[30.95, -0.03, -17.64]}
        rotation={[0, 1.43, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        geometry={nodes.Fungus_A_02_LOD1_Mat_Nature_0004.geometry}
        material={materials["Mat_Nature.127"]}
        position={[7.7, -0.04, -0.82]}
        rotation={[-Math.PI, 1.34, -Math.PI]}
        scale={0.16}
      />
      <mesh
        castShadow
        geometry={nodes.Fungus_A_02_LOD1_Mat_Nature_0003.geometry}
        material={materials["Mat_Nature.128"]}
        position={[31.79, -0.04, -16]}
        rotation={[0, 0.59, 0]}
        scale={0.12}
      />
      <mesh
        castShadow
        geometry={nodes.Bush_D_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.124"]}
        position={[28.32, -0.04, -16.33]}
        rotation={[Math.PI, -0.32, Math.PI]}
        scale={0.11}
      />
      <mesh
        castShadow
        geometry={nodes.Fungus_A_02_LOD1_Mat_Nature_0001.geometry}
        material={materials["Mat_Nature.130"]}
        position={[13.33, -0.04, -47.79]}
        rotation={[-Math.PI, 0.78, -Math.PI]}
        scale={0.16}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0088.geometry}
        material={materials["Mat_Nature.131"]}
        position={[35.74, -0.04, -0.76]}
        rotation={[-Math.PI, 1.43, -Math.PI]}
        scale={0.05}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0089.geometry}
        material={materials["Mat_Nature.132"]}
        position={[35.97, -0.04, -1.49]}
        rotation={[-Math.PI, 1.43, -Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0090.geometry}
        material={materials["Mat_Nature.133"]}
        position={[35.18, -0.04, -1.14]}
        rotation={[-Math.PI, 1.43, -Math.PI]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0091.geometry}
        material={materials["Mat_Nature.134"]}
        position={[37, -0.01, -0.77]}
        rotation={[0, 0.89, 0]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0092.geometry}
        material={materials["Mat_Nature.135"]}
        position={[36.87, -0.01, -1.51]}
        rotation={[0, 0.89, 0]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0093.geometry}
        material={materials["Mat_Nature.136"]}
        position={[36.27, -0.01, 0.53]}
        rotation={[Math.PI, -0.58, Math.PI]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0094.geometry}
        material={materials["Mat_Nature.137"]}
        position={[36.37, -0.01, -0.22]}
        rotation={[Math.PI, -0.58, Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0095.geometry}
        material={materials["Mat_Nature.138"]}
        position={[37.13, -0.04, 0.78]}
        rotation={[Math.PI, -1.4, Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0096.geometry}
        material={materials["Mat_Nature.139"]}
        position={[37.57, -0.04, 0.15]}
        rotation={[Math.PI, -1.4, Math.PI]}
        scale={0.05}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0097.geometry}
        material={materials["Mat_Nature.140"]}
        position={[45.95, -0.04, -2.39]}
        rotation={[Math.PI, -1.4, Math.PI]}
        scale={0.05}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0098.geometry}
        material={materials["Mat_Nature.141"]}
        position={[45.51, -0.04, -1.76]}
        rotation={[Math.PI, -1.4, Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0099.geometry}
        material={materials["Mat_Nature.142"]}
        position={[44.75, -0.01, -2.76]}
        rotation={[Math.PI, -0.58, Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0100.geometry}
        material={materials["Mat_Nature.143"]}
        position={[44.65, -0.01, -2.01]}
        rotation={[Math.PI, -0.58, Math.PI]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0101.geometry}
        material={materials["Mat_Nature.144"]}
        position={[45.25, -0.01, -4.06]}
        rotation={[0, 0.89, 0]}
        scale={0.08}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0102.geometry}
        material={materials["Mat_Nature.145"]}
        position={[45.38, -0.01, -3.31]}
        rotation={[0, 0.89, 0]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0103.geometry}
        material={materials["Mat_Nature.146"]}
        position={[43.56, -0.04, -3.68]}
        rotation={[-Math.PI, 1.43, -Math.PI]}
        scale={0.07}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0104.geometry}
        material={materials["Mat_Nature.147"]}
        position={[44.36, -0.04, -4.04]}
        rotation={[-Math.PI, 1.43, -Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        geometry={nodes.Grass_B_01_LOD1_Mat_Nature_0105.geometry}
        material={materials["Mat_Nature.148"]}
        position={[44.13, -0.04, -3.31]}
        rotation={[-Math.PI, 1.43, -Math.PI]}
        scale={0.05}
      />
      <mesh
        castShadow
        geometry={nodes.Flower_B_01_LOD1_Mat_Nature_0016.geometry}
        material={materials["Mat_Nature.149"]}
        position={[38.99, 0, 1.9]}
        scale={[0.15, 0.07, 0.15]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_B_02_LOD1_Mat_Nature_0016.geometry}
        material={materials["Mat_Nature.149"]}
        position={[38.99, 0, 1.9]}
        scale={[0.15, 0.07, 0.15]}
      />
      <mesh
        castShadow
        geometry={nodes.Flora_A_03_LOD1_Mat_Nature_0005.geometry}
        material={materials["Mat_Nature.150"]}
        position={[40.75, 0, 0.98]}
        scale={0.13}
      />
    </group>
  );
}

useGLTF.preload("/eggs.gltf");
