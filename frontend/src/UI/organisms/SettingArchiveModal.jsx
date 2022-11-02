import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Avatar,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

import { FiSettings } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";

// TODO: 기존 내용 가져와야 함
function SettingArchiveModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // nickname search
  const [findNickname, setFindNickname] = useState("");
  const handleChangeNickname = (e) => {
    setFindNickname(e.target.value);
  };

  // 공유 안된 친구를 위에, 공유된 친구를 아래에 정렬
  friendArr.sort((a, b) => {
    if (a.isEntered && !b.isEntered) return 1;
  });

  return (
    <>
      {/* modal button */}
      <button
        onClick={onOpen}
        className="bg-basic1 border-2 border-basic3 rounded-full"
      >
        <FiSettings size={18} className="text-white m-0.5" />
      </button>

      {/* create archive modal */}
      <Modal isOpen={isOpen} onClose={onClose} size={"3xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mb={4} textAlign="center">
            아카이브 권한 설정
          </ModalHeader>
          <ModalCloseButton mt={1.5} />
          <ModalBody className="">
            {/* search */}
            <div className="border-2 rounded-lg border-[#d9d9d9] flex justify-center items-center px-4 py-2 mb-3">
              <BsSearch size={24} />
              <input
                onChange={handleChangeNickname}
                value={findNickname}
                type="text"
                placeholder="닉네임을 검색하여 친구를 찾아보세요"
                className="w-full focus:outline-none pl-3.5"
              />
            </div>
            {/* friend info */}
            <FormControl>
              {friendArr.length && (
                <div className="border-2 border-[#d9d9d9] rounded-lg h-96 w-full overflow-hidden scrollbar-hide py-2">
                  {friendArr
                    .filter((logo) => {
                      if (findNickname.trim() === "") {
                        console.log(logo);
                        return logo;
                      } else if (logo.nickname.includes(findNickname)) {
                        return logo;
                      }
                    })
                    .map((info, idx) => {
                      // {friendArr.map((info, idx) => {
                      return (
                        <div
                          key={`setting-${idx}`}
                          className="flex items-center justify-between px-2 p py-1.5 mx-4"
                        >
                          <div className="flex items-center">
                            {/* 친구 프로필 사진 */}
                            <Avatar
                              src={info.profileImg}
                              name={info.nickname}
                              size="sm"
                            />
                            {/* 친구 닉네임 */}
                            <p className="text-sm font-bold overflow-hidden text-ellipsis line-clamp-1 w-40 ml-3">
                              {info.nickname}
                            </p>
                          </div>
                          {/* 친구 상태 메세지 */}
                          <p className="overflow-hidden text-ellipsis line-clamp-1 text-sm text-zinc-500 w-60">
                            {info.message}
                          </p>
                          {info.isEntered && (
                            <button className="bg-sub3 text-white text-sm py-1 px-1.5 rounded-md ml-10">
                              내보내기
                            </button>
                          )}
                          {!info.isEntered && (
                            <button className="bg-main1 text-white text-sm py-1 px-1.5 rounded-md ml-10">
                              공유하기
                            </button>
                          )}
                        </div>
                      );
                    })}
                </div>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter pt={2}>
            <button
              onClick={onClose}
              className="font-bold bg-[#d9d9d9] px-6 py-2 rounded-xl text-sm mx-3"
            >
              취소하기
            </button>
            <button
              onClick={() => {
                // handleArchiveSubmit();
                onClose();
              }}
              className="font-bold bg-extra1 px-6 py-2 rounded-xl text-sm"
            >
              생성하기
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const friendArr = [
  {
    profileImg:
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    nickname: "이세계의최강자",
    message: "덤벼라.",
    isEntered: false,
  },
  {
    profileImg:
      "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    nickname: "졸리다말고잠온다",
    message: "맨날맨날잠온다",
    isEntered: false,
  },
  {
    profileImg:
      "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    nickname: "정윤엉",
    message: "어엉",
    isEntered: false,
  },
  {
    profileImg:
      "https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    nickname: "action가면zz6구",
    message: "짱구 짱",
    isEntered: true,
  },
  {
    profileImg:
      "https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    nickname: "닉네임",
    message: "메세지",
    isEntered: true,
  },
  {
    profileImg:
      "https://images.unsplash.com/photo-1645655892437-c5149679d223?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    nickname: "내이름",
    message: "내 메세지",
    isEntered: true,
  },
  {
    profileImg:
      "https://images.unsplash.com/photo-1611991687319-5dabaabde43a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    nickname: "벌써두시사십일분",
    message:
      "시간너무빠른거아니냐고 진짜 나는 왜이렇게 시간이 빠르게 가는지 모르겠다고 진짜 몰라잉",
    isEntered: true,
  },
  {
    profileImg:
      "https://images.unsplash.com/photo-1526297003708-f5a1c2c9c6e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    nickname: "ㅌrRock천4",
    message: "나 서울대 5반 일찐임",
    isEntered: true,
  },
];

export default SettingArchiveModal;
