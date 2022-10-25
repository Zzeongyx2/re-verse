import { useState, useEffect } from "react";
import { Box, Grid, GridItem, Input, Textarea } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

function FriendList() {
  const [findNickName, setFindNickName] = useState("");

  const findNickNameHandleChange = (e) => {
    setFindNickName(e.target.value);
  };

  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={14} className="h-[600px]">
        <GridItem colSpan={1} className="bg-white ml-14 rounded-3xl py-4 px-5">
          <Box className="shadow ">
            <label className="flex justify-center items-center pl-4">
              <BsSearch />
              <Input
                placeholder="닉네임을 검색하여 친구를 찾아보세요"
                focusBorderColor="none"
                border={0}
                onChange={findNickNameHandleChange}
                value={findNickName}
              />
            </label>
          </Box>
        </GridItem>
        <GridItem colSpan={1} className="bg-white mr-14 rounded-3xl py-4 px-5">
          d
        </GridItem>
      </Grid>
    </Box>
  );
}

export default FriendList;
