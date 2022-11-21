import CharacterThree from "./CharacterThree";

function SelectCharacter() {
  return (
    <div className="text-base2">
      <div className="rounded-3xl w-full h-[calc(100vh-200px)] border border-white">
        <CharacterThree />
      </div>
    </div>
  );
}

export default SelectCharacter;
