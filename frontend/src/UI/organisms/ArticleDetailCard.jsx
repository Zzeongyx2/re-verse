import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
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

function ArticleDetailCard() {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.reverse.info);
  const reverse = useSelector((state) => state.reverse);
  const edit = useSelector((state) => state.reverse.editBtn);

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
    console.log(res);
    getStuffDetail(
      info.archiveId,
      info.stuffs[reverse.selectStuff].id,
      stuffSuccess,
      stuffFail
    );
  };

  const stuffSuccess = (res) => {
    console.log(res);
    if (reverse.selectStuff === 0) {
      dispatch(setTravel({ ...reverse.travel, articleList: res.data.papers }));
    } else if (reverse.selectStuff === 1) {
      dispatch(setAnniv({ ...reverse.anniv, articleList: res.data.papers }));
    } else if (reverse.selectStuff === 2) {
      dispatch(setDiary({ ...reverse.diary, articleList: res.data.papers }));
    }
    // dispatch(setTravel({ ...travel, articleList: res.data.papers }));
    dispatch(setInfo({ ...info, details: null }));
  };

  const stuffFail = (err) => {
    console.log(err);
  };

  const deleteFail = (err) => {
    console.log(err);
  };
  return (
    info.details && (
      <div className="font-hand">
        <Card width={"xs"}>
          <CardHeader px={4} py={0}>
            <div className="flex justify-between">
              <div className="text-lg font-semibold">{info.details.title}</div>
              <button onClick={() => dispatch(setIsCardOpen())}>
                <BiArrowBack />
              </button>
            </div>
            {info.details.memoryTime === "" ? (
              <div className="text-sm text-basic1">
                {new Date(info.details.memoryTime).toLocaleDateString() + " "}
                {weekDay[new Date(info.details.memoryTime).getDay()]}
              </div>
            ) : (
              <div className="text-sm text-basic1">
                {new Date().toLocaleDateString() + " "}
                {weekDay[new Date().getDay()]}
              </div>
            )}
          </CardHeader>
          <CardBody minH={400}>
            <div
              dangerouslySetInnerHTML={{ __html: info.details.content }}
            ></div>
          </CardBody>
          <CardFooter
            // pb={4}
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
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
          </CardFooter>
        </Card>
      </div>
    )
  );
}

export default ArticleDetailCard;
