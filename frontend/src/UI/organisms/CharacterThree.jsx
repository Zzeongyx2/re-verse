import { OrbitControls } from "@react-three/drei/core";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageForm, s3Path } from "../../api";
import { editAvatar, getAvatars } from "../../api/user";
import { setLoginUser } from "../../modules/user";
import SelectCharacterBtn from "../atoms/SelectCharacterBtn";
import SelectedCharacter from "../atoms/SelectedCharacter";

function CharacterThree({ animalName }) {
  const mine = useSelector((state) => state.user.loginUser);
  const dispatch = useDispatch();
  const [ischecked, setIschecked] = useState(false);
  const [selectCharacter, setSelectCharacter] = useState("");
  const [characters, setCharacters] = useState([]);
  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectCharacter(e.target.value);
    setIschecked((prev) => !prev);
  };
  useEffect(() => {
    getAvatars(getAvatarsSuccess, getAvatarsFail);
    setSelectCharacter(mine.avatar);
  }, []);
  const getAvatarsSuccess = (res) => {
    setCharacters(res.data.avatars);
  };
  const getAvatarsFail = (error) => {
    console.log(error);
  };

  const clickEditBtn = () => {
    editAvatar(selectCharacter, editAvatarSuccess, editAvatarFail);
  };
  const editAvatarSuccess = (res) => {
    console.log(res);
    dispatch(setLoginUser({ ...mine, avatar: selectCharacter }));
  };
  const editAvatarFail = (error) => {
    console.log(error);
  };
  return (
    <div className="w-full h-full px-5 py-2 relative flex justify-center">
      <div className="w-full text-white absolute flex justify-between items-center px-6">
        <div className="text-6xl font-bold">SELECT YOUR CHARACTER</div>
        <div className="text-3xl font-bold uppercase pt-2">
          {selectCharacter}
        </div>
        {/* <div className="text-white absolute">hi</div> */}
      </div>
      {/* <div className="w-5/6 text-white absolute flex items-center">
        <div className="text-6xl font-bold">SELECT YOUR CHARACTER</div>
        <div className="text-4xl uppercase">{animalName}</div>
      </div> */}
      <div className="h-1/4 w-full px-6 absolute bottom-0 z-20">
        {characters.map((character, idx) => (
          <label key={`character-${idx}`}>
            {/* <label key={`character + ${idx}`}> */}
            <input
              type="radio"
              name="avatar"
              className="hidden"
              value={character}
              onChange={handleChange}
              selected={ischecked}
            />
            <SelectCharacterBtn
              imgUrl={s3Path + character + imageForm}
              name={character}
            />
          </label>
        ))}
        <button
          className="text-white font-bold bg-gradient-to-t from-extra1 to-extra2 text-xl w-fit px-12 py-2 mt-4 border rounded-3xl"
          onClick={() => {
            clickEditBtn();
          }}
        >
          <span className="drop-shadow-xl">적용하기</span>
        </button>
      </div>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [2.5, 3, 3] }}>
        <OrbitControls />
        <directionalLight intensity={0.3} />
        <ambientLight position={(10, 10, 10)} intensity={0.4} />
        <pointLight intensity={2} position={[-1, 1, 3]} color="red" />
        <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
        <pointLight intensity={2} position={[0, 3, -10]} color="white" />
        <SelectedCharacter animalName={selectCharacter} />
      </Canvas>
    </div>
  );
}

export default CharacterThree;
