import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "../../styles/Main.module.css";
import "../../index.css";

const theme = createTheme({
  typography: {
    fontFamily: "Beon",
  },
});

function Main() {
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
          <Box className={styles.board}>
            <Typography variant="h1" className={styles.logo}>
              RE-VERSE
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Main;
