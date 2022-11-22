import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { BoxGeometry } from "three";
export function CampingMod(props) {
  const { nodes, materials } = useGLTF("/assets/camping_mod/scene.gltf");
  const [boxCollider] = useBox((props) => ({
    mass: 100000,
    args: [15, 10, 15],
    type: "Static",
    position: [73, 1, -41],
    ...props,
    // args: [1, 5, 1],
  }));
  return (
    <group
      {...props}
      dispose={null}
      position={[60, 0, -90]}
      rotation={[0, -Math.PI / 3, 0]}
    >
      <group rotation={[-1.57, 0, 0]} scale={0.025}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} />
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[1581.37, 431.15, -92.69]}>
              <mesh
                castShadow
                geometry={nodes.Box002_becosse_0.geometry}
                material={materials.becosse}
                position={[-82.17, -160.33, -0.13]}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[2375.83, -378.9, 80.47]}>
              <mesh
                castShadow
                geometry={nodes.Box266_Gnome_0.geometry}
                material={materials.Gnome}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-131.15, 1246.83, -7.86]}>
              <mesh
                castShadow
                geometry={nodes["Cylinder002_05_-_Default_0"].geometry}
                material={materials["05_-_Default"]}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} />
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[1094.82, -186.7, 954.48]}>
              <mesh
                castShadow
                geometry={nodes["Cylinder124_06_-_Default_0"].geometry}
                material={materials["06_-_Default_0"]}
                position={[-176.47, 0, 0]}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[2503.99, -368.73, 222.59]}>
              <mesh
                castShadow
                geometry={nodes.df_pancartes_0.geometry}
                material={materials.pancartes_0}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[679.83, 934.69, 7.33]}>
              <mesh
                castShadow
                geometry={nodes["Group002_Material_#11267_0"].geometry}
                material={materials.Material_11267}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[1579.88, 1016.12, 0.6]}>
              <mesh
                castShadow
                geometry={nodes["Group008_Material_#11267_0"].geometry}
                material={materials.Material_11267}
                position={[0, 160.14, 0.13]}
                rotation={[0, 0, -0.5]}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[2696.68, 1046.21, 0.6]}>
              <mesh
                castShadow
                geometry={nodes["Group009_Material_#11267_0"].geometry}
                material={materials.Material_11267}
                position={[-142.13, 111.26, 0.09]}
                rotation={[0, 0, 2.39]}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-283.5, 1336.82, 0.6]}>
              <mesh
                castShadow
                geometry={nodes["Group010_Material_#11267_0"].geometry}
                material={materials.Material_11267}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[1012.75, 1976.01, 0.6]}>
              <mesh
                castShadow
                geometry={nodes["Group011_Material_#11267_0"].geometry}
                material={materials.Material_11267}
                rotation={[0, 0, 0.62]}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[3679.78, 284.67, 0.6]}>
              <mesh
                castShadow
                geometry={nodes["Group012_Material_#11267_0"].geometry}
                material={materials.Material_11267}
                position={[-626.91, -132.94, -0.11]}
                rotation={[0, 0, -1.72]}
                scale={0.66}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} />
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[1522.66, -540.54, 72.62]}>
              <mesh
                castShadow
                geometry={nodes.Object151_vbvbv_0.geometry}
                material={materials.vbvbv}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[3301.24, -377.9, 41.6]}>
              <mesh
                castShadow
                geometry={nodes.Object153_Roulotte_0.geometry}
                material={materials.Roulotte}
                position={[-3158.42, 81.66, 0.07]}
                rotation={[0, 0, 0.57]}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-665.89, -368.8, 67.76]}>
              <mesh
                castShadow
                geometry={nodes.Object163_valise1_0.geometry}
                material={materials.valise1}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-601.57, -241.17, 85.44]}>
              <mesh
                castShadow
                geometry={nodes.Object164_valise3_0.geometry}
                material={materials.valise3}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[2409.99, -172.48, 932.84]}>
              <mesh
                castShadow
                geometry={nodes["Object166_06_-_Default_0"].geometry}
                material={materials["06_-_Default"]}
                position={[-176.47, 0, 0]}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-789.8, 296.83, 392.15]}>
              <mesh
                castShadow
                geometry={nodes["Object179_12_-_Default_0"].geometry}
                material={materials["12_-_Default"]}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[2391.27, 2.73, 405.74]}>
              <mesh
                castShadow
                geometry={nodes["Object180_12_-_Default_0"].geometry}
                material={materials["12_-_Default_0"]}
                position={[-176.47, 0, 0]}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[1147.77, -765.26, 138.79]}>
              <mesh
                castShadow
                geometry={nodes.Object183_vbvbv_0.geometry}
                material={materials.vbvbv_0}
              />
              <mesh
                castShadow
                geometry={nodes.Object183_vbvbv_0001.geometry}
                material={materials.vbvbv_1}
              />
              <mesh
                castShadow
                geometry={nodes.Object183_vbvbv_0002.geometry}
                material={materials.vbvbv_2}
              />
              <mesh
                castShadow
                geometry={nodes.Object183_vbvbv_0003.geometry}
                material={materials.vbvbv}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[1196.14, -680.48, 65.88]}>
              <mesh
                castShadow
                geometry={nodes.table001_table_0.geometry}
                material={materials.table}
              />
              <mesh castShadow ref={boxCollider} scale={50}></mesh>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
useGLTF.preload("/scene.gltf");
