import { useEffect } from "react";
import { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Button from "../atoms/Button";
import ArchiveFriend from "../organisms/ArchiveFriend";
import ArchiveLike from "../organisms/ArchiveLike";
import ArchiveMy from "../organisms/ArchiveMy";
import CreateArchiveModal from "../organisms/CreateArchiveModal";
import Navbar from "../organisms/Navbar";

function Archive() {
  const [selectTap, setSelectTap] = useState("");
  const location = useLocation();

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
    <div className="pt-10">
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
          <Route path="/friend" element={<ArchiveFriend />} />
          <Route path="/like" element={<ArchiveLike />} />
        </Routes>
      </div>
    </div>
  );
}

export default Archive;
