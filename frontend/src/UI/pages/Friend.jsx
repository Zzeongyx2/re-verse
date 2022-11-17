import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Button from "../atoms/Button";
import FriendAccept from "../organisms/FriendAccept";
import FriendList from "../organisms/FriendList";
import FriendRequest from "../organisms/FriendRequest";
import Navbar from "../organisms/Navbar";

function Friend() {
  const [selectTap, setSelectTap] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("list")) {
      setSelectTap("친구목록");
    } else if (location.pathname.includes("request")) {
      setSelectTap("친구요청");
    } else if (location.pathname.includes("accept")) {
      setSelectTap("친구수락");
    }
  }, [location]);

  return (
    <div className="pt-10">
      <Navbar />

      <div className="flex mb-5">
        <div>
          <Link to="list">
            <Button
              color={selectTap === "친구목록" ? "white" : "black"}
              from={selectTap === "친구목록" ? "from-main1" : "from-main2"}
              to={selectTap === "친구목록" ? "to-sub1" : "to-sub2"}
              text={"친구 목록"}
              click={() => {}}
            />
          </Link>
        </div>
        <div>
          <Link to="request">
            <Button
              color={selectTap === "친구요청" ? "white" : "black"}
              from={selectTap === "친구요청" ? "from-main1" : "from-main2"}
              to={selectTap === "친구요청" ? "to-sub1" : "to-sub2"}
              text={"친구 요청"}
              click={() => {}}
            />
          </Link>
        </div>
        <div>
          <Link to="accept">
            <Button
              color={selectTap === "친구수락" ? "white" : "black"}
              from={selectTap === "친구수락" ? "from-main1" : "from-main2"}
              to={selectTap === "친구수락" ? "to-sub1" : "to-sub2"}
              text={"친구 수락"}
              click={() => {}}
            />
          </Link>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/list" element={<FriendList />} />
          <Route path="/request" element={<FriendRequest />} />
          <Route path="/accept" element={<FriendAccept />} />
        </Routes>
      </div>
    </div>
  );
}

export default Friend;
