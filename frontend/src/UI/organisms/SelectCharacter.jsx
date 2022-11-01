import { useState } from "react";

import SelectCharacterBtn from "../atoms/SelectCharacterBtn";
import defaultImg from "../../assets/new-moon.png";

function SelectCharacter() {
  const initialData = {
    name: "",
    imgUrl: "",
  };
  const [mine, setMine] = useState(initialData);

  const [ischecked, setIschecked] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setMine(e.target.value);
    setIschecked((prev) => !prev);
  };
  return (
    <div className="text-base2">
      {/* <div>select character!</div> */}
      <div className="flex justify-between">
        {/* 캐릭터 렌더링 */}
        <div className="bg-white rounded-3xl w-[calc(96%/3)] pt-5 pb-6"></div>
        <div className="flex flex-col w-[calc(96%/3*2)] items-end">
          {/* 캐릭터 선택 창 */}
          <div className="flex flex-col bg-white rounded-3xl pb-6 w-full">
            <div className="flex justify-center items-center w-full rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-main1 to-sub1 mb-4">
              <p className="text-2xl drop-shadow font-bold my-4 text-white">
                캐릭터 선택
              </p>
            </div>
            <div className="grid grid-cols-8 gap-3 justify-items-center mx-4">
              {/* // FIXME: 캐릭터 선택 라디오 버튼 */}
              {characters.map((character, idx) => (
                <label key={`character + ${idx}`}>
                  <input
                    type="radio"
                    className="hidden"
                    value={character.name}
                    onChange={handleChange}
                  />
                  <SelectCharacterBtn
                    checked={mine === `${character.name}`}
                    imgUrl={character.imgUrl}
                    name={character.name}
                  />
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
          <button className="text-white font-bold bg-gradient-to-t from-extra1 to-extra2 text-xl w-fit px-12 py-2 mt-4 border rounded-3xl">
            <span className="drop-shadow-xl">적용하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}

const characters = [
  {
    name: 1,
    imgUrl: defaultImg,
  },
  {
    name: 2,
    imgUrl: defaultImg,
  },
  {
    name: 3,
    imgUrl: defaultImg,
  },
  {
    name: 4,
    imgUrl: defaultImg,
  },
  {
    name: 5,
    imgUrl: defaultImg,
  },
  {
    name: 6,
    imgUrl: defaultImg,
  },
  {
    name: 7,
    imgUrl: defaultImg,
  },
  {
    name: 8,
    imgUrl: defaultImg,
  },
  {
    name: 9,
    imgUrl: defaultImg,
  },
  {
    name: 10,
    imgUrl: defaultImg,
  },
  {
    name: 11,
    imgUrl: defaultImg,
  },
  {
    name: 12,
    imgUrl: defaultImg,
  },
  {
    name: 13,
    imgUrl: defaultImg,
  },
  {
    name: 14,
    imgUrl: defaultImg,
  },
  {
    name: 15,
    imgUrl: defaultImg,
  },
  {
    name: 16,
    imgUrl: defaultImg,
  },
  {
    name: 17,
    imgUrl: defaultImg,
  },
  {
    name: 18,
    imgUrl: defaultImg,
  },
  {
    name: 19,
    imgUrl: defaultImg,
  },
  {
    name: 20,
    imgUrl: defaultImg,
  },
  {
    name: 21,
    imgUrl: defaultImg,
  },
  {
    name: 22,
    imgUrl: defaultImg,
  },
  {
    name: 23,
    imgUrl: defaultImg,
  },
  {
    name: 24,
    imgUrl: defaultImg,
  },
  {
    name: 25,
    imgUrl: defaultImg,
  },
  {
    name: 26,
    imgUrl: defaultImg,
  },
  {
    name: 27,
    imgUrl: defaultImg,
  },
  {
    name: 28,
    imgUrl: defaultImg,
  },
  {
    name: 29,
    imgUrl: defaultImg,
  },
  {
    name: 30,
    imgUrl: defaultImg,
  },
  {
    name: 31,
    imgUrl: defaultImg,
  },
  {
    name: 32,
    imgUrl: defaultImg,
  },
  {
    name: 33,
    imgUrl: defaultImg,
  },
  {
    name: 34,
    imgUrl: defaultImg,
  },
  {
    name: 35,
    imgUrl: defaultImg,
  },
  {
    name: 36,
    imgUrl: defaultImg,
  },
  {
    name: 37,
    imgUrl: defaultImg,
  },
  {
    name: 38,
    imgUrl: defaultImg,
  },
  {
    name: 39,
    imgUrl: defaultImg,
  },
  {
    name: 40,
    imgUrl: defaultImg,
  },
  // {
  //   name: 41,
  //   imgUrl: defaultImg,
  // },
  // {
  //   name: 42,
  //   imgUrl: defaultImg,
  // },
  // {
  //   name: 43,
  //   imgUrl: defaultImg,
  // },
  // {
  //   name: 44,
  //   imgUrl: defaultImg,
  // },
  // {
  //   name: 45,
  //   imgUrl: defaultImg,
  // },
  // {
  //   name: 46,
  //   imgUrl: defaultImg,
  // },
  // {
  //   name: 47,
  //   imgUrl: defaultImg,
  // },
  // {
  //   name: 48,
  //   imgUrl: defaultImg,
  // },
];

export default SelectCharacter;
