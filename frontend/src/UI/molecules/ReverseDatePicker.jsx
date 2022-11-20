import { useEffect } from "react";
import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { createArticle, setInfo } from "../../modules/reverse";

function ReverseDatePicker() {
  const dispatch = useDispatch();
  const reverse = useSelector((state) => state.reverse);

  const today = new Date();
  const [startDate, setStartDate] = useState(today);
  const InputBtn = forwardRef(({ value, onClick }, ref) => (
    <button className="mt-0.5 font-semibold" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const [editDate, setEditDate] = useState(reverse.info.details?.memoryTime);

  useEffect(() => {
    if (!reverse.editBtn) {
      setTimeout(() => {
        dispatch(
          createArticle({ ...reverse.article, memoryDate: `${startDate}` })
        );
      }, 500);
    }
  }, [reverse.travelWriteIsOpen]);

  return !reverse.editBtn ? (
    <DatePicker
      dateFormat="yyyy.MM.dd (eee)"
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        dispatch(createArticle({ ...reverse.article, memoryDate: `${date}` }));
      }}
      customInput={<InputBtn />}
      maxDate={new Date()}
    />
  ) : (
    <DatePicker
      dateFormat="yyyy.MM.dd (eee)"
      selected={new Date(editDate)}
      onChange={(date) => {
        setEditDate(date);
        dispatch(
          setInfo({
            archiveId: reverse.info.archiveId,
            stuffs: reverse.info.stuffs,
            details: { ...reverse.info.details, memoryTime: date },
          })
        );
      }}
      customInput={<InputBtn />}
      maxDate={new Date()}
    />
  );
}

export default ReverseDatePicker;
