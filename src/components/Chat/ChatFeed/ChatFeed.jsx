import ChatHeader from "../ChatHeader/ChatHeader"
import ChatList from "../ChatList/ChatList"
import InputMessage from "../InputMessage/InputMessage"

const ChatFeed = () => {
  return (
    <div className="border w-full h-full rounded-rs-lg rounded-tr-2xl overflow-hidden">
        <ChatHeader />
        <ChatList />
        <InputMessage />
    </div>
  )
}

export default ChatFeed
