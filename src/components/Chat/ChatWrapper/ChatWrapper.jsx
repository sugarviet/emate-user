"use client";

import axios from "axios";
import { useEffect } from "react";
import { Row, Col } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import ChatFeed from "../ChatFeed/ChatFeed";
import { motion as m } from "framer-motion";
import EmptyState from "../EmptyState/EmptyState";
import { useChatStore } from "@/stores/useChatStore";
import fetcher from "@/utils/fetcher";
import useSWR from "swr";
import io  from "socket.io-client";
import { BASE_URL, BASE_URL_LOCAL_HOST } from "@/constants/url";
import { formatCurrentTime } from "@/utils/formatCurrentTime";
import LoadingMessageSkeleton from "@/components/public/LoadingMessageSkeleton";
import { FAKE_TOKEN } from "@/constants/fakeToken";

const socket = io.connect(BASE_URL,{
  "transports": ['websocket', 'polling'],
});

const ChatWrapper = () => {
  const selectedUser = useChatStore(state => state.selectedUser)
  const firstSelected = useChatStore(state => state.firstSelected)
  const currentUserInfo = useChatStore((state) => state.currentUserInfo);

  const addToContactList = useChatStore(state => state.addToContactList)
  const setStoreMessage = useChatStore(state => state.setStoreMessage)

  const initializeDataListUser = useChatStore(state => state.initializeDataListUser)

  useEffect(() => {
    initializeDataListUser();
  }, [])

  
  useEffect(() => {
    socket.on("msg-recieve", (data) => {
      console.log(data);
      const newUser = {
        id: data.from,
        from: data.from,
      }
      
      if(data){
        addToContactList(newUser)
        setStoreMessage({...data, time: formatCurrentTime()})
      }
  
    })
  },[socket, addToContactList, setStoreMessage])
  
  useEffect(() => {
    socket.emit("add-user", currentUserInfo?.id)

  }, [currentUserInfo])
  

  const setupSocketConnection = () => {
    socket.on("connect", () => {
      console.log("Connected to Socket.io server");
      
    });
    socket.on("disconnect", () => {
      console.log("Disconnected from Socket.io server");
    });
  
    return socket;
  };

  useEffect(() => {
    const socket = setupSocketConnection();
   
    return () => {
      socket.disconnect();
    };
  }, []);


  return (
    <m.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Row justify="space-between">
        <Col xl={6} lg={8} md={8} sm={24} xs={24}>   
           <Sidebar />
        </Col>
        <Col xl={18} lg={16} md={16} sm={24} xs={24}>
          {
            !firstSelected ? <EmptyState /> : (selectedUser ? <ChatFeed /> : <LoadingMessageSkeleton />)
          }
        </Col>
      </Row>
    </m.div>
  );
};

export default ChatWrapper;
