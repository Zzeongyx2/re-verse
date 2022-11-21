import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Banana(props) {
  const { nodes, materials } = useGLTF("/assets/texture_deco/banana.gltf");
  const group = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 30 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 2) / 30,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 2) / 50,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-1 + Math.sin(t / 2)) / 2,
      0.1
    );
  });

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick((prev) => !prev);
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      setClick(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [click]);
  return (
    <group {...props} dispose={null} ref={group}>
      <group
        scale={0.015}
        position={[-128, -10, -92]}
        rotation={[0, Math.PI / 2, 0]}
        onClick={handleClick}
        onPointerOver={(e) => {
          document.getElementsByTagName("body")[0].style.cursor = "pointer";
        }}
        onPointerLeave={(e) => {
          document.getElementsByTagName("body")[0].style.cursor = "";
        }}
      >
        <group position={[0, 172.29, 6.46]}>
          <group position={[-1.25, 86.97, -1.97]}>
            <mesh
              geometry={nodes.BezierCircle_Lips_0.geometry}
              material={materials.Lips}
            />
          </group>
          <group position={[-33.71, 48.81, -11.08]}>
            <mesh
              geometry={nodes.BezierCurve_Hand_0.geometry}
              material={materials.Hand}
            />
          </group>
          <group position={[32.74, 48.81, -11.08]}>
            <mesh
              geometry={nodes.BezierCurve001_Hand_0.geometry}
              material={materials.Hand}
            />
          </group>
          <group position={[-30.07, -29.26, 35.26]}>
            <mesh
              geometry={nodes.BezierCurve002_Hand_0.geometry}
              material={materials.Hand}
            />
          </group>
          <group position={[27.1, -29.26, 35.83]}>
            <mesh
              geometry={nodes.BezierCurve003_Hand_0.geometry}
              material={materials.Hand}
            />
          </group>
          <mesh
            geometry={nodes["Cylinder001_BANANANA!001_0"].geometry}
            material={materials["BANANANA.001"]}
          >
            {click && (
              <Html
                className="w-24 bg-blue-200 font-bold text-xs text-center border-double border-2 border-extra2 rounded-lg font-diary pt-1"
                occlude
                position={[-1, 300, 244]}
                scale={0.5}
              >
                <div className="annotation">음악 바꿔줘!</div>
              </Html>
            )}
          </mesh>
          <group position={[-9.47, 208.49, -55.84]}>
            <group position={[-0.96, 23.93, -6.35]}>
              <group position={[-0.14, 0.05, -1.09]}>
                <group position={[3.44, 111.13, 0]}>
                  <mesh
                    geometry={nodes.Circle_Metal_0.geometry}
                    material={materials.Metal}
                  />
                </group>
                <group position={[-0.14, 30.46, 0]}>
                  <group position={[0.13, 25.35, 0]}>
                    <mesh
                      geometry={nodes.Plane001_Metal003_0.geometry}
                      material={materials["Metal.003"]}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Plane_Metal002_0.geometry}
                    material={materials["Metal.002"]}
                  />
                </group>
                <mesh
                  geometry={nodes.Torus_Metal001_0.geometry}
                  material={materials["Metal.001"]}
                />
              </group>
              <mesh
                geometry={nodes["Cube_BANANANA!002_0"].geometry}
                material={materials["BANANANA.002"]}
              />
            </group>
            <mesh
              geometry={nodes["Cylinder004_BANANANA-BLACK_0"].geometry}
              material={materials["BANANANA-BLACK"]}
            />
            <mesh
              geometry={nodes["Cylinder002_BANANANA!001_0"].geometry}
              material={materials["BANANANA.001"]}
            />
          </group>
          <group position={[-18.69, 131.7, -13.53]}>
            <group position={[5.76, 11.01, 1.89]}>
              <mesh
                geometry={nodes["Cube001_����������_0"].geometry}
                material={materials.material}
              />
            </group>
            <mesh
              geometry={nodes.Cylinder003_Eyes_blacj_0.geometry}
              material={materials.Eyes_blacj}
            />
            <mesh
              geometry={nodes.Cylinder003_Eyes_0.geometry}
              material={materials.Eyes}
            />
          </group>
          <group position={[19.77, 133.11, -12.06]}>
            <group position={[-5.68, 8.44, 1.37]}>
              <mesh
                geometry={nodes["Cube002_����������_0"].geometry}
                material={materials.material}
              />
            </group>
            <mesh
              geometry={nodes.Cylinder005_Eyes_blacj_0.geometry}
              material={materials.Eyes_blacj}
            />
            <mesh
              geometry={nodes.Cylinder005_Eyes_0.geometry}
              material={materials.Eyes}
            />
          </group>
          <mesh
            geometry={nodes["Cylinder_BANANANA!003_0"].geometry}
            material={materials["BANANANA.003"]}
          />
          <mesh
            geometry={nodes["Cylinder_BANANANA!_0"].geometry}
            material={materials.BANANANA}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/banana.gltf");
