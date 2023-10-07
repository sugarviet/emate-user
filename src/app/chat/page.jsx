// "use client"

import fetcher from "@/utils/fetcher";
import useSWR from "swr";
import EmptyState from "@/components/Chat/EmptyState/EmptyState";
import ChatWrapper from "@/components/Chat/ChatWrapper/ChatWrapper";
import { useChatStore } from "@/stores/useChatStore";


export const metadata = {
  title: "Emate - Chat",
  description: "Emate teaching",
};

const ChatPage = () => {
  // const {data, isLoading} = useSWR("https://jsonplaceholder.typicode.com/users", fetcher)
  // const storeChattedUsers = useChatStore(state => state.storeChattedUsers)

  // if(isLoading) {
  //   return <>Loading...</>
  // }

  // storeChattedUsers(data)


  return (
    <main className="mt-6">
      <ChatWrapper />
    </main>
  );
};

export default ChatPage;
