import { useState, useEffect } from "react";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";

function ArchiveLike() {
  const [archiveList, setArchiveList] = useState([]);
  // TODO: 이미지 저장용 변수 나중에 지우기
  const [image] = useState(
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
    // TODO: 즐겨찾는 아카이브 목록 가져오기
    console.log("아카이브 목록 가져옴");
    setArchiveList((list) => [
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
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
        ],
      },
    ]);
  }, []);

  return (
    <div className="bg-white rounded-3xl p-3 h-[500px] overflow-y-scroll">
      {archiveList.map((archive, index) => {
        return (
          <div
            key={index}
            className="my-1 py-1.5 shadow flex items-center gap-2"
          >
            <div className="max-w-[50px] w-1/12 text-[#FACC04] flex items-center justify-center">
              <button
                onClick={() => {
                  bookmarkTrigger(archive, index);
                }}
              >
                {archive.bookmarks ? (
                  <AiTwotoneStar className="h-6 w-6" />
                ) : (
                  <AiOutlineStar className="h-6 w-6" />
                )}
              </button>
            </div>
            <div className="max-w-[140px] w-1/6 text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis">
              {archive.user.nickname}
            </div>
            <div className="w-1/5 text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis">
              {archive.title}
            </div>
            <div className="w-[36%] text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              {archive.description}
            </div>
            <div className="w-1/5 text-sm flex">
              {archive.members.map((member, index) => {
                if (index < 5) {
                  return (
                    <img
                      className="w-7 h-7 mr-[-6px] rounded-full border border-[#F0F0F0]"
                      src={member.avatar}
                      alt={index}
                      key={index}
                    />
                  );
                } else if (index === 5) {
                  return (
                    <div
                      key={index}
                      className="w-7 h-7 rounded-full border border-[#F0F0F0] bg-[#F1F5FF] flex items-center justify-center"
                    >
                      +{archive.members.length - index}
                    </div>
                  );
                }
              })}
            </div>
            <div className="w-7 h-7">
              <button
                className="w-full h-full bg-[#15B9F1] rounded-3xl border-4 border-[#B7C6E7]"
                onClick={() => {
                  enterArchive(archive.archiveId);
                }}
              >
                <BiLogIn className="text-white w-4 h-4" />
              </button>
            </div>
            <div className="w-7 h-7 mr-2">
              <button
                className="w-full h-full bg-[#FF7067] rounded-3xl border-4 border-[#B7C6E7] flex items-center justify-center"
                onClick={() => {
                  deleteArchive(archive.archiveId);
                }}
              >
                <HiOutlineTrash className="text-white w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ArchiveLike;
