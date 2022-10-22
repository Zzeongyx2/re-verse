import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
// import { Suspense } from "react";
// import { Model } from "../../../public/characters_pack/Scene";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
type GLTFResult = GLTF & {
  nodes: {
    polySurface81_lambert8_0: THREE.Mesh;
    polySurface94_lambert8_0: THREE.Mesh;
    polySurface95_lambert8_0: THREE.Mesh;
    polySurface96_lambert8_0: THREE.Mesh;
    polySurface57_lambert11_0: THREE.Mesh;
    polySurface56_lambert6_0: THREE.Mesh;
    polySurface55_lambert6_0: THREE.Mesh;
    polySurface54_lambert6_0: THREE.Mesh;
    polySurface53_lambert6_0: THREE.Mesh;
    polySurface52_lambert6_0: THREE.Mesh;
    polySurface51_lambert6_0: THREE.Mesh;
    polySurface50_lambert6_0: THREE.Mesh;
    polySurface49_lambert6_0: THREE.Mesh;
    polySurface48_lambert6_0: THREE.Mesh;
    polySurface47_lambert6_0: THREE.Mesh;
    polySurface46_lambert6_0: THREE.Mesh;
    polySurface45_lambert6_0: THREE.Mesh;
    polySurface44_lambert6_0: THREE.Mesh;
    polySurface43_lambert6_0: THREE.Mesh;
    polySurface42_lambert6_0: THREE.Mesh;
    polySurface41_lambert6_0: THREE.Mesh;
    polySurface40_lambert6_0: THREE.Mesh;
    polySurface12_lambert3_0: THREE.Mesh;
    polySurface11_lambert3_0: THREE.Mesh;
    polySurface10_lambert3_0: THREE.Mesh;
    polySurface9_lambert3_0: THREE.Mesh;
    polySurface8_lambert3_0: THREE.Mesh;
    polySurface7_lambert3_0: THREE.Mesh;
    polySurface6_lambert3_0: THREE.Mesh;
    polySurface5_lambert3_0: THREE.Mesh;
    polySurface4_lambert3_0: THREE.Mesh;
    polySurface3_lambert3_0: THREE.Mesh;
    polySurface2_lambert3_0: THREE.Mesh;
    polySurface1_lambert3_0: THREE.Mesh;
    polySurface23_lambert8_0: THREE.Mesh;
    polySurface33_lambert8_0: THREE.Mesh;
    polySurface29_lambert8_0: THREE.Mesh;
    polySurface31_lambert8_0: THREE.Mesh;
    polySurface27_lambert8_0: THREE.Mesh;
    polySurface22_lambert8_0: THREE.Mesh;
    polySurface32_lambert8_0: THREE.Mesh;
    polySurface26_lambert8_0: THREE.Mesh;
    polySurface28_lambert8_0: THREE.Mesh;
    polySurface21_lambert8_0: THREE.Mesh;
    polySurface30_lambert8_0: THREE.Mesh;
    polySurface24_lambert8_0: THREE.Mesh;
    polySurface25_lambert8_0: THREE.Mesh;
    polySurface36_lambert8_0: THREE.Mesh;
    polySurface34_lambert8_0: THREE.Mesh;
    polySurface35_lambert11_0: THREE.Mesh;
    polySurface37_lambert8_0: THREE.Mesh;
    polySurface38_lambert8_0: THREE.Mesh;
    polySurface15_lambert3_0: THREE.Mesh;
    polySurface16_lambert3_0: THREE.Mesh;
    polySurface14_lambert3_0: THREE.Mesh;
    polySurface13_lambert3_0: THREE.Mesh;
    polySurface39_lambert6_0: THREE.Mesh;
    polySurface20_lambert8_0: THREE.Mesh;
    polySurface18_lambert3_0: THREE.Mesh;
    polySurface19_lambert11_0: THREE.Mesh;
    polySurface17_lambert3_0: THREE.Mesh;
    PG_01_accessories1_lambert3_0: THREE.Mesh;
    PG_02_accessories1_lambert3_0: THREE.Mesh;
    PG_03_accessories1_lambert3_0: THREE.Mesh;
    PG_04_accessories1_lambert3_0: THREE.Mesh;
    PG_05_accessories1_lambert3_0: THREE.Mesh;
    polySurface64_lambert3_0: THREE.Mesh;
    polySurface65_lambert3_0: THREE.Mesh;
    polySurface66_lambert3_0: THREE.Mesh;
    polySurface67_lambert3_0: THREE.Mesh;
    polySurface68_lambert3_0: THREE.Mesh;
    PG_11_accessories1_lambert3_0: THREE.Mesh;
    PG_12_accessories1_lambert3_0: THREE.Mesh;
    PG_13_accessories1_lambert3_0: THREE.Mesh;
    PG_14_accessories1_lambert3_0: THREE.Mesh;
    PG_15_accessories1_lambert3_0: THREE.Mesh;
    PG_16_accessories1_lambert3_0: THREE.Mesh;
    polySurface75_lambert3_0: THREE.Mesh;
    polySurface76_lambert3_0: THREE.Mesh;
    polySurface77_lambert11_0: THREE.Mesh;
    polySurface97_lambert6_0: THREE.Mesh;
    polySurface98_lambert6_0: THREE.Mesh;
    polySurface99_lambert6_0: THREE.Mesh;
    polySurface100_lambert6_0: THREE.Mesh;
    polySurface101_lambert6_0: THREE.Mesh;
    polySurface102_lambert6_0: THREE.Mesh;
    polySurface103_lambert6_0: THREE.Mesh;
    polySurface104_lambert6_0: THREE.Mesh;
    polySurface105_lambert6_0: THREE.Mesh;
    polySurface106_lambert6_0: THREE.Mesh;
    polySurface107_lambert6_0: THREE.Mesh;
    polySurface108_lambert6_0: THREE.Mesh;
    polySurface108_lambert16_0: THREE.Mesh;
    polySurface109_lambert6_0: THREE.Mesh;
    polySurface110_lambert6_0: THREE.Mesh;
    polySurface110_PG_33_glass_0: THREE.Mesh;
    polySurface111_lambert6_0: THREE.Mesh;
    polySurface111_lambert15_0: THREE.Mesh;
    polySurface112_lambert6_0: THREE.Mesh;
    polySurface113_lambert6_0: THREE.Mesh;
    PG_37_accessories1_lambert6_0: THREE.Mesh;
    PG_38_accessories1_lambert11_0: THREE.Mesh;
    polySurface78_lambert8_0: THREE.Mesh;
    polySurface79_lambert8_0: THREE.Mesh;
    polySurface80_lambert8_0: THREE.Mesh;
    polySurface80_lambert17_0: THREE.Mesh;
    polySurface82_lambert8_0: THREE.Mesh;
    polySurface83_lambert8_0: THREE.Mesh;
    polySurface84_lambert8_0: THREE.Mesh;
    polySurface85_lambert8_0: THREE.Mesh;
    polySurface86_lambert8_0: THREE.Mesh;
    polySurface87_lambert8_0: THREE.Mesh;
    polySurface88_lambert8_0: THREE.Mesh;
    polySurface89_lambert8_0: THREE.Mesh;
    polySurface90_lambert8_0: THREE.Mesh;
    polySurface91_lambert8_0: THREE.Mesh;
    polySurface92_lambert8_0: THREE.Mesh;
    polySurface93_lambert11_0: THREE.Mesh;
    Object_7: THREE.SkinnedMesh;
    Object_8: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    lambert8: THREE.MeshBasicMaterial;
    lambert11: THREE.MeshBasicMaterial;
    lambert6: THREE.MeshBasicMaterial;
    lambert3: THREE.MeshBasicMaterial;
    lambert16: THREE.MeshBasicMaterial;
    PG_33_glass: THREE.MeshBasicMaterial;
    lambert15: THREE.MeshBasicMaterial;
    lambert17: THREE.MeshBasicMaterial;
    PG_42pCube35SG1: THREE.MeshBasicMaterial;
    PG_42polySurface162SG1: THREE.MeshBasicMaterial;
  };
  animations: GLTFAction[];
};
type ActionName = "Take 001";
// type GLTFActions = Record<ActionName, THREE.AnimationAction>
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
function ThreeTest(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const mesh = useRef<THREE.Mesh>(null!);
  const { nodes, materials, animations } = useGLTF(
    "characters_pack/scene.gltf"
  ) as unknown as GLTFResult;
  const { actions } = useAnimations(animations, group);
  return (
    <Canvas>
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={3.98}
          >
            <group
              name="34784d6679264234b47bfae814ef0eabfbx"
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Object_4"></group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </Canvas>
  );
}

export default ThreeTest;
