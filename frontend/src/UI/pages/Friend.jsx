import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import FriendList from "../organisms/FriendList";
import Navbar from "../organisms/Navbar";

function Friend() {
  return (
    <Box>
      <Navbar />
      <Box className="text-white">this is friend setting page</Box>
      <Box>
        <Routes>
          <Route path="/list" element={<FriendList />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default Friend;
