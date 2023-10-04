import ChatHeader from "../ChatHeader/ChatHeader"
import ChatList from "../ChatList/ChatList"
import InputMessage from "../InputMessage/InputMessage"
import { useChatStore } from "../stores/useChatStore";

const ChatFeed = () => {

  return (
    <div className="border-b-2 w-full h-full rounded-rs-lg rounded-tr-2xl overflow-hidden">
        <ChatHeader username={"Viet"}/>
        <ChatList />
        <InputMessage />
    </div>
  )
}

export default ChatFeed
