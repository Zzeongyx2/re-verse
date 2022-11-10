import { useRef } from "react";
import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function ReverseDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const InputBtn = forwardRef(({ value, onClick }, ref) => (
    <button className="mt-0.5 font-semibold" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <DatePicker
      dateFormat="yyyy.MM.dd (eee)"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<InputBtn />}
      maxDate={new Date()}
    />
  );
}

export default ReverseDatePicker;
