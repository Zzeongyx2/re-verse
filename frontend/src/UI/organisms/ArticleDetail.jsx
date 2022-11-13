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

function ArticleDetail() {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.reverse.info);
  console.log(info);
  const weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

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
              <MenuItem>수정하기</MenuItem>
              <MenuItem>삭제하기</MenuItem>
            </MenuList>
          </Menu>
          {/* <BsThreeDots size={22} className="text-basic1" /> */}
        </div>
        {/* content */}
        <div className="my-2">
          <div dangerouslySetInnerHTML={{ __html: info.details.content }}></div>
        </div>
      </div>
    )
  );
}

export default ArticleDetail;
