import { useEffect } from "react";
import { useRef } from "react";
import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { createArticle } from "../../modules/reverse";

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

  useEffect(() => {
    console.log(reverse);
  }, [reverse]);
  return (
    <DatePicker
      dateFormat="yyyy.MM.dd (eee)"
      selected={startDate}
      // onChange={(date) => setStartDate(date)}
      onChange={(date) => {
        setStartDate(date);
        dispatch(createArticle({ ...reverse.article, memoryDate: `${date}` }));
      }}
      customInput={<InputBtn />}
      maxDate={new Date()}
    />
  );
}

export default ReverseDatePicker;
