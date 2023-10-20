"use client";

import { motion as m } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import {
  SendOutlined,
  YoutubeOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import Modal from "@/components/public/Modal";
import BookingCalender from "@/components/public/BookingCalender";
import { useStoreMentorDetail } from "@/stores/useStoreMentorDetail";
import { DEFAULT } from "@/constants/defaultElement";

const CONNECT_WITH_MENTOR = [
  {
    text: "Nhắn tin",
    icon: <SendOutlined className="text-white text-base" />,
    href: "/",
    priority: true,
  },
];

const UserBio = ({ avatar, user }) => {
  const setStoreMentor = useStoreMentorDetail((state) => state.setStoreMentor);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (user) {
      setStoreMentor(user);
    }
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {/* Mentor avatar */}
      <div>
        <Image
          src={avatar ? avatar : DEFAULT.AVATAR_IMAGE_PATH}
          alt="mentor"
          width={250}
          height={250}
          className="rounded-full"
        />
      </div>

      {/* Connect with mentor */}
      <div>
        {CONNECT_WITH_MENTOR.map((info) => (
          <m.div key={info.text} whileHover={{ scale: 1.2 }}>
            <Link href="/" key={info.text}>
              <div className="bg-purple-300 w-40 h-12 border border-white my-3 flex items-center justify-center cursor-pointer rounded-lg gap-2 p-2">
                <p className="text-center text-lg text-white font-semibold">
                  {info.text}
                </p>
                {/* <SendOutlined className="text-white"/> */}
                {info.icon}
              </div>
            </Link>
          </m.div>
        ))}
        <m.button
          whileHover={{ scale: 1.2 }}
          className="bg-purple-300 w-40 h-12 text-white font-semibold rounded-lg text-lg"
          onClick={showModal}
        >
          Đặt lịch
        </m.button>

        {/* Show if user choose booking calender */}
        <Modal
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          handleOk={handleOk}
        >
          <BookingCalender id={user._id} type="booking" />
        </Modal>
      </div>
    </div>
  );
};

export default UserBio;
