"use client";

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
import { BASE_URL_LOCAL_HOST } from "@/constants/url";
import { formatCurrentTime } from "@/utils/formatCurrentTime";

const socket = io.connect(BASE_URL_LOCAL_HOST);

const ChatWrapper = () => {
  const {data} = useSWR("https://jsonplaceholder.typicode.com/users", fetcher)
  
  const selectedUser = useChatStore(state => state.selectedUser)
  const storeChattedUsers = useChatStore(state => state.storeChattedUsers)
  const firstSelected = useChatStore(state => state.firstSelected)
  const currentUserInfo = useChatStore((state) => state.currentUserInfo);

  const addToContactList = useChatStore(state => state.addToContactList)
  const setStoreMessage = useChatStore(state => state.setStoreMessage)

  // console.log('listUsers', listUsers);

  storeChattedUsers(data)
  
  useEffect(() => {
    socket.on("msg-recieve", (data) => {
      console.log(data);
      const newUser = {
        id: 11,
        name: "Viet",
        email:"viet123@gmail.com",
        image: ''
      }
      addToContactList(newUser)

      setStoreMessage({...data, time: formatCurrentTime()})
  
    })
  },[socket])
  
  useEffect(() => {
    socket.emit("add-user", currentUserInfo.userId)

  }, [currentUserInfo])
  
  console.log('selected user', selectedUser);

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
            !firstSelected ? <EmptyState /> : (selectedUser ? <ChatFeed /> : <>Loading...</>)
          }
        </Col>
      </Row>
    </m.div>
  );
};

export default ChatWrapper;
