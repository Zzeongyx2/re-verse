import { Link, useNavigate } from "react-router-dom";

import { BiCog, BiPurchaseTag } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { Toast } from "../atoms/Toast";

// FIXME: 버튼 색깔 바꾸기
function ReverseNavbar() {
  const navigate = useNavigate();

  return (
    <div className="my-2 mx-4 flex justify-between">
      {/* 리버스 로고 버튼 - 메인 로비로 가기 버튼 & 로그아웃 버튼 모달 */}
      <div
        onClick={() => {
          Swal.fire({
            title: "리버스를 종료하시겠습니까?",
            text: "이히히",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "로비로 가기",
            cancelButtonText: "로그아웃 하기",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/lobby");
              Toast.fire({
                icon: "success",
                title: "로비로 이동하였습니다",
                timer: 1500,
              });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              localStorage.removeItem("accessToken");
              navigate("/");
              Toast.fire({
                icon: "success",
                title: "로그아웃 되었습니다.",
                timer: 1500,
              });
            }
          });
        }}
        className="font-bold text-2xl drop-shadow cursor-pointer h-fit hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-main1 hover:to-main2 "
      >
        REVERSE
      </div>

      <div>
        {/* 환경설정 버튼 - 음성, 마이크, 배경음악 */}
        <button className="bg-white flex items-center rounded-full mb-2">
          <BiCog className="text-2xl m-1.5" />
        </button>
        {/* 친구 관리 버튼 - 현재 접속중인 친구, 아카이브 공유 관리 */}
        <button className="bg-white flex items-center rounded-full">
          <BsFillPeopleFill className="text-2xl m-1.5" />
        </button>
      </div>
    </div>
  );
}

export default ReverseNavbar;
