import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Login from "./Login";
import Logo from "../atoms/Logo";

import { signin, emailCheck } from "../../api/auth";
import { nicknameCheck } from "../../api/user";
import { Toast } from "../atoms/Toast";
import { useSelector } from "react-redux";

function SignIn() {
  const loginUser = useSelector((state) => state.user.loginUser);

  useEffect(() => {
    if (loginUser.nickname.length !== 0) {
      window.location.href = "/lobby";
    }
  }, []);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [nickName, setNickName] = useState("");

  const [idValid, setIdValid] = useState({
    isValid: true,
    message: ".",
  });
  const [pwValid, setPwValid] = useState({
    isValid: true,
    message: ".",
  });
  const [pwCheckValid, setPwCheckValid] = useState({
    isValid: true,
    message: ".",
  });
  const [nickNameValid, setNickNameValid] = useState({
    isValid: true,
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
    if (!idRE.test(id)) {
      setIdValid({ isValid: false, message: "*이메일 형식이 아닙니다." });
      return;
    }
    setIdValid({ isValid: true, message: "." });
    emailCheck(id, emailCheckSuccess, emailCheckFail);
  };
  const emailCheckSuccess = (res) => {
    setIdValid({ isValid: true, message: "." });
  };
  const emailCheckFail = (error) => {
    setIdValid({
      isValid: false,
      message: "*이미 가입된 아이디입니다.",
    });
  };
  const pwBlurHandle = (e) => {
    let pwRE = new RegExp("^[a-zA-Z0-9~!@]{4,12}$");
    if (!pwRE.test(pw)) {
      setPwValid({
        isValid: false,
        message:
          "*4~12글자, 영문대소문자, 숫자, 특수문자(~,!,@)만 사용 가능합니다.",
      });
      return;
    }
    setPwValid({ isValid: true, message: "." });
  };
  const pwCheckBlurHandle = (e) => {
    if (pw !== pwCheck) {
      setPwCheckValid({
        isValid: false,
        message: "*비밀번호가 일치하지 않습니다.",
      });
      return;
    }
    setPwCheckValid({ isValid: true, message: "." });
  };
  const nickNameBlurHandle = (e) => {
    let nickNameRE = new RegExp("^[a-zA-Z0-9가-힣_]{2,12}$");
    if (!nickNameRE.test(nickName)) {
      setNickNameValid({
        isValid: false,
        message: "*2~12글자 사이로 입력해주세요.",
        // TODO: 몇글자인지 정하기
      });
      return;
    }
    setNickNameValid({ isValid: true, message: "." });
    //axios 요청으로 닉네임 중복검사하기
    nicknameCheck(nickName, nickCheckSuccess, nickCheckFail);
  };
  const nickCheckSuccess = (res) => {
    setNickNameValid({ isValid: true, message: "." });
  };
  const nickCheckFail = (error) => {
    setNickNameValid({
      isValid: false,
      message: "*중복된 닉네임 입니다.",
    });
  };

  const clickSignin = () => {
    if (id.trim() === "") {
      Toast.fire({
        icon: "error",
        title: "아이디를 입력하세요",
        timer: 1500,
      });
      return;
    } else if (pw.trim() === "") {
      Toast.fire({
        icon: "error",
        title: "비밀번호를 입력하세요",
        timer: 1500,
      });
      return;
    } else if (pwCheck.trim() === "") {
      Toast.fire({
        icon: "error",
        title: "비밀번호가 일치하지 않습니다",
        timer: 1500,
      });
      return;
    } else if (nickName.trim() === "") {
      Toast.fire({
        icon: "error",
        title: "닉네임을 입력하세요",
        timer: 1500,
      });
      return;
    } else if (
      !idValid.isValid ||
      !pwValid.isValid ||
      !pwCheckValid.isValid ||
      !nickNameValid.isValid
    ) {
      return;
    }

    //axios 회원가입 요청 보내기
    signin(
      {
        email: id,
        password: pw,
        nickname: nickName,
      },
      signinSuccess,
      signinFail
    );
  };
  const signinSuccess = () => {
    window.location.href = "/login";
  };
  const signinFail = () => {
    Toast.fire({
      icon: "warning",
      title: "회원가입 실패",
      timer: 1500,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Link to="/login" element={<Login />}>
        <Logo />
      </Link>
      <div className="mt-8">
        {/* 이메일 */}
        <div className="mb-1">
          <input
            className="w-96 px-4 py-2 text-base font-semibold bg-white focus:bg-base2 focus:text-white outline-none border border-1 border-white rounded-md placeholder:text-base2/70 focus:placeholder:text-white"
            type="text"
            placeholder="이메일"
            value={id}
            onChange={idHandleChange}
            onBlur={idBlurHandle}
          />
          <p
            className={
              "text-[10px] mt-1 ml-1" +
              (idValid.isValid
                ? "flex text-transparent "
                : "flex text-red-500 ")
            }
          >
            {idValid.message}
          </p>
        </div>
        {/* 비밀번호 */}
        <div className="mb-1">
          <input
            className="w-96 px-4 py-2 text-base font-semibold bg-white focus:bg-base2 focus:text-white outline-none border border-1 border-white rounded-md placeholder:text-base2/70 focus:placeholder:text-white"
            placeholder="비밀번호"
            value={pw}
            onChange={pwHandleChange}
            onBlur={pwBlurHandle}
            type="password"
          />
          <p
            className={
              "text-[10px] mt-1 ml-1" +
              (pwValid.isValid
                ? "flex text-transparent "
                : "flex text-red-500  ")
            }
          >
            {pwValid.message}
          </p>
        </div>
        {/* 비밀번호 확인 */}
        <div className="mb-1">
          <input
            className="w-96 px-4 py-2 text-base font-semibold bg-white focus:bg-base2 focus:text-white outline-none border border-1 border-white rounded-md placeholder:text-base2/70 focus:placeholder:text-white"
            placeholder="비밀번호 확인"
            value={pwCheck}
            onChange={pwCheckHandleChange}
            onBlur={pwCheckBlurHandle}
            type="password"
          />
          <p
            className={
              "text-[10px] mt-1 ml-1" +
              (pwCheckValid.isValid
                ? "flex text-transparent "
                : "flex text-red-500 ")
            }
          >
            {pwCheckValid.message}
          </p>
        </div>
        {/* 닉네임 */}
        <div className="mb-1">
          <input
            className="w-96 px-4 py-2 text-base font-semibold bg-white focus:bg-base2 focus:text-white outline-none border border-1 border-white rounded-md placeholder:text-base2/70 focus:placeholder:text-white"
            placeholder="닉네임"
            value={nickName}
            onChange={nickNameHandleChange}
            onBlur={nickNameBlurHandle}
            onKeyUp={handleKeyUp}
            type="text"
          />
          <p
            className={
              "text-[10px] mt-1 ml-1" +
              (nickNameValid.isValid
                ? "flex text-transparent "
                : "flex text-red-500 ")
            }
          >
            {nickNameValid.message}
          </p>
        </div>
        <button
          onClick={() => {
            clickSignin();
          }}
          className="w-96 py-2 text-base1 font-semibold text-lg bg-main2 hover:bg-sub2 transition hover:duration-300 rounded-md"
        >
          회원가입
        </button>
      </div>
    </div>
  );
}

export default SignIn;
