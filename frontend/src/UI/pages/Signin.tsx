import React from "react";
import { Box, Grid, TextField } from "@mui/material";
import { useState } from "react";

interface Valid {
  isValid: boolean;
  message: string;
}

function Login() {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [pwCheck, setPwCheck] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");

  const [idValid, setIdValid] = useState<Valid>({
    isValid: false,
    message: "",
  });
  const [pwValid, setPwValid] = useState<Valid>({
    isValid: false,
    message: "",
  });
  const [pwCheckValid, setPwCheckValid] = useState<Valid>({
    isValid: false,
    message: "",
  });
  const [nickNameValid, setNickNameValid] = useState<Valid>({
    isValid: false,
    message: "",
  });

  const idHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const pwHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };
  const pwCheckHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwCheck(e.target.value);
  };
  const nickNameHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      clickSignin();
    }
  };
  const idBlurHandle = (e: React.FocusEvent<HTMLInputElement>) => {
    let idRE = new RegExp("[a-zA-Z0-9]+@[a-zA-Z]+[.][a-zA-Z]$");
    if (!idRE.test(id)) {
      setIdValid({ isValid: true, message: "이메일 형식이 아닙니다." });
      console.log(idValid);
      return;
    }
    setIdValid({ isValid: false, message: "" });
    //axios 요청으로 id 중복검사하기
    // setIdValid({ isValid: true, message: "이미 가입된 아이디입니다." });
  };
  const pwBlurHandle = (e: React.FocusEvent<HTMLInputElement>) => {
    let pwRE = new RegExp("^[a-zA-Z0-9~!@]{4,12}$");
    if (!pwRE.test(pw)) {
      setPwValid({
        isValid: true,
        message:
          "4~12글자, 영문대소문자, 숫자, 특수문자(~,!,@)만 사용 가능합니다.",
      });
      return;
    }
    setPwValid({ isValid: false, message: "" });
  };
  const pwCheckBlurHandle = (e: React.FocusEvent<HTMLInputElement>) => {
    if (pw !== pwCheck) {
      setPwCheckValid({
        isValid: true,
        message: "비밀번호가 일치하지 않습니다.",
      });
      return;
    }
    setPwCheckValid({ isValid: false, message: "" });
  };
  const nickNameBlurHandle = (e: React.FocusEvent<HTMLInputElement>) => {
    let nickNameRE = new RegExp("^[a-zA-Z0-9가-힣_]{2,12}$");
    if (!nickNameRE.test(nickName)) {
      setNickNameValid({
        isValid: true,
        message: "2~12글자 사이로 입력해주세요.",
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
    <Box component="div" sx={{ width: 300, mx: 10, my: 5 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <TextField
            value={id}
            autoComplete="email"
            fullWidth
            label="아이디"
            size="small"
            onChange={idHandleChange}
            error={idValid.isValid}
            helperText={idValid.message}
            onBlur={idBlurHandle}
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
            error={pwValid.isValid}
            helperText={pwValid.message}
            onBlur={pwBlurHandle}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={pwCheck}
            fullWidth
            label="비밀번호확인"
            type="password"
            size="small"
            onChange={pwCheckHandleChange}
            error={pwCheckValid.isValid}
            helperText={pwCheckValid.message}
            onBlur={pwCheckBlurHandle}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={nickName}
            fullWidth
            label="닉네임"
            size="small"
            onChange={nickNameHandleChange}
            onKeyUp={handleKeyUp}
            error={nickNameValid.isValid}
            helperText={nickNameValid.message}
            onBlur={nickNameBlurHandle}
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
                clickSignin();
              }}
            >
              회원가입
            </button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
