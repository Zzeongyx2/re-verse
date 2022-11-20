import { useState, useEffect } from "react";

import { BsSearch } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";

import { Avatar, Divider } from "@chakra-ui/react";
import { getFriendList, requestFriend, searchUser } from "../../api/friend";
import { imageForm, s3Path } from "../../api";
import { useSelector, useDispatch } from "react-redux";
import { setFriendList } from "../../modules/friend";
import { Toast } from "../atoms/Toast";

function FriendRequest() {
  const [findNickName, setFindNickName] = useState("");
  const [userList, setUserList] = useState([]);
  const loginUser = useSelector((state) => state.user.loginUser);
  const friendList = useSelector((state) => state.friend.friendList);
  const dispatch = useDispatch();

  const findNickNameHandleChange = (e) => {
    setFindNickName(e.target.value);
  };

  const friendRequest = (nickname) => {
    requestFriend(nickname, requestFriendSuccess, requestFriendFail);
  };
  const requestFriendSuccess = async (res) => {
    await settingFriendList();
  };
  const settingFriendList = async () => {
    await getFriendList(getFriendSuccess, getFriendFail);
  };

  const getFriendSuccess = (res) => {
    dispatch(setFriendList(res.data.friendList));
  };
  const getFriendFail = (error) => {
    console.log(error);
  };
  const requestFriendFail = (error) => {
    console.log(error);
  };
  useEffect(() => {
    searchUser(findNickName, searchUserSuccess, searchUserFail);
  }, [findNickName]);

  const searchUserSuccess = (res) => {
    setUserList(res.data.users);
  };
  const searchUserFail = (error) => {
    console.log(error);
  };

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
              .filter((user) => {
                if (user.nickname === loginUser.nickname) {
                  return;
                }
                for (let index = 0; index < friendList.length; index++) {
                  const friend = friendList[index];
                  if (friend.nickname === user.nickname) {
                    return;
                  }
                }
                return user;
              })
              .map((friend, index) => {
                return (
                  <div key={`userList-${index}`}>
                    <div className="flex items-center justify-between px-2 py-1">
                      <div className="flex items-center">
                        <Avatar
                          name="profileImg"
                          src={s3Path + friend.avatar + imageForm}
                          size="sm"
                        />
                        <div className="text-base1 px-3">
                          <p className="cursor-pointer text-sm font-bold">
                            {friend.nickname}
                          </p>
                          <p className="overflow-hidden text-ellipsis line-clamp-1 text-xs text-zinc-500">
                            {friend.message}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          Toast.fire({
                            icon: "success",
                            title: "친구 요청을 보냈습니다.",
                            timer: 1500,
                          });
                          friendRequest(friend.nickname);
                        }}
                      >
                        <FiPlusCircle className="text-[#3F81FB]" size={24} />
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
