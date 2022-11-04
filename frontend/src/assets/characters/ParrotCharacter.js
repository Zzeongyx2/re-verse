import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function ParrotCharacter() {
  const group = useRef();
  const [action, setAction] = useState("Idle_A");

  const previousAction = usePrevious(action);
  const { nodes, materials, animations } = useGLTF(
    "/assets/animals/GLTF/Animations/Parrot_Animations.gltf"
  );
  const { actions } = useAnimations(animations, group);

  const characterClick = () => {
    if (action === "Idle_A") {
      setAction("Roll");
    } else {
      setAction("Idle_A");
    }
  };
  useEffect(() => {
    if (previousAction) {
      actions[previousAction].fadeOut(0.2);
      actions[action].stop();
    }
    actions[action].play();
    actions[action].fadeIn(0.2);
  }, [actions, action, previousAction]);
  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="Rig">
          <primitive object={nodes.root} />
          <skinnedMesh
            name="Parrot"
            geometry={nodes.Parrot.geometry}
            material={materials.M_Parrot}
            skeleton={nodes.Parrot.skeleton}
            morphTargetDictionary={nodes.Parrot.morphTargetDictionary}
            morphTargetInfluences={nodes.Parrot.morphTargetInfluences}
            // 그림자 설정은 여기에!
            castShadow
            receiveShadow
            onClick={() => {
              characterClick();
            }}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/animals/GLTF/Animations/Parrot_Animations.gltf");

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
