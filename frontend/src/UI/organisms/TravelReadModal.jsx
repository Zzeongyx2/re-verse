import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTravelReadIsOpen } from "../../modules/reverse";

function TravelReadModal() {
  const dispatch = useDispatch();
  const reverse = useSelector((state) => state.reverse);

  return (
    <>
      <Modal
        isOpen={reverse.travelReadIsOpen}
        // onClose={dispatch(setOpen())}
        size={"3xl"}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mb={4} textAlign="center">
            캠핑 기록
          </ModalHeader>
          {/* <ModalCloseButton mt={1.5} /> */}
          <ModalBody className=""></ModalBody>

          <ModalFooter pt={0}>
            <button
              onClick={() => {
                dispatch(setTravelReadIsOpen());
                console.log("cancel button");
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

export default TravelReadModal;
