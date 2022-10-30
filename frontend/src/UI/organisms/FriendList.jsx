import { useState, useEffect } from "react";

import { BsSearch } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi";

import { Avatar } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

function FriendList() {
  // temporary data
  // TODO: 이미지 저장용 변수 나중에 지우기
  const [profileImg] = useState(
    "https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2592&q=80"
  );

  // TODO:
  const [findNickName, setFindNickName] = useState("");
  const [friendList, setFriendList] = useState([]);
  const [archiveList, setArchiveList] = useState([]);
  const [selectFriend, setSelectFriend] = useState({
    email: "",
    nickname: "",
    avatar: "",
    message: "",
  });
  const [rightTitle, setRightTitle] = useState("");

  const findNickNameHandleChange = (e) => {
    setFindNickName(e.target.value);
  };

  const friendDelete = (email) => {
    // TODO: 친구삭제 하기
    console.log("친구삭제", email);
  };

  const clickNickname = (friend) => {
    setSelectFriend(friend);
    setRightTitle(`나와함께하는 '${friend.nickname}'의 아카이브`);
  };

  const enterArchive = (archiveId) => {
    // TODO: 아카이브로 이동
    console.log(archiveId, "이동");
  };

  const archiveDelete = (archiveId) => {
    // TODO: 공유된 아카이브 삭제
    console.log(archiveId, "삭제");
  };

  useEffect(() => {
    // TODO: axios 요청으로 친구 목록 받기
    setFriendList((list) => {
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
    if (friendList.length > 0) {
      setSelectFriend(friendList[0]);
      setRightTitle(`나와함께하는 '${friendList[0].nickname}'의 아카이브`);
    } else {
      setRightTitle("함께하는 친구가 없습니다");
    }
  }, []);

  // FIXME: 처음에는 빈간이였다가, 나중에 친구 이름 눌렀을 때 오른쪽 화면에 보여야 함!
  useEffect(() => {
    // TODO: 선택 유저 바뀔때마다 아카이브 목록 가져오기
    console.log(selectFriend.nickname, "아카이브 목록 가져옴");
    setArchiveList([
      {
        archiveId: "a1",
        title: "놀러와요 KAN쵸월드",
        description: "하루에 3번, 3분씩 3개의 칸쵸를 먹자",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: "aaa",
          },
        ],
      },
      {
        archiveId: "a2",
        title: "놀러와요 KAN쵸월드 (2)",
        description: "하루에 6번, 6분씩 6개의 칸쵸를 먹자",
        level: 1,
        bookmarks: true,
        members: [
          {
            nickname: "String",
            avatar: "112",
          },
        ],
      },
    ]);
  }, [selectFriend]);

  return (
    <div className="text-base2">
      {/* friend list */}
      <div className="flex justify-between">
        <div className="bg-white rounded-3xl w-[calc(96%/2)] h-[600px] pt-5 pb-6 flex flex-col items-center">
          {/* search */}
          <div className="w-[calc(100%-70px)] flex justify-center items-center px-4 py-2 mb-3 border-2 border-base1/20 rounded-2xl">
            <BsSearch size={24} />
            <input
              onChange={findNickNameHandleChange}
              value={findNickName}
              type="text"
              placeholder="닉네임을 검색하여 친구를 찾아보세요"
              className="w-full focus:outline-none pl-3.5 text-sm"
            />
          </div>
          {/* friend info */}
          <div className="w-[calc(100%-70px)] overflow-auto scrollbar-hide">
            {friendList
              .filter((friend) => {
                if (findNickName.trim() === "") {
                  return friend;
                } else if (friend.nickname.includes(findNickName)) {
                  return friend;
                }
              })
              .map((friend, index) => {
                return (
                  // <div key={index}>
                  <div>
                    <div
                      key={index}
                      className="flex items-center justify-between px-2 py-1"
                    >
                      <div className="flex items-center">
                        {/* <img src={friend.avatar} alt={friend.nickname} /> */}
                        <Avatar name="profileImg" src={profileImg} size="sm" />
                        <div className="text-base1 px-3">
                          <p
                            onClick={() => {
                              clickNickname(friend);
                            }}
                            className="cursor-pointer text-sm font-bold"
                          >
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
                          friendDelete(friend.email);
                        }}
                      >
                        <FiMinusCircle className="text-sub3" size={20} />
                      </button>
                      {/* </div> */}
                    </div>
                    <Divider />
                  </div>
                );
              })}
          </div>
        </div>
        {/* archive list */}
        <div className="bg-white rounded-3xl w-[calc(96%/2)] h-[600px] pt-5 pb-6 flex flex-col items-center">
          {/* <div className="bg-white rounded-3xl w-[calc(96%/2)] h-full pt-5 pb-6 flex flex-col items-center"> */}
          <div className="w-[calc(100%-50px)] text-xl font-bold mb-2">
            <p className="mt-2 mb-2 mx-2 px-2.5">{rightTitle}</p>
            <Divider />
          </div>
          <div className="w-[calc(100%-50px)] overflow-auto scrollbar-hide">
            {archiveList.map((archive, index) => {
              return (
                <div>
                  <div
                    key={index}
                    className="flex items-center justify-between px-2 py-1"
                  >
                    <div className="text-base1 px-3">
                      <p className="text-sm font-bold">{archive.title}</p>
                      <p className="text-xs overflow-hidden text-ellipsis line-clamp-1 text-zinc-500">
                        {archive.description}
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          enterArchive(archive.archiveId);
                        }}
                        className="bg-main1 border-2 border-basic3 rounded-full mx-1.5"
                      >
                        <BiLogIn
                          size={14}
                          className="text-white m-0.5 -translate-x-0.5"
                        />
                      </button>
                      <button
                        onClick={() => {
                          archiveDelete(archive.archiveId);
                        }}
                        className="bg-sub3 border-2 border-basic3 rounded-full"
                      >
                        <HiOutlineTrash
                          size={14}
                          className="text-white m-0.5"
                        />
                      </button>
                    </div>
                  </div>
                  <Divider />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendList;
