import React, { useEffect } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";

function CharacterSelect() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    for (let index = 1; index <= 40; index++) {
      setCharacters((item) => {
        return [
          ...item,
          {
            img: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5f2b4e0f-cd21-46d7-a5c3-b392a363d398/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221027T011226Z&X-Amz-Expires=86400&X-Amz-Signature=b2d3b88c60fc8c36d3348318a552b72db514045588b08c90f60bbbd566452df6&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject",
            idx: index,
          },
        ];
      });
    }
  }, []);

  return (
    <Box>
      <Grid
        templateColumns="repeat(8)"
        templateRows="repeat(2)"
        className="w-[863px]"
      >
        <GridItem
          colSpan={8}
          rowSpan={1}
          h="64px"
          border="1px"
          borderColor="white"
          p="2"
          backgroundColor="#00BEFF"
          color="white"
          borderTopRadius="24"
        >
          <div className="h-full flex justify-center items-center">
            <p className="font-bold text-2xl drop-shadow">캐릭터 선택</p>
          </div>
        </GridItem>
        <GridItem
          colSpan={8}
          rowSpan={1}
          className="h-[550px] flex justify-center items-center"
        >
          <Grid
            templateColumns="repeat(8, 1fr)"
            templateRows="repeat(5, 1fr)"
            className="w-[750px] h-[480px] justify-center items-center text-center"
          >
            {characters.map((character) => {
              return (
                <GridItem colSpan={1} className="w-[75px] h-[75px] m-2 ">
                  <img
                    src={character.img}
                    alt={character.idx}
                    className="w-full h-full rounded-full"
                  />
                </GridItem>
              );
            })}
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default CharacterSelect;
