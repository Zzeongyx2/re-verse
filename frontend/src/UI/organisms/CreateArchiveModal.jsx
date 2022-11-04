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
import { useRef, useState } from "react";
import { postArchive } from "../../api/archive";

function CreateArchiveModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [newTitle, setNewTitle] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const handleNewTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const handleNewMessage = (e) => {
    setNewMessage(e.target.value);
  };

  const [clickBtn, setClickBtn] = useState(false);

  const handleArchiveSubmit = () => {
    const formData = new FormData();
    const content = {
      newTitle: newTitle,
      newMessage: newMessage,
    };
    const json = JSON.stringify(content);
    formData.append("content", json);

    postArchive(
      json,
      (res) => {
        setNewTitle(res.data.newTitle);
        setNewMessage(res.data.newMessage);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <>
      {/* modal button */}
      <button
        className="border border-white rounded-3xl bg-gradient-to-t to-extra2 from-extra1 font-bold px-6"
        onClick={onOpen}
      >
        새 아카이브 생성
      </button>

      {/* create archive modal */}
      <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mb={4} textAlign="center">
            새 아카이브 생성
          </ModalHeader>
          <ModalCloseButton mt={1.5} />
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
              onClick={onClose}
              className="font-bold bg-[#d9d9d9] px-6 py-2 rounded-xl text-sm mx-3"
            >
              취소하기
            </button>
            <button
              onClick={() => {
                // handleArchiveSubmit();
                onClose();
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

export default CreateArchiveModal;
