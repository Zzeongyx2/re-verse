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
import { getStuffDetail } from "../../api/reverse";
import { setTravel, setTravelReadIsOpen } from "../../modules/reverse";

import { AiOutlineClose } from "react-icons/ai";
import ArticlesTimeline from "./TravelTimeline";
import ArticleDetail from "./ArticleDetail";

function TravelReadModal() {
  const dispatch = useDispatch();
  const reverse = useSelector((state) => state.reverse);

  // useEffect(() => {
  //   getStuffDetail(archiveId, stuffId, getDetailSuccess, getDetailFail);
  // }, []);
  const getDetailSuccess = (res) => {
    console.log(res);
    dispatch(
      setTravel({
        ...reverse.travel,
        articleList: res.data.papers,
      })
    );
  };
  const getDetailFail = (err) => {
    console.log(err);
  };
  useEffect(() => {
    getStuffDetail(
      reverse.info.archiveId,
      reverse.info.stuffs[0].id,
      getDetailSuccess,
      getDetailFail
    );
  }, []);

  return (
    <>
      <Modal
        isOpen={reverse.travelReadIsOpen}
        // onClose={dispatch(setOpen())}
        size={"4xl"}
        isCentered
      >
        <ModalOverlay />
        <ModalContent minH={"500"}>
          <ModalHeader mb={4} textAlign="center">
            <div className="flex justify-between items-center">
              윤선이의 여행 기록
              <AiOutlineClose
                className="cursor-pointer"
                onClick={() => {
                  console.log("닫기 버튼");
                  dispatch(setTravelReadIsOpen());
                }}
              />
            </div>
          </ModalHeader>
          {/* <ModalCloseButton mt={1.5} /> */}
          <ModalBody>
            <div className="flex justify-between">
              {/* timeline */}
              <div className="bg-white border-basic3 rounded-lg w-[calc(96%/3)] h-[500px] border-2">
                <div className="font-bold text-center py-3">timeline</div>
                <div className="h-[calc(90%)] overflow-auto scrollbar-hide">
                  <ArticlesTimeline />
                </div>
              </div>
              {/* article detail */}
              <div className="bg-white border-basic3 rounded-lg w-[calc(96%/3*2)]  border-2 p-4">
                <ArticleDetail />
              </div>
            </div>

            {/* {reverse.travelArticleList.map((article, idx) => {
              return (
                <div key={`travel-${idx}`}>
                  <div>{article.title}</div>
                </div>
              );
            })} */}

            {/* <div class="relative max-w-2xl">
              <div class="absolute top-0 h-full border-r-2 border-gray-500 left-3"></div>
              <ul class="space-y-2">
                <li>
                  <div class="flex items-center">
                    <span class="w-6 h-6 bg-gray-500 rounded-full"></span>
                    <h5 class="ml-4 font-bold text-gray-600">
                      Tailwind CSS 3.0
                    </h5>
                  </div>
                  <div class="ml-12">
                    <p class="text-sm text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur Lorem, ipsum dolor
                      si
                    </p>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <span class="w-6 h-6 bg-gray-500 rounded-full"></span>
                    <h5 class="ml-4 font-bold text-gray-600">
                      Tailwind CSS 3.0.5v
                    </h5>
                  </div>
                  <div class="ml-12">
                    <p class="text-sm text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur Lorem, ipsum dolor
                      si
                    </p>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <span class="w-6 h-6 bg-gray-500 rounded-full"></span>
                    <h5 class="ml-4 font-bold text-gray-600">
                      Tailwind CSS 3.0.7v
                    </h5>
                  </div>
                  <div class="ml-12">
                    <p class="text-sm text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur Lorem, ipsum dolor
                      si
                    </p>
                  </div>
                </li>
              </ul>
            </div> */}
          </ModalBody>

          <ModalFooter pt={0}>
            {/* <button
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
            </button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TravelReadModal;
