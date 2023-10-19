"use client";
import { useEffect, useRef } from "react";
import { Row, Col } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import ChatFeed from "../ChatFeed/ChatFeed";
import { motion as m } from "framer-motion";
import EmptyState from "../EmptyState/EmptyState";
import { useChatStore } from "@/stores/useChatStore";
import { formatCurrentTime } from "@/utils/formatCurrentTime";
import LoadingMessageSkeleton from "@/components/public/LoadingMessageSkeleton";
import useSocketStore from "@/stores/useSocketStore";
import io from "socket.io-client";
import { BASE_URL } from "@/constants/url";

const ChatWrapper = () => {
  const selectedUser = useChatStore((state) => state.selectedUser);
  const firstSelected = useChatStore((state) => state.firstSelected);
  const currentUserInfo = useChatStore((state) => state.currentUserInfo);
  const addToContactList = useChatStore((state) => state.addToContactList);
  const setStoreMessage = useChatStore((state) => state.setStoreMessage);
  const initializeDataListUser = useChatStore(
    (state) => state.initializeDataListUser
  );
  let socket = useRef();
  useEffect(() => {
    socket = io.connect(BASE_URL, {
      transports: ["websocket", "polling"],
    });
    socket?.emit("add-user", currentUserInfo?._id);
    useSocketStore.setState({ socket });
    socket.on("connect", () => {});
    socket.on("disconnect", () => {});
    return () => {
      socket.disconnect();
    };
  }, [currentUserInfo]);
  useEffect(() => {
    socket?.on("msg-recieve", (data) => {
      const newUser = {
        _id: data.from,
        from: data.from,
      };
      if (data) {
        addToContactList(newUser);
        setStoreMessage({ ...data.message, time: formatCurrentTime() });
      }
    });
  }, [socket, addToContactList, setStoreMessage]);
  useEffect(() => {
    if (currentUserInfo) {
      initializeDataListUser();
    }
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
          {!firstSelected ? (
            <EmptyState />
          ) : selectedUser ? (
            <ChatFeed />
          ) : (
            <LoadingMessageSkeleton />
          )}
        </Col>
      </Row>
    </m.div>
  );
};

export default ChatWrapper;
