import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { login } from "../../api/auth";

import Logo from "../atoms/Logo";
import NonLoginMain from "./NonLoginMain";

import { BsInfoCircle } from "react-icons/bs";
import { Toast } from "../atoms/Toast";
import { useSelector } from "react-redux";

function Login() {
  const loginUser = useSelector((state) => state.user.loginUser);

  useEffect(() => {
    if (loginUser.nickname.length !== 0) {
      window.location.href = "/lobby";
    }
  }, []);
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
    if (id.trim() === "") {
      // alert("아이디를 입력하세요");
      Toast.fire({
        icon: "error",
        title: "아이디를 입력하세요",
        timer: 1500,
      });
      return;
    } else if (pw.trim() === "") {
      // alert("비밀번호를 입력하세요.");
      Toast.fire({
        icon: "error",
        title: "비밀번호를 입력하세요",
        timer: 1500,
      });
      return;
    }

    //axios 로그인 요청 보내기
    login({ email: id, password: pw }, loginSuccess, loginFail);
  };
  const loginSuccess = (res) => {
    window.location.href = "/lobby";
  };
  const loginFail = (error) => {
    // alert("로그인실패");
    Toast.fire({
      icon: "warning",
      title: "유효하지 않은 계정입니다",
      timer: 1500,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Link to="/" element={<NonLoginMain />}>
        <Logo />
      </Link>
      <div className="flex flex-col box-border w-96 mt-8">
        <input
          className="mb-6 px-4 py-2 text-base font-semibold bg-white focus:bg-base2 focus:text-white outline-none border border-1 border-white rounded-md placeholder:text-base2/70 focus:placeholder:text-white"
          type="text"
          placeholder="아이디"
          value={id}
          onChange={idHandleChange}
          onKeyUp={handleKeyUp}
        />

        <input
          className="mb-6 px-4 py-2 text-base font-semibold bg-white focus:bg-base2 focus:text-white outline-none border border-1 border-white rounded-md placeholder:text-base2/70 focus:placeholder:text-white"
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={pwHandleChange}
          onKeyUp={handleKeyUp}
        />
        <button
          onClick={() => {
            clickLogin();
          }}
          className="py-2 text-base1 font-semibold text-lg bg-main2 hover:bg-sub2 transition hover:duration-300 rounded-md"
        >
          로그인
        </button>
        <Link to="/signin">
          <div className="flex justify-center items-center text-sm m-5 text-gray-400">
            <BsInfoCircle size={12} />
            <span className="px-1.5">아직 회원이 아니신가요?</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Login;
