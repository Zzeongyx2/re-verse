import React from "react";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { Box, Grid, GridItem, Input } from "@chakra-ui/react";

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
    <Box p="5" className="w-[500px]">
      <Grid templateColumns="repeat(5)" templateRows="repeat(3)" gap={5}>
        <GridItem rowSpan={1} colSpan={5} border="1px" borderColor="black" borderRadius="10">
          <Input
            focusBorderColor="none"
            placeholder="아이디"
            value={id}
            onChange={idHandleChange}
            border="none"
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={5} border="1px" borderColor="black" borderRadius="10">
          <Input
            focusBorderColor="none"
            placeholder="비밀번호"
            value={pw}
            onChange={pwHandleChange}
            onKeyUp={handleKeyUp}
            border="none"
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={5} textAlign="center">
          <button
            onClick={() => {
              clickLogin();
            }}
            style={{
              width: "100%",
              border: "5px",
              backgroundColor: "yellow",
              borderRadius: "11px",
              height: "40px",
            }}
          >
            로그인
          </button>
          <a
            href="/signin"
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "13px",
              color: "gray",
              margin: "20px",
            }}
          >
            <BsInfoCircle />
            아직 회원이 아니신가요?
          </a>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Login;
