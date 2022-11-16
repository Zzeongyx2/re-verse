import CatAnimations from "../../assets/players/Cat_Animations";
import { useSelector, useDispatch } from "react-redux";
import { useBox, useCylinder } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

function SelectedMyPlayer({ destinationPoint, handleVisible }) {
  const loginUser = useSelector((state) => state.user.loginUser);
  const [playerCharacter] = useBox(() => ({
    mass: 1,
    args: [2, 1, 2],
    position: [destinationPoint.x, 0, destinationPoint.z],
  }));

  // useFrame(() => {
  //   console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
  //   console.log(playerCharacter.current.position);
  // });
  return (
    <group ref={playerCharacter} dispose={null}>
      {/* <group> */}
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
  );
}

export default SelectedMyPlayer;
