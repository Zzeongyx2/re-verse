import { useState, useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { BiLogIn, BiPencil } from "react-icons/bi";

function ArchiveMy() {
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
  const editArchive = (archiveId) => {
    // TODO: 아카이브 이름 설정 변겅
    console.log(archiveId, "수정");
  };
  const settingArchive = (archiveId) => {
    // TODO: 아카이브 공유 관리
    console.log(archiveId, "관리");
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
      {
        archiveId: "a3",
        title: "나의 여행 일지 (1)",
        description: "제주도 한 달 살기 기록 아카이브",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: image,
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
            avatar: image,
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
            avatar: image,
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
            avatar: image,
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
            avatar: image,
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
            avatar: image,
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
            avatar: image,
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
            avatar: image,
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
            avatar: image,
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
            avatar: image,
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
            <div className="max-w-[50px] w-1/12"></div>
            <div className="w-1/5 text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis">
              {archive.title}
            </div>
            <div className="w-2/5 text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              {archive.description}
            </div>
            <div className="w-1/4 text-sm flex">
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
            <div className="w-7 h-7">
              <button
                className="w-full h-full bg-[#C940E4] rounded-3xl border-4 border-[#B7C6E7] flex items-center justify-center"
                onClick={() => {
                  editArchive(archive.archiveId);
                }}
              >
                <BiPencil className="text-white w-4 h-4" />
              </button>
            </div>
            <div className="w-7 h-7 mr-2">
              <button
                className="w-full h-full bg-[#757575] rounded-3xl border-4 border-[#B7C6E7] flex items-center justify-center"
                onClick={() => {
                  settingArchive(archive.archiveId);
                }}
              >
                <FiSettings className="text-white w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ArchiveMy;
