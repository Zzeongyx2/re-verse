import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  createArticle,
  setAnniv,
  setDiary,
  setTravel,
  setTravelWriteIsOpen,
} from "../../modules/reverse";
import ArchiveDatePicker from "../molecules/ReverseDatePicker";

import { AiOutlineCalendar } from "react-icons/ai";
import ReverseTextEditor from "./ReverseTextEditor";
import { getStuffDetail, postPaper } from "../../api/reverse";

import moment from "moment/moment";
import { setReverseChatPress } from "../../modules/camera";

function TravelWriteModal() {
  const dispatch = useDispatch();
  const reverse = useSelector((state) => state.reverse);

  // 글 제목
  const [title, setTitle] = useState("");

  // 글 하나 게시하기
  const handlePostPaper = async () => {
    await postPaper(
      reverse.info.archiveId,
      reverse.info.stuffs[reverse.selectStuff].id,
      {
        title: title,
        content: reverse.article.content,
        memoryTime: moment(reverse.article.memoryDate).format("yyyy-MM-DD"),
      },
      success,
      fail
    );
  };
  const success = (res) => {
    getStuffDetail(
      reverse.info.archiveId,
      reverse.info.stuffs[reverse.selectStuff].id,
      stuffSuccess,
      stuffFail
    );
  };

  const stuffSuccess = (res) => {
    if (reverse.selectStuff === 0) {
      dispatch(setTravel({ ...reverse.travel, articleList: res.data.papers }));
    } else if (reverse.selectStuff === 1) {
      dispatch(setAnniv({ ...reverse.anniv, articleList: res.data.papers }));
    } else if (reverse.selectStuff === 2) {
      dispatch(setDiary({ ...reverse.diary, articleList: res.data.papers }));
    }
  };

  const stuffFail = (err) => {
    console.log(err);
  };

  const fail = (err) => {
    console.log(err);
  };

  return (
    <>
      <Modal isOpen={reverse.travelWriteIsOpen} size={"4xl"} isCentered>
        <ModalOverlay />
        <ModalContent minH={"750"}>
          <ModalHeader mb={4} textAlign="center">
            새 글 작성하기
          </ModalHeader>
          <ModalBody>
            <div className="flex justify-between">
              {/* 글 제목 */}
              <div className="w-[calc(98%/3*2)] border-2 border-[#d9d9d9] rounded-lg p-2 placeholder-base1">
                <p className="text-xs text-basic1">글 제목</p>
                <input
                  type="text"
                  className="w-full focus:outline-none mt-0.5"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  onFocus={() => {
                    dispatch(setReverseChatPress(true));
                  }}
                  onBlur={() => {
                    dispatch(setReverseChatPress(false));
                  }}
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

            <div className="my-3.5 w-full h-[520px] border-2 border-[#d9d9d9] rounded-lg p-2 placeholder-base1 overflow-auto scrollbar-hide">
              <ReverseTextEditor />
            </div>
          </ModalBody>

          <ModalFooter pt={0}>
            <button
              onClick={() => {
                dispatch(setTravelWriteIsOpen());
              }}
              className="font-bold bg-[#d9d9d9] px-6 py-2 rounded-xl text-sm mx-3"
            >
              취소하기
            </button>
            <button
              onClick={() => {
                dispatch(createArticle({ ...reverse.article, title: title }));
                handlePostPaper();
                dispatch(setTravelWriteIsOpen());
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
