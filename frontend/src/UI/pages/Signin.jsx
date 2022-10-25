import React from "react";
import { useState } from "react";
import { Box, Grid, GridItem, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logo from "../atoms/Logo";

function Signin() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [nickName, setNickName] = useState("");

  const [idValid, setIdValid] = useState({
    isValid: false,
    message: ".",
  });
  const [pwValid, setPwValid] = useState({
    isValid: false,
    message: ".",
  });
  const [pwCheckValid, setPwCheckValid] = useState({
    isValid: false,
    message: ".",
  });
  const [nickNameValid, setNickNameValid] = useState({
    isValid: false,
    message: ".",
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
    let idRE = new RegExp("[a-zA-Z0-9]+@[a-zA-Z]+[.][a-zA-Z]{2,3}$");
    // let idRE = new RegExp("[a-zA-Z0-9]+@[a-zA-Z]+[.][a-zA-Z]$");
    if (!idRE.test(id)) {
      setIdValid({ isValid: true, message: "*이메일 형식이 아닙니다." });
      console.log(idValid);
      console.log(id);
      return;
    }
    setIdValid({ isValid: false, message: "." });
    // axios 요청으로 id 중복검사하기
    // setIdValid({ isValid: true, message: "이미 가입된 아이디입니다." });
  };
  const pwBlurHandle = (e) => {
    let pwRE = new RegExp("^[a-zA-Z0-9~!@]{4,12}$");
    if (!pwRE.test(pw)) {
      setPwValid({
        isValid: true,
        message:
          "*4~12글자, 영문대소문자, 숫자, 특수문자(~,!,@)만 사용 가능합니다.",
      });
      return;
    }
    setPwValid({ isValid: false, message: "." });
  };
  const pwCheckBlurHandle = (e) => {
    if (pw !== pwCheck) {
      setPwCheckValid({
        isValid: true,
        message: "*비밀번호가 일치하지 않습니다.",
      });
      return;
    }
    setPwCheckValid({ isValid: false, message: "." });
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
    setNickNameValid({ isValid: false, message: "." });
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
    <Box className="bg-base2 h-screen flex items-center justify-center">
      <Box className="max-w-md">
        <Grid templateColumns="repeat(5)" templateRows="repeat(5)" gap={3}>
          <GridItem rowSpan={1} colSpan={5} py={4}>
            <Link to="/login" element={<Login />}>
              <Logo />
            </Link>
          </GridItem>
          <GridItem rowSpan={1} colSpan={5}>
            <Input
              className="text-base2 text-md font-semibold focus:text-white focus:placeholder-white  placeholder:text-base2 placeholder:text-md placeholder:font-semibold"
              height={12}
              focusBorderColor="white"
              placeholder="이메일"
              variant="filled"
              value={id}
              onChange={idHandleChange}
              onBlur={idBlurHandle}
            />
            <p
              className={
                "text-xs mt-1 ml-1" +
                (idValid.isValid
                  ? " flex text-red-500"
                  : " flex text-transparent")
              }
            >
              {idValid.message}
            </p>
          </GridItem>

          <GridItem rowSpan={1} colSpan={5}>
            <Input
              className="text-base2 text-md font-semibold focus:text-white focus:placeholder-white  placeholder:text-base2 placeholder:text-md placeholder:font-semibold"
              height={12}
              focusBorderColor="white"
              placeholder="비밀번호"
              variant="filled"
              value={pw}
              onChange={pwHandleChange}
              onBlur={pwBlurHandle}
              type="password"
            />
            <p
              className={
                "text-xs mt-1 ml-1" +
                (pwValid.isValid
                  ? " flex text-red-500"
                  : " flex text-transparent")
              }
            >
              {pwValid.message}
            </p>
          </GridItem>

          <GridItem rowSpan={1} colSpan={5}>
            <Input
              className="text-base2 text-md font-semibold focus:text-white focus:placeholder-white  placeholder:text-base2 placeholder:text-md placeholder:font-semibold"
              height={12}
              focusBorderColor="white"
              placeholder="비밀번호 확인"
              variant="filled"
              value={pwCheck}
              onChange={pwCheckHandleChange}
              onBlur={pwCheckBlurHandle}
              type="password"
            />
            <p
              className={
                "text-xs mt-1 ml-1" +
                (pwCheckValid.isValid
                  ? " flex text-red-500"
                  : " flex text-transparent")
              }
            >
              {pwCheckValid.message}
            </p>
          </GridItem>

          <GridItem rowSpan={1} colSpan={5}>
            <Input
              className="text-base2 text-md font-semibold focus:text-white focus:placeholder-white  placeholder:text-base2 placeholder:text-md placeholder:font-semibold"
              height={12}
              focusBorderColor="white"
              placeholder="닉네임"
              variant="filled"
              value={nickName}
              onChange={nickNameHandleChange}
              onBlur={nickNameBlurHandle}
              onKeyUp={handleKeyUp}
            />
            <p
              className={
                "text-xs mt-1 ml-1" +
                (nickNameValid.isValid
                  ? " flex text-red-500"
                  : " flex text-transparent")
              }
            >
              {nickNameValid.message}
            </p>
          </GridItem>

          <GridItem rowSpan={1} colSpan={5} textAlign="center">
            <button
              onClick={() => {
                clickSignin();
              }}
              className="text-base1 font-semibold text-lg w-full h-12 bg-main2 hover:bg-sub2 hover:duration-300 rounded-lg"
              // style={{
              //   width: "100%",
              //   border: "5px",
              //   backgroundColor: "yellow",
              //   borderRadius: "11px",
              //   height: "40px",
              // }}
            >
              회원가입
            </button>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default Signin;
