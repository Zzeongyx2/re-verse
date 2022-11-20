import React from "react";
import { Link } from "react-router-dom";

function LobbyButton({
  linkTo,
  textcolor,
  buttonTitle,
  buttonMessage,
  from,
  to,
}) {
  return (
    <Link to={linkTo}>
      <div
        className={`h-[90px] w-full ${textcolor} bg-gradient-to-t ${from} ${to} border border-1 border-white rounded-2xl p-5 text-end`}
      >
        <div className="font text-sm drop-shadow text-ellipsis overflow-hidden line-clamp-1">
          {buttonTitle}
        </div>
        <div className="font-bold text-lg drop-shadow text-ellipsis overflow-hidden line-clamp-1">
          {buttonMessage}
        </div>
      </div>
    </Link>
  );
}

export default LobbyButton;
