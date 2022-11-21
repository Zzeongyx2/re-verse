import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ReverseFloor(props) {
  const { nodes, materials } = useGLTF("/assets/reverse-floor/scene.gltf");
  return (
    <group {...props} dispose={null} scale={30} position={[-150, 0.011, -1115]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 5.3]} scale={0.01}>
            <group position={[-233.91, 0, -136.38]}>
              <mesh
                receiveShadow
                geometry={nodes.Road_Plane_01_Roads_mat_0.geometry}
                material={materials["Roads_mat.002"]}
                position={[728.29, 0, 3589.4]}
                scale={[16.47, 1, 16.47]}
              />
            </group>
            <group position={[-210.11, 0, -136.38]}>
              <mesh
                receiveShadow
                geometry={nodes.Road_Plane_02_Roads_mat_0.geometry}
                material={materials["Roads_mat.002"]}
                position={[942.09, 0, 2957.82]}
                rotation={[0, 1.32, 0]}
                scale={[11.2, 1, 11.2]}
              />
            </group>
            <group position={[-186.7, 0, -136.38]}>
              <mesh
                receiveShadow
                geometry={nodes.Road_Plane_03_Roads_mat_0.geometry}
                material={materials["Roads_mat.002"]}
                position={[1037.61, 0, 3522.15]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[11.11, 1, 11.11]}
              />
            </group>
            <group position={[-162.7, 0, -136.38]}>
              <mesh
                receiveShadow
                geometry={nodes.Road_Plane_04_Roads_mat_0.geometry}
                material={materials["Roads_mat.002"]}
                position={[254.65, 0, 2935.1]}
                rotation={[0, -1.01, 0]}
                scale={[8.8, 1, 8.8]}
              />
            </group>
            <group position={[-136.24, 0, -136.38]}>
              <mesh
                receiveShadow
                geometry={nodes.Road_Plane_05_Roads_mat_0.geometry}
                material={materials["Roads_mat.002"]}
                position={[318.78, 0, 3746.89]}
                rotation={[0, 0.53, 0]}
                scale={[7.4, 1, 7.4]}
              />
            </group>
            <group position={[-93.8, 0, -136.38]}>
              <mesh
                receiveShadow
                geometry={nodes.Road_Plane_07_Roads_mat_0.geometry}
                material={materials["Roads_mat.002"]}
                position={[1028.47, 0, 3750.9]}
                scale={[6.09, 1, 6.09]}
              />
            </group>
            <group position={[-46.89, 0, -136.38]}>
              <mesh
                receiveShadow
                geometry={nodes.Road_Plane_09_Roads_mat_0.geometry}
                material={materials["Roads_mat.002"]}
                position={[294.68, 0, 2855.92]}
                rotation={[0, 0.82, 0]}
                scale={[4.36, 1, 4.36]}
              />
            </group>
            <group position={[-5.78, 0, -136.38]}>
              <mesh
                receiveShadow
                geometry={nodes.Road_Plane_11_Roads_mat_0.geometry}
                material={materials["Roads_mat.002"]}
                position={[607.49, 0, 3171.56]}
                scale={[14.06, 0.81, 14.06]}
              />
            </group>
            <group position={[13.72, 0, -136.38]}>
              <mesh
                receiveShadow
                geometry={nodes.Road_Plane_12_Roads_mat_0.geometry}
                material={materials["Roads_mat.002"]}
                position={[678.88, 0, 3720.82]}
                scale={[15.47, 1, 15.47]}
              />
            </group>
            <group position={[38.55, 0, -136.38]}>
              <mesh
                receiveShadow
                geometry={nodes.Road_Plane_13_Roads_mat_0.geometry}
                material={materials["Roads_mat.002"]}
                position={[747.7, 0, 3229.91]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[11.85, 1, 11.85]}
              />
            </group>
            <group position={[70.9, 0, -136.38]}>
              <mesh
                receiveShadow
                geometry={nodes.Road_Plane_14_Roads_mat_0.geometry}
                material={materials["Roads_mat.002"]}
                position={[213.05, 0, 3259.29]}
                scale={[11.15, 1, 11.15]}
              />
            </group>
            <group position={[96.2, 0, -136.38]}>
              <mesh
                receiveShadow
                geometry={nodes.Road_Plane_15_Roads_mat_0.geometry}
                material={materials["Roads_mat.002"]}
                position={[227.4, 0, 2938.44]}
                scale={[10.04, 1, 10.04]}
              />
            </group>
            <group position={[114.24, 0, -136.38]}>
              <mesh
                receiveShadow
                geometry={nodes.Road_Plane_16_Roads_mat_0.geometry}
                material={materials["Roads_mat.002"]}
                position={[809.18, 0, 3057.55]}
                scale={[13.32, 1, 13.32]}
              />
            </group>
            <group position={[160.77, 0, -136.38]}>
              <mesh
                receiveShadow
                geometry={nodes.Road_Plane_18_Roads_mat_0.geometry}
                material={materials["Roads_mat.002"]}
                position={[-54.23, 0, 3518.39]}
                scale={[16.34, 1, 16.34]}
              />
            </group>
            <group position={[186.01, 0, -136.38]}>
              <mesh
                receiveShadow
                geometry={nodes.Road_Plane_19_Roads_mat_0.geometry}
                material={materials["Roads_mat.002"]}
                position={[297.09, 0, 2883.37]}
                scale={[5.59, 1, 5.59]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
