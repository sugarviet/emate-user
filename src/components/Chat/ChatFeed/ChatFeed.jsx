import ChatHeader from "../ChatHeader/ChatHeader"
import ChatList from "../ChatList/ChatList"
import InputMessage from "../InputMessage/InputMessage"

const ChatFeed = () => {
  return (
    <div className="border w-full h-full rounded-rs-lg">
        <ChatHeader />
        <ChatList />
        <InputMessage />
    </div>
  )
}

export default ChatFeed
