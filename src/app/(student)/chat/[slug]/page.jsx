import EmptyState from "@/components/Chat/EmptyState/EmptyState";
import ChatWrapper from "@/components/Chat/ChatWrapper/ChatWrapper";

export const metadata = {
  title: "Emate - Chat",
  description: "Emate teaching",
};

const ChatPage = (params) => {
  console.log(params);
  return (
    <main className="mt-6">
      <ChatWrapper />
    </main>
  );
};

export default ChatPage;
