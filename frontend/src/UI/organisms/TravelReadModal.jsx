import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editPaper, getPaper, getStuffDetail } from "../../api/reverse";
import { setAnniv, setDiary, setEditBtn, setInfo, setTravel } from "../../modules/reverse";

import { AiOutlineCalendar } from "react-icons/ai";

import ArchiveDatePicker from "../molecules/ReverseDatePicker";
import ReverseTextEditor from "./ReverseTextEditor";

import moment from "moment/moment";
import ArticleDetailCard from "./ArticleDetailCard";
import ArchiveTimeline from "./ArchiveTimeline";
import { setReverseChatPress } from "../../modules/camera";

function TravelReadModal() {
  const dispatch = useDispatch();
  const reverse = useSelector((state) => state.reverse);
  const [editTitle, setEditTitle] = useState("");
  useEffect(() => {
    if (reverse.info.details) setEditTitle(reverse.info.details.title);
  }, [reverse.info.details]);
  const handleEditTitle = (e) => {
    setEditTitle(e.target.value);
  };
  const handleGetDetail = async () => {
    await getPaper(
      reverse.info.archiveId,
      reverse.info.stuffs[reverse.selectStuff].id,
      reverse.info.details.id,
      success,
      fail
    );
  };
  const success = (res) => {
    dispatch(setInfo({ ...reverse.info, details: res.data }));
  };

  const fail = (err) => {};
  const editSaveContent = () => {
    dispatch(
      setInfo({
        archiveId: reverse.info.archiveId,
        stuffs: reverse.info.stuffs,
        details: { ...reverse.info.details, title: editTitle },
      })
    );
  };

  useEffect(() => {
    editSaveContent();
  }, [editTitle]);
  const handleEditSubmit = async () => {
    await editPaper(
      reverse.info.archiveId,
      reverse.info.stuffs[reverse.selectStuff].id,
      reverse.info.details.id,

      {
        title: editTitle,
        content: reverse.info.details.content,
        memoryTime: moment(reverse.info.details.memoryTime).format("yyyy-MM-DD"),
      },
      editSuccess,
      editFail
    );
  };

  const editSuccess = (res) => {
    getStuffDetail(
      reverse.info.archiveId,
      reverse.info.stuffs[reverse.selectStuff].id,
      stuffSuccess,
      stuffFail
    );
  };

  const stuffSuccess = (res) => {
    if (reverse.selectStuff == 0) {
      dispatch(setTravel({ ...reverse.travel, articleList: res.data.papers }));
    } else if (reverse.selectStuff == 1) {
      dispatch(setAnniv({ ...reverse.anniv, articleList: res.data.papers }));
    } else if (reverse.selectStuff == 2) {
      dispatch(setDiary({ ...reverse.diary, articleList: res.data.papers }));
    }
  };

  const stuffFail = (err) => {};

  const editFail = (err) => {};

  const getDetailSuccess = (res) => {
    if (reverse.selectStuff == 0) {
      dispatch(setTravel({ ...reverse.travel, articleList: res.data.papers }));
    } else if (reverse.selectStuff == 1) {
      dispatch(setAnniv({ ...reverse.anniv, articleList: res.data.papers }));
    } else if (reverse.selectStuff == 2) {
      dispatch(setDiary({ ...reverse.diary, articleList: res.data.papers }));
    }
  };
  const getDetailFail = (err) => {};
  useEffect(() => {
    getStuffDetail(
      reverse.info.archiveId,
      reverse.info.stuffs[reverse.selectStuff].id,
      getDetailSuccess,
      getDetailFail
    );
  }, []);
  useEffect(() => {
    getStuffDetail(
      reverse.info.archiveId,
      reverse.info.stuffs[reverse.selectStuff].id,
      getDetailSuccess,
      getDetailFail
    );
    dispatch(setInfo({ ...reverse.info, details: null }));
  }, [reverse.selectStuff]);

  return (
    <>
      <Modal isOpen={reverse.travelReadIsOpen} size={"4xl"} isCentered>
        <ModalOverlay />
        {!reverse.editBtn ? (
          <ModalContent minH="800" maxW="500">
            <ModalBody p={0} bgColor={"transparent"}>
              <div
                className={`h-[800px] overflow-hidden ${
                  !reverse.isCardOpen ? "flex justify-center" : null
                }`}
              >
                {/* 글 목록 컴포넌트 */}
                {!reverse.isCardOpen && (
                  <div className="">
                    <ArchiveTimeline />

                    {/* <ArticlesTimeline /> */}
                  </div>
                )}
                {reverse.isCardOpen && <ArticleDetailCard />}
              </div>
            </ModalBody>
          </ModalContent>
        ) : (
          <ModalContent minH={"750"}>
            <ModalHeader mb={4} textAlign="center">
              글 수정하기
            </ModalHeader>
            <ModalBody>
              <div className="flex justify-between">
                {/* 글 제목 수정*/}
                <div className="w-[calc(98%/3*2)] border-2 border-[#d9d9d9] rounded-lg p-2 placeholder-base1">
                  <p className="text-xs text-basic1">글 제목</p>
                  <input
                    type="text"
                    className="w-full focus:outline-none mt-0.5"
                    value={editTitle}
                    onChange={(e) => {
                      handleEditTitle(e);
                    }}
                    onFocus={() => {
                      dispatch(setReverseChatPress(true));
                    }}
                    onBlur={() => {
                      dispatch(setReverseChatPress(false));
                    }}
                  />
                </div>
                {/* 기록 날짜 수정*/}
                <div className="w-[calc(98%/3)] border-2 border-[#d9d9d9] rounded-lg p-2 placeholder-base1">
                  <p className="text-xs text-basic1">기록 날짜</p>
                  <div className="flex items-center justify-between mr-1">
                    <ArchiveDatePicker />
                    <AiOutlineCalendar className="text-lg" />
                  </div>
                </div>
              </div>

              <div className="my-3.5 w-full h-[520px] border-2 border-[#d9d9d9] rounded-lg p-2 placeholder-base1 overflow-auto scrollbar-hide">
                {/* <글 내용 수정 /> */}
                <ReverseTextEditor />
              </div>
            </ModalBody>

            <ModalFooter pt={0}>
              <button
                onClick={() => {
                  handleGetDetail();
                  dispatch(setEditBtn());
                }}
                className="font-bold bg-[#d9d9d9] px-6 py-2 rounded-xl text-sm mx-3"
              >
                취소하기
              </button>
              <button
                onClick={() => {
                  dispatch(setEditBtn());
                  handleEditSubmit();
                }}
                className="font-bold bg-extra1 px-6 py-2 rounded-xl text-sm"
              >
                수정하기
              </button>
            </ModalFooter>
          </ModalContent>
        )}
      </Modal>
    </>
  );
}

export default TravelReadModal;
