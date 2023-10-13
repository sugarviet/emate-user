"use client";
import Image from "next/image";
import { Row, Col } from "antd";
import useSWR from "swr";
import { useEffect } from "react";
import fetcher from "@/utils/fetcher";
import { useChatStore } from "@/stores/useChatStore";
import { DEFAULT } from "@/constants/defaultElement";
import { BASE_URL } from "@/constants/url";

const UserContact = ({ message }) => {
  const {
    name,
    img = DEFAULT.AVATAR_IMAGE_PATH,
    time,
    username: messageTo,
    _id: number,
  } = message;
  const selectedUserId = useChatStore((state) => state.selectedUserId);
  const setSelectedUserId = useChatStore((state) => state.setSelectedUserId);
  const storeSelectedUser = useChatStore((state) => state.storeSelectedUser);
  const setUserChatting = useChatStore((state) => state.setUserChatting);
  const { data, isLoading } = useSWR(
    number ? `${BASE_URL}getDetail/${number}` : null,
    fetcher
  );
  useEffect(() => {
    if (data) {
      storeSelectedUser({
        _id: data?.metaData._id,
        name: data?.metaData.name,
        avatar: data?.metaData.avatar,
      });
    }
  }, [storeSelectedUser]);
  const handleFetchChooseUser = (userId) => {
    setSelectedUserId(userId);
    setUserChatting(data?.metaData.name);
  };

  if (isLoading) {
    return null;
  }
  return (
    <div
      className="pink_border_color w-full h-24 relative my-2 rounded-xl hover:cursor-pointer p-2 z-30 overflow-hidden bg-white"
      onClick={() => handleFetchChooseUser(number ? number : id)}
    >
      <Row
        className="translate-y-3"
        align="middle"
        justify="center"
        gutter={[2]}
      >
        <Col span={4}>
          <div className="flex items-center rounded-full relative h-fit w-fit bg-purple-300">
            <Image
              src={img}
              height={55}
              width={55}
              alt="avt"
              className="rounded-full"
            />
            <div className="w-4 h-4 bg-green-600 rounded-full absolute bottom-0 right-0"></div>
          </div>
        </Col>
        <Col span={15}>
          <div className="flex flex-col flex-1">
            <h1 className="text-lg font-bold md:text-base  lg:text-base lg:font-bold ">
              {name}
            </h1>
            <div className="truncate_2_lines">
              <p className="text-xs">Bạn: {messageTo} </p>
            </div>
          </div>
        </Col>
        <Col span={5}>
          <div className="w-full flex flex-col h-12 items-center">
            <div>
              <p className="text-sm">{time}</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserContact;
