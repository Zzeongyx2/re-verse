import { Box, Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "../../styles/Main.module.css";
import "../../index.css";
import { useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "Beon",
  },
});

function NeonLogo() {
  const [move, setMove] = useState<boolean>(false);
  const handleMove = () => {
    setMove((prev) => !prev);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        style={{
          margin: "0",
          backgroundColor: "#1A1F28",
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          {/* <Box className={styles.board}> */}
          <Box
            className={
              move === false
                ? `${styles.board} ${styles.movedown}`
                : `${styles.board} ${styles.moveup}`
            }
            onClick={handleMove}
          >
            <Typography variant="h1" className={styles.logo}>
              RE-VERSE
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default NeonLogo;
