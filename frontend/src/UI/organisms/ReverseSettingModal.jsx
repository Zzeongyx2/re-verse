import {
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Switch,
  useDisclosure,
} from "@chakra-ui/react";
import { BiCog, BiHeadphone } from "react-icons/bi";
import { BsFillMicFill, BsMusicNoteBeamed } from "react-icons/bs";

function ReverseSettingModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
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
    </div>
  );
}

export default ReverseSettingModal;
