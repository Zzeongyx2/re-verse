import React, { useEffect, useMemo, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils";
import { useGraph } from "@react-three/fiber";

export default function HareCharacter() {
  const group = useRef();
  const [action, setAction] = useState("Idle_A");

  const previousAction = usePrevious(action);
  const { scene, materials, animations } = useGLTF(
    "/assets/animals/GLTF/Animations/Hare_Animations.gltf",
  );
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);
  const { actions, names } = useAnimations(animations, group);

  const [index, setIndex] = useState(8);
  useEffect(() => {
    actions[names[index]].reset().fadeIn(0.5).play();
    return () => {
      if (actions[names[index]]) {
        actions[names[index]].fadeOut(0.5);
      }
    };
  }, [index, actions, names]);

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="Rig">
          <primitive object={nodes.root} />
          <skinnedMesh
            name="Hare"
            geometry={nodes.Hare.geometry}
            material={materials.M_Hare}
            skeleton={nodes.Hare.skeleton}
            morphTargetDictionary={nodes.Hare.morphTargetDictionary}
            morphTargetInfluences={nodes.Hare.morphTargetInfluences}
            // 그림자 설정은 여기에!
            castShadow
            receiveShadow
            onClick={() => setIndex((index + 1) % names.length)}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/animals/GLTF/Animations/Hare_Animations.gltf");

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
