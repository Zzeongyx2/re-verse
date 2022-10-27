import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Button from "../atoms/Button";
import FriendAccept from "../organisms/FriendAccept";
import FriendList from "../organisms/FriendList";
import FriendRequest from "../organisms/FriendRequest";
import Navbar from "../organisms/Navbar";

function Friend() {
  const [selectTap, setSelectTap] = useState("친구목록");
  const clickBtn = (tap) => {
    setSelectTap(tap);
  };

  return (
    <Box>
      <Navbar />
      <Box className="flex mb-5">
        <div
          onClick={() => {
            clickBtn("친구목록");
          }}
        >
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
        <div
          onClick={() => {
            clickBtn("친구요청");
          }}
        >
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
        <div
          onClick={() => {
            clickBtn("친구수락");
          }}
        >
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
      </Box>
      <Box>
        <Routes>
          <Route path="/list" element={<FriendList />} />
          <Route path="/request" element={<FriendRequest />} />
          <Route path="/accept" element={<FriendAccept />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default Friend;
