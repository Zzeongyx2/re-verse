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
} from "@chakra-ui/react";
import { useRef, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setOpen } from "../../modules/archive";

function MemoryWriteModal({}) {
  const openModal = useSelector((state) => state.archive.isOpen);
  // console.log(openModal);
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(onOpen);
  // console.log(onClose);
  // console.log(onClose());
  const dispatch = useDispatch();
  return (
    <>
      {/* <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered> */}
      <Modal
        isOpen={openModal}
        // onClose={dispatch(setOpen())}
        size={"lg"}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mb={4} textAlign="center">
            아카이브 수정
          </ModalHeader>
          {/* <ModalCloseButton mt={1.5} /> */}
          <ModalBody className="">
            <FormControl>
              <input
                type="text"
                placeholder="아카이브 이름"
                className="w-full focus:outline-none border-2 border-[#d9d9d9] rounded-lg p-2 placeholder-base1 focus:border-extra1"
              />
            </FormControl>

            <FormControl mt={4}>
              <textarea
                placeholder="아카이브 설명"
                name="message"
                id="message"
                rows="4"
                className="w-full focus:outline-none resize-none border-2 border-[#d9d9d9] rounded-lg p-2 placeholder-base1 focus:border-extra1"
              ></textarea>
            </FormControl>
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
                // handleArchiveSubmit();
                // onClose;
              }}
              className="font-bold bg-extra1 px-6 py-2 rounded-xl text-sm"
            >
              생성하기
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MemoryWriteModal;
