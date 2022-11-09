import { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

function ReverseDatePicker({
  setSearchDateString,
  setSelectedEndDateString,
  isRangeSearch,
}) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const [isCalendarOpen, setIsCalenderOpen] = useState(false);

  const DateInput = ({ value, onClick }) => (
    <button>
      {value}
      {setIsCalenderOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
    </button>
  );

  // const dateToString = (date) => {
  //   return (
  //     date.getFullYear() +
  //     "-" +
  //     (date.getMonth() + 1).toString().padStart(2, "0") +
  //     "-" +
  //     date.getDate().toString().padStart(2, "0")
  //   );
  // };
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
    />
    // <div>
    //   <DatePicker
    //     selected={startDate}
    //     selectsStart
    //     maxDate={new Date()}
    //     customInput={<DateInput />}
    //   />
    //   <DatePicker
    //     selected={endDate}
    //     selectsEnd
    //     startDate={startDate}
    //     minDate={startDate}
    //     maxDate={new Date()}
    //     customInput={<DateInput />}
    //   />
    // </div>
  );
}

export default ReverseDatePicker;
