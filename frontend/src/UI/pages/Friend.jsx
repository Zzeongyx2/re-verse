import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import FriendAccept from "../organisms/FriendAccept";
import FriendList from "../organisms/FriendList";
import FriendRequest from "../organisms/FriendRequest";
import Navbar from "../organisms/Navbar";

function Friend() {
  return (
    <Box>
      <Navbar />
      <Box className="text-white">this is friend setting page</Box>
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
