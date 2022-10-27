import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import FriendList from "../organisms/FriendList";

function Friend() {
  return (
    <Box className="bg-base2 h-screen">
      <Box className="text-white h-16">this is friend setting page</Box>
      <Routes>
        <Route path="friendlist" element={<FriendList />} />
      </Routes>
    </Box>
  );
}

export default Friend;
