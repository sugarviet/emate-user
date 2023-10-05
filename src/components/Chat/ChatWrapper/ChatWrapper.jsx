"use client";

import { useEffect } from "react";
import { Suspense } from "react";
import { Row, Col } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import ChatFeed from "../ChatFeed/ChatFeed";
import { motion as m } from "framer-motion";
import EmptyState from "../EmptyState/EmptyState";
import { useChatStore } from "@/stores/useChatStore";
import fetcher from "@/utils/fetcher";
import useSWR from "swr";
import io from "socket.io-client";
import { BASE_URL_LOCAL_HOST } from "@/constants/url";


const ChatWrapper = () => {
  const {data} = useSWR("https://jsonplaceholder.typicode.com/users", fetcher)
  console.log('list user', data);
  const selectedUser = useChatStore(state => state.selectedUser)
  const storeChattedUsers = useChatStore(state => state.storeChattedUsers)
  const firstSelected = useChatStore(state => state.firstSelected)

  storeChattedUsers(data)

  console.log(selectedUser);

  useEffect(() => {
    // Establish a WebSocket connection to your server
    const socket = io(BASE_URL_LOCAL_HOST); 
    // Listen for events from the server
    socket.on("connect", () => {
      console.log("Connected to the WebSocket server");
    });

    

    // Handle other WebSocket events here
    socket.emit("send-msg", {
      from: "UserA",
      to: "UserB",
      message: "Hello, UserB!",
    });
    
    socket.on("msg-recieve", (data) => {
      console.log("Received message:", data.message);
    });
    // Clean up the socket connection when the component unmounts
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
          <Suspense fallback={<div>Loading ...</div>}>
            <Sidebar />
          </Suspense>
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
