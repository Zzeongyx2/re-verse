import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaper } from "../../api/reverse";
import {
  setInfo,
  setIsCardOpen,
  setTravelReadIsOpen,
} from "../../modules/reverse";

import { HiWifi } from "react-icons/hi";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { RiBattery2ChargeFill } from "react-icons/ri";
import { TbBluetoothConnected } from "react-icons/tb";
import { CloseButton } from "@chakra-ui/react";

function ArchiveTimeline() {
  const dispatch = useDispatch();
  const reverse = useSelector((state) => state.reverse);
  const [card, setCard] = useState(false);
  const handleOpenCard = () => {
    setCard((prev) => !prev);
  };
  const handleGetDetail = async (paperId) => {
    await getPaper(
      reverse.info.archiveId,
      reverse.info.stuffs[reverse.selectStuff].id,
      paperId,
      success,
      fail
    );
  };

  const success = (res) => {
    console.log(res);
    dispatch(setInfo({ ...reverse.info, details: res.data }));
  };

  const fail = (err) => {
    console.log(err);
  };

  const weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [time, setTime] = useState("00:00");
  const timeSet = new Set();

  const clock = () => {
    const time = new Date();
    const hours = time.getHours() % 24;
    const minutes = time.getMinutes();

    setTime(
      `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      }`
    );
  };

  useEffect(() => {
    setInterval(clock, 1000);
  }, []);

  return (
    <div className="">
      {/* <div className=" w-[300px] h-[600px] pr-6 flex flex-col p-2 rounded-lg"> */}
      <div className="ml-2 my-2 w-[334px] h-[584px] bg-white flex flex-col py-2 px-4 rounded-lg ring-8 border-4 ring-gray-200 border-gray-200">
        {/* Status Bar */}
        <div className="w-100 flex justify-between mb-2">
          <div>
            <span className="font-semibold text-gray-700 mr-2">SSAFY</span>
            <span>{time}</span>
          </div>
          <div className="flex">
            <TbBluetoothConnected className="text-gray-700 text-2xl" />
            <HiWifi className="ml-1 text-gray-700 text-2xl" />
            <MdOutlineSignalCellularAlt className="text-gray-700 text-2xl" />
            <RiBattery2ChargeFill className="text-gray-700 text-2xl" />
          </div>
        </div>

        {/* App Nav Bar */}
        <div className="flex justify-between font-neon">
          <div className="text-xl font-semibold">RE-VERSE</div>
          <CloseButton
            onClick={() => {
              // console.log("닫기 버튼");
              dispatch(setTravelReadIsOpen());
            }}
          />
        </div>
        <hr className="mt-1"></hr>

        {/* Content */}
        <div className="overflow-scroll scrollbar-hide font-hand">
          <div className="">
            <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
              {/* <div className="overflow-auto scollbar-hide"> */}
              {reverse.selectStuff === 0 &&
                !reverse.travel.articleList.length && (
                  <div>기록된 추억이 없어요!</div>
                )}
              {reverse.selectStuff === 1 &&
                !reverse.anniv.articleList.length && (
                  <div>기록된 추억이 없어요!</div>
                )}
              {reverse.selectStuff === 2 &&
                !reverse.diary.articleList.length && (
                  <div>기록된 추억이 없어요!</div>
                )}
              {/* 글 목록 컴포넌트 */}
              {/* 선택한 stuff가 여행일때 */}
              {reverse.selectStuff === 0 &&
                reverse.travel.articleList.length > 0 &&
                reverse.travel.articleList.map((article, idx) => {
                  // 중복되는 날짜는 동그라미 제거
                  const flag = timeSet.has(article.memoryTime);
                  if (!flag) {
                    timeSet.add(article.memoryTime);
                  }
                  return (
                    <div
                      className="flex md:contents"
                      key={`travel-${idx}`}
                      onClick={() => {
                        handleGetDetail(article.id);
                        dispatch(setIsCardOpen());
                      }}
                    >
                      <div className="col-start-1 col-end-3 mr-8 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                          <div className="h-full w-[1px] bg-gray-400 pointer-events-none"></div>
                        </div>
                        {!flag && (
                          <div className="w-4 h-4 absolute right-1 top-1/2 -mt-3 rounded-full bg-extra1 shadow text-center"></div>
                        )}
                      </div>
                      <div className="bg-gray-100 col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow w-full text-base2 cursor-pointer hover:bg-base0 hover:duration-700">
                        <p className="leading-tight text-justify w-full mb-1 text-sm">
                          {article.memoryTime}
                        </p>
                        <h3 className="font-semibold text-base truncate">
                          {article.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              {/* 선택한 stuff가 기념일일때 */}
              {reverse.selectStuff === 1 &&
                reverse.anniv.articleList.length > 0 &&
                reverse.anniv.articleList.map((article, idx) => {
                  // 중복되는 날짜는 동그라미 제거
                  const flag = timeSet.has(article.memoryTime);
                  if (!flag) {
                    timeSet.add(article.memoryTime);
                  }
                  return (
                    <div
                      className="flex md:contents"
                      key={`anniv-${idx}`}
                      onClick={() => {
                        handleGetDetail(article.id);
                        dispatch(setIsCardOpen());
                      }}
                    >
                      <div className="col-start-1 col-end-3 mr-8 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                          <div className="h-full w-[1px] bg-gray-400 pointer-events-none"></div>
                        </div>
                        {!flag && (
                          <div className="w-4 h-4 absolute right-1 top-1/2 -mt-3 rounded-full bg-extra1 shadow text-center"></div>
                        )}
                      </div>
                      <div className="bg-gray-100 col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow w-full text-base2 cursor-pointer hover:bg-base0 hover:duration-700">
                        <p className="leading-tight text-justify w-full mb-1 text-sm">
                          {article.memoryTime}
                        </p>
                        <h3 className="font-semibold text-base truncate">
                          {article.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              {/* 선택한 stuff가 일기일때 */}
              {reverse.selectStuff === 2 &&
                reverse.diary.articleList.length > 0 &&
                reverse.diary.articleList.map((article, idx) => {
                  // 중복되는 날짜는 동그라미 제거
                  const flag = timeSet.has(article.memoryTime);
                  if (!flag) {
                    timeSet.add(article.memoryTime);
                  }
                  return (
                    <div
                      className="flex md:contents"
                      key={`diary-${idx}`}
                      onClick={() => {
                        handleGetDetail(article.id);
                        dispatch(setIsCardOpen());
                      }}
                    >
                      <div className="col-start-1 col-end-3 mr-8 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                          <div className="h-full w-[1px] bg-gray-400 pointer-events-none"></div>
                        </div>
                        {!flag && (
                          <div className="w-4 h-4 absolute right-1 top-1/2 -mt-3 rounded-full bg-extra1 shadow text-center"></div>
                        )}
                      </div>
                      <div className="bg-gray-100 col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow w-full text-base2 cursor-pointer hover:bg-base0 hover:duration-700">
                        <p className="leading-tight text-justify w-full mb-1 text-sm">
                          {article.memoryTime}
                        </p>
                        <h3 className="font-semibold text-base truncate">
                          {article.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="">
          {/* 글 하나 버튼 컴포넌트 */}
          {/* <div
          onClick={() => dispatch(setIsCardOpen())}
          className="mb-5 cursor-pointer rounded-xl w-[calc(100%-56px)] mx-auto p-1 bg-basic3 hover:bg-gradient-to-r hover:from-main1 hover:to-main2 transition hover:delay-500"
          // className="mb-5 cursor-pointer px-2 py-2 rounded-md bg-white drop-shadow-lg w-[calc(100%-20px)] mx-auto hover:bg-gradient-to-r hover:from-main1 hover:to-main2"
        >
          <div className="bg-white rounded-lg  py-2 px-4">
            <div className="font-semibold text-base1 text-sm">
              2022.11.19 SAT
            </div>
            <div className="text-ellipsis line-clamp-1 font-semibold text-lg ">
              content title
            </div>
          </div>
        </div> */}

          {/* <ArticlesTimeline /> */}
        </div>
      </div>
    </div>
  );
}

export default ArchiveTimeline;
