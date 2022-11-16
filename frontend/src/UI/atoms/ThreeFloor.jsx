import { usePlane } from "@react-three/cannon";
import { MeshReflectorMaterial } from "@react-three/drei";

function ThreeFloor({ position, rotation }) {
  const [ref] = usePlane(() => ({ type: "Static", position, rotation }));
  return (
    <mesh
      ref={ref}
      receiveShadow
      scale={[300, 300, 300]}
      position={position}
      rotation={rotation}
    >
      <planeGeometry />
      <meshPhongMaterial color={"skyblue"} receiveShadow />
    </mesh>
  );
}

export default ThreeFloor;
