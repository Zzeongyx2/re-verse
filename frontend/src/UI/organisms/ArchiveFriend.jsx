import { useState, useEffect } from "react";
import { BiLogIn } from "react-icons/bi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

function ArchiveFriend() {
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
  const deleteArchive = (archiveId) => {
    // TODO: 아카이브 공유 삭제
    console.log(archiveId, "나가기");
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
    // TODO: 친구들의 아카이브 목록 가져오기
    console.log("아카이브 목록 가져옴");
    setArchiveList((list) => [
      {
        archiveId: "a1",
        user: {
          nickname: "KIN거운KAN쵸",
          message: "칸쵸",
        },
        title: "KIN거운KAN쵸의 꿀사탕 여행",
        description: "울면 꿀사탕소매넣기 산타가 다녀간대요",
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
        ],
      },
      {
        archiveId: "a3",
        user: {
          nickname: "zl존도ㅂlz",
          message: "도비",
        },
        title: "zl존도ㅂlz VLOG 모음",
        description: "도비의 대학원 브이로그",
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
      <div className="bg-white rounded-3xl w-full h-full pt-5 pb-6 flex flex-col justify-center items-center">
        <div className="w-[calc(100%-50px)] overflow-auto scrollbar-hide">
          {archiveList.map((archive, index) => {
            return (
              <div>
                <div
                  key={index}
                  className="flex items-center justify-between px-2 py-1 mx-4"
                >
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
                    {/* 유저 이름 */}
                    <div className="font-bold text-sm overflow-hidden text-ellipsis line-clamp-1 md:w-44 sm:w-36">
                      {archive.user.nickname}
                    </div>
                  </div>

                  {/* 아카이브 이름 */}
                  <div className="font-bold text-sm overflow-hidden text-ellipsis line-clamp-1 md:w-52 sm:w-44">
                    {archive.title}
                  </div>
                  {/* 아카이브 설명 */}
                  <div className="text-sm text-zinc-500 overflow-hidden text-ellipsis line-clamp-1 md:w-72 sm:w-64">
                    {archive.description}
                  </div>
                  {/* 참여한 멤버들 */}
                  <div className="w-40">
                    <AvatarGroup size="sm" max={5} spacing="-2">
                      {archive.members.map((member, index) => {
                        console.log(member);
                        return (
                          <Avatar
                            name="profileImg"
                            scr={member.avatar}
                            alt={index}
                            key={index}
                          />
                        );
                      })}
                    </AvatarGroup>
                  </div>
                  {/* 버튼들 */}
                  <div>
                    <button
                      onClick={() => {
                        enterArchive(archive.archiveId);
                      }}
                      className="bg-main1 border-2 border-basic3 rounded-full mx-1.5 mx-1.5"
                    >
                      <BiLogIn
                        size={18}
                        className="text-white m-0.5 -translate-x-0.5"
                      />
                    </button>
                    <button
                      onClick={() => {
                        deleteArchive(archive.archiveId);
                      }}
                      className="bg-sub3 border-2 border-basic3 rounded-full"
                    >
                      <HiOutlineTrash size={18} className="text-white m-0.5" />
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
  );
}

export default ArchiveFriend;
