import React from "react";
import { Box, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";

// interface LoginInput {
//     id: string,
//     pw: string
// }

function Login() {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const idHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const pwHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
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

  // const loginInput: LoginInput = {
  //     id: "",
  //     pw: ""
  // }
  return (
    // <Box sx={{ width: 300, mx: 10, my: 5 }}>
    <Box component="div" style={{ display: "flex" }}>
      <Grid container spacing={3} sx={{ width: 300 }}>
        <Grid item xs={12}>
          <TextField
            value={id}
            autoComplete="email"
            fullWidth
            label="아이디"
            size="small"
            onChange={idHandleChange}
            // error={true}
            // helperText=""
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={pw}
            fullWidth
            label="비밀번호"
            type="password"
            size="small"
            onChange={pwHandleChange}
            onKeyUp={handleKeyUp}
          />
        </Grid>
        <Grid item xs={8}>
          <Box
            component="div"
            sx={{
              alignItems: "cneter",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <button
              type="button"
              onClick={() => {
                clickLogin();
              }}
            >
              로그인
            </button>
            <a
              href="/signin"
              style={{
                fontSize: 11,
                marginTop: 10,
                textDecoration: "none",
                color: "black",
              }}
            >
              <BsInfoCircle /> 아직 회원이 아니신가요?
            </a>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
