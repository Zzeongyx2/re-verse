import { useState, useEffect } from "react";

import { Avatar, AvatarGroup } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

import { FiSettings } from "react-icons/fi";
import { BiLogIn, BiPencil } from "react-icons/bi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import EditArchiveModal from "./EditArchiveModal";
import SettingArchiveModal from "./SettingArchiveModal";
import { getArchiveList } from "../../api/archive";
import { deleteBookmark, postBookmark } from "../../api/friend";
import { imageForm, s3Path } from "../../api";
import { useSelector, useDispatch } from "react-redux";
import { setMyArchiveList } from "../../modules/archive";
function ArchiveMy() {
  // const [archiveList, setArchiveList] = useState([]);
  const archiveList = useSelector((state) => state.archive.myArchiveList);
  const dispatch = useDispatch();

  const enterArchive = (archiveId) => {
    console.log(archiveId, "이동");
    // window.location.href = `/reverse/${archiveId}`;
    window.location.href = `/reversetemp/${archiveId}`;
  };

  const bookmarkTrigger = async (archive, index) => {
    if (!archive.bookmark) {
      await postBookmark(
        archive.archiveId,
        bookmarkControlSuccess,
        bookmarkControl,
      );
    } else {
      await deleteBookmark(
        archive.archiveId,
        bookmarkControlSuccess,
        bookmarkControl,
      );
    }
    await getList();
  };
  const bookmarkControlSuccess = (res) => {
    console.log(res);
  };
  const bookmarkControl = (error) => {
    console.log(error);
  };

  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    await getArchiveList(0, getArchiveListSuccess, getArchiveListFail);
  };
  const getArchiveListSuccess = (res) => {
    console.log(res);
    dispatch(setMyArchiveList(res.data.archives));
  };
  const getArchiveListFail = (error) => {
    console.log(error);
  };

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
                      {archive.bookmark ? (
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
                            src={s3Path + member.avatar + imageForm}
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
                    <EditArchiveModal archive={archive} />
                    {/* 아카이브 권한 설정 */}
                    {/* TODO: 아카이브id 주고 친구 목록중에 초대 했는지 안했는지 알아와야댐*/}
                    <SettingArchiveModal archive={archive} />
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
