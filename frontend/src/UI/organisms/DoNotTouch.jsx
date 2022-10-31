import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function LobbyButton({
  linkTo,
  textcolor,
  buttonTitle,
  buttonMessage,
  from,
  to,
}) {
  return (
    <Link to={linkTo}>
      <Box
        border="1px"
        borderColor="white"
        borderRadius="24"
        p={5}
        textAlign="end"
        className={`h-[90px] w-full ${textcolor} bg-gradient-to-t ${from} ${to}`}
      >
        <Grid templateColumns="repeat(5)" templateRows="repeat(2)" gap={1}>
          <GridItem colSpan={5} rowSpan={1}>
            <div className="font-semibold text-sm drop-shadow">
              {buttonTitle}
            </div>
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
