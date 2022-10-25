import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function LobbyButton({ linkTo, textcolor, backcolor, buttonTitle, buttonMessage }) {
  return (
    <Link to={linkTo}>
      <Box
        backgroundColor={backcolor}
        border="1px"
        borderColor="white"
        color={textcolor}
        borderRadius="24"
        p={5}
        textAlign="end"
        className="h-[90px] w-[545px]"
      >
        <Grid templateColumns="repeat(5)" templateRows="repeat(2)" gap={1}>
          <GridItem colSpan={5} rowSpan={1}>
            <div className="text-sm drop-shadow">{buttonTitle}</div>
          </GridItem>
          <GridItem colSpan={5} rowSpan={1}>
            <div className="font-bold text-lg drop-shadow">{buttonMessage}</div>
          </GridItem>
        </Grid>
      </Box>
    </Link>
  );
}

export default LobbyButton;
