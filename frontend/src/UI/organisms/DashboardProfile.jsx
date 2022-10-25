import { useState, useEffect } from "react";
import { Box, Grid, GridItem, Input, Textarea } from "@chakra-ui/react";

function DashboardProfile() {
  const [userInfo, setUserInfo] = useState({
    userImg:
      "https://ggotmari.s3.ap-northeast-2.amazonaws.com/profile/3ae5d166-833f-492f-a36f-32110569d100_%EB%9D%BC%EC%9D%B4%EC%96%B8.jfif",
    nickName: "Zl존윤sun",
    message: "늦었다고 생각할때가 진짜 너무 늦었다",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [editNickName, setEditNickName] = useState("");
  const [editMessage, setEditMessage] = useState("");
  const [editNickNameValid, setEditNickNameValid] = useState({
    isValid: false,
    message: "",
  });

  useEffect(() => {
    //axios 요청으로 유저정보 가져오기
    //setUserInfo(response.data);
    setEditNickName(userInfo.nickName);
  }, []);

  const editNickNameHandleChange = (e) => {
    setEditNickName(e.target.value);
  };
  const ediMessageHandleChange = (e) => {
    setEditMessage(e.target.value);
  };
  const editNickNameBlurHandle = (e) => {
    let nickNameRE = new RegExp("^[a-zA-Z0-9가-힣_]{2,12}$");
    if (!nickNameRE.test(editNickName)) {
      // TODO: 몇글자인지 정하기
      setEditNickNameValid({ isValid: true, message: "*2~12글자 사이로 입력해주세요." });
      return;
    }
    setEditNickNameValid({ isValid: false, message: "" });
    //axios 요청으로 닉네임 중복검사하기
    // setNickNameValid({ isValid: true, message: "이미 가입된 닉네임입니다." });
  };

  const editOnOff = () => {
    if (!isEdit) {
      setEditNickName(userInfo.nickName);
      setEditMessage(userInfo.message);
    } else {
      if (editNickNameValid.isValid) {
        return;
      }
      changeProfile();
    }
    setIsEdit(!isEdit);
  };

  const changeProfile = async () => {
    //axios로 프로필 수정 요청 보내기
    setUserInfo({
      message: editMessage,
      nickName: editNickName,
      userImg: userInfo.userImg,
    });
  };

  return (
    <Box p="5">
      {!isEdit ? (
        <Grid templateColumns="repeat(5)" templateRows="repeat(3)" gap={5}>
          <GridItem
            rowSpan={1}
            colSpan={5}
            h={10}
            border="1px"
            borderColor="black"
            borderRadius="10"
            p="2"
          >
            <div>{userInfo.nickName}</div>
          </GridItem>
          <GridItem
            rowSpan={1}
            colSpan={5}
            h={100}
            border="1px"
            borderColor="black"
            borderRadius="10"
            p="2"
          >
            <div>{userInfo.message}</div>
          </GridItem>
          <GridItem
            rowSpan={1}
            colSpan={5}
            textAlign="center"
            border="1px"
            borderColor="black"
            borderRadius="10"
          >
            <button
              onClick={() => {
                editOnOff();
              }}
            >
              프로필 편집
            </button>
          </GridItem>
        </Grid>
      ) : (
        <Grid templateColumns="repeat(5)" templateRows="repeat(3)" gap={5}>
          <GridItem rowSpan={1} colSpan={5}>
            <Input
              focusBorderColor="none"
              placeholder="닉네임"
              value={editNickName}
              onChange={editNickNameHandleChange}
              onBlur={editNickNameBlurHandle}
              border="1px"
              borderColor={editNickNameValid.isValid ? "red" : "black"}
              borderRadius="10"
              _hover={{}}
            />
            <p
              style={{
                color: "red",
                marginLeft: "5px",
                fontSize: "10px",
              }}
            >
              {editNickNameValid.message}
            </p>
          </GridItem>
          <GridItem rowSpan={1} colSpan={5} border="1px" borderColor="black" borderRadius="10">
            <Textarea
              focusBorderColor="none"
              placeholder="상태 메시지를 입력하세요"
              value={editMessage}
              onChange={ediMessageHandleChange}
              border="none"
            />
          </GridItem>
          <GridItem rowSpan={1} colSpan={5} textAlign="center">
            <button
              onClick={() => {
                editOnOff();
              }}
            >
              저장하기
            </button>
          </GridItem>
        </Grid>
      )}
    </Box>
  );
}

export default DashboardProfile;
