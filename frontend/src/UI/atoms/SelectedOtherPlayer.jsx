import CatAnimations from "../../assets/players/Cat_Animations";
import { useSelector, useDispatch } from "react-redux";
import DogAnimations from "../../assets/players/Dog_Animations";
import { useState } from "react";
import { useEffect } from "react";
import { useBox, useCylinder } from "@react-three/cannon";

function SelectedOtherPlayer({ destinationPoint, handleVisible, userName }) {
  const archiveList = useSelector((state) => state.archive.myArchiveList);
  const reverse = useSelector((state) => state.reverse);
  const [selectAvartar, setSelectAvatar] = useState("");

  useEffect(() => {
    // 유저 네임인 사람을 아카이브 멤버중에서 찾아서 캐릭터 찾기
    for (let index = 0; index < archiveList.length; index++) {
      const element = archiveList[index];
      if (element.archiveId === reverse.info.archiveId) {
        for (let idx = 0; idx < element.members.length; idx++) {
          const member = element.members[idx];
          if (member.nickname === userName) {
            setSelectAvatar(member.avatar);
            return;
          }
        }
        return;
      }
    }
  }, []);

  const [playerOtherCharacter] = useBox(() => ({
    mass: 1,
    args: [2, 1, 2],
    position: [destinationPoint.x, 0, destinationPoint.z],
  }));
  return (
    <group ref={playerOtherCharacter}>
      {selectAvartar === "Cat" ? (
        <DogAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Dog" ? (
        <DogAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Dove" ? (
        <DogAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Goldfish" ? (
        <DogAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Mouse" ? (
        <DogAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Parrot" ? (
        <DogAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Pigeon" ? (
        <DogAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Rabbit" ? (
        <DogAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Tortoise" ? (
        <DogAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
    </group>
  );
}

export default SelectedOtherPlayer;
