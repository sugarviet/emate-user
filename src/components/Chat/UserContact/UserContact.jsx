"use client";
import Image from "next/image";
import { Row, Col } from "antd";
import { useChatStore } from "@/stores/useChatStore";

const UserContact = ({ message }) => {
  const { name, avatar, message: messageLast, _id: number } = message;
  const storeSelectedUser = useChatStore((state) => state.storeSelectedUser);

  const handleFetchChooseUser = () => {
    storeSelectedUser({
      _id: number,
      name: name,
      avatar: avatar,
    });
  };

  return (
    <div
      className="pink_border_color w-full h-24 relative my-2 rounded-xl hover:cursor-pointer p-2 z-30 overflow-hidden bg-white"
      onClick={() => handleFetchChooseUser()}
    >
      <Row
        className="translate-y-3"
        align="middle"
        justify="center"
        gutter={[2]}
      >
        <Col span={4}>
          <div className="flex items-center rounded-full relative h-14 w-14 bg-purple-300">
            <Image
              src={avatar}
              height={50}
              width={55}
              alt="avt"
              className="rounded-full"
            />
            <div className="w-4 h-4 bg-green-600 rounded-full absolute bottom-0 right-0"></div>
          </div>
        </Col>
        <Col span={15}>
          <div className="flex flex-col flex-1 mx-5">
            <h1 className="text-lg font-bold md:text-base  lg:text-base lg:font-bold ">
              {name}
            </h1>
            <div className="truncate_2_lines">
              <p className="text-xs">Bạn: {messageLast}</p>
            </div>
          </div>
        </Col>
        <Col span={5}>
          <div className="w-full flex flex-col h-12 items-center">
            <div>
              <p className="text-sm">{}</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserContact;
