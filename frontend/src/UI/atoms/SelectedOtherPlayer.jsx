import { useSelector, useDispatch } from "react-redux";
import DogAnimations from "../../assets/players/other/OtherDogAnimations";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useBox, useCylinder } from "@react-three/cannon";
import OtherCatAnimations from "../../assets/players/other/OtherCatAnimations";
import OtherDogAnimations from "../../assets/players/other/OtherDogAnimations";
import OtherDoveAnimations from "../../assets/players/other/OtherDoveAnimations";
import OtherGoldfishAnimations from "../../assets/players/other/OtherGoldfishAnimations";
import OtherMouseAnimations from "../../assets/players/other/OtherMouseAnimations";
import OtherParrotAnimations from "../../assets/players/other/OtherParrotAnimations";
import OtherPigeonAnimations from "../../assets/players/other/OtherPigeonAnimations";
import OtherRabbitAnimations from "../../assets/players/other/OtherRabbitAnimations";
import OtherTortoiseAnimations from "../../assets/players/other/OtherTortoiseAnimations";
import OtherBelugaAnimations from "../../assets/players/other/OtherBelugaAnimations";
import OtherHareAnimations from "../../assets/players/other/OtherHareAnimations";
import OtherHuskyAnimations from "../../assets/players/other/OtherHuskyAnimations";
import OtherLynxAnimations from "../../assets/players/other/OtherLynxAnimations";
import OtherMooseAnimations from "../../assets/players/other/OtherMooseAnimations";
import OtherNarwhalAnimations from "../../assets/players/other/OtherNarwhalAnimations";
import OtherPuffinAnimations from "../../assets/players/other/OtherPuffinAnimations";
import OtherSnowLeopardAnimations from "../../assets/players/other/OtherSnowLeopardAnimations";
import OtherCougarAnimations from "../../assets/players/other/OtherCougarAnimations";

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
  const playerOtherCharacter = useRef();

  return (
    <group ref={playerOtherCharacter}>
      {selectAvartar === "Cat" ? (
        <OtherCatAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Dog" ? (
        <OtherDogAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Dove" ? (
        <OtherDoveAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Goldfish" ? (
        <OtherGoldfishAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Mouse" ? (
        <OtherMouseAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Parrot" ? (
        <OtherParrotAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Pigeon" ? (
        <OtherPigeonAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Rabbit" ? (
        <OtherRabbitAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Tortoise" ? (
        <OtherTortoiseAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Beluga" ? (
        <OtherBelugaAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Hare" ? (
        <OtherHareAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Husky" ? (
        <OtherHuskyAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Lynx" ? (
        <OtherLynxAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Moose" ? (
        <OtherMooseAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Narwhal" ? (
        <OtherNarwhalAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Puffin" ? (
        <OtherPuffinAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "SnowLeopard" ? (
        <OtherSnowLeopardAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
      {selectAvartar === "Cougar" ? (
        <OtherCougarAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
        />
      ) : null}
    </group>
  );
}

export default SelectedOtherPlayer;
