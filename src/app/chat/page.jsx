import EmptyState from "@/components/Chat/EmptyState/EmptyState";
import Sidebar from "@/components/Chat/Sidebar/Sidebar";
import ChatFeed from "@/components/Chat/ChatFeed/ChatFeed";

import { Row, Col } from "antd";

export const metadata = {
  title: "Emate - Chat",
  description: "Emate teaching",
};

const ChatPage = () => {
  return (
    <main className="mt-4">
      <Row justify="space-between">
        <Col span={5}>
          <Sidebar />
        </Col>
        <Col span={19}>
          <ChatFeed />
        </Col>
      </Row>
      {/* <div className="w-80"><Sidebar /></div>
       <div className="flex-1"><ChatFeed /></div> */}
    </main>
  );
};

export default ChatPage;
