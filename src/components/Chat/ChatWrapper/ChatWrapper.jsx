"use client";

import { Suspense } from "react";
import { Row, Col } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import ChatFeed from "../ChatFeed/ChatFeed";
import { motion as m } from "framer-motion";
import EmptyState from "../EmptyState/EmptyState";

const ChatWrapper = () => {

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
           <ChatFeed />
          {/* <EmptyState /> */}
        </Col>
      </Row>
    </m.div>
  );
};

export default ChatWrapper;
