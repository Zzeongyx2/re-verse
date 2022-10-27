import { useState, useEffect } from "react";
import { Box, Grid, GridItem, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";

function FriendList() {
  const [findNickName, setFindNickName] = useState("");
  const [friendList, setFriendList] = useState([]);
  const [archiveList, setArchiveList] = useState([]);
  const [selectFriend, setSelectFriend] = useState({
    email: "",
    nickname: "",
    avatar: "",
    message: "",
  });
  const [rightTitle, setRightTitle] = useState("");

  const findNickNameHandleChange = (e) => {
    setFindNickName(e.target.value);
  };

  const friendDelete = (email) => {
    // TODO: 친구삭제 하기
    console.log("친구삭제", email);
  };

  const clickNickname = (friend) => {
    setSelectFriend(friend);
    setRightTitle(`나와함께하는 '${friend.nickname}'의 아카이브`);
  };

  useEffect(() => {
    // TODO: axios 요청으로 친구 목록 받기
    setFriendList((list) => {
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
    if (friendList.length > 0) {
      setSelectFriend(friendList[0]);
      setRightTitle(`나와함께하는 '${friendList[0].nickname}'의 아카이브`);
    } else {
      setRightTitle("함께하는 친구가 없습니다");
    }
  }, []);

  useEffect(() => {
    // TODO: 선택 유저 바뀔때마다 아카이브 목록 가져오기
    console.log(selectFriend.nickname, "아카이브 목록 가져옴");
    setArchiveList([
      {
        archiveId: "a1",
        title: "놀러와요 KAN쵸월드",
        description: "하루에 3번, 3분씩 3개의 칸쵸를 먹자",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: "aaa",
          },
        ],
      },
      {
        archiveId: "a2",
        title: "놀러와요 KAN쵸월드 (2)",
        description: "하루에 6번, 6분씩 6개의 칸쵸를 먹자",
        level: 1,
        bookmarks: true,
        members: [
          {
            nickname: "String",
            avatar: "112",
          },
        ],
      },
    ]);
  }, [selectFriend]);

  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)" justifyItems="center" className="h-[600px]">
        <GridItem colSpan={1} className="bg-white rounded-3xl w-[40vw] h-full py-4 px-5 ">
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
          <Box className="overflow-y-scroll h-[500px]">
            {friendList.map((friend, index) => {
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
                    <div
                      className="hover:cursor-pointer"
                      onClick={() => {
                        clickNickname(friend);
                      }}
                    >
                      {friend.nickname}
                    </div>
                  </GridItem>
                  <GridItem colStart={15} rowSpan={2} className="w-5 h-5 mr-2">
                    <button
                      className="w-full h-full"
                      onClick={() => {
                        friendDelete(friend.email);
                      }}
                    >
                      <FiMinusCircle className="text-red-500 w-full h-full" />
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
        <GridItem colSpan={1} className="bg-white rounded-3xl w-[40vw] py-4 px-5">
          <Box className="shadow p-2 font-bold text-xl">{rightTitle}</Box>
          <Box className="overflow-y-scroll h-[500px]">
            {archiveList.map((archive, index) => {
              return (
                <Grid
                  key={index}
                  templateColumns="repeat(15, 1fr)"
                  templateRows="repeat(2, 1fr)"
                  alignItems="center"
                  gap={2}
                  className="my-1 py-1 shadow"
                >
                  <GridItem colSpan={13} rowSpan={1}>
                    dd
                  </GridItem>
                  <GridItem colStart={14} colSpan={1} rowSpan={2}>
                    dd
                  </GridItem>
                  <GridItem colStart={15} colSpan={1} rowSpan={2}>
                    dd
                  </GridItem>
                  <GridItem colSpan={13} rowSpan={1}>
                    dd
                  </GridItem>
                </Grid>
              );
            })}
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default FriendList;
