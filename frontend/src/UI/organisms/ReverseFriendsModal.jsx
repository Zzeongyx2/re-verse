import {
  BsFillPeopleFill,
  BsSearch,
  BsArrowLeftRight,
  BsFillPlusCircleFill,
  BsFillDashCircleFill,
} from "react-icons/bs";
import { Avatar } from "@chakra-ui/react";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createArchiveMember,
  deleteArchiveMember,
  getFriendList,
} from "../../api/friend";
import { getArchiveList } from "../../api/archive";
import { setJoinArchive, setMyArchiveList } from "../../modules/archive";
import { useEffect } from "react";
import { getArchiveDetail } from "../../api/reverse";
import { setInfo } from "../../modules/reverse";
import { setFriendList } from "../../modules/friend";
import { imageForm, s3Path } from "../../api";

function ReverseFriendModal({ joinMembers }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const reverse = useSelector((state) => state.reverse);
  const friendList = useSelector((state) => state.friend.friendList);
  const joinArchive = useSelector((state) => state.archive.joinArchive);
  const loginUser = useSelector((state) => state.user.loginUser);
  const dispatch = useDispatch();
  const [findNickName, setFindNickName] = useState("");
  const [archive, setArchive] = useState();
  const findNickNameHandleChange = (e) => {
    setFindNickName(e.target.value);
  };
  useEffect(() => {
    if (reverse.info.archiveId) {
      getArchiveDetail(
        reverse.info.archiveId,
        getArchiveDetailSuccess,
        getArchiveDetailFail
      );
    }
  }, [reverse.info.archiveId]);
  useEffect(() => {
    if (archive) {
      settingFriendList();
    }
  }, [archive]);
  const settingFriendList = async () => {
    await getFriendList(getFriendSuccess, getFriendFail);
  };

  const getFriendSuccess = (res) => {
    dispatch(setFriendList(res.data.friendList));
  };
  const getFriendFail = (error) => {
    console.log(error);
  };
  const getArchiveDetailSuccess = (res) => {
    setArchive(res.data);
    dispatch(setJoinArchive(res.data));
    dispatch(
      setInfo({
        ...reverse.info,
        stuffs: res.data.stuffs,
      })
    );
  };

  const getArchiveDetailFail = (err) => {
    console.log(err);
  };

  const shareMember = async (nickname) => {
    await createArchiveMember(
      archive.id,
      nickname,
      editMemberSuccess,
      editMemberFail
    );
  };
  const deleteMember = async (nickname) => {
    await deleteArchiveMember(
      archive.id,
      nickname,
      editMemberSuccess,
      editMemberFail
    );
  };
  const editMemberSuccess = async (res) => {
    await getList();
    await getArchiveDetail(
      reverse.info.archiveId,
      getArchiveDetailSuccess,
      getArchiveDetailFail
    );
  };
  const editMemberFail = (error) => {
    console.log(error);
  };
  const getList = async () => {
    await getArchiveList(0, getArchiveListSuccess, getArchiveListFail);
  };
  const getArchiveListSuccess = (res) => {
    dispatch(setMyArchiveList(res.data.archives));
  };
  const getArchiveListFail = (error) => {
    console.log(error);
  };
  return (
    <div>
      <button
        onClick={onOpen}
        className="border-2 border-white bg-gradient-to-t from-main2 to-sub2 flex items-center rounded-full mb-2"
      >
        <BsFillPeopleFill className="text-2xl m-1.5" />
      </button>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mb={3} textAlign="center">
            친구관리
          </ModalHeader>
          <ModalCloseButton mt={1.5} />
          <ModalBody>
            <div className="flex flex-col h-[400px] justify-between">
              {/* 현재 접속중인 친구 */}
              <div className="p-2 border-2 border-basic3 rounded-lg w-full h-[calc(96%/3-24px)]">
                <p className="font-bold px-1 pt-0.5 pb-1.5">
                  현재 접속중인 친구
                </p>
                {joinArchive?.members
                  .filter((member) => {
                    for (let index = 0; index < joinMembers.length; index++) {
                      const element = joinMembers[index];
                      if (element == member.nickname) {
                        return member;
                      }
                    }
                  })
                  .map((info, idx) => {
                    return (
                      <Popover key={`isaccessed-${idx}`}>
                        <PopoverTrigger>
                          <Avatar
                            key={`isaccessed-${idx}`}
                            name={info.nickname}
                            src={s3Path + info.avatar + imageForm}
                            cursor="pointer"
                            mr="-2"
                          />
                        </PopoverTrigger>
                        <PopoverContent
                          width="fit-content"
                          color="white"
                          bg="blue.800"
                          borderColor="blue.800"
                        >
                          <PopoverArrow bg="blue.800" borderColor="blue.800" />
                          <PopoverBody fontSize="sm">
                            {info.nickname}
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    );
                  })}
              </div>

              {/* 아카이브 공유 관리 */}
              {joinArchive.members[0].nickname === loginUser.nickname && (
                <div className="p-2 mb-4 border-2 border-basic3 rounded-lg w-full h-[calc(99%/3*2)] ">
                  <p className="font-bold px-1 pt-0.5 pb-1.5 mb-1.5">
                    아카이브 공유 관리
                  </p>
                  {/* search bar */}
                  <div className="w-full flex justify-center items-center px-4 py-1.5 mb-5 border-2 border-base1/20 rounded-lg">
                    <BsSearch size={24} />
                    <input
                      onChange={findNickNameHandleChange}
                      value={findNickName}
                      type="text"
                      placeholder="닉네임을 검색하여 친구를 찾아보세요"
                      className="w-full focus:outline-none pl-3.5 text-sm"
                    />
                  </div>
                  {/* friendlist */}
                  <div className="flex justify-between">
                    {/* 공유되지 않은 친구 */}
                    <div className="w-[calc(90%/2)]">
                      <p className="bg-basic2 w-full py-1 px-2 mb-1 rounded-md">
                        공유되지 않은 친구
                      </p>
                      <div className="h-28 overflow-auto scrollbar-hide">
                        {friendList
                          .filter((info) => {
                            for (
                              let index = 0;
                              index < archive?.members.length;
                              index++
                            ) {
                              const element = archive.members[index];
                              if (info.nickname === element.nickname) {
                                return;
                              }
                            }
                            if (findNickName.trim() === "") {
                              return info;
                            } else if (info.nickname.includes(findNickName)) {
                              return info;
                            }
                          })
                          .map((info, idx) => {
                            return (
                              <div key={`isShared-${idx}`}>
                                <div className="flex items-center justify-between px-2 py-1">
                                  <Avatar
                                    size="sm"
                                    name={info.nickname}
                                    src={s3Path + info.avatar + imageForm}
                                  />
                                  <div className="font-bold overflow-hidden text-ellipsis line-clamp-1">
                                    {info.nickname}
                                  </div>
                                  <button
                                    className=""
                                    onClick={() => {
                                      shareMember(info.nickname);
                                    }}
                                  >
                                    <BsFillPlusCircleFill className="text-[#7186B2] text-lg" />
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>

                    <BsArrowLeftRight size={22} className="mt-1" />

                    {/* 공유된 친구 */}
                    <div className="w-[calc(90%/2)]">
                      <p className="bg-basic2 w-full py-1 px-2 mb-1 rounded-md">
                        공유된 친구
                      </p>
                      <div className="h-28 overflow-auto scrollbar-hide">
                        {friendList
                          .filter((info) => {
                            for (
                              let index = 0;
                              index < archive?.members.length;
                              index++
                            ) {
                              const element = archive.members[index];
                              if (info.nickname === element.nickname) {
                                if (findNickName.trim() === "") {
                                  return info;
                                } else if (
                                  info.nickname.includes(findNickName)
                                ) {
                                  return info;
                                }
                              }
                            }
                          })
                          .map((info, idx) => {
                            return (
                              <div key={`isNotShared-${idx}`}>
                                <div className="flex items-center justify-between px-2 py-1">
                                  <Avatar
                                    size="sm"
                                    name={info.nickname}
                                    src={s3Path + info.avatar + imageForm}
                                  />
                                  <div className="font-bold overflow-hidden text-ellipsis line-clamp-1">
                                    {info.nickname}
                                  </div>
                                  <button
                                    onClick={() => {
                                      deleteMember(info.nickname);
                                    }}
                                  >
                                    <BsFillDashCircleFill className="text-[#F8C67E] text-lg" />
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ReverseFriendModal;
