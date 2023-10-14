"use client";

import React, { useState } from "react";
import { Calendar, Col, Radio, Row, Select, Typography, Table, Modal, Button, Checkbox, notification, Input } from "antd";
import { useStoreMentorDetail } from "@/stores/useStoreMentorDetail";
import { useChatStore } from "@/stores/useChatStore";
import axios from "axios";
import urlcat from "urlcat";
import { BASE_URL, GET_DATE_MENTOR_SCHEDULE, HIRE_MENTOR, UPLOAD_SLOT_TEACHING } from "@/constants/url";
import { useWallet } from "@/stores/useWallet";

import useFetcher from "@/hooks/global/useFetcher";

const BookingCalender = ({type="add"}) => {
  const { widthRaw } = useWallet();

  const currentUserInfo = useChatStore((state) => state.currentUserInfo);
  const [mentorInfo, setMentorInfo] = useState({});
  const [linkURL, setLinkURL] = useState("")
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

  console.log('mentor', mentor);

  const handleSubmitRegister = async() => {
    const res = await axios.post(urlcat(BASE_URL, UPLOAD_SLOT_TEACHING), {
      slotStatus: registerList,
      link: linkURL,
      dateRegister: selectedDate
    }, {
      headers: {
        "x-client-id": currentUserInfo?._id,
        "x-client-refreshtoken" : currentUserInfo?.refreshToken,
        "x-client-accesstoken" : currentUserInfo?.token,
      },
    })
    if(res.data.status === 200){
      notification.success({
        message: "Bạn đã đăng ký lịch thành công",
      });
      widthRaw(mentor.price)
    }
  }

  const handleBookClick = async(record) => {
    console.log(record);
    if (mentorSlot[record.index] === 1) {
      // Update the array at position index to 2
      const updatedList = [...mentorSlot];
      updatedList[record.index] = 2;
      setList(updatedList);

      const data = {
        totalPrice: mentor?.price,
        orderCheckout: [{
          scheduleID: mentorInfo._id,
          date: selectedDate,
          scheduleSlot: updatedList,
          mentor: mentor?._id,
          price: mentor?.price
        }]
      }

      const res = await axios.post(urlcat(BASE_URL, HIRE_MENTOR), data, {
        headers: {
          "x-client-id": currentUserInfo?._id,
          "x-client-refreshtoken" : currentUserInfo?.refreshToken,
          "x-client-accesstoken" : currentUserInfo?.token,
        },
      })

      if(res.data.status === 200) {
        notification.success({
          message: "Bạn đã đặt lịch thành công, xin hãy đợi email từ Emate nhé <3",
        });
        setIsModalVisible(false)
      }
    
    }

    
  }

  const handleRegisterTeaching = (record) => {
    console.log(record);
    const updatedList = [...registerList];
    updatedList[record.index] = updatedList[record.index] === 1 ? 0 : 1; // Toggle between 0 and 1
    setRegisterList(updatedList);
  };

  console.log('RegisterList', registerList);

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
              disabled={mentorSlot ? mentorSlot[record.index] !== 1 : true}
            >
              Book
            </Button>
          )}
        </div>
      ),
      },
  ];

  const onPanelChange = (value, mode) => {
    // console.log(value.format("YYYY-MM-DD"), mode);
  };

  const openTimeSlotsModal = async(e) => {
    const dateString = e.format('DD-MM-YYYY');
    setSelectedDate(dateString);

    if(type !== "add"){
      const {data: {metaData}} = await axios.post(urlcat(BASE_URL, GET_DATE_MENTOR_SCHEDULE), {
        mentor: mentor?._id,
        day: dateString,
      }, {
        headers: {
          "x-client-id": currentUserInfo?._id,
          "x-client-refreshtoken" : currentUserInfo?.refreshToken,
          "x-client-accesstoken" : currentUserInfo?.token,
        },
      })
      setMentorSlot(metaData?.slotStatus)
      setMentorInfo(metaData)
        setIsModalVisible(true)
    }else{
      setIsModalVisible(true)

    }
  };

  return (
    <div>
      <h2 className='font-bold text-xl my-2'>Đặt lịch hẹn</h2>
      <div>
        {type === 'add' ? <Input placeholder="Link meet" value={linkURL} onChange={(e) => setLinkURL(e.target.value)} className="my-3"/> : null}
  
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
      {type === 'add' ? <Button onClick={handleSubmitRegister}>Submit</Button> : null}
    </div>
  );
};

export default BookingCalender;