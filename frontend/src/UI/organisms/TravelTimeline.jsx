import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaper, getStuffDetail } from "../../api/reverse";
import { setInfo, setTravel } from "../../modules/reverse";

import { BsDot } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function ArticlesTimeline() {
  const dispatch = useDispatch();
  const reverse = useSelector((state) => state.reverse);

  // memory time 순서대로 정렬
  [...reverse.travel.articleList].sort(
    (a, b) => new Date(a.memoryTime) - new Date(b.memoryTime)
  );
  [...reverse.anniv.articleList].sort(
    (a, b) => new Date(a.memoryTime) - new Date(b.memoryTime)
  );
  [...reverse.diary.articleList].sort(
    (a, b) => new Date(a.memoryTime) - new Date(b.memoryTime)
  );

  const weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

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

  return (
    <div className="w-5/6 mx-auto relative">
      {/* <div className="border-l-2 mt-4 "> */}
      {reverse.selectStuff === 0 && !reverse.travel.articleList.length && (
        <div>기록된 추억이 없어요!</div>
      )}
      {reverse.selectStuff === 1 && !reverse.anniv.articleList.length && (
        <div>기록된 추억이 없어요!</div>
      )}
      {reverse.selectStuff === 2 && !reverse.diary.articleList.length && (
        <div>기록된 추억이 없어요!</div>
      )}

      {/* 선택한 stuff가 여행일때 */}
      {reverse.selectStuff === 0 &&
        reverse.travel.articleList.length &&
        reverse.travel.articleList.map((article, idx) => {
          return (
            <div
              key={`travel-${idx}`}
              onClick={() => {
                handleGetDetail(article.id);
              }}
              className="mb-5 cursor-pointer border-2 px-2 py-2 rounded-md"
            >
              <div className="font-semibold text-base1">
                {new Date(article.memoryTime).toLocaleDateString() + " "}
                {weekDay[new Date(article.memoryTime).getDay()]}
              </div>
              <div className="text-ellipsis line-clamp-1">{article.title}</div>
            </div>
          );
        })}
      {/* 선택한 stuff가 기념일일때 */}
      {reverse.selectStuff === 1 &&
        reverse.anniv.articleList.length &&
        reverse.anniv.articleList.map((article, idx) => {
          return (
            <div
              key={`anniv-${idx}`}
              onClick={() => {
                handleGetDetail(article.id);
              }}
              className="mb-5 cursor-pointer border-2 px-2 py-2 rounded-md"
            >
              <div className="font-semibold text-base1">
                {new Date(article.memoryTime).toLocaleDateString() + " "}
                {weekDay[new Date(article.memoryTime).getDay()]}
              </div>
              <div className="text-ellipsis line-clamp-1">{article.title}</div>
            </div>
          );
        })}
      {/* 선택한 stuff가 일기일때 */}
      {reverse.selectStuff === 2 &&
        reverse.diary.articleList.length &&
        reverse.diary.articleList.map((article, idx) => {
          return (
            <div
              key={`diary-${idx}`}
              onClick={() => {
                handleGetDetail(article.id);
              }}
              className="mb-5 cursor-pointer border-2 px-2 py-2 rounded-md"
            >
              <div className="font-semibold text-base1">
                {new Date(article.memoryTime).toLocaleDateString() + " "}
                {weekDay[new Date(article.memoryTime).getDay()]}
              </div>
              <div className="text-ellipsis line-clamp-1">{article.title}</div>
            </div>
          );
        })}
    </div>
  );
}

export default ArticlesTimeline;
