import { Box, Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "../../styles/Main.module.css";
import "../../index.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Beon",
  },
});

function NeonLogo() {
  const [move, setMove] = useState<boolean>(false);
  const [start, setStart] = useState<boolean>(false);
  const handleMove = () => {
    setMove((prev) => !prev);
    setStart((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        style={{
          margin: "0",
          // height: "100vh",
          width: "100vw",
          // display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          {/* <Box className={styles.board}> */}
          <Box style={{ position: "relative" }}>
            <Box
              className={
                move === false
                  ? `${styles.board} ${styles.movedown}`
                  : `${styles.board} ${styles.moveup}`
              }
              onClick={() => {
                handleMove();
              }}
            >
              <Typography variant="h1" className={styles.logo}>
                RE-VERSE
              </Typography>
            </Box>
            <Link to="/login">
              <Box
                className={styles.wrapper}
                // style={{ visibility: start === false ? "hidden" : "visible", transition: !start ? "visibility" }}
              >
                {start ? (
                  <Typography
                    variant="h1"
                    className={styles.button}
                    style={{
                      visibility: "visible",
                      transitionDelay: "0.7s",
                    }}
                  >
                    START
                  </Typography>
                ) : (
                  <Typography
                    variant="h1"
                    className={styles.button}
                    style={{
                      visibility: "hidden",
                      opacity: "0",
                      transition:
                        "opacity 0.5s linear, visibility 0.5s ease-in-out",
                    }}
                  >
                    START
                  </Typography>
                )}
              </Box>
            </Link>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default NeonLogo;
