import { Toast } from "../atoms/Toast";
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

// 캐릭터 변경하는 페이지
function CharacterThree() {
  const mine = useSelector((state) => state.user.loginUser);
  const dispatch = useDispatch();
  const [ischecked, setIschecked] = useState(false);
  const [selectCharacter, setSelectCharacter] = useState("");
  const [characters, setCharacters] = useState([]);
  const handleChange = (e) => {
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
    dispatch(setLoginUser({ ...mine, avatar: selectCharacter }));
  };
  const editAvatarFail = (error) => {
    console.log(error);
  };

  return (
    <div className="w-full h-full px-5 py-2 relative flex justify-center">
      <div className="w-full text-white absolute flex justify-between px-6">
        <div>
          <div className="text-6xl font-bold">SELECT YOUR CHARACTER</div>
          <div className="text-3xl font-bold uppercase pt-2">
            {selectCharacter}
          </div>
        </div>
      </div>
      <div className="xl:h-1/5 md:h-[calc(30%)] w-[calc(100%-80px)] absolute bottom-2 z-30">
        <div className="h-[calc(96%/4)] flex items-center justify-end">
          <button
            className="text-white font-bold bg-gradient-to-t from-extra1 to-extra2 w-fit px-12 py-2 border rounded-3xl z-30"
            onClick={() => {
              clickEditBtn();
              if (characters) {
                Toast.fire({
                  icon: "success",
                  title: "캐릭터가 변경되었습니다",
                  timer: 1500,
                });
              } else {
                Toast.fire({
                  icon: "warning",
                  title: "캐릭터를 선택해 주세요",
                  timer: 1500,
                });
              }
            }}
          >
            <span className="drop-shadow-xl">적용하기</span>
          </button>
        </div>
        <div className="pt-1 xl:mt-4 h-[calc(96%/4*3)] sm:grid sm:grid-cols-9 gap-x-1 gap-y-1 justify-items-center xl:flex xl:justify-between ">
          {characters.map((character, idx) => (
            <label key={`character-${idx}`}>
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
                checked={characters[idx] === selectCharacter}
              />
            </label>
          ))}
        </div>
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
