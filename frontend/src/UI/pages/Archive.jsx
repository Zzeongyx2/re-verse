import { useEffect } from "react";
import { useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { getUserInfo } from "../../api/user";
import Button from "../atoms/Button";
import ArchiveFriend from "../organisms/ArchiveFriend";
import ArchiveLike from "../organisms/ArchiveLike";
import ArchiveMy from "../organisms/ArchiveMy";
import CreateArchiveModal from "../organisms/CreateArchiveModal";
import Navbar from "../organisms/Navbar";

function Archive() {
  const [selectTap, setSelectTap] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const initialUserInfo = {
    nickname: "",
    message: "",
    avatar: "",
  };

  const [loginUser, setLoginUser] = useState(initialUserInfo);
  useEffect(() => {
    getUserInfo(getUserInfoSuccess, getUserInfoFail);
  }, []);
  const getUserInfoSuccess = (res) => {
    setLoginUser(res.data);
  };
  const getUserInfoFail = (error) => {
    console.log(error);
  };
  const createArchive = () => {
    // TODO: 새 아카이브 만들기
    navigate("/archive/my");
  };

  useEffect(() => {
    if (location.pathname.includes("my")) {
      setSelectTap("나의아카이브");
    } else if (location.pathname.includes("friend")) {
      setSelectTap("친구아카이브");
    } else if (location.pathname.includes("like")) {
      setSelectTap("즐겨찾기");
    }
  }, [location]);

  return (
    <div className="mt-8">
      <Navbar />
      <div className="flex justify-between mb-5">
        <div className="flex">
          <div>
            <Link to="my">
              <Button
                color={selectTap === "나의아카이브" ? "white" : "black"}
                from={
                  selectTap === "나의아카이브" ? "from-main1" : "from-main2"
                }
                to={selectTap === "나의아카이브" ? "to-sub1" : "to-sub2"}
                text={"나의 아카이브"}
                click={() => {}}
              />
            </Link>
          </div>
          <div>
            <Link to="friend">
              <Button
                color={selectTap === "친구아카이브" ? "white" : "black"}
                from={
                  selectTap === "친구아카이브" ? "from-main1" : "from-main2"
                }
                to={selectTap === "친구아카이브" ? "to-sub1" : "to-sub2"}
                text={"친구의 아카이브"}
                click={() => {}}
              />
            </Link>
          </div>
          <div>
            <Link to="like">
              <Button
                color={selectTap === "즐겨찾기" ? "white" : "black"}
                from={selectTap === "즐겨찾기" ? "from-main1" : "from-main2"}
                to={selectTap === "즐겨찾기" ? "to-sub1" : "to-sub2"}
                text={"즐겨찾기"}
                click={() => {}}
              />
            </Link>
          </div>
        </div>
        <CreateArchiveModal />
      </div>
      <div>
        <Routes>
          <Route path="/my" element={<ArchiveMy />} />
          <Route
            path="/friend"
            element={<ArchiveFriend loginUser={loginUser} />}
          />
          <Route path="/like" element={<ArchiveLike loginUser={loginUser} />} />
        </Routes>
      </div>
    </div>
  );
}

export default Archive;
