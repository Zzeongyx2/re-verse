import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function MouseCharacter() {
  const group = useRef();
  const [action, setAction] = useState("Idle_A");

  const previousAction = usePrevious(action);
  const { nodes, materials, animations } = useGLTF(
    "/assets/animals/GLTF/Animations/Mouse_Animations.gltf"
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
            name="Mouse"
            geometry={nodes.Mouse.geometry}
            material={materials.M_Mouse}
            skeleton={nodes.Mouse.skeleton}
            morphTargetDictionary={nodes.Mouse.morphTargetDictionary}
            morphTargetInfluences={nodes.Mouse.morphTargetInfluences}
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

useGLTF.preload("/assets/animals/GLTF/Animations/Mouse_Animations.gltf");

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
