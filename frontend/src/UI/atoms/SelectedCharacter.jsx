import CatCharacter from "../../assets/characters/CatCharacter";
import DogCharacter from "../../assets/characters/DogCharacter";
import DoveCharacter from "../../assets/characters/DoveCharacter";
import GoldfishCharacter from "../../assets/characters/GoldfishCharacter";
import MouseCharacter from "../../assets/characters/MouseCharacter";
import ParrotCharacter from "../../assets/characters/ParrotCharacter";
import PigeonCharacter from "../../assets/characters/PigeonCharacter";
import RabbitCharacter from "../../assets/characters/RabbitCharacter";
import TortoiseCharacter from "../../assets/characters/TortoiseCharacter";

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
    </group>
  );
}

export default SelectedCharacter;
