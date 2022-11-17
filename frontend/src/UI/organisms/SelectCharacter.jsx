import { useEffect, useState } from "react";
import { imageForm, s3Path } from "../../api";
import { editAvatar, getAvatars } from "../../api/user";

import SelectCharacterBtn from "../atoms/SelectCharacterBtn";
import CharacterThree from "./CharacterThree";
import { useSelector, useDispatch } from "react-redux";
import { setLoginUser } from "../../modules/user";

function SelectCharacter() {
  // const [mine, setMine] = useState(initialData);
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
    <div className="text-base2">
      {/* <div>select character!</div> */}
      <div className="flex justify-between">
        {/* 캐릭터 렌더링 */}
        <div className="bg-white rounded-3xl w-[calc(96%/3)] pt-5 pb-6">
          <CharacterThree animalName={selectCharacter} />
        </div>
        <div className="flex flex-col w-[calc(96%/3*2)] items-end">
          {/* 캐릭터 선택 창 */}
          <div className="flex flex-col bg-white rounded-3xl pb-6 w-full">
            <div className="flex justify-center items-center w-full rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-main1 to-sub1 mb-4">
              <p className="text-2xl drop-shadow font-bold my-4 text-white">캐릭터 선택</p>
            </div>
            <div className="grid grid-cols-8 gap-3 justify-items-center mx-4">
              {/* // FIXME: 캐릭터 선택 라디오 버튼 */}
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
                  <SelectCharacterBtn imgUrl={s3Path + character + imageForm} name={character} />
                </label>
              ))}
              {/* {characters.map((character, idx) => {
                return (
                  <label key={`character-${idx}`}>
                    <input
                      name="selected"
                      value={character.name + idx}
                      type="radio"
                      className="hidden"
                      checked={mine === `${character.name + idx}`}
                      // onChange={handleChange}
                      onChange={() => {
                        handleChange();
                        console.log(mine);
                      }}
                    />
                    <SelectCharacterBtn
                      imgUrl={character.imgUrl}
                      name={character.name}
                    />
                  </label>
                );
              })} */}
            </div>
          </div>
          <button
            className="text-white font-bold bg-gradient-to-t from-extra1 to-extra2 text-xl w-fit px-12 py-2 mt-4 border rounded-3xl"
            onClick={() => {
              clickEditBtn();
            }}
          >
            <span className="drop-shadow-xl">적용하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectCharacter;
