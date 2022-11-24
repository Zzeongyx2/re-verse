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

import { Avatar } from "@chakra-ui/react";

import polaroid from "../../assets/guide_polaroid.png";
import notebook from "../../assets/guide_notebook.png";
import piggy from "../../assets/piggy.png";

function ReverseManual() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <button
        onClick={onOpen}
        className="border-2 border-white bg-gradient-to-tr from-main1 to-main2 flex items-center rounded-full mb-2"
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
              <div className="p-2 border-2 border-basic3 rounded-lg w-full h-[calc(94%*0.52)]">
                <p className="font-bold px-1 pt-0.5 pb-1.5">HOW TO USE?</p>
                <div>
                  <div className="flex items-center">
                    <div className="w-16">
                      <Avatar name="notebook" src={notebook} />
                    </div>
                    <p className="font-hand">
                      첫번째, 노트북을 클릭하여 추억을 기록한다.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16">
                      <Avatar name="polaroid" src={polaroid} />
                    </div>
                    <p className="font-hand">
                      두번째, 폴라로이드를 클릭하여 기록된 추억을 구경한다.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16">
                      <Avatar name="piggy" src={piggy} size={"md"} />
                    </div>
                    <p className="font-hand">
                      세번째, 친구들을 초대하여 리버스를 즐긴다!
                    </p>
                  </div>
                </div>
                <div className="flex"></div>
              </div>

              {/* 조작 가이드 */}
              <div className="p-2 mb-4 border-2 border-basic3 rounded-lg w-full h-[calc(94%*0.48)] ">
                <p className="font-bold px-1 pt-0.5 pb-1.5 mb-1.5">
                  캐릭터 조작 키
                </p>
                <div className="flex items-end justify-between mt-2">
                  {/* wasd */}
                  <div className="text-center w-[calc(96%/2)] h-full">
                    <Kbd fontSize={32}>W</Kbd>
                    <div className="mt-3">
                      <Kbd margin={1} fontSize={32}>
                        A
                      </Kbd>
                      <Kbd margin={1} fontSize={32}>
                        S
                      </Kbd>
                      <Kbd margin={1} fontSize={32}>
                        D
                      </Kbd>
                    </div>
                    <div className="font-bold mt-3 text-sm">이동 키</div>
                  </div>
                  {/* y */}
                  <div className="w-[calc(96%/2)] h-full text-center">
                    <Kbd fontSize={32}>Y</Kbd>
                    <div className="font-bold mt-3 text-sm">
                      카메라 시점 변경
                    </div>
                  </div>
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
