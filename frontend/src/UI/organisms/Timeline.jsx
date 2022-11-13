import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStuffDetail } from "../../api/reverse";
import { setTravel } from "../../modules/reverse";

import { BsDot } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function ArticlesTimeline() {
  const dispatch = useDispatch();
  const reverse = useSelector((state) => state.reverse);

  // useEffect(() => {
  //   getStuffDetail(
  //     reverse.info.archiveId,
  //     reverse.info.stuffs[0].id,
  //     getDetailSuccess,
  //     getDetailFail
  //   );
  // }, []);
  // const getDetailSuccess = (res) => {
  //   console.log(res);
  //   dispatch(setTravel({ ...reverse.travel, articleList: res.data.papers }));
  //   // dispatch(setTravelArticleList(res.data.papers));
  // };
  // const getDetailFail = (err) => {
  //   console.log(err);
  // };

  // memory time 순서대로 정렬
  [...reverse.travel.articleList].sort(
    (a, b) => new Date(a.memoryTime) - new Date(b.memoryTime)
  );

  const weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div className="w-5/6 mx-auto relative">
      {/* <div className="border-l-2 mt-4 "> */}
      {!reverse.travel.articleList.length && <div>기록된 추억이 없어요!</div>}
      {/* {reverse.travel.articleList.length &&
        reverse.travel.articleList
          .filter(
            (v, i) =>
              reverse.travel.articleList.findIndex(
                (x) => x.memoryTime === v.memoryTime
              ) === i
          )
          .map((article, idx) => {
            return (
              <div key={`travel-${idx}`} className="mb-5">
                <div className="font-semibold text-base1">
                  {new Date(article.memoryTime).toLocaleDateString() + " "}
                  {weekDay[new Date(article.memoryTime).getDay()]}
                </div>
                <div>{article.title}</div>
              </div>
            );
          })} */}
      {reverse.travel.articleList.length &&
        reverse.travel.articleList.map((article, idx) => {
          return (
            <div key={`travel-${idx}`} className="mb-5">
              <div className="font-semibold text-base1">
                {new Date(article.memoryTime).toLocaleDateString() + " "}
                {weekDay[new Date(article.memoryTime).getDay()]}
              </div>
              <div>{article.title}</div>
            </div>
          );
        })}
      {/* </div> */}
    </div>
  );
}

export default ArticlesTimeline;
