import { BsQuestionLg } from "react-icons/bs";
import { Kbd } from "@chakra-ui/react";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";

import { imageForm, s3Path } from "../../api";

function ReverseManual({ joinMembers }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <button
        onClick={onOpen}
        className="border-2 border-white bg-gradient-to-t from-main2 to-sub2 flex items-center rounded-full mb-2"
      >
        <BsQuestionLg className="text-2xl m-1.5" size={20} />
      </button>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mb={3} textAlign="center">
            RE-VERSE 사용 가이드
          </ModalHeader>
          <ModalCloseButton mt={1.5} />
          <ModalBody>
            <div className="flex flex-col h-[400px] justify-between">
              {/* 리버스 소개 */}
              <div className="p-2 border-2 border-basic3 rounded-lg w-full h-[calc(96%/5*2-20px)]">
                <p className="font-bold px-1 pt-0.5 pb-1.5">리버스는 이러한 서비스입니다.</p>
              </div>

              {/* 조작 가이드 */}
              <div className="p-2 mb-4 border-2 border-basic3 rounded-lg w-full h-[calc(99%/3*2-20px)] ">
                <p className="font-bold px-1 pt-0.5 pb-1.5 mb-1.5">캐릭터 조작 키</p>
                <div>
                  <div>
                    <div className="w-8 h-8 border-4 text-center rounded-md shadow-md">W</div>
                  </div>
                  <Kbd fontSize={35}>w</Kbd>
                  <div className="h-7 w-7">
                    <Kbd>w</Kbd>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ReverseManual;
