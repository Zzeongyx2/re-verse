import { useSelector, useDispatch } from "react-redux";
import { useBox, useCylinder, useCompoundBody } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import { Box } from "./Collider.jsx";
import MyCatAnimations from "../../assets/players/my/MyCatAnimations.js";
import MyDogAnimations from "../../assets/players/my/MyDogAnimations.js";
import MyDoveAnimations from "../../assets/players/my/MyDoveAnimations.js";
import MyGoldfishAnimations from "../../assets/players/my/MyGoldfishAnimations.js";
import MyMouseAnimations from "../../assets/players/my/MyMouseAnimations.js";
import MyParrotAnimations from "../../assets/players/my/MyParrotAnimations.js";
import MyPigeonAnimations from "../../assets/players/my/MyPigeonAnimations.js";
import MyRabbitAnimations from "../../assets/players/my/MyRabbitAnimations.js";
import MyTortoiseAnimations from "../../assets/players/my/MyTortoiseAnimations.js";
import MyBelugaAnimations from "../../assets/players/my/MyBelugaAnimations.js";
import MyHareAnimations from "../../assets/players/my/MyHareAnimations.js";
import MyHuskyAnimations from "../../assets/players/my/MyHuskyAnimations.js";
import MyLynxAnimations from "../../assets/players/my/MyLynxAnimations.js";
import MyMooseAnimations from "../../assets/players/my/MyMooseAnimations.js";
import MyNarwhalAnimations from "../../assets/players/my/MyNarwhalAnimations.js";
import MyPuffinAnimations from "../../assets/players/my/MyPuffinAnimations.js";
import MySnowLeopardAnimations from "../../assets/players/my/MySnowLeopardAnimations.js";

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
          <MyCatAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Dog" ? (
          <MyDogAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Dove" ? (
          <MyDoveAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Goldfish" ? (
          <MyGoldfishAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Mouse" ? (
          <MyMouseAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Parrot" ? (
          <MyParrotAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Pigeon" ? (
          <MyPigeonAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Rabbit" ? (
          <MyRabbitAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Tortoise" ? (
          <MyTortoiseAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Beluga" ? (
          <MyBelugaAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Hare" ? (
          <MyHareAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Husky" ? (
          <MyHuskyAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Lynx" ? (
          <MyLynxAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Moose" ? (
          <MyMooseAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Narwhal" ? (
          <MyNarwhalAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "Puffin" ? (
          <MyPuffinAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
        {loginUser.avatar === "SnowLeopard" ? (
          <MySnowLeopardAnimations
            destinationPoint={destinationPoint}
            handleVisible={handleVisible}
          />
        ) : null}
      </group>
    </group>
  );
}

export default SelectedMyPlayer;
