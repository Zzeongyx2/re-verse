import LobbyButton from "../atoms/LobbyButton";
import NeonLightBG from "../atoms/NeonLightBG";
import LobbyProfile from "../organisms/LobbyProfile";
import Navbar from "../organisms/Navbar";
import ThreeTest from "../organisms/ThreeTest";

function Lobby() {
  return (
    <div className="mt-8">
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
            <ThreeTest />
          </div>
        </div>
        {/* right side: shortcut btn, profile */}
        <div className="w-[calc(96%/3)]">
          {/* // FIXME: 나중에 linkto 속성값 변경해야 함 */}
          <LobbyButton
            linkTo={"/lobby"}
            buttonTitle={"대표 아카이브 바로가기"}
            buttonMessage={"zl존윤sun의 메인 아카이브"}
            textcolor={"text-white"}
            from={"from-main1"}
            to={"to-sub1"}
          />
          <br />
          <LobbyButton
            linkTo={"/lobby"}
            buttonTitle={"최근 방문한 아카이브 바로가기"}
            buttonMessage={"zl존윤sun의 메인 아카이브"}
            textcolor={"text-gray-700"}
            from={"from-main2"}
            to={"to-sub2"}
          />
          <LobbyProfile />
        </div>
      </div>
    </div>
  );
}

export default Lobby;
