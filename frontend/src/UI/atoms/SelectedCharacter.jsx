import CatCharacter from "../../assets/characters/CatCharacter";
import DogCharacter from "../../assets/characters/DogCharacter";
import DoveCharacter from "../../assets/characters/DoveCharacter";
import GoldfishCharacter from "../../assets/characters/GoldfishCharacter";
import MouseCharacter from "../../assets/characters/MouseCharacter";
import ParrotCharacter from "../../assets/characters/ParrotCharacter";
import PigeonCharacter from "../../assets/characters/PigeonCharacter";
import RabbitCharacter from "../../assets/characters/RabbitCharacter";
import TortoiseCharacter from "../../assets/characters/TortoiseCharacter";

function SelectedCharacter({ selectNum }) {
  return (
    <group>
      {selectNum === "1" ? <CatCharacter /> : null}
      {selectNum === "2" ? <DogCharacter /> : null}
      {selectNum === "3" ? <DoveCharacter /> : null}
      {selectNum === "4" ? <GoldfishCharacter /> : null}
      {selectNum === "5" ? <MouseCharacter /> : null}
      {selectNum === "6" ? <ParrotCharacter /> : null}
      {selectNum === "7" ? <PigeonCharacter /> : null}
      {selectNum === "8" ? <RabbitCharacter /> : null}
      {selectNum === "9" ? <TortoiseCharacter /> : null}
    </group>
  );
}

export default SelectedCharacter;
