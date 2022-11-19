import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaper } from "../../api/reverse";
import { setInfo, setIsCardOpen } from "../../modules/reverse";

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

  return (
    <div className="">
      {/* <div className="overflow-auto scollbar-hide"> */}
      {reverse.selectStuff === 0 && !reverse.travel.articleList.length && (
        <div>기록된 추억이 없어요!</div>
      )}
      {reverse.selectStuff === 1 && !reverse.anniv.articleList.length && (
        <div>기록된 추억이 없어요!</div>
      )}
      {reverse.selectStuff === 2 && !reverse.diary.articleList.length && (
        <div>기록된 추억이 없어요!</div>
      )}
      {/* 글 목록 컴포넌트 */}
      {/* 선택한 stuff가 여행일때 */}
      {reverse.selectStuff === 0 &&
        reverse.travel.articleList.length > 0 &&
        reverse.travel.articleList.map((article, idx) => {
          return (
            <div
              key={`travel-${idx}`}
              onClick={() => {
                handleGetDetail(article.id);
                dispatch(setIsCardOpen());
              }}
              className="mb-5 cursor-pointer rounded-xl w-[calc(100%-30px)] mx-auto p-1 bg-main1/40 hover:bg-gradient-to-r hover:from-main1 hover:to-main2 transition hover:delay-500"
            >
              <div className="bg-white rounded-lg font-hand font-semibold py-3 px-4">
                <div className="text-sm">
                  {new Date(article.memoryTime).toLocaleDateString() + " "}
                  {weekDay[new Date(article.memoryTime).getDay()]}
                </div>
                <div className="text-ellipsis line-clamp-1">
                  {article.title}
                </div>
              </div>
            </div>
          );
        })}
      {/* 선택한 stuff가 기념일일때 */}
      {reverse.selectStuff === 1 &&
        reverse.anniv.articleList.length > 0 &&
        reverse.anniv.articleList.map((article, idx) => {
          return (
            <div
              key={`anniv-${idx}`}
              onClick={() => {
                handleGetDetail(article.id);
                dispatch(setIsCardOpen());
              }}
              className="mb-5 cursor-pointer rounded-xl w-[calc(100%-48px)] mx-auto p-1 bg-basic3 hover:bg-gradient-to-r hover:from-main1 hover:to-main2 transition hover:delay-500"
            >
              <div className="bg-white rounded-lg  py-2 px-4">
                <div className="font-semibold text-base1 text-sm">
                  {new Date(article.memoryTime).toLocaleDateString() + " "}
                  {weekDay[new Date(article.memoryTime).getDay()]}
                </div>
                <div className="text-ellipsis line-clamp-1 font-semibold text-lg ">
                  {article.title}
                </div>
              </div>
            </div>
          );
        })}
      {/* 선택한 stuff가 일기일때 */}
      {reverse.selectStuff === 2 &&
        reverse.diary.articleList.length > 0 &&
        reverse.diary.articleList.map((article, idx) => {
          return (
            <div
              key={`diary-${idx}`}
              onClick={() => {
                handleGetDetail(article.id);
                dispatch(setIsCardOpen());
              }}
              className="mb-5 cursor-pointer rounded-xl w-[calc(100%-56px)] mx-auto p-1 bg-basic3 hover:bg-gradient-to-r hover:from-main1 hover:to-main2 transition hover:delay-500"
            >
              <div className="bg-white rounded-lg  py-2 px-4">
                <div className="font-semibold text-base1 text-sm">
                  {new Date(article.memoryTime).toLocaleDateString() + " "}
                  {weekDay[new Date(article.memoryTime).getDay()]}
                </div>
                <div className="text-ellipsis line-clamp-1 font-semibold text-lg ">
                  {article.title}
                </div>
              </div>
            </div>
          );
        })}
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
  );
}

export default ArchiveTimeline;
