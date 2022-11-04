import { OrbitControls } from "@react-three/drei/core";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { useState } from "react";
import SelectedCharacter from "../atoms/SelectedCharacter";

function CharacterThree({ characterNum }) {
  const [selectNum, setSelectNum] = useState(characterNum);
  useEffect(() => {
    setSelectNum(characterNum);
  }, [characterNum]);

  return (
    <div className="w-full h-full">
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [2.5, 3, 3] }}>
        <OrbitControls />
        <directionalLight intensity={0.3} />
        <ambientLight position={(10, 10, 10)} intensity={0.4} />
        <pointLight intensity={2} position={[-1, 1, 3]} color="red" />
        <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
        <pointLight intensity={2} position={[0, 3, -10]} color="white" />
        <SelectedCharacter selectNum={selectNum} />
      </Canvas>
    </div>
  );
}

export default CharacterThree;
