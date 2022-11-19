import { CloseButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { HiWifi } from "react-icons/hi";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { RiBattery2ChargeFill } from "react-icons/ri";
import { TbBluetoothConnected } from "react-icons/tb";

function Phone() {
  const [time, setTime] = useState("00:00");
  const timeSet = new Set();

  const clock = () => {
    const time = new Date();
    const hours = time.getHours() % 12;
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
    <div className="ml-10 mt-10 w-[500px] h-[900px] bg-gray-100 flex flex-col py-2 px-4 rounded-lg">
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
        <CloseButton />
      </div>

      {/* Content */}
      <div className="w-100 overflow-scroll scrollbar-hide font-hand">
        <div className="container p-4">
          <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
            {/*  */}
            {papers.length === 0 && <div>포토북 없음</div>}
            {papers.length > 0 &&
              papers.map((paper, idx) => {
                // 중복되는 날짜는 동그라미 제거
                const flag = timeSet.has(paper.memoryTime);
                if (!flag) {
                  timeSet.add(paper.memoryTime);
                }

                return (
                  <div className="flex md:contents" key={idx}>
                    <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                      <div className="h-full w-6 flex items-center justify-center">
                        <div className="h-full w-[1px] bg-gray-400 pointer-events-none"></div>
                      </div>
                      {!flag && (
                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-extra1 shadow text-center"></div>
                      )}
                    </div>
                    <div className="bg-gray-100 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow w-full text-base2 cursor-pointer hover:bg-base0 hover:duration-700">
                      <p className="leading-tight text-justify w-full mb-1 text-sm">
                        {paper.memoryTime}
                      </p>
                      <h3 className="font-semibold text-base truncate">
                        {paper.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

const papers = [
  {
    title: "나바권창 1권 발매 D-100",
    memoryTime: "2022. 11. 08. TUE",
  },
  {
    title: "KIN거운KAN쵸의 발악 1",
    memoryTime: "2022. 11. 09. WED",
  },
  {
    title: "KIN거운KAN쵸의 발악 2",
    memoryTime: "2022. 11. 09. WED",
  },
  {
    title: "KIN거운KAN쵸의 발악 3",
    memoryTime: "2022. 11. 09. WED",
  },
  {
    title: "나바권창 1권 발매 D-93",
    memoryTime: "2022. 11. 15. TUE",
  },
  {
    title: "나바권창 1권 발매 D-89",
    memoryTime: "2022. 11. 19. SAT",
  },
  {
    title: "나바권창 작가 zl존윤sun 팬싸인회 D-89",
    memoryTime: "2022. 11. 19. SAT",
  },
  {
    title: "oO강약약강Oo 그는 무슨 삶을 살았는가",
    memoryTime: "2022. 11. 19. SAT",
  },
];

export default Phone;
