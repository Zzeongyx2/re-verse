import { useState, useEffect } from "react";
import { Box, Grid, GridItem, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";

function FriendRequest() {
  const [findNickName, setFindNickName] = useState("");
  const [userList, setUserList] = useState([]);

  const findNickNameHandleChange = (e) => {
    setFindNickName(e.target.value);
  };

  const friendRequest = (email) => {
    // TODO: 친구요청 하기
    console.log("친구요청", email);
  };

  useEffect(() => {
    // TODO: axios 요청으로 유저 목록 받기
    setUserList((list) => {
      return [
        ...list,
        {
          email: "email@naver.com",
          nickname: "KIN거운KAN쵸",
          avatar:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5f2b4e0f-cd21-46d7-a5c3-b392a363d398/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221027T011226Z&X-Amz-Expires=86400&X-Amz-Signature=b2d3b88c60fc8c36d3348318a552b72db514045588b08c90f60bbbd566452df6&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject",
          message: "엉망으로 살아야 해! 인생은 한 번이야!",
        },
        {
          email: "email@naver.com",
          nickname: "oO강약약강Oo",
          avatar:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5f2b4e0f-cd21-46d7-a5c3-b392a363d398/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221027T011226Z&X-Amz-Expires=86400&X-Amz-Signature=b2d3b88c60fc8c36d3348318a552b72db514045588b08c90f60bbbd566452df6&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject",
          message: "가는 말이 고우면, 얕본다.",
        },
        {
          email: "email@naver.com",
          nickname: "zl존윤sun2",
          avatar:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5f2b4e0f-cd21-46d7-a5c3-b392a363d398/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221027T011226Z&X-Amz-Expires=86400&X-Amz-Signature=b2d3b88c60fc8c36d3348318a552b72db514045588b08c90f60bbbd566452df6&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject",
          message:
            "새벽에 먹는 맥주와 치킨은 0 칼로리다.새벽에 먹는 맥주와 치킨은 0 칼로리다.새벽에 먹는 맥주와 치킨은 0 칼로리다.",
        },
      ];
    });
  }, []);

  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)" justifyItems="center" className="h-[500px]">
        <GridItem
          colSpan={1}
          className="bg-white rounded-3xl w-[43vw] h-full py-4 px-5 place-self-start"
        >
          <Box className="shadow ">
            <label className="flex justify-center items-center pl-4">
              <BsSearch />
              <Input
                placeholder="닉네임을 검색하여 유저를 찾아보세요"
                focusBorderColor="none"
                border={0}
                onChange={findNickNameHandleChange}
                value={findNickName}
              />
            </label>
          </Box>
          <Box className="overflow-y-scroll h-[400px]">
            {userList
              .filter((friend) => {
                if (findNickName.trim() === "") {
                  return friend;
                } else if (friend.nickname.includes(findNickName)) {
                  return friend;
                }
              })
              .map((friend, index) => {
                return (
                  <Grid
                    key={index}
                    templateColumns="repeat(15, 1fr)"
                    templateRows="repeat(2, 1fr)"
                    alignItems="center"
                    gap={2}
                    className="my-1 py-1 shadow"
                  >
                    <GridItem colSpan={1} rowSpan={2} className="w-9 h-9">
                      <img src={friend.avatar} alt={friend.nickname} className="w-full h-full" />
                    </GridItem>
                    <GridItem colSpan={13} rowSpan={1} className="text-xs font-bold">
                      <div>{friend.nickname}</div>
                    </GridItem>
                    <GridItem colStart={15} rowSpan={2} className="w-5 h-5 mr-2">
                      <button
                        className="w-full h-full"
                        onClick={() => {
                          friendRequest(friend.email);
                        }}
                      >
                        <FiPlusCircle className="text-[#3F81FB] w-full h-full" />
                      </button>
                    </GridItem>
                    <GridItem
                      colSpan={13}
                      rowSpan={1}
                      className="text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                    >
                      {friend.message}
                    </GridItem>
                  </Grid>
                );
              })}
          </Box>
        </GridItem>
        <GridItem
          colSpan={1}
          className="bg-white rounded-3xl w-[43vw] h-full py-4 px-5 place-self-end"
        ></GridItem>
      </Grid>
    </Box>
  );
}

export default FriendRequest;
