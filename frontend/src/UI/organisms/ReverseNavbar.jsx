import { Link, useNavigate } from "react-router-dom";

import { BiCog, BiHeadphone } from "react-icons/bi";
import {
  BsFillPeopleFill,
  BsFillMicFill,
  BsMusicNoteBeamed,
} from "react-icons/bs";

import Swal from "sweetalert2";
import { Toast } from "../atoms/Toast";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";

// FIXME: 버튼 색깔 바꾸기

// TODO: MODAL이 나을까 아니면 SWAL이 나을까!!!

// FIXME: MODAL 컴포넌트 따로 뺄 것, 다른애들도 모달로 통일할 것!
function ReverseNavbar() {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <button
          onClick={onOpen}
          className="bg-white flex items-center rounded-full mb-2"
        >
          <BiCog className="text-2xl m-1.5" />
        </button>
        <Modal isOpen={isOpen} onClose={onClose} size={"sm"} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader mb={4} textAlign="center">
              환경설정
            </ModalHeader>
            <ModalCloseButton mt={1.5} />
            <ModalBody>
              <div className="flex flex-col items-center ">
                {/* 음성 */}
                <FormControl
                  display="flex"
                  alignItems="center"
                  justifyContent="space-evenly"
                  mb={4}
                  width="80"
                >
                  <FormLabel
                    htmlFor="headphone"
                    mb="0"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="between"
                    width="20"
                  >
                    <BiHeadphone size={24} />
                    <p className="text-sm">음성</p>
                  </FormLabel>
                  <Switch id="headphone" />
                </FormControl>

                {/* 마이크 */}
                <FormControl
                  display="flex"
                  alignItems="center"
                  justifyContent="space-evenly"
                  mb={4}
                  width="80"
                >
                  <FormLabel
                    htmlFor="mic"
                    mb="0"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    width="20"
                  >
                    <BsFillMicFill size={24} />
                    <p className="text-sm">마이크</p>
                  </FormLabel>
                  <Switch id="mic" />
                </FormControl>

                {/* 배경음악 */}
                <FormControl
                  display="flex"
                  alignItems="center"
                  justifyContent="space-evenly"
                  mb={4}
                  width="80"
                >
                  <FormLabel
                    htmlFor="bgm"
                    mb="0"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    width="20"
                  >
                    <BsMusicNoteBeamed size={24} />
                    <p className="text-sm">배경음악</p>
                  </FormLabel>
                  <Switch id="bgm" />
                </FormControl>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
        {/* 친구 관리 버튼 - 현재 접속중인 친구, 아카이브 공유 관리 */}
        <button className="bg-white flex items-center rounded-full">
          <BsFillPeopleFill className="text-2xl m-1.5" />
        </button>
      </div>
    </div>
  );
}

export default ReverseNavbar;
