import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePaper, getStuffDetail } from "../../api/reverse";
import {
  setAnniv,
  setDiary,
  setEditBtn,
  setInfo,
  setIsCardOpen,
  setTravel,
} from "../../modules/reverse";
import { BiArrowBack } from "react-icons/bi";
import { TbBluetoothConnected } from "react-icons/tb";
import { HiWifi } from "react-icons/hi";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { RiBattery2ChargeFill } from "react-icons/ri";

function ArticleDetailCard() {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.reverse.info);
  const reverse = useSelector((state) => state.reverse);

  const weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const handleDelete = async () => {
    await deletePaper(
      info.archiveId,
      info.stuffs[reverse.selectStuff].id,
      info.details.id,
      deleteSuccess,
      deleteFail
    );
  };

  const deleteSuccess = (res) => {
    getStuffDetail(
      info.archiveId,
      info.stuffs[reverse.selectStuff].id,
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
    dispatch(setInfo({ ...info, details: null }));
  };

  const stuffFail = (err) => {
    console.log(err);
  };

  const deleteFail = (err) => {
    console.log(err);
  };
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
    info.details && (
      <div className="ml-2 mt-2 w-[484px] h-[784px] bg-white flex flex-col py-2 px-4 rounded-lg ring-8 border-4 ring-gray-200 border-gray-200">
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
          <button onClick={() => dispatch(setIsCardOpen())}>
            <BiArrowBack size={20} />
          </button>
        </div>
        <hr className="mt-1"></hr>

        {/* Article detail */}
        <div className="font-hand mt-1">
          {/* memory date */}
          <div className="text-sm text-basic1 text-end">
            기록날짜 :{" "}
            {new Date(info.details.memoryTime).toLocaleDateString() + " "}
            {weekDay[new Date(info.details.memoryTime).getDay()]}
          </div>
          {/* title */}
          <div className="text-lg font-semibold">{info.details.title}</div>
          {/* content */}
          <div className="mx-2 mt-2 h-[590px] overflow-auto scrollbar-hide">
            <div
              dangerouslySetInnerHTML={{ __html: info.details.content }}
            ></div>
          </div>

          {/* edit & delete */}
          <hr className=""></hr>
          <div className="h-12 flex justify-between items-center px-10">
            <button
              onClick={() => {
                dispatch(setEditBtn());
              }}
            >
              수정하기
            </button>
            <button
              onClick={() => {
                handleDelete();
                dispatch(setIsCardOpen());
              }}
            >
              삭제하기
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default ArticleDetailCard;
