import React from "react";
import { useSelector } from "react-redux";
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
