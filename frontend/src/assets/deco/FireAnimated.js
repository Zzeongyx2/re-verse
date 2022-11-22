import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import gsap from "gsap";

import { useSelector } from "react-redux";
import { useFrame } from "@react-three/fiber";

export function FireAnimated(props) {
  const group = useRef();
  const eventSpot = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/fire_animation/scene.gltf"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Take 001"].play();
  });

  const campfire = useSelector((state) => state.reverse.isCampfireOn);

  useFrame((state) => {
    if (campfire) {
      // eventSpot.current.children[0].material.color.r = 1;
      // eventSpot.current.children[0].material.color.b = 1;

      gsap.to(group.current.position, {
        duration: 0.3,
        y: 1.4,
        ease: "Bounce.easeOut",
      });
      gsap.to(state.camera.position, {
        duration: 1,
        y: 3,
      });
    } else {
      // eventSpot.current.children[0].material.color.r = 0;
      // eventSpot.current.children[0].material.color.b = 1;

      gsap.to(group.current.position, {
        duration: 0.2,
        y: -10,
        ease: "Bounce.easeOut",
      });
      gsap.to(state.camera.position, {
        duration: 1,
        y: 5,
      });
    }
  });
  return (
    <group>
      <group ref={group} {...props} dispose={null} position={[49, -10, -67.5]}>
        <group name="Sketchfab_Scene">
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.3}
          >
            <group
              name="7932a0dac3824e028da37f46ce28fafdfbx"
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group name="flame01">
                    <mesh
                      name="flame01_phong2_0"
                      geometry={nodes.flame01_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="flame02">
                    <mesh
                      name="flame02_phong2_0"
                      geometry={nodes.flame02_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="flame03">
                    <mesh
                      name="flame03_phong2_0"
                      geometry={nodes.flame03_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="flame04">
                    <mesh
                      name="flame04_phong2_0"
                      geometry={nodes.flame04_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="flame05">
                    <mesh
                      name="flame05_phong2_0"
                      geometry={nodes.flame05_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="flame06">
                    <mesh
                      name="flame06_phong2_0"
                      geometry={nodes.flame06_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="flame07" scale={[1, 1, 1.06]}>
                    <mesh
                      name="flame07_phong2_0"
                      geometry={nodes.flame07_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="flame08" scale={[1, 1, 1.12]}>
                    <mesh
                      name="flame08_phong2_0"
                      geometry={nodes.flame08_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="flame09" scale={[1, 1, 1.14]}>
                    <mesh
                      name="flame09_phong2_0"
                      geometry={nodes.flame09_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="flame10">
                    <mesh
                      name="flame10_phong2_0"
                      geometry={nodes.flame10_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="flame11">
                    <mesh
                      name="flame11_phong2_0"
                      geometry={nodes.flame11_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="flame12">
                    <mesh
                      name="flame12_phong2_0"
                      geometry={nodes.flame12_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="flame13">
                    <mesh
                      name="flame13_phong2_0"
                      geometry={nodes.flame13_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="flame14">
                    <mesh
                      name="flame14_phong2_0"
                      geometry={nodes.flame14_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="flame16">
                    <mesh
                      name="flame16_phong2_0"
                      geometry={nodes.flame16_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="flame15">
                    <mesh
                      name="flame15_phong2_0"
                      geometry={nodes.flame15_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="flame17">
                    <mesh
                      name="flame17_phong2_0"
                      geometry={nodes.flame17_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      {/* 오브젝트 나타나는 지점 */}
      <group ref={eventSpot}>
        <mesh
          rotation={[-0.5 * Math.PI, 0, -0.2 * Math.PI]}
          receiveShadow
          position={[38, 0.01, -68]}
        >
          {/* <planeBufferGeometry attach="geometry" args={[35, 25]} /> */}
          <planeGeometry attach="geometry" args={[35, 25]} />
          <meshBasicMaterial color="blue" opacity={0} transparent />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
