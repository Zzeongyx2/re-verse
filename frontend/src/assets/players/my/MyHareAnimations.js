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
import { setKeyA, setKeyD, setKeyS, setKeyW, setPosition } from "../../../modules/camera";

export default function MyHareAnimations({
  destinationPoint,
  handleVisible, // test object event handler
  handleEvent, // travel, anniv, diary event handler
}) {
  const group = useRef();
  const keyW = useSelector((state) => state.camera.keyPress.keyW);
  const keyA = useSelector((state) => state.camera.keyPress.keyA);
  const keyS = useSelector((state) => state.camera.keyPress.keyS);
  const keyD = useSelector((state) => state.camera.keyPress.keyD);
  const { scene, materials, animations } = useGLTF(
    "/assets/animals/GLTF/Animations/Hare_Animations.gltf"
  );
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);
  const { actions } = useAnimations(animations, group);
  // const [moving, setMoving] = useState(false);
  // let angle = 0;
  // const [isCollided, setCollision] = useState(false);
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
      // setCollision(true);
      dispatch(setKeyW(false));
      dispatch(setKeyA(false));
      dispatch(setKeyS(false));
      dispatch(setKeyD(false));
    },
  }));

  useFrame((state) => {
    actions["Idle_A"].play();
    if (group.current) {
      state.camera.lookAt(group.current.position);

      if (keyA || keyD || keyS || keyW) {
        actions["Idle_A"].stop();
        actions["Walk"].play();
        if (keyW && keyD) {
          group.current.lookAt(
            new Vector3(
              group.current.position.x + 0.8,
              group.current.position.y,
              group.current.position.z - 0.8
            )
          );
          group.current.position.z -= 0.8;
          group.current.position.x += 0.8;
        } else if (keyS && keyD) {
          group.current.lookAt(
            new Vector3(
              group.current.position.x + 0.8,
              group.current.position.y,
              group.current.position.z + 0.8
            )
          );
          group.current.position.z += 0.8;
          group.current.position.x += 0.8;
        } else if (keyW && keyA) {
          group.current.lookAt(
            new Vector3(
              group.current.position.x - 0.8,
              group.current.position.y,
              group.current.position.z - 0.8
            )
          );
          group.current.position.z -= 0.8;
          group.current.position.x -= 0.8;
        } else if (keyS && keyA) {
          group.current.lookAt(
            new Vector3(
              group.current.position.x - 0.8,
              group.current.position.y,
              group.current.position.z + 0.8
            )
          );
          group.current.position.z += 0.8;
          group.current.position.x -= 0.8;
        } else if (keyW) {
          group.current.lookAt(
            new Vector3(
              group.current.position.x,
              group.current.position.y,
              group.current.position.z - 0.8
            )
          );
          group.current.position.z -= 0.8;
        } else if (keyA) {
          group.current.lookAt(
            new Vector3(
              group.current.position.x - 0.8,
              group.current.position.y,
              group.current.position.z
            )
          );
          group.current.position.x -= 0.8;
        } else if (keyS) {
          group.current.lookAt(
            new Vector3(
              group.current.position.x,
              group.current.position.y,
              group.current.position.z + 0.8
            )
          );
          group.current.position.z += 0.8;
        } else if (keyD) {
          group.current.lookAt(
            new Vector3(
              group.current.position.x + 0.8,
              group.current.position.y,
              group.current.position.z
            )
          );
          group.current.position.x += 0.8;
        }
        dispatch(setPosition(group.current.position));
      } else {
        actions["Walk"].stop();
        actions["Idle_A"].play();
      }

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
          .add(wDir.clone().multiplyScalar(-1).add(new Vector3(-0.3, 0.5, 0)));

        wDir.add(new Vector3(0, 0.2, 0));
        state.camera.position.copy(cameraPosition);
        state.camera.lookAt(position);
      }

      api.position.set(group.current.position.x, 0, group.current.position.z);

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
              name="Hare"
              geometry={nodes.Hare.geometry}
              material={materials.M_Hare}
              skeleton={nodes.Hare.skeleton}
              morphTargetDictionary={nodes.Hare.morphTargetDictionary}
              morphTargetInfluences={nodes.Hare.morphTargetInfluences}
              // 그림자 설정은 여기에!
              castShadow
            />
          </group>
        </group>
      </group>
      <mesh ref={ref} castShadow={true} name={"player"}>
        <meshLambertMaterial color={"skyblue"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Hare_Animations.gltf");

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
