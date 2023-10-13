"use client";

import React, { useState } from "react";
import { Calendar, Col, Radio, Row, Select, Typography, Table, Modal, Button, Checkbox } from "antd";
import { useStoreMentorDetail } from "@/stores/useStoreMentorDetail";
import { useChatStore } from "@/stores/useChatStore";
import axios from "axios";
import urlcat from "urlcat";
import { BASE_URL, GET_DATE_MENTOR_SCHEDULE } from "@/constants/url";

const BookingCalender = ({type="add"}) => {
  const currentUserInfo = useChatStore((state) => state.currentUserInfo);
  const [list, setList] = useState([
    0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1,
  ]);

  const [registerList, setRegisterList] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,])

  const mentor = useStoreMentorDetail(state => state.mentor)
  const [mentorSlot, setMentorSlot] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);


  const timeSlots = [
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
    "10:00 PM",
  ];

  const handleBookClick = (record) => {
    console.log(record);
    if (list[record.index] === 1) {
      // Update the array at position index to 2
      const updatedList = [...list];
      updatedList[record.index] = 2;
      setList(updatedList);
    }

    
  }

  const handleRegisterTeaching = (record) => {
    const updatedList = [...list];
    updatedList[record.index] = updatedList[record.index] === 1 ? 0 : 1; // Toggle between 0 and 1
    setRegisterList(updatedList);
  };
  const columns = [
    {
      title: 'Time Slot',
      dataIndex: 'timeSlot',
      key: 'timeSlot',
      render: (text, record) => (
        <div>
          {text}
          {/* <Button onClick={() => handleBookClick(record)} className="float-right" disabled={list[record.index] !== 1}>Book</Button> */}
          {type === "add" ? (
            <Checkbox
              onChange={() => handleRegisterTeaching(record)}
              className="float-right"
            />
          ) : (
            <Button
              onClick={() => handleBookClick(record)}
              className="float-right"
              disabled={list[record.index] !== 1}
            >
              Book
            </Button>
          )}
        </div>
      ),
      },
  ];

  console.log('list', list);

  const onPanelChange = (value, mode) => {
    // console.log(value.format("YYYY-MM-DD"), mode);
  };

  const openTimeSlotsModal = async(e) => {
    // console.log('data', e);
    const dateString = e.format('YYYY-MM-DD');
    console.log('dateString', dateString);
    console.log('mentor', mentor);
    const {data: {metaData}} = await axios.post(urlcat(BASE_URL, GET_DATE_MENTOR_SCHEDULE), {
      mentor: mentor._id,
      startDay: dateString,
      endDay: dateString
    }, {
      headers: {
        "x-client-id": currentUserInfo?._id,
        "x-client-refreshtoken" : currentUserInfo?.refreshToken,
        "x-client-accesstoken" : currentUserInfo?.token,
      },
    })

    setMentorSlot(metaData)
      setIsModalVisible(true)
  };

  return (
    <div>
      <h2 className='font-bold text-xl my-2'>Đặt lịch hẹn</h2>
      <div>
        <Calendar onPanelChange={onPanelChange}  onSelect={openTimeSlotsModal} headerRender={({ value, type, onChange, onTypeChange }) => {
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

<Modal
          title="Mentor Time Slots"
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Table
            columns={columns}
            dataSource={timeSlots.map((slot, index) => ({
              key: slot.id,
              timeSlot: `${slot}`,
              index
              // Add other data if needed
            }))}
          />

         
        </Modal>
      </div>
      <Button className="px-5 py-2 justify-end">Submit</Button>
    </div>
  );
};

export default BookingCalender;