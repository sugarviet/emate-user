import ChatWrapper from "@/components/Chat/ChatWrapper/ChatWrapper";
export const metadata = {
  title: "Emate - Chat",
  description: "Emate teaching",
};

const ChatPage = () => {
  return (
    <main className="mt-6">
      <ChatWrapper />
    </main>
  );
};

export default ChatPage;
