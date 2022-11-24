import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import { useEffect } from "react";
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
  const joinArchive = useSelector((state) => state.archive.joinArchive);
  const [selectAvartar, setSelectAvatar] = useState("");

  useEffect(() => {
    // 유저 네임인 사람을 아카이브 멤버중에서 찾아서 캐릭터 찾기
    for (let idx = 0; idx < joinArchive.members.length; idx++) {
      const member = joinArchive.members[idx];
      if (member.nickname === userName) {
        setSelectAvatar(member.avatar);
        return;
      }
    }
  }, [userName]);
  useEffect(() => {
    // 유저 네임인 사람을 아카이브 멤버중에서 찾아서 캐릭터 찾기
    for (let idx = 0; idx < joinArchive.members.length; idx++) {
      const member = joinArchive.members[idx];
      if (member.nickname === userName) {
        setSelectAvatar(member.avatar);
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
          userName={userName}
        />
      ) : null}
      {selectAvartar === "Dog" ? (
        <OtherDogAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
          userName={userName}
        />
      ) : null}
      {selectAvartar === "Dove" ? (
        <OtherDoveAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
          userName={userName}
        />
      ) : null}
      {selectAvartar === "Goldfish" ? (
        <OtherGoldfishAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
          userName={userName}
        />
      ) : null}
      {selectAvartar === "Mouse" ? (
        <OtherMouseAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
          userName={userName}
        />
      ) : null}
      {selectAvartar === "Parrot" ? (
        <OtherParrotAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
          userName={userName}
        />
      ) : null}
      {selectAvartar === "Pigeon" ? (
        <OtherPigeonAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
          userName={userName}
        />
      ) : null}
      {selectAvartar === "Rabbit" ? (
        <OtherRabbitAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
          userName={userName}
        />
      ) : null}
      {selectAvartar === "Tortoise" ? (
        <OtherTortoiseAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
          userName={userName}
        />
      ) : null}
      {selectAvartar === "Beluga" ? (
        <OtherBelugaAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
          userName={userName}
        />
      ) : null}
      {selectAvartar === "Hare" ? (
        <OtherHareAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
          userName={userName}
        />
      ) : null}
      {selectAvartar === "Husky" ? (
        <OtherHuskyAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
          userName={userName}
        />
      ) : null}
      {selectAvartar === "Lynx" ? (
        <OtherLynxAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
          userName={userName}
        />
      ) : null}
      {selectAvartar === "Moose" ? (
        <OtherMooseAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
          userName={userName}
        />
      ) : null}
      {selectAvartar === "Narwhal" ? (
        <OtherNarwhalAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
          userName={userName}
        />
      ) : null}
      {selectAvartar === "Puffin" ? (
        <OtherPuffinAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
          userName={userName}
        />
      ) : null}
      {selectAvartar === "SnowLeopard" ? (
        <OtherSnowLeopardAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
          userName={userName}
        />
      ) : null}
      {selectAvartar === "Cougar" ? (
        <OtherCougarAnimations
          destinationPoint={destinationPoint}
          handleVisible={handleVisible}
          userName={userName}
        />
      ) : null}
    </group>
  );
}

export default SelectedOtherPlayer;
