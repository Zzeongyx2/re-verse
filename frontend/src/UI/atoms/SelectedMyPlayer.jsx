import CatAnimations from "../../assets/players/Cat_Animations";
import { useSelector, useDispatch } from "react-redux";
import { useBox, useCylinder, useCompoundBody } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import { Box } from "./Collider.jsx";
function SelectedMyPlayer({ destinationPoint, handleVisible }) {
  const loginUser = useSelector((state) => state.user.loginUser);
  const playerCharacter = useRef();

  useFrame(() => {
    // console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
    // console.log(destinationPoint);
  });
  return (
    <group ref={playerCharacter} dispose={null}>
      {/* <Box destinationPoint={destinationPoint} /> */}
      <Box destinationPoint={new Vector3(5, 2, 5)} />
      <group>
        {loginUser.avatar === "Cat" ? (
          <CatAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Dog" ? (
          <CatAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Dove" ? (
          <CatAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Goldfish" ? (
          <CatAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Mouse" ? (
          <CatAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Parrot" ? (
          <CatAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Pigeon" ? (
          <CatAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Rabbit" ? (
          <CatAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Tortoise" ? (
          <CatAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
      </group>
    </group>
  );
}

export default SelectedMyPlayer;
