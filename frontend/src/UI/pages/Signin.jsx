import React from "react";
import { useState } from "react";
import { Box, Grid, GridItem, Input } from "@chakra-ui/react";

function Signin() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [nickName, setNickName] = useState("");

  const [idValid, setIdValid] = useState({
    isValid: false,
    message: "",
  });
  const [pwValid, setPwValid] = useState({
    isValid: false,
    message: "",
  });
  const [pwCheckValid, setPwCheckValid] = useState({
    isValid: false,
    message: "",
  });
  const [nickNameValid, setNickNameValid] = useState({
    isValid: false,
    message: "",
  });

  const idHandleChange = (e) => {
    setId(e.target.value);
  };
  const pwHandleChange = (e) => {
    setPw(e.target.value);
  };
  const pwCheckHandleChange = (e) => {
    setPwCheck(e.target.value);
  };
  const nickNameHandleChange = (e) => {
    setNickName(e.target.value);
  };
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      clickSignin();
    }
  };
  const idBlurHandle = (e) => {
    let idRE = new RegExp("[a-zA-Z0-9]+@[a-zA-Z]+[.][a-zA-Z]$");
    if (!idRE.test(id)) {
      setIdValid({ isValid: true, message: "*이메일 형식이 아닙니다." });
      console.log(idValid);
      return;
    }
    setIdValid({ isValid: false, message: "" });
    //axios 요청으로 id 중복검사하기
    // setIdValid({ isValid: true, message: "이미 가입된 아이디입니다." });
  };
  const pwBlurHandle = (e) => {
    let pwRE = new RegExp("^[a-zA-Z0-9~!@]{4,12}$");
    if (!pwRE.test(pw)) {
      setPwValid({
        isValid: true,
        message: "*4~12글자, 영문대소문자, 숫자, 특수문자(~,!,@)만 사용 가능합니다.",
      });
      return;
    }
    setPwValid({ isValid: false, message: "" });
  };
  const pwCheckBlurHandle = (e) => {
    if (pw !== pwCheck) {
      setPwCheckValid({
        isValid: true,
        message: "*비밀번호가 일치하지 않습니다.",
      });
      return;
    }
    setPwCheckValid({ isValid: false, message: "" });
  };
  const nickNameBlurHandle = (e) => {
    let nickNameRE = new RegExp("^[a-zA-Z0-9가-힣_]{2,12}$");
    if (!nickNameRE.test(nickName)) {
      setNickNameValid({
        isValid: true,
        message: "*2~12글자 사이로 입력해주세요.",
        // TODO: 몇글자인지 정하기
      });
      return;
    }
    setNickNameValid({ isValid: false, message: "" });
    //axios 요청으로 닉네임 중복검사하기
    // setNickNameValid({ isValid: true, message: "이미 가입된 닉네임입니다." });
  };

  const clickSignin = () => {
    if (id.trim() === "") {
      alert("아이디를 입력하세요");
      return;
    } else if (pw.trim() === "") {
      alert("비밀번호를 입력하세요.");
      return;
    } else if (pwCheck.trim() === "") {
      alert("비밀번호 확인을 입력하세요.");
      return;
    } else if (nickName.trim() === "") {
      alert("닉네임을 입력하세요.");
      return;
    } else if (
      idValid.isValid ||
      pwValid.isValid ||
      pwCheckValid.isValid ||
      nickNameValid.isValid
    ) {
      return;
    }

    console.log("axios 회원가입 요청 ");
    //axios 회원가입 요청 보내기
    window.location.href = "/login";
  };

  return (
    <Box p="5" className="w-[500px]">
      <Grid templateColumns="repeat(5)" templateRows="repeat(5)" gap={5}>
        <GridItem rowSpan={1} colSpan={5}>
          <Input
            focusBorderColor="none"
            placeholder="이메일"
            value={id}
            onChange={idHandleChange}
            onBlur={idBlurHandle}
            border="1px"
            borderColor={idValid.isValid ? "red" : "black"}
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
            {idValid.message}
          </p>
        </GridItem>
        <GridItem rowSpan={1} colSpan={5}>
          <Input
            focusBorderColor="none"
            placeholder="비밀번호"
            value={pw}
            onChange={pwHandleChange}
            onBlur={pwBlurHandle}
            border="1px"
            borderColor={pwValid.isValid ? "red" : "black"}
            borderRadius="10"
            _hover={{}}
            type="password"
          />
          <p
            style={{
              color: "red",
              marginLeft: "5px",
              fontSize: "10px",
            }}
          >
            {pwValid.message}
          </p>
        </GridItem>
        <GridItem rowSpan={1} colSpan={5}>
          <Input
            focusBorderColor="none"
            placeholder="비밀번호 확인"
            value={pwCheck}
            onChange={pwCheckHandleChange}
            onBlur={pwCheckBlurHandle}
            border="1px"
            borderColor={pwCheckValid.isValid ? "red" : "black"}
            borderRadius="10"
            _hover={{}}
            type="password"
          />
          <p
            style={{
              color: "red",
              marginLeft: "5px",
              fontSize: "10px",
            }}
          >
            {pwCheckValid.message}
          </p>
        </GridItem>

        <GridItem rowSpan={1} colSpan={5}>
          <Input
            focusBorderColor="none"
            placeholder="닉네임"
            value={nickName}
            onChange={nickNameHandleChange}
            onBlur={nickNameBlurHandle}
            onKeyUp={handleKeyUp}
            border="1px"
            borderColor={nickNameValid.isValid ? "red" : "black"}
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
            {nickNameValid.message}
          </p>
        </GridItem>
        <GridItem rowSpan={1} colSpan={5} textAlign="center">
          <button
            onClick={() => {
              clickSignin();
            }}
            style={{
              width: "100%",
              border: "5px",
              backgroundColor: "yellow",
              borderRadius: "11px",
              height: "40px",
            }}
          >
            회원가입
          </button>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Signin;
