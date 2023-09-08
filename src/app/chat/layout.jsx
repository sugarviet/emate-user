import Sidebar from "@/components/Chat/Sidebar/Sidebar"

const ChatLayout = ({children}) => {
  return (
    <Sidebar>
        <div className="h-full">
        {children}
        </div>
    </Sidebar>
  )
}

export default ChatLayout
