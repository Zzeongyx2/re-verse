import { useEffect } from "react";
import { BiLogIn } from "react-icons/bi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import { Avatar, AvatarGroup, Tooltip } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import {
  deleteArchiveMember,
  deleteBookmark,
  postBookmark,
} from "../../api/friend";
import { getArchiveList } from "../../api/archive";
import { imageForm, s3Path } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { setFriendArchiveList } from "../../modules/archive";
import { useNavigate } from "react-router-dom";

function ArchiveFriend() {
  // const [archiveList, setArchiveList] = useState([]);
  const archiveList = useSelector((state) => state.archive.friendArchiveList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = useSelector((state) => state.user.loginUser);

  const enterArchive = (archiveId) => {
    navigate(`/reverse/${archiveId}`);
    // navigate(`/reversetemp/${archiveId}`);
  };

  const deleteArchive = async (archiveId) => {
    await deleteArchiveMember(
      archiveId,
      loginUser.nickname,
      deleteArchiveMemberSuccess,
      deleteArchiveMemberFail
    );
    await getList();
  };
  const deleteArchiveMemberSuccess = (res) => {};
  const deleteArchiveMemberFail = (error) => {
    console.log(error);
  };
  const bookmarkTrigger = async (archive, index) => {
    if (!archive.bookmarks) {
      await postBookmark(
        archive.archiveId,
        bookmarkControlSuccess,
        bookmarkControl
      );
    } else {
      await deleteBookmark(
        archive.archiveId,
        bookmarkControlSuccess,
        bookmarkControl
      );
    }

    await getList();
  };
  const bookmarkControlSuccess = (res) => {};
  const bookmarkControl = (error) => {
    console.log(error);
  };
  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    await getArchiveList(1, getArchiveListSuccess, getArchiveListFail);
  };
  const getArchiveListSuccess = (res) => {
    dispatch(setFriendArchiveList(res.data.archives));
  };
  const getArchiveListFail = (error) => {
    console.log(error);
  };

  return (
    <div className="text-base2">
      <div className="bg-white rounded-3xl w-full h-[calc(600px)] pt-5 pb-6 flex justify-center">
        <div className="xl:w-[calc(100%-50px)] lg:w-[calc(96%)] overflow-auto scrollbar-hide">
          {archiveList.map((archive, index) => {
            return (
              <div key={`archiveList-${index}`}>
                <div className="flex items-center justify-between px-2 py-1 mx-4">
                  <div className="flex">
                    {/* 즐겨찾기 */}
                    <button
                      onClick={() => {
                        bookmarkTrigger(archive, index);
                      }}
                      className="w-8 md:w-14 text-extra1"
                    >
                      {archive.bookmark ? (
                        <AiFillStar size={18} />
                      ) : (
                        <AiOutlineStar size={18} />
                      )}
                    </button>
                    {/* 유저 이름 */}
                    <div className="font-bold text-sm overflow-hidden text-ellipsis line-clamp-1 lg:w-44 md:w-36 w-24">
                      {archive.owner.nickname}
                    </div>
                  </div>

                  {/* 아카이브 이름 */}
                  <div className="font-bold text-sm overflow-hidden text-ellipsis line-clamp-1 lg:w-52 md:w-40 w-32">
                    {archive.title}
                  </div>
                  {/* 아카이브 설명 */}
                  <div className="text-sm text-zinc-500 overflow-hidden text-ellipsis line-clamp-1 lg:w-48 md:w-36 w-32 mr-2">
                    {archive.description}
                  </div>
                  {/* 참여한 멤버들 */}
                  <div className="w-32 md:w-36">
                    <AvatarGroup max={5} spacing="-2">
                      {archive.members.map((member, index) => {
                        return (
                          <Tooltip
                            label={`${member.nickname}`}
                            aria-label="A tooltip"
                            key={`avatar-${index}`}
                          >
                            <Avatar
                              size={{ base: "xs", md: "sm" }}
                              marginLeft={-1.5}
                              variant="avatarBorder"
                              name="profileImg"
                              src={s3Path + member.avatar + imageForm}
                              alt={index}
                            />
                          </Tooltip>
                        );
                      })}
                    </AvatarGroup>
                  </div>
                  {/* 버튼들 */}
                  <div className="w-28 md:w-20">
                    <button
                      onClick={() => {
                        enterArchive(archive.archiveId);
                      }}
                      className="bg-main1 border-2 border-basic3 rounded-full mx-1.5"
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
