import { Box, Stack } from "@mui/material";
import NeonLogo from "../atoms/NeonLogo";

function Main() {
  return (
    <Box
      component="div"
      style={{
        backgroundColor: "#1A1F28",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack>
        {/* logo, start btn */}
        <NeonLogo />
      </Stack>
    </Box>
  );
}

export default Main;
