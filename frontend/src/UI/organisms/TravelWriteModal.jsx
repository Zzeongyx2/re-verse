import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setOpen } from "../../modules/reverse";
import ArchiveDatePicker from "../molecules/ReverseDatePicker";

import { AiOutlineCalendar } from "react-icons/ai";
import { EditorComponent } from "./TextEditor";

function TravelWriteModal() {
  const openModal = useSelector((state) => state.reverse.isOpen);
  const dispatch = useDispatch();
  return (
    <>
      {/* <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered> */}
      <Modal
        isOpen={openModal}
        // onClose={dispatch(setOpen())}
        size={"3xl"}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mb={4} textAlign="center">
            새 글 작성하기
          </ModalHeader>
          {/* <ModalCloseButton mt={1.5} /> */}
          <ModalBody className="">
            <div className="flex justify-between">
              {/* 글 제목 */}
              <div className="w-[calc(98%/3*2)] border-2 border-[#d9d9d9] rounded-lg p-2 placeholder-base1">
                <p className="text-xs text-basic1">글 제목</p>
                <input
                  type="text"
                  className="w-full focus:outline-none mt-0.5"
                />
              </div>
              {/* 기록 날짜 */}
              <div className="w-[calc(98%/3)] border-2 border-[#d9d9d9] rounded-lg p-2 placeholder-base1">
                <p className="text-xs text-basic1">기록 날짜</p>
                <div className="flex items-center justify-between mr-1">
                  <ArchiveDatePicker />
                  <AiOutlineCalendar className="text-lg" />
                </div>
              </div>
            </div>

            {/* // TODO: draft js!!!!!
            // TODO: draft js!!!!!
            // TODO: draft js!!!!!
            // TODO: draft js!!!!!
            // TODO: draft js!!!!! */}
            <div className="mt-3.5 w-full h-full border-2 border-[#d9d9d9] rounded-lg p-2 placeholder-base1">
              <EditorComponent />
            </div>
          </ModalBody>

          <ModalFooter pt={0}>
            <button
              onClick={() => {
                dispatch(setOpen());
              }}
              className="font-bold bg-[#d9d9d9] px-6 py-2 rounded-xl text-sm mx-3"
            >
              취소하기
            </button>
            <button
              onClick={() => {
                console.log("article is posted!");
                // handleArchiveSubmit();
                // onClose;
              }}
              className="font-bold bg-extra1 px-6 py-2 rounded-xl text-sm"
            >
              게시하기
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TravelWriteModal;
