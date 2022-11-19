import LobbyButton from "../atoms/LobbyButton";
import NeonLightBG from "../atoms/NeonLightBG";
import LobbyProfile from "../organisms/LobbyProfile";
import Navbar from "../organisms/Navbar";
import { useEffect } from "react";
import { getUserInfo } from "../../api/user";
import { useSelector, useDispatch } from "react-redux";
import { setLoginUser } from "../../modules/user";
import LobbyCharacterThree from "../organisms/LobbyCharacterThree";
import { getLastArchive } from "../../api/archive";
import { setLastArchive } from "../../modules/archive";

function Lobby() {
  // TODO: 메인아카이브, 최근방문 아카이브 가져와서 넣어주기

  // const [loginUser, setLoginUser] = useState(initialUserInfo);
  const loginUser = useSelector((state) => state.user.loginUser);
  const lastArchive = useSelector((state) => state.archive.lastArchive);
  // const lastArchive = undefined;
  const dispatch = useDispatch();
  console.log(lastArchive);
  useEffect(() => {
    getUserInfo(getUserInfoSuccess, getUserInfoFail);
    getLastArchive(getLastArchiveSuccess, getLastArchiveFail);
  }, []);
  const getUserInfoSuccess = (res) => {
    dispatch(setLoginUser(res.data));
  };
  const getUserInfoFail = (error) => {
    console.log(error);
  };
  const getLastArchiveSuccess = (res) => {
    dispatch(setLastArchive(res.data));
    console.log(res);
  };
  const getLastArchiveFail = (error) => {
    console.log(error);
  };

  return (
    <div className="pt-10">
      <div className="">
        <Navbar />
      </div>
      <div className="flex justify-between">
        {/* left side: character */}
        <div className="rounded-3xl w-[calc(96%/3*2)] relative" id="three-div">
          <div className="absolute w-full h-full">
            <NeonLightBG />
          </div>
          <div className="absolute bg-opacity-0 w-full h-full">
            {/* <CharacterThree animalName={loginUser.avatar} /> */}
            <LobbyCharacterThree animalName={loginUser.avatar} />
          </div>
        </div>
        {/* right side: shortcut btn, profile */}
        <div className="w-[calc(96%/3)]">
          {/* // FIXME: 나중에 linkto 속성값 변경해야 함 */}
          <LobbyButton
            linkTo={`/reverse/${loginUser.bestArchiveId}`}
            buttonTitle={"대표 아카이브 바로가기"}
            buttonMessage={`${loginUser.nickname}의 메인 아카이브`}
            textcolor={"text-white"}
            from={"from-main1"}
            to={"to-sub1"}
          />
          <br />
          <LobbyButton
            linkTo={lastArchive ? `/reverse/${lastArchive?.id}` : "/lobby"}
            buttonTitle={"최근 방문한 아카이브 바로가기"}
            buttonMessage={
              lastArchive
                ? `${lastArchive?.members[0].nickname}의 아카이브 ${lastArchive?.title}`
                : "최근 방문한 아카이브가 없습니다."
            }
            textcolor={"text-gray-700"}
            from={lastArchive ? "from-main2" : "cursor-default"}
            to={lastArchive ? "to-sub2" : "bg-gray-500"}
          />
          <LobbyProfile loginUser={loginUser} />
        </div>
      </div>
    </div>
  );
}

export default Lobby;
