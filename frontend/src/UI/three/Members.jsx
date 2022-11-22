import React, { useState } from "react";
import "./members.css";

import giyeon from "../../assets/members/giyeon.jpg";
import kancho from "../../assets/members/kancho.jpg";
import wonchang from "../../assets/members/wonchang.jpg";
import yonghyeon from "../../assets/members/yonghyeon.jpg";
import yoonsunny from "../../assets/members/yoonsunny.jpg";
import yoonyoung from "../../assets/members/yoonyoung.jpg";

export default function Members() {
  const [click, setClick] = useState(-1);
  return (
    <div className="page__container">
      <div className="page__wrapper">
        <div className="rounded-md w-full h-full bg-[url('https://images.unsplash.com/photo-1650986656202-c8ceceb9b1ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80')]">
          <div className="text-center z-10 p-[1rem] flex flex-col">
            <div className="font-bold font-travel text-white text-[2rem] pb-[0.5rem]">
              WELCOME TO THE REVERSE
            </div>
            <div>
              {click === -1 && (
                <div className="w-full h-[480px]">
                  {/* <div className="w-full h-[480px]"> */}
                  {profiles.map((info, idx) => {
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setClick(idx);
                        }}
                        className="bg-white rounded-lg border-8 hover:border-main2 w-36 h-56 mx-2 my-2.5"
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
                        className=" w-full h-[480px] bg-white rounded-lg p-4"
                      >
                        <div className="w-full my-3">
                          <div className="mb-6">
                            <div className="font-travel font-bold text-[1.5rem] text-start">
                              DEVELOPER PROFILE
                            </div>
                            <div className="font-travel text-start">
                              안녕하세요, REVERSE의 {info.role}을 담당하고 있는{" "}
                              {info.name} 입니다 :)
                            </div>
                          </div>
                          <div className="mt-4 h-full flex justify-between">
                            <div className="border-4 rounded-lg">
                              <img
                                src={info.img}
                                alt={info.nickname}
                                className="rounded-md object-cover h-60 w-[180px]"
                              />
                            </div>
                            <div className="font-travel border-4 rounded-lg w-3/5 text-start p-3">
                              <div>
                                <span className="font-bold text-[1.5rem]">
                                  {info.name}
                                </span>
                                <span className="text-[1rem] pl-1.5">
                                  {info.nickname}
                                </span>
                              </div>
                              <p className="">role : {info.role}</p>
                              <p>github : {info.github}</p>
                              <p>mail : {info.mail}</p>
                              <p>comments : {info.comments}</p>
                            </div>
                          </div>
                          <div className="mt-2">
                            <button
                              onClick={() => {
                                setClick(-1);
                              }}
                              className="bg-main1 border-4 rounded-lg w-full py-[0.5rem] mt-[0.7rem] font-travel font-bold text-[1.5rem]"
                            >
                              GO BACK
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                })}
            </div>
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
    github: "github.com/wonchangPark",
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
