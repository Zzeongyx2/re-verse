import BelugaCharacter from "../../assets/characters/BelugaCharacter";
import CatCharacter from "../../assets/characters/CatCharacter";
import DogCharacter from "../../assets/characters/DogCharacter";
import DoveCharacter from "../../assets/characters/DoveCharacter";
import GoldfishCharacter from "../../assets/characters/GoldfishCharacter";
import HareCharacter from "../../assets/characters/HareCharacter";
import HuskyCharacter from "../../assets/characters/HuskyCharacter";
import LynxCharacter from "../../assets/characters/LynxCharacter";
import MooseCharacter from "../../assets/characters/MooseCharacter";
import MouseCharacter from "../../assets/characters/MouseCharacter";
import NarwhalCharacter from "../../assets/characters/NarwhalCharacter";
import ParrotCharacter from "../../assets/characters/ParrotCharacter";
import PigeonCharacter from "../../assets/characters/PigeonCharacter";
import PuffinCharacter from "../../assets/characters/PuffinCharacter";
import RabbitCharacter from "../../assets/characters/RabbitCharacter";
import SnowLeopardCharacter from "../../assets/characters/SnowLeopardCharacter";
import TortoiseCharacter from "../../assets/characters/TortoiseCharacter";
import CougarCharacter from "../../assets/characters/Cougar_Animations";

function SelectedCharacter({ animalName }) {
  return (
    <group>
      {animalName === "Cat" ? <CatCharacter /> : null}
      {animalName === "Dog" ? <DogCharacter /> : null}
      {animalName === "Dove" ? <DoveCharacter /> : null}
      {animalName === "Goldfish" ? <GoldfishCharacter /> : null}
      {animalName === "Mouse" ? <MouseCharacter /> : null}
      {animalName === "Parrot" ? <ParrotCharacter /> : null}
      {animalName === "Pigeon" ? <PigeonCharacter /> : null}
      {animalName === "Rabbit" ? <RabbitCharacter /> : null}
      {animalName === "Tortoise" ? <TortoiseCharacter /> : null}
      {animalName === "Beluga" ? <BelugaCharacter /> : null}
      {animalName === "Hare" ? <HareCharacter /> : null}
      {animalName === "Husky" ? <HuskyCharacter /> : null}
      {animalName === "Lynx" ? <LynxCharacter /> : null}
      {animalName === "Moose" ? <MooseCharacter /> : null}
      {animalName === "Narwhal" ? <NarwhalCharacter /> : null}
      {animalName === "Puffin" ? <PuffinCharacter /> : null}
      {animalName === "SnowLeopard" ? <SnowLeopardCharacter /> : null}
      {animalName === "Cougar" ? <CougarCharacter /> : null}
    </group>
  );
}

export default SelectedCharacter;
