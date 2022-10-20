import React from "react";
import { Box, Grid, TextField } from "@mui/material";
import { useState } from "react";

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
    if (e.key == "Enter") {
    }
  };
  // const loginInput: LoginInput = {
  //     id: "",
  //     pw: ""
  // }
  return (
    <Box sx={{ width: 300, mx: 10, my: 5 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <TextField
            value={id}
            autoComplete="email"
            fullWidth
            label="아이디"
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
            onChange={pwHandleChange}
            onKeyUp={handleKeyUp}
          />
        </Grid>
        <Grid item xs={8} sx={{ alignItems: "center" }}>
          <button>로그인</button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
