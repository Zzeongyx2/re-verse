import Navbar from "../organisms/Navbar";
import SelectCharacter from "../organisms/SelectCharacter";

function Character() {
  return (
    <div className="mt-8">
      <Navbar />
      <SelectCharacter />
      {/* <div className="text-white">this is selecting character page</div> */}
    </div>
  );
}

export default Character;
