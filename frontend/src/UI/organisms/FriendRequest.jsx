import { useState, useEffect } from "react";

import { BsSearch } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";

import { Avatar, Divider } from "@chakra-ui/react";
import { Box, Grid, GridItem, Input } from "@chakra-ui/react";

function FriendRequest() {
  const [findNickName, setFindNickName] = useState("");
  const [userList, setUserList] = useState([]);
  // TODO: 이미지 저장용 변수 나중에 지우기
  const [profileImg] = useState(
    "https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  );

  // TODO:
  const findNickNameHandleChange = (e) => {
    setFindNickName(e.target.value);
  };

  const friendRequest = (email) => {
    // TODO: 친구요청 하기
    console.log("친구요청", email);
  };

  useEffect(() => {
    // TODO: axios 요청으로 유저 목록 받기
    setUserList((list) => {
      return [
        ...list,
        {
          email: "email@naver.com",
          nickname: "KIN거운KAN쵸",
          avatar: profileImg,
          message: "엉망으로 살아야 해! 인생은 한 번이야!",
        },
        {
          email: "email@naver.com",
          nickname: "oO강약약강Oo",
          avatar: profileImg,
          message: "가는 말이 고우면, 얕본다.",
        },
        {
          email: "email@naver.com",
          nickname: "zl존윤sun2",
          avatar: profileImg,
          message:
            "새벽에 먹는 맥주와 치킨은 0 칼로리다.새벽에 먹는 맥주와 치킨은 0 칼로리다.새벽에 먹는 맥주와 치킨은 0 칼로리다.",
        },
      ];
    });
  }, []);

  return (
    <div className="text-base2">
      <div className="flex justify-between">
        {/* friend request */}
        <div className="bg-white rounded-3xl w-[calc(96%/2)] h-[600px] pt-5 pb-6 flex flex-col items-center">
          <div className="w-[calc(100%-70px)] flex justify-center items-center px-4 py-2 mb-3 border-2 border-base1/20 rounded-2xl">
            <BsSearch size={24} />
            <input
              type="text"
              placeholder="닉네임을 검색하여 친구를 찾아보세요"
              onChange={findNickNameHandleChange}
              value={findNickName}
              className="w-full focus:outline-none pl-3.5 text-sm"
            />
          </div>
          {/* user lifo */}
          <div className="w-[calc(100%-70px)] overflow-auto scrollbar-hide">
            {userList
              .filter((friend) => {
                if (findNickName.trim() === "") {
                  return friendRequest;
                } else if (friend.nickname.includes(findNickName)) {
                  return friend;
                }
              })
              .map((friend, index) => {
                return (
                  <div>
                    <div
                      key={index}
                      className="flex items-center justify-between px-2 py-1"
                    >
                      <div className="flex items-center">
                        <Avatar name="profileImg" src={profileImg} size="sm" />
                        <div className="text-base1 px-3">
                          <p className="cursor-pointer text-sm font-bold">
                            {friend.nickname}
                          </p>
                          <p className="overflow-hidden text-ellipsis line-clamp-1 text-xs text-zinc-500">
                            {friend.message}
                          </p>
                          {/* <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                        {friend.message}
                      </div> */}
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          friendRequest(friend.email);
                        }}
                      >
                        <FiPlusCircle className="text-[#3F81FB]" size={20} />
                      </button>
                    </div>
                    <Divider />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="bg-white rounded-3xl w-[calc(96%/2)] h-[600px] pt-5 pb-6 flex flex-col items-center justify-center">
          <p className="font-bold text-3xl mb-6">사랑~해요~</p>
          <img
            className="aspect-square rounded-full w-3/5"
            src="https://images.velog.io/images/sdp1123/post/ea263380-9ae0-4850-bd69-6af4dcf3e8e6/%EB%9A%B1%EC%9D%B41.jpg"
            alt="nothing"
          />
        </div>
      </div>
    </div>
  );
}

export default FriendRequest;
