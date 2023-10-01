"use client";

// 

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import dayLocaleData from 'dayjs/plugin/localeData';

import React, { useState } from "react";
import { Calendar, Col, Radio, Row, Select, Typography } from "antd";

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

  const timeSlots = [
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
  ];


  const onPanelChange = (value, mode) => {
    // console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
    <div>
      <h2 className='font-bold text-xl my-2'>Đặt lịch hẹn</h2>
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

        <Calendar onPanelChange={onPanelChange}  headerRender={({ value, type, onChange, onTypeChange }) => {
          const start = 0;
          const end = 12;
          const monthOptions = [];
          let current = value.clone();
          const localeData = value.localeData();
          const months = [];
          for (let i = 0; i < 12; i++) {
            current = current.month(i);
            months.push(localeData.monthsShort(current));
          }
          for (let i = start; i < end; i++) {
            monthOptions.push(
              <Select.Option key={i} value={i} className="month-item">
                {months[i]}
              </Select.Option>,
            );
          }
          const year = value.year();
          const month = value.month();
          const options = [];
          for (let i = year - 10; i < year + 10; i += 1) {
            options.push(
              <Select.Option key={i} value={i} className="year-item">
                {i}
              </Select.Option>,
            );
          }
          return (
            <div
             className='flex relative right-0 w-full justify-end gap-5'
            >
                  <Select
                    size="large"
                    popupMatchSelectWidth={false}
                    className="my-year-select"
                    value={year}
                    onChange={(newYear) => {
                      const now = value.clone().year(newYear);
                      onChange(now);
                    }}
                  >
                    {options}
                  </Select>
                 
                  <Select
                    size="large"
                    popupMatchSelectWidth={false}
                    value={month}
                    onChange={(newMonth) => {
                      const now = value.clone().month(newMonth);
                      onChange(now);
                    }}
                  >
                    {monthOptions}
                  </Select> 
            </div>
          );
        }}/>
      </div>
    </div>
  );
};

export default BookingCalender;
