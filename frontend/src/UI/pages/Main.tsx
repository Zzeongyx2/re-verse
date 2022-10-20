import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "../../index.css";

// type Props = {
//   fontSize?: number;
//   lineHeight?: number;
// };

const theme = createTheme({
  typography: {
    fontFamily: "SDSamliphopangche_Outline",
  },
});

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Container>
          <Typography variant="h1" component="h4">
            RE-VERSE
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Main;
