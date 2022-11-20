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
  Avatar,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { FiSettings } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { imageForm, s3Path } from "../../api";
import {
  createArchiveMember,
  deleteArchiveMember,
  getFriendList,
} from "../../api/friend";
import { getArchiveList } from "../../api/archive";
import { setMyArchiveList } from "../../modules/archive";
import { setFriendList } from "../../modules/friend";

// TODO: 기존 내용 가져와야 함
function SettingArchiveModal({ archive }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const friendList = useSelector((state) => state.friend.friendList);
  const dispatch = useDispatch();

  // nickname search
  const [findNickname, setFindNickname] = useState("");
  const handleChangeNickname = (e) => {
    setFindNickname(e.target.value);
  };
  useEffect(() => {
    settingFriendList();
  }, []);
  const settingFriendList = async () => {
    await getFriendList(getFriendSuccess, getFriendFail);
  };

  const getFriendSuccess = (res) => {
    dispatch(setFriendList(res.data.friendList));
  };
  const getFriendFail = (error) => {
    console.log(error);
  };
  const shareMember = async (nickname) => {
    await createArchiveMember(
      archive.archiveId,
      nickname,
      editMemberSuccess,
      editMemberFail
    );
  };
  const deleteMember = async (nickname) => {
    await deleteArchiveMember(
      archive.archiveId,
      nickname,
      editMemberSuccess,
      editMemberFail
    );
  };
  const editMemberSuccess = (res) => {
    getList();
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
              {/* 친구중에 아직 공유를 안한 친구들 */}
              <div className="border-2 border-[#d9d9d9] rounded-lg h-96 w-full overflow-hidden scrollbar-hide py-2">
                {friendList.length > 0 &&
                  friendList
                    .filter((logo) => {
                      for (
                        let index = 0;
                        index < archive.members.length;
                        index++
                      ) {
                        const element = archive.members[index];
                        if (logo.nickname === element.nickname) {
                          return;
                        }
                      }
                      if (findNickname.trim() === "") {
                        return logo;
                      } else if (logo.nickname.includes(findNickname)) {
                        return logo;
                      }
                    })
                    .map((info, idx) => {
                      return (
                        <div
                          key={`setting-${idx}`}
                          className="flex items-center justify-between px-2 p py-1.5 mx-4"
                        >
                          <div className="flex items-center">
                            {/* 친구 프로필 사진 */}
                            <Avatar
                              src={s3Path + info.avatar + imageForm}
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

                          <button
                            onClick={() => {
                              shareMember(info.nickname);
                            }}
                            className="bg-main1 text-white text-sm py-1 px-1.5 rounded-md ml-10"
                          >
                            공유하기
                          </button>
                        </div>
                      );
                    })}
                {/* 친구중에 이미 공유를 한 친구들 */}
                {friendList.length > 0 &&
                  friendList
                    .filter((logo) => {
                      for (
                        let index = 0;
                        index < archive.members.length;
                        index++
                      ) {
                        const element = archive.members[index];
                        if (logo.nickname === element.nickname) {
                          if (findNickname.trim() === "") {
                            return logo;
                          } else if (logo.nickname.includes(findNickname)) {
                            return logo;
                          }
                        }
                      }
                    })
                    .map((info, idx) => {
                      return (
                        <div
                          key={`setting-${idx}`}
                          className="flex items-center justify-between px-2 p py-1.5 mx-4"
                        >
                          <div className="flex items-center">
                            {/* 친구 프로필 사진 */}
                            <Avatar
                              src={s3Path + info.avatar + imageForm}
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
                          <button
                            onClick={() => {
                              deleteMember(info.nickname);
                            }}
                            className="bg-sub3 text-white text-sm py-1 px-1.5 rounded-md ml-10"
                          >
                            내보내기
                          </button>
                        </div>
                      );
                    })}
              </div>
            </FormControl>
          </ModalBody>

          <ModalFooter pt={2}>
            <button
              onClick={onClose}
              className="font-bold bg-[#d9d9d9] px-6 py-2 rounded-xl text-sm"
            >
              취소하기
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SettingArchiveModal;
