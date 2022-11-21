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
import { useState } from "react";

import { BiPencil } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { editArchive, getArchiveList } from "../../api/archive";
import { setMyArchiveList } from "../../modules/archive";

// TODO: 기존 내용 가져와야 함
function EditArchiveModal({ archive }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const [editTitle, setEditTitle] = useState(archive.title);
  const [editMessage, setEditMessage] = useState(archive.description);
  const [clickBtn, setClickBtn] = useState(false);

  const editTitleHandle = (e) => {
    setEditTitle(e.target.value);
  };
  const editMessageHandle = (e) => {
    setEditMessage(e.target.value);
  };
  const handleArchiveSubmit = async () => {
    await editArchive(
      archive.archiveId,
      {
        title: editTitle,
        description: editMessage,
      },
      editArchiveSuccess,
      editArchiveFail
    );
    await getList();
  };
  const editArchiveSuccess = (res) => {};
  const editArchiveFail = (error) => {
    console.log(error);
  };
  const getList = async () => {
    await getArchiveList(0, getArchiveListSuccess, getArchiveListFail);
  };
  const getArchiveListSuccess = (res) => {
    dispatch(setMyArchiveList(res.data.archives));
  };
  const getArchiveListFail = (error) => {
    console.log(error);
  };
  return (
    <>
      {/* modal button */}
      <button
        className="bg-main3 border-2 border-basic3 rounded-full mx-1.5"
        onClick={onOpen}
      >
        <BiPencil size={18} className="text-white m-0.5" />
      </button>

      {/* create archive modal */}
      <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mb={4} textAlign="center">
            아카이브 수정
          </ModalHeader>
          <ModalCloseButton mt={1.5} />
          <ModalBody className="">
            <FormControl>
              <input
                type="text"
                value={editTitle}
                onChange={editTitleHandle}
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
                value={editMessage}
                onChange={editMessageHandle}
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
                setClickBtn(true);
                handleArchiveSubmit();
                onClose();
              }}
              className="font-bold bg-extra1 px-6 py-2 rounded-xl text-sm"
              disabled={clickBtn}
            >
              수정하기
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditArchiveModal;
