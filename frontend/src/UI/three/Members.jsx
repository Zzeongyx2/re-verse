import React, { useState } from "react";
import "./members.css";

import giyeon from "../../assets/members/giyeon.jpg";
import giyeonny from "../../assets/members/giyeonny.png";
import kanchoeun from "../../assets/members/kanchoeun.jpg";
import kancho from "../../assets/members/kancho.jpg";
import wonchang from "../../assets/members/wonchang.jpg";
import yonghyeon from "../../assets/members/yonghyeon.jpg";
import yoonsunny from "../../assets/members/yoonsunny.jpg";
import zzeongyx from "../../assets/members/zzeongyx.jpg";
import yoonyoung from "../../assets/members/yoonyoung.jpg";

export default function Members() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick((prev) => !prev);
  };
  return (
    <div className="page__container">
      <div className="page__wrapper">
        <div className="page__hero">
          <div className="page__image"></div>

          <div className="page__text">
            <h1 className="font-travel text-white">WELCOME TO THE REVERSE</h1>
            {click && (
              <div className="grid grid-cols-3">
                {profiles.map((info, idx) => {
                  return (
                    <button
                      onClick={handleClick}
                      key={idx}
                      className="border-8 hover:border-main2"
                    >
                      <img
                        className="w-full h-full rounded-sm object-cover"
                        src={info.img}
                        alt={info.name}
                      />
                    </button>
                  );
                })}
              </div>
            )}
            {/* {!click && } */}
          </div>
        </div>
      </div>
    </div>
  );
}

const profiles = [
  {
    name: "정기연",
    nickname: "꿀사탕소매넣기",
    role: "FE",
    img: giyeon,
    comments: "다들 자율 동안 수고 많았어!",
    github: "github.com/gi-yeon",
    mail: "giyeon3145@gmail.com",
  },
  {
    name: "박원창",
    nickname: "oO강약약강Oo",
    role: "BE",
    img: wonchang,
    comments: "더 울어라...",
    github: "https://github.com/wonchangPark",
    mail: "parkwc0213@naver.com",
  },
  {
    name: "지용현",
    nickname: "☆자유의Φㅕ신상★",
    role: "FE",
    img: yonghyeon,
    comments: "멀캠 안녕~~~",
    github: "github.com/Yong-Hyeon",
    mail: "yung5487@gmail.com",
  },
  {
    name: "조혜은",
    nickname: "KIN거운KAN쵸",
    role: "BE",
    img: kancho,
    comments: "노니야 또 노니",
    github: "github.com/kanchoeun",
    mail: "kancho1216@naver.com",
  },
  {
    name: "전윤선",
    nickname: "zl존윤sun",
    role: "FE",
    img: yoonsunny,
    comments: "왜 자?",
    github: "github.com/yoonsunny17",
    mail: "jyoonsun0217@gmail.com",
  },
  {
    name: "정윤영",
    nickname: "S2ㅉ6구천사S2",
    role: "BE",
    img: yoonyoung,
    comments: "싸피 끝 백수 시작!!",
    github: "github.com/zzeongyx2",
    mail: "dev_yuny@naver.com",
  },
];
