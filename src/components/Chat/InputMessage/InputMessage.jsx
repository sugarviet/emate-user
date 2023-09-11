"use client"

import { Form, Input } from "antd"
import styles from './InputMessage.module.css';
import { useChatStore } from "../stores/useChatStore";

const InputMessage = () => {
  const handleSendMessage = (e) => {
    e.preventDefault()
  }
  const count = useChatStore(state => state.count);
  return (
    <div className="px-2">
    
      <div className="">
      <form className="flex h-full items-center justify-between" onSubmit={handleSendMessage}>
        <input type="text" className="w-full text-lg py-3 px-3 focus:border-none focus:outline-none" placeholder="Enter somthing...."/>
        <button className="bg-blue-700 px-7 py-3 text-white rounded-xl float-right">Send</button>

      </form>
      </div>
    </div>
  )
}

export default InputMessage
