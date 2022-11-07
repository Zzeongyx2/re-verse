import {
  BsFillPeopleFill,
  BsSearch,
  BsArrowLeftRight,
  BsFillPlusCircleFill,
  BsFillDashCircleFill,
} from "react-icons/bs";
import { Avatar, AvatarGroup } from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch,
  useDisclosure,
} from "@chakra-ui/react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { useState } from "react";

function ReverseFriendModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  const [findNickName, setFindNickName] = useState("");
  const findNickNameHandleChange = (e) => {
    setFindNickName(e.target.value);
  };
  return (
    <div>
      <button
        onClick={onOpen}
        className="bg-white flex items-center rounded-full"
      >
        <BsFillPeopleFill className="text-2xl m-1.5" />
      </button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
        // scrollBehavior={scrollBehavior}
        isCentered
      >
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
                {friendArr.map((info, idx) => {
                  return (
                    info.isAccessed && (
                      <Popover key={`isaccessed-${idx}`}>
                        <PopoverTrigger>
                          <Avatar
                            key={`isaccessed-${idx}`}
                            name={info.nickname}
                            src={info.imgUrl}
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
                    )
                  );
                })}
              </div>

              {/* 아카이브 공유 관리 */}
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
                      {friendArr
                        .filter((info) => {
                          if (findNickName.trim() === "") {
                            return info;
                          } else if (info.nickname.includes(findNickName)) {
                            return info;
                          }
                        })
                        .map((info, idx) => {
                          return (
                            !info.isShared && (
                              <div key={`isShared-${idx}`}>
                                <div className="flex items-center justify-between px-2 py-1">
                                  <Avatar
                                    size="sm"
                                    name={info.nickname}
                                    src={info.imgUrl}
                                  />
                                  <div className="font-bold overflow-hidden text-ellipsis line-clamp-1">
                                    {info.nickname}
                                  </div>
                                  <button className="">
                                    <BsFillPlusCircleFill className="text-[#7186B2] text-lg" />
                                  </button>
                                </div>
                              </div>
                            )
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
                      {friendArr
                        .filter((info) => {
                          if (findNickName.trim() === "") {
                            return info;
                          } else if (info.nickname.includes(findNickName)) {
                            return info;
                          }
                        })
                        .map((info, idx) => {
                          return (
                            info.isShared && (
                              <div key={`isNotShared-${idx}`}>
                                <div className="flex items-center justify-between px-2 py-1">
                                  <Avatar
                                    size="sm"
                                    name={info.nickname}
                                    src={info.imgUrl}
                                  />
                                  <div className="font-bold overflow-hidden text-ellipsis line-clamp-1">
                                    {info.nickname}
                                  </div>
                                  <button>
                                    <BsFillDashCircleFill className="text-[#F8C67E] text-lg" />
                                  </button>
                                </div>
                              </div>
                            )
                          );
                        })}
                    </div>
                  </div>
                </div>
                {/* {friendArr.map((info, idx) => {
                  return <div>{info.nickname}</div>;
                })} */}
              </div>
            </div>
          </ModalBody>
          {/* <ModalFooter></ModalFooter> */}
        </ModalContent>
      </Modal>
    </div>
  );
}

const friendArr = [
  {
    nickname: "zl존전sa",
    imgUrl:
      "https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80",
    isAccessed: true,
    isShared: true,
  },
  {
    nickname: "모에모에뀽",
    imgUrl:
      "https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    isAccessed: true,
    isShared: true,
  },
  {
    nickname: "술마시면멍멍이",
    imgUrl:
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
    isAccessed: true,
    isShared: true,
  },
  {
    nickname: "왈왈왈왈왈왈",
    imgUrl:
      "https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    isAccessed: true,
    isShared: true,
  },
  {
    nickname: "일이삼사오",
    imgUrl:
      "https://images.unsplash.com/photo-1476994230281-1448088947db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    isAccessed: false,
    isShared: true,
  },
  {
    nickname: "나는야멍멍이",
    imgUrl:
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
    isAccessed: false,
    isShared: false,
  },
  {
    nickname: "바권창바뵤",
    imgUrl:
      "https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80",
    isAccessed: false,
    isShared: false,
  },
  {
    nickname: "바나나츄크",
    imgUrl:
      "https://images.unsplash.com/photo-1476994230281-1448088947db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    isAccessed: false,
    isShared: false,
  },
  {
    nickname: "이세계의나",
    imgUrl:
      "https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    isAccessed: false,
    isShared: false,
  },
];

export default ReverseFriendModal;
