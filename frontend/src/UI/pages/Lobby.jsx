import { Box } from "@chakra-ui/react";
import Navbar from "../organisms/Navbar";

function Lobby() {
  return (
    <Box className="bg-base2 h-screen text-white">
      <Box className="text-white">
        <Navbar />
      </Box>
    </Box>
  );
}

export default Lobby;
