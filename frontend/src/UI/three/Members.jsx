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
  const [click, setClick] = useState(-1);
  return (
    <div className="page__container">
      <div className="page__wrapper">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1650986656202-c8ceceb9b1ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80')]">
          <div className="text-center z-10 p-[1rem] flex flex-col">
            <div className="font-bold text-white text-[2rem] pb-[0.5rem]">
              WELCOME TO THE REVERSE
            </div>
            <div>
              {click === -1 && (
                <div className="grid grid-cols-3 justify-items-center gap-2">
                  {profiles.map((info, idx) => {
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setClick(idx);
                        }}
                        className="bg-white rounded-lg border-8 hover:border-main2"
                      >
                        <img
                          className="w-full h-full object-cover rounded-sm"
                          src={info.img}
                          alt={info.name}
                        />
                      </button>
                    );
                  })}
                </div>
              )}
              {click > -1 &&
                profiles.map((info, idx) => {
                  if (idx === click)
                    return (
                      <div
                        key={`detail-${idx}`}
                        className="flex w-full h-[480px] bg-white rounded-lg"
                      >
                        <div className="w-2/5 m-2">
                          <img src={info.img} alt={info.nickname} />
                          <button
                            onClick={() => {
                              setClick(-1);
                            }}
                            className="bg-white"
                          >
                            GO BACK
                          </button>
                        </div>
                      </div>
                    );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="page__container">
    //   <div className="page__wrapper">
    //     <div className="page__hero">
    //       <div className="page__text">
    //         <div className="h-1/6 font-travel text-white">
    //           WELCOME TO THE REVERSE
    //         </div>
    //         <div className="h-5/6">
    //           {click === -1 && (
    //             <div className="grid grid-cols-3">
    //               {profiles.map((info, idx) => {
    //                 return (
    //                   <button
    //                     onClick={() => {
    //                       setClick(idx);
    //                     }}
    //                     key={idx}
    //                     className="border-8 hover:border-main2"
    //                   >
    //                     <img
    //                       // className="page__image"
    //                       className="w-full h-full rounded-sm object-cover"
    //                       src={info.img}
    //                       alt={info.name}
    //                     />
    //                   </button>
    //                 );
    //               })}
    //             </div>
    //           )}
    //           {click > -1 &&
    //             profiles.map((info, idx) => {
    //               if (idx === click) {
    //                 return (
    //                   <div
    //                     key={`detail-${idx}`}
    //                     className="w-full bg-white rounded-xl px-[2rem] py-[1rem]"
    //                   >
    //                     <img
    //                       className="w-full h-5/6 rounded-sm object-cover"
    //                       src={info.img}
    //                       alt=""
    //                     />
    //                     <button
    //                       onClick={() => {
    //                         setClick((prev) => -1);
    //                       }}
    //                     >
    //                       GO BACK
    //                     </button>
    //                   </div>
    //                 );
    //               }
    //             })}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
