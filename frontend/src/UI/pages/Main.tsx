import { Box, Button, Stack } from "@mui/material";
import NeonLogo from "../atoms/NeonLogo";
import styles from "../../styles/Main.module.css";
import { useState } from "react";

function Main() {
  // const [showBtn, setShowBtn] = useState<boolean>(false);
  // const handleShowBtn = () => {
  //   setShowBtn((prev) => !prev);
  // };

  return (
    <Box
      style={{
        backgroundColor: "#1A1F28",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack>
        <NeonLogo />
      </Stack>
    </Box>
  );
}

export default Main;
