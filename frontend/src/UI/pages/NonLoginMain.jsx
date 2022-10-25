import { Box } from "@chakra-ui/react";
import NeonLogo from "../atoms/NeonLogo";

function NonLoginMain() {
  return (
    // <Link to="/login">
    <Box className="bg-base2 h-screen flex items-center">
      <NeonLogo />
    </Box>
    // </Link>
  );
}

export default NonLoginMain;
