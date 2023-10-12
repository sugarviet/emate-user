"use client"
import { DEFAULT } from "@/constants/defaultElement";
import Image from "next/image";
import { useChatStore } from "@/stores/useChatStore";

const Message = ({msg}) => {
  const currentUserInfo = useChatStore(state => state.currentUserInfo)
  const selectedUser = useChatStore(state => state.selectedUser)

  // 651a6949baf2f58aa1cb63a8
  // 651e3228f541cff397ab7590
    // if (msg.to) {
    //   return <MyMessage msg={msg}/>;
    // } else {
    //   return <GuestMessage msg={msg}/>;
    // }

    if (msg?.senderId == selectedUser.id) {
      return <GuestMessage msg={msg}/>;
    } else {
      return <MyMessage msg={msg}/>;
    }
  };
  
  const MyMessage = ({msg}) => {
    return (
      <div className="w-full flex justify-end items-center gap-2 box-border">
        <p className="text-gray-400">{msg?.time}</p>
        <div className="primary_bg_light_blue text-white rounded-3xl p-2 w-fit mt-2 max-w-sm box-border">
          <p className="p-1 text-black">{msg?.message}</p>
        </div>
      </div>
    );
  };
  
  const GuestMessage = ({msg}) => {
    return (
      <div className="w-full flex justify-start items-center gap-2">
        <Image src={DEFAULT.AVATAR_IMAGE_PATH} alt="user" width={40} height={40} className="rounded-full"/>
        <div className="text-gray-500 rounded-3xl p-2 w-fit mt-2 max-w-sm pink_border_color">
          <p className="p-1">{msg?.message}</p>
        </div>
        <p className="text-gray-400">{msg?.time}</p>
      </div>
    );
  };
  
  export default Message;
  