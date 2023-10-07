"use client";

import axios from "axios";
import { useState } from "react";
import { Upload } from "antd";
import Image from "next/image";
import { useChatStore } from "@/stores/useChatStore";
import io  from "socket.io-client";
import { BASE_URL, POST_MSG_URL } from "@/constants/url";
import urlcat from "urlcat";
import { formatCurrentTime } from "@/utils/formatCurrentTime";

const socket = io.connect(BASE_URL)
const InputMessage = () => {
  const [textChatContent, setTextChatContent] = useState("");
  const selectedUser = useChatStore(state => state.selectedUser)
  const addToContactList = useChatStore(state => state.addToContactList)

  const setStoreMessage = useChatStore(state => state.setStoreMessage)




  const handleSetText = (e) => {
    setTextChatContent(e.target.value);
  }

  const handleSubmitSendTextMessage = async(e) => {
    e.preventDefault();

    if(!textChatContent) return;

    socket.emit("send-msg", {
      message: textChatContent,
      to: "651a6949baf2f58aa1cb63a8" || selectedUser?.userId
  })
  // 651e3228f541cff397ab7590

  setTextChatContent("")

  
    // const res = await axios.post(urlcat(BASE_URL, POST_MSG_URL), data)

    // return res;

      const newUser = {
        id: "651a6949baf2f58aa1cb63a8",
        name: "Viet",
        email:"viet123@gmail.com",
        image: ''
      }

      // if(handleCheckIfUserInContactAlreadyExists(newUser.id)) return;

      addToContactList(newUser);
      setStoreMessage({message: textChatContent, to: "651a6949baf2f58aa1cb63a8" ,time: formatCurrentTime()})

    
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmitSendTextMessage(e);
    }
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
  };


  return (
    <div className="px-2 h-full border-r-2 bg-white">
      <div>
        <form
          className="flex h-full items-center gap-2 translate-y-1"
          onSubmit={handleSendMessage}
        >
          <input
            type="text"
            className="w-full text-lg py-3 px-3 focus:border-none focus:outline-none"
            placeholder="Nhập gì đó ...."
            onChange={handleSetText}
            value={textChatContent}
          />

          <Upload
          className="translate-y-1"
          showUploadList={false}
          >
            <Image
              src="/icons/gallery.png"
              alt="uploadImg"
              height={30}
              width={30}
            />
          </Upload>

          <button className="primary_bg_pink_color px-7 py-2 text-white rounded-xl float-right" onKeyPress={handleKeyPress} onClick={handleSubmitSendTextMessage}>
            Gửi
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputMessage;
