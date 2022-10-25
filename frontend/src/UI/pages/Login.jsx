import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { Box, Grid, GridItem, Input } from "@chakra-ui/react";
import Logo from "../atoms/Logo";
import NonLoginMain from "./NonLoginMain";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const idHandleChange = (e) => {
    setId(e.target.value);
  };

  const pwHandleChange = (e) => {
    setPw(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      clickLogin();
    }
  };

  const clickLogin = () => {
    //axios 요청 보내기
    console.log("33줄");
    console.log({ id: id, pw: pw });

    if (id.trim() === "") {
      alert("아이디를 입력하세요");
      return;
    } else if (pw.trim() === "") {
      alert("비밀번호를 입력하세요.");
      return;
    }

    console.log("axios 로그인 요청 ");
  };

  return (
    <Box className="bg-base2 h-screen flex items-center justify-center">
      <Box className="max-w-md">
        <Grid templateColumns="repeat(5)" templateRows="repeat(4)" gap={5}>
          <GridItem rowSpan={1} colSpan={5} py={4}>
            <Link to="/" element={<NonLoginMain />}>
              <Logo />
            </Link>
          </GridItem>
          <GridItem rowSpan={1} colSpan={5} border="1px" borderRadius="10">
            <Input
              className="text-base2 text-md font-semibold focus:text-white focus:placeholder-white  placeholder:text-base2 placeholder:text-md placeholder:font-semibold"
              height={12}
              variant="filled"
              focusBorderColor="white"
              placeholder="아이디"
              value={id}
              onChange={idHandleChange}
            />
          </GridItem>
          <GridItem rowSpan={1} colSpan={5} border="1px" borderRadius="10">
            <Input
              className="text-base2 text-md font-semibold focus:text-white focus:placeholder-white  placeholder:text-base2 placeholder:text-md placeholder:font-semibold"
              height={12}
              variant="filled"
              focusBorderColor="white"
              placeholder="비밀번호"
              value={pw}
              onChange={pwHandleChange}
              onKeyUp={handleKeyUp}
              type="password"
            />
          </GridItem>
          <GridItem rowSpan={1} colSpan={5} textAlign="center">
            <button
              onClick={() => {
                clickLogin();
              }}
              className="text-base1 font-semibold text-lg w-full h-12 bg-main2 hover:bg-sub2 hover:duration-300 rounded-lg"
            >
              로그인
            </button>
            <Link to="/signin">
              <div className="flex justify-center items-center text-sm m-5 text-gray-400">
                <BsInfoCircle />
                <span className="px-1.5">아직 회원이 아니신가요?</span>
              </div>
            </Link>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default Login;
