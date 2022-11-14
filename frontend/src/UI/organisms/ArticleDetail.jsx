import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import { BsThreeDots } from "react-icons/bs";
import { deletePaper, getPaper, getStuffDetail } from "../../api/reverse";
import { setEditBtn, setInfo, setTravel } from "../../modules/reverse";
import { useState } from "react";

import ArchiveDatePicker from "../molecules/ReverseDatePicker";
import { AiOutlineCalendar } from "react-icons/ai";
import ReverseTextEditor from "./ReverseTextEditor";

function ArticleDetail() {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.reverse.info);
  const travel = useSelector((state) => state.reverse.travel);
  const edit = useSelector((state) => state.reverse.editBtn);
  const weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const handleDelete = async () => {
    await deletePaper(
      info.archiveId,
      info.stuffs[0].id,
      info.details.id,
      deleteSuccess,
      deleteFail
    );
  };

  const deleteSuccess = (res) => {
    console.log(res);
    getStuffDetail(info.archiveId, info.stuffs[0].id, stuffSuccess, stuffFail);
  };

  const stuffSuccess = (res) => {
    console.log(res);
    dispatch(setTravel({ ...travel, articleList: res.data.papers }));
    dispatch(setInfo({ ...info, details: null }));
  };

  const stuffFail = (err) => {
    console.log(err);
  };

  const deleteFail = (err) => {
    console.log(err);
  };

  return (
    info.details !== null && (
      <div>
        <div className="flex justify-between">
          <div className="">
            <div className="font-semibold text-xl">{info.details.title}</div>
            <div className="text-sm text-basic1">
              {new Date(info.details.memoryTime).toLocaleDateString() + " "}
              {weekDay[new Date(info.details.memoryTime).getDay()]}
            </div>
          </div>
          <Menu placement="bottom-end" size="lg">
            <MenuButton h={"fit-content"}>
              <BsThreeDots size={22} className="text-basic1" />
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  dispatch(setEditBtn());
                  console.log(edit);
                }}
              >
                수정하기
              </MenuItem>
              <MenuItem onClick={handleDelete}>삭제하기</MenuItem>
            </MenuList>
          </Menu>
        </div>
        {/* content */}
        <div className="my-2">
          <div dangerouslySetInnerHTML={{ __html: info.details.content }}></div>
        </div>
      </div>
    )
    // 수정 버튼 눌렀니?
    // (!editBtn ? (
    //   <div>
    //     <div className="flex justify-between">
    //       <div className="">
    //         <div className="font-semibold text-xl">{info.details.title}</div>
    //         <div className="text-sm text-basic1">
    //           {new Date(info.details.memoryTime).toLocaleDateString() + " "}
    //           {weekDay[new Date(info.details.memoryTime).getDay()]}
    //         </div>
    //       </div>
    //       <Menu placement="bottom-end" size="lg">
    //         <MenuButton h={"fit-content"}>
    //           <BsThreeDots size={22} className="text-basic1" />
    //         </MenuButton>
    //         <MenuList>
    //           <MenuItem onClick={handleEdit}>수정하기</MenuItem>
    //           <MenuItem onClick={handleDelete}>삭제하기</MenuItem>
    //         </MenuList>
    //       </Menu>
    //     </div>
    //     {/* content */}
    //     <div className="my-2">
    //       <div dangerouslySetInnerHTML={{ __html: info.details.content }}></div>
    //     </div>
    //   </div>
    // ) : (
    //   <div>
    //     <div className="flex justify-between">
    //       {/* 글 제목 수정 */}
    //       <div className="w-[calc(98%/3*2)] border-2 border-[#d9d9d9] rounded-lg p-2 placeholder-base1">
    //         <p className="text-xs text-basic1">글 제목</p>
    //         <input type="text" className="w-full focus:outline-none mt-0.5" />
    //       </div>
    //       {/* 기록 날짜 수정*/}
    //       <div className="w-[calc(98%/3)] border-2 border-[#d9d9d9] rounded-lg p-2 placeholder-base1">
    //         <p className="text-xs text-basic1">기록 날짜</p>
    //         <div className="flex items-center justify-between mr-1">
    //           <ArchiveDatePicker />
    //           <AiOutlineCalendar className="text-lg" />
    //         </div>
    //       </div>
    //     </div>
    //     {/* 글 내용 수정 */}
    //     <div className="my-3.5 w-full h-[350px] border-2 border-[#d9d9d9] rounded-lg p-2 placeholder-base1 overflow-auto scrollbar-hide">
    //       {/* <EditorComponent /> */}
    //       <ReverseTextEditor />
    //     </div>
    //     <div onClick={handleEdit}>hello?</div>
    //   </div>
    // ))
  );
}

export default ArticleDetail;
