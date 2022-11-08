import { useState, useEffect } from "react";

import { BsSearch } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi";

import { Avatar } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import {
  deleteFriend,
  getFriendArchiveList,
  getFriendList,
} from "../../api/friend";
import { imageForm, s3Path } from "../../api";

function FriendList() {
  const [findNickName, setFindNickName] = useState("");
  const [friendList, setFriendList] = useState([]);
  const [archiveList, setArchiveList] = useState([]);
  const [selectFriend, setSelectFriend] = useState();
  const [rightTitle, setRightTitle] = useState("");

  const findNickNameHandleChange = (e) => {
    setFindNickName(e.target.value);
  };

  const friendDelete = (nickname) => {
    deleteFriend(nickname, deleteFriendSuccess, deleteFriendFail);
    console.log("친구삭제", nickname);
  };
  const deleteFriendSuccess = (res) => {
    console.log(res);
  };
  const deleteFriendFail = (error) => {
    console.log(error);
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
    getFriendList(getFriendSuccess, getFriendFail);
  }, []);

  const getFriendSuccess = (res) => {
    console.log(res);
    setFriendList(res.data.friendList);
  };
  const getFriendFail = (error) => {
    console.log(error);
  };

  useEffect(() => {
    getFriendArchiveList(
      selectFriend.nickname,
      getFriendArchiveListSuccess,
      getFriendArchiveListFail,
    );
    console.log(selectFriend?.nickname, "아카이브 목록 가져옴");
  }, [selectFriend]);
  const getFriendArchiveListSuccess = (res) => {
    setArchiveList(res.data.archives);
    console.log(res);
  };
  const getFriendArchiveListFail = (error) => {
    console.log(error);
  };
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
                  <div key={`friend-${index}`}>
                    <div className="flex items-center justify-between px-2 py-1">
                      <div className="flex items-center">
                        {/* <img src={friend.avatar} alt={friend.nickname} /> */}
                        <Avatar
                          name="profileImg"
                          src={s3Path + friend.avatar + imageForm}
                          size="sm"
                        />
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
                        <FiMinusCircle className="text-sub3" size={24} />
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
        {selectFriend ? (
          <div className="bg-white rounded-3xl w-[calc(96%/2)] h-[600px] pt-5 pb-6 flex flex-col items-center">
            {/* <div className="bg-white rounded-3xl w-[calc(96%/2)] h-full pt-5 pb-6 flex flex-col items-center"> */}
            <div className="w-[calc(100%-50px)] text-xl font-bold mb-2">
              <p className="mt-2 mb-2 mx-2 px-2.5">{rightTitle}</p>
              <Divider />
            </div>
            <div className="w-[calc(100%-50px)] overflow-auto scrollbar-hide">
              {archiveList.map((archive, index) => {
                return (
                  <div key={`archiveList-${index}`}>
                    <div className="flex items-center justify-between px-2 py-1">
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
                            size={18}
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
                            size={18}
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
        ) : (
          <div className="bg-white rounded-3xl w-[calc(96%/2)] h-[600px] pt-5 pb-6 flex flex-col items-center justify-center">
            <p className="font-bold text-3xl mb-6">사랑~해요~</p>
            <img
              className="aspect-square rounded-full w-3/5"
              src="https://images.velog.io/images/sdp1123/post/ea263380-9ae0-4850-bd69-6af4dcf3e8e6/%EB%9A%B1%EC%9D%B41.jpg"
              alt="nothing"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default FriendList;
