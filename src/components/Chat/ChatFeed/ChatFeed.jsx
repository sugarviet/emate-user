"use client"

import { useEffect } from "react";
import ChatHeader from "../ChatHeader/ChatHeader"
import ChatList from "../ChatList/ChatList"
import InputMessage from "../InputMessage/InputMessage"
import { useChatStore } from "@/stores/useChatStore"
import io  from "socket.io-client";
import { BASE_URL_LOCAL_HOST } from "@/constants/url";


const ChatFeed = () => {
  // const currentUserInfo = useChatStore((state) => state.currentUserInfo);
  // const listUsers = useChatStore(state => state.listUsers)

  return (
    <div className="border-b-2 w-full h-full rounded-rs-lg rounded-tr-2xl overflow-hidden">
        <ChatHeader username={"Viet"}/>
        <ChatList />
        <InputMessage />
    </div>
  )
}

export default ChatFeed
