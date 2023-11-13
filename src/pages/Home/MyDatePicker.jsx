import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import calandarIcon from "../../CalendarIcon.png";

const MyDatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const openCalendar = () => {
    setCalendarOpen(true);
  };

  return (
    <div style={{ position: "relative", width: "200px" }}>
      <DatePicker
        className="form-control"
        selected={startDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy"
        isClearable
        placeholderText="Select Date"
        style={{ width: "100%" }}
      />
      <img
        src={calandarIcon}
        alt="Calendar Icon"
        style={{
          position: "absolute",
          top: "50%",
          right: "5px",
          transform: "translateY(-50%)",
          width: "25px",
          height: "25px",
        }}
      />
    </div>
  );
};

export default MyDatePicker;
