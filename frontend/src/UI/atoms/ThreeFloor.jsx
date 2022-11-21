import { usePlane } from "@react-three/cannon";

function ThreeFloor({ position, rotation }) {
  const [ref] = usePlane(() => ({ type: "Static", position, rotation }));
  return (
    <mesh
      ref={ref}
      receiveShadow
      scale={[300, 300, 300]}
      position={position}
      rotation={rotation}
      name={"plane"}
    >
      <planeGeometry />
      <meshPhongMaterial color={"skyblue"} receiveShadow />
    </mesh>
  );
}

export default ThreeFloor;
