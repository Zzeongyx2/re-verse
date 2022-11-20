import * as THREE from "three";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import GLTFLoader from "gltfjsx/src/utils/glftLoader";
import { useFrame, useGraph } from "@react-three/fiber";
import { Vector3 } from "three";
import { useBox } from "@react-three/cannon";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils";
export default function OtherDoveAnimations({
  action,
  destinationPoint,
  handleCurrentPosition,
  handleVisible,
  userName,
}) {
  const group = useRef();
  // const previousAction = usePrevious(action);
  const { scene, materials, animations } = useGLTF(
    "/assets/animals/GLTF/Animations/Dove_Animations.gltf",
  );
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);

  const { actions } = useAnimations(animations, group);
  const [initPosition, setInitPosition] = useState();
  const [moving, setMoving] = useState(false);
  const moveRef = useRef(moving);
  let angle = 0;

  // 이벤트 발생할 오브젝트의 좌표
  const objectPosition = new THREE.Vector3(-20, 0.01, 3);

  useEffect(() => {
    setInitPosition(new Vector3(destinationPoint.x, 0, destinationPoint.z));
  }, []);
  useEffect(() => {
    setInitPosition(new Vector3(destinationPoint.x, 0, destinationPoint.z));
  }, [userName]);
  useEffect(() => {
    if (destinationPoint) {
      setMoving((prev) => {
        moveRef.current = true;

        prev = true;
      });

      group.current.lookAt(
        new Vector3(destinationPoint.x, 0, destinationPoint.z),
      );
      group.current.name = userName;
    }
  }, [destinationPoint]);
  const [isCollided, setCollision] = useState(false);
  const [ref, api] = useBox(() => ({
    rotation: [0, 0, 0],
    mass: 10,
    args: [1.5, 1.5, 1.5],

    position: [destinationPoint.x, 1.1, destinationPoint.z],
    onCollideBegin: (e) => {
      setCollision(true);
      actions["Walk"].stop();
      actions["Idle_A"].play();
    },
  }));
  useFrame((state) => {
    actions["Idle_A"].play();
    if (group.current) {
    }

    if (group.current) {
      if (moveRef.current) {
        angle = Math.atan2(
          destinationPoint.z - group.current.position.z,
          destinationPoint.x - group.current.position.x,
        );
        if (isCollided) {
          group.current.position.x -= Math.cos(angle) * 0.5;
          group.current.position.z -= Math.sin(angle) * 0.5;
          destinationPoint.x = group.current.position.x;
          destinationPoint.z = group.current.position.z;
          setMoving(false);
          setCollision(false);
        } else {
          group.current.position.x += Math.cos(angle) * 0.5;
          group.current.position.z += Math.sin(angle) * 0.5;
        }
        api.position.set(group.current.position.x, 0, group.current.position.z);

        actions["Idle_A"].stop();
        actions["Walk"].play();

        if (
          Math.abs(destinationPoint.x - group.current.position.x) < 0.3 &&
          Math.abs(destinationPoint.z - group.current.position.z) < 0.3
        ) {
          setMoving((prev) => {
            moveRef.current = false;
            prev = false;
          });
          actions["Walk"].stop();
          actions["Idle_A"].play();
        }

        // 오브젝트 visible event
        if (
          Math.abs(objectPosition.x - group.current.position.x) < 4 &&
          Math.abs(objectPosition.z - group.current.position.z) < 4
        ) {
          handleVisible(true);
          // setVisible(true);
        } else {
          handleVisible(false);
        }
      }
      api.position.set(group.current.position.x, 0, group.current.position.z);
    }
  });

  return (
    <group>
      <group ref={group} position={initPosition}>
        <group>
          <group scale={2}>
            <primitive object={nodes.root} />
            <skinnedMesh
              geometry={nodes.Dove.geometry}
              material={materials.M_Dove}
              skeleton={nodes.Dove.skeleton}
              morphTargetDictionary={nodes.Dove.morphTargetDictionary}
              morphTargetInfluences={nodes.Dove.morphTargetInfluences}
              // 그림자 설정은 여기에!
              castShadow
            />
          </group>
        </group>
      </group>
      <mesh ref={ref} castShadow={true}>
        <meshLambertMaterial color={"hotpink"} />
      </mesh>
    </group>
  );
}

// useGLTF.preload("/Dove_Animations.gltf");

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
