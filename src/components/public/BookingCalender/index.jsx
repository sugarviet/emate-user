"use client"

import React, { useState } from "react";
import { Calendar, Select } from "antd";

const { Option } = Select;

const BookingCalender = () => {
const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const timeSlots = ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"];

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <div>
      <h2>Booking Calendar</h2>
      <div>
        <Select
          placeholder="Select a time slot"
          style={{ width: 200, marginRight: 16 }}
          onChange={handleTimeChange}
          value={selectedTime}
        >
          {timeSlots.map((slot) => (
            <Option key={slot} value={slot}>
              {slot}
            </Option>
          ))}
        </Select>

         <Calendar onPanelChange={onPanelChange} />
        </div>
    </div>
  )
}

export default BookingCalender
