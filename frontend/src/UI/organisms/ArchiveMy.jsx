import { useState, useEffect } from "react";

import { Avatar, AvatarGroup } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

import { FiSettings } from "react-icons/fi";
import { BiLogIn, BiPencil } from "react-icons/bi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import EditArchiveModal from "./EditArchiveModal";
import SettingArchiveModal from "./SettingArchiveModal";

function ArchiveMy() {
  const [archiveList, setArchiveList] = useState([]);
  // TODO: 이미지 저장용 변수 나중에 지우기
  const [profileImg] = useState(
    "https://images.unsplash.com/photo-1639503611585-1054af5dbfab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  );
  // TODO:
  const enterArchive = (archiveId) => {
    // TODO: 아카이브로 이동
    console.log(archiveId, "이동");
  };
  const editArchive = (archiveId) => {
    // TODO: 아카이브 이름 설정 변겅
    console.log(archiveId, "수정");
  };
  const settingArchive = (archiveId) => {
    // TODO: 아카이브 공유 관리
    console.log(archiveId, "관리");
  };
  const bookmarkTrigger = (archive, index) => {
    // TODO: 즐겨찾기 상태 변경 보내기
    setArchiveList((list) => {
      return [...list].filter((item, idx) => {
        if (idx === index) {
          item.bookmarks = !item.bookmarks;
        }
        return item;
      });
    });
  };

  useEffect(() => {
    // TODO: 내 아카이브 목록 가져오기
    console.log("아카이브 목록 가져옴");
    setArchiveList((list) => [
      {
        archiveId: "a1",
        title: "zl존윤sun의 메인 아카이브",
        description: "지존윤선의 아카이브에 초대하노라",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: profileImg,
          },
          {
            nickname: "name",
            avatar: profileImg,
          },
          {
            nickname: "name",
            avatar: profileImg,
          },
          {
            nickname: "name",
            avatar: profileImg,
          },
          {
            nickname: "name",
            avatar: profileImg,
          },
          {
            nickname: "name",
            avatar: profileImg,
          },
          {
            nickname: "name",
            avatar: profileImg,
          },
          {
            nickname: "name",
            avatar: profileImg,
          },
          {
            nickname: "name",
            avatar: profileImg,
          },
          {
            nickname: "name",
            avatar: profileImg,
          },
          {
            nickname: "name",
            avatar: profileImg,
          },
          {
            nickname: "name",
            avatar: profileImg,
          },
          {
            nickname: "name",
            avatar: profileImg,
          },
          {
            nickname: "name",
            avatar: profileImg,
          },
        ],
      },
      {
        archiveId: "a3",
        title: "나의 여행 일지 (1)",
        description: "제주도 한 달 살기 기록 아카이브",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: profileImg,
          },
        ],
      },
      {
        archiveId: "a2",
        title: "나의 여행 일지 (2)",
        description: "놀러가요 동물의 숲",
        level: 1,
        bookmarks: true,
        members: [
          {
            nickname: "String",
            avatar: profileImg,
          },
        ],
      },
      {
        archiveId: "a1",
        title: "zl존윤sun의 메인 아카이브",
        description: "지존윤선의 아카이브에 초대하노라",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: profileImg,
          },
        ],
      },
      {
        archiveId: "a3",
        title: "나의 여행 일지 (1)",
        description: "제주도 한 달 살기 기록 아카이브",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: profileImg,
          },
        ],
      },
      {
        archiveId: "a2",
        title: "나의 여행 일지 (2)",
        description: "놀러가요 동물의 숲",
        level: 1,
        bookmarks: true,
        members: [
          {
            nickname: "String",
            avatar: profileImg,
          },
        ],
      },
      {
        archiveId: "a1",
        title: "zl존윤sun의 메인 아카이브",
        description: "지존윤선의 아카이브에 초대하노라",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: profileImg,
          },
        ],
      },
      {
        archiveId: "a3",
        title: "나의 여행 일지 (1)",
        description: "제주도 한 달 살기 기록 아카이브",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: profileImg,
          },
        ],
      },
      {
        archiveId: "a2",
        title: "나의 여행 일지 (2)",
        description: "놀러가요 동물의 숲",
        level: 1,
        bookmarks: true,
        members: [
          {
            nickname: "String",
            avatar: profileImg,
          },
        ],
      },
      {
        archiveId: "a1",
        title: "zl존윤sun의 메인 아카이브",
        description: "지존윤선의 아카이브에 초대하노라",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: profileImg,
          },
        ],
      },
      {
        archiveId: "a1",
        title: "zl존윤sun의 메인 아카이브",
        description: "지존윤선의 아카이브에 초대하노라",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: profileImg,
          },
        ],
      },
      {
        archiveId: "a1",
        title: "zl존윤sun의 메인 아카이브",
        description: "지존윤선의 아카이브에 초대하노라",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: profileImg,
          },
        ],
      },
    ]);
  }, []);

  return (
    <div className="text-base2">
      <div className="bg-white rounded-3xl w-full h-full pt-5 pb-6 flex justify-center">
        <div className="w-[calc(100%-50px)] overflow-auto scrollbar-hide">
          {archiveList.map((archive, index) => {
            return (
              <div key={`archive-${index}`}>
                <div className="flex items-center justify-between px-2 py-1 mx-4">
                  <div className="flex">
                    {/* 즐겨찾기 */}
                    <button
                      onClick={() => {
                        bookmarkTrigger(archive, index);
                      }}
                      className="w-14 text-extra1"
                    >
                      {archive.bookmarks ? (
                        <AiFillStar size={18} />
                      ) : (
                        <AiOutlineStar size={18} />
                      )}
                    </button>
                    {/* 아카이브 이름 */}
                    <p className="text-sm font-bold overflow-hidden text-ellipsis line-clamp-1 md:w-44 sm:w-36">
                      {archive.title}
                    </p>
                  </div>
                  {/* 아카이브 설명 */}
                  <p className="text-sm text-zinc-500 overflow-hidden text-ellipsis line-clamp-1 md:w-56 sm:w-52">
                    {archive.description}
                  </p>
                  {/* 들어가있는 멤버 */}
                  <div className="w-40">
                    <AvatarGroup size="sm" max={5} spacing="-2">
                      {archive.members.map((member, index) => {
                        return (
                          <Avatar
                            name="profileImg"
                            src={member.avatar}
                            key={`avatar-${index}`}
                            alt={index}
                          />
                        );
                      })}
                    </AvatarGroup>
                  </div>
                  {/* 버튼들 */}
                  <div>
                    {/* 아카이브 입장 */}
                    <button
                      className="bg-main1 border-2 border-basic3 rounded-full"
                      onClick={() => {
                        enterArchive(archive.archiveId);
                      }}
                    >
                      <BiLogIn
                        size={18}
                        className="text-white m-0.5 -translate-x-0.5"
                      />
                    </button>

                    {/* 아카이브 수정 */}
                    <EditArchiveModal />

                    {/* 아카이브 권한 설정 */}
                    <SettingArchiveModal />
                  </div>
                </div>
                <Divider />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ArchiveMy;
