import Swal from "sweetalert2";
import { Toast } from "../atoms/Toast";

import ReverseSettingModal from "./ReverseSettingModal";
import ReverseFriendModal from "./ReverseFriendsModal";
import { logout } from "../../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { setLoginUser } from "../../modules/user";
function ReverseNavbar({ joinMembers }) {
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.user.loginUser);
  return (
    <div className="my-2 mx-4 flex justify-between">
      {/* 리버스 로고 버튼 - 메인 로비로 가기 버튼 & 로그아웃 버튼 모달 */}
      <div
        onClick={() => {
          Swal.fire({
            title: "리버스를 종료하시겠습니까?",
            text: "다음에 또 놀러와!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "로비로 가기",
            cancelButtonText: "로그아웃 하기",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/lobby";
              Toast.fire({
                icon: "success",
                title: "로비로 이동하였습니다",
                timer: 1500,
              });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              logout(
                (res) => {
                  dispatch(
                    setLoginUser({
                      nickname: "",
                      message: "",
                      avatar: "",
                      bestArchiveId: "",
                    })
                  );
                },
                (error) => {
                  console.log(error);
                }
              );
              // navigate("/");
              window.location.href = "/";
              Toast.fire({
                icon: "success",
                title: "로그아웃 되었습니다.",
                timer: 1500,
              });
            }
          });
        }}
        className="font-bold text-2xl drop-shadow cursor-pointer h-fit hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-main1 hover:to-main2 hover:-scale-x-100 transition hover:duration-500 duration-500"
      >
        REVERSE
      </div>
      <div>
        {/* 환경설정 버튼 - 음성, 마이크, 배경음악 */}
        <ReverseSettingModal />
        {/* 친구 관리 버튼 - 현재 접속중인 친구, 아카이브 공유 관리 */}
        <ReverseFriendModal joinMembers={joinMembers} />
      </div>
    </div>
  );
}

export default ReverseNavbar;
