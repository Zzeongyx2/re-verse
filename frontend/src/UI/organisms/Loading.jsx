import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../api/user";
import { setLoginUser } from "../../modules/user";
import NeonLightBG from "../atoms/NeonLightBG";

function Loading() {
  const loginUser = useSelector((state) => state.user.loginUser);
  console.log(loginUser);
  return (
    <div className="bg-base2 absolute w-full h-full z-50 align-middle">
      <NeonLightBG />
    </div>
  );
}

export default Loading;
