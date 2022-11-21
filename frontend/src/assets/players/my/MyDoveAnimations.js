import * as THREE from "three";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import GLTFLoader from "gltfjsx/src/utils/glftLoader";
import { useFrame, useGraph } from "@react-three/fiber";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils";

import { useDispatch, useSelector } from "react-redux";
import { setCampfireOn } from "../../../modules/reverse";
import { useBox, useConvexPolyhedron } from "@react-three/cannon";
import { Quaternion, Vector3 } from "three";

export default function MyDoveAnimations({
  destinationPoint,
  handleVisible, // test object event handler
  handleEvent, // travel, anniv, diary event handler
}) {
  const group = useRef();

  const { scene, materials, animations } = useGLTF(
    "/assets/animals/GLTF/Animations/Dove_Animations.gltf",
  );
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);

  const { actions } = useAnimations(animations, group);

  const [moving, setMoving] = useState(false);
  let angle = 0;
  const [isCollided, setCollision] = useState(false);
  // 이벤트 발생할 오브젝트의 좌표
  const objectPosition = new THREE.Vector3(-20, 0.01, 3);

  const dispatch = useDispatch();
  const campfirePosition = new THREE.Vector3(37, 0.01, -68);

  const [ref, api] = useBox(() => ({
    rotation: [0, 0, 0],
    mass: 10,
    args: [1.5, 1.5, 1.5],

    position: [destinationPoint.x, 1.1, destinationPoint.z],
    onCollideBegin: (e) => {
      if (e.body.name === "plane" || e.body.name === "bridge") {
        return;
      }

      setCollision(true);
      actions["Walk"].stop();
      actions["Idle_A"].play();
    },
  }));

  useEffect(() => {
    if (destinationPoint) {
      setMoving(true);

      group.current.lookAt(destinationPoint);
      group.current.name = "dove";
    }
  }, [destinationPoint]);
  useFrame((state) => {
    actions["Idle_A"].play();
    if (group.current) {
      state.camera.lookAt(group.current.position);
    }

    if (group.current) {
      if (moving) {
        angle = Math.atan2(
          destinationPoint.z - group.current.position.z,
          destinationPoint.x - group.current.position.x,
        );
        if (isCollided) {
          group.current.position.x -= Math.cos(angle) * 1.8;
          group.current.position.z -= Math.sin(angle) * 1.8;
          destinationPoint.x = group.current.position.x;
          destinationPoint.z = group.current.position.z;
          setMoving(false);
          setCollision(false);
        } else {
          group.current.position.x += Math.cos(angle) * 0.5;
          group.current.position.z += Math.sin(angle) * 0.5;
        }

        actions["Idle_A"].stop();
        actions["Walk"].play();

        if (
          Math.abs(destinationPoint.x - group.current.position.x) < 0.3 &&
          Math.abs(destinationPoint.z - group.current.position.z) < 0.3
        ) {
          setMoving(false);
          actions["Walk"].stop();
          actions["Idle_A"].play();
        }

        // 오브젝트 visible event
        if (
          Math.abs(objectPosition.x - group.current.position.x) < 4 &&
          Math.abs(objectPosition.z - group.current.position.z) < 4
        ) {
          handleVisible(true);
        } else {
          handleVisible(false);
        }

        // travel zone, campfire animation
        if (
          Math.abs(campfirePosition.x - group.current.position.x) < 17 &&
          Math.abs(campfirePosition.z - group.current.position.z) < 12
        ) {
          dispatch(setCampfireOn(1));
        } else {
          dispatch(setCampfireOn(0));
        }
      }
      if (!cameraState.team && !cameraState.game) {
        if (cameraState.characterThree) {
          state.camera.position.x = 1 + group.current.position.x;
          state.camera.position.z = 5 + group.current.position.z;
        } else if (cameraState.characterOne) {
          let position = new Vector3(0, 0, 0);
          position.setFromMatrixPosition(group.current.matrixWorld);

          let quaternion = new Quaternion(0, 0, 0, 0);
          quaternion.setFromRotationMatrix(group.current.matrixWorld);

          let wDir = new Vector3(0, 0, 1);
          wDir.applyQuaternion(quaternion);
          wDir.normalize();

          let cameraPosition = position
            .clone()
            .add(
              wDir.clone().multiplyScalar(-1).add(new Vector3(-0.3, 0.5, 0)),
            );

          wDir.add(new Vector3(0, 0.2, 0));
          state.camera.position.copy(cameraPosition);
          state.camera.lookAt(position);
        }
      }
      api.position.set(group.current.position.x, 0, group.current.position.z);
    }
    if (loadingPage) {
      state.camera.zoom = 28;
    }
  });
  const cameraState = useSelector((state) => state.camera);
  const loadingPage = useSelector((state) => state.loading.loadingPage);
  return (
    <group>
      <group ref={group} dispose={null} position={[-30, 0, -30]}>
        <group name="Scene">
          <group name="Rig" scale={2}>
            <primitive object={nodes.root} />
            <skinnedMesh
              name="Dove"
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
        <meshLambertMaterial color={"skyblue"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Dove_Animations.gltf");

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
