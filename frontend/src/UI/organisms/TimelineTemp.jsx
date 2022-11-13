import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStuffDetail } from "../../api/reverse";
import { setTravelArticleList } from "../../modules/reverse";

import { BsDot } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function ArticlesTimeline() {
  const dispatch = useDispatch();
  const reverse = useSelector((state) => state.reverse);

  useEffect(() => {
    getStuffDetail(
      reverse.info.archiveId,
      reverse.info.stuffs[0].id,
      getDetailSuccess,
      getDetailFail
    );
  }, []);
  const getDetailSuccess = (res) => {
    console.log(res);
    dispatch(setTravelArticleList(res.data.papers));
  };
  const getDetailFail = (err) => {
    console.log(err);
  };

  // memory time 순서대로 정렬
  [...reverse.travelArticleList].sort(
    (a, b) => new Date(a.memoryTime) - new Date(b.memoryTime)
  );

  // const [click, setClick] = useState(null);

  // const handleClick = (index) => {
  //   setClick((prev) => {
  //     return prev === index ? null : index;
  //   });
  // };

  return (
    <div className="w-5/6 mx-auto relative">
      <div className="border-l-2 mt-4 ">
        {!reverse.travelArticleList.length && <div>기록된 추억이 없어요!</div>}
        {reverse.travelArticleList.length &&
          reverse.travelArticleList
            .filter(
              (v, i) =>
                reverse.travelArticleList.findIndex(
                  (x) => x.memoryTime === v.memoryTime
                ) === i
            )
            .map((article, idx) => {
              return (
                <div
                  key={`travel-${idx}`}
                  onClick={() => {
                    // handleClick(`travel-${idx}`);
                  }}
                  className="mb-5"
                >
                  {/* card 하나 */}
                  <div className="transform transition cursor-pointer hover:bg-extra3 ml-4 relative flex items-center px-6 py-2 bg-basic3 text-white rounded flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* dot */}
                    <BsDot
                      size={36}
                      className="text-basic3 absolute -left-[17px] transform -translate-x-2/4 z-10 mt-1"
                    />
                    <div className="w-full flex justify-between items-center">
                      <div className="font-semibold">{article.memoryTime}</div>
                      {/* {click === `travel-${idx}` ? (
                        <IoIosArrowDown />
                      ) : (
                        <IoIosArrowUp />
                      )} */}
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default ArticlesTimeline;
