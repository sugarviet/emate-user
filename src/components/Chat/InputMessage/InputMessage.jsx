"use client";
import axios from "axios";
import { useState } from "react";
import { Upload } from "antd";
import Image from "next/image";
import { useChatStore } from "@/stores/useChatStore";
import { BASE_URL, POST_MSG_URL } from "@/constants/url";
import urlcat from "urlcat";
import { formatCurrentTime } from "@/utils/formatCurrentTime";
import useSocketStore from "@/stores/useSocketStore";
import useFetcher from "@/hooks/global/useFetcher";
import useSWR from "swr";
const InputMessage = () => {
  const [textChatContent, setTextChatContent] = useState("");
  const { post_with_header_fetcher } = useFetcher();
  const selectedUser = useChatStore((state) => state.selectedUser);
  const addToContactListSend = useChatStore(
    (state) => state.addToContactListSend
  );
  const currentUserInfo = useChatStore((state) => state.currentUserInfo);
  const setStoreMessage = useChatStore((state) => state.setStoreMessage);

  const handleSetText = (e) => {
    setTextChatContent(e.target.value);
  };
  const socket = useSocketStore((state) => state.socket);

  const handleSubmitSendTextMessage = async (e) => {
    e.preventDefault();
    if (!textChatContent) return;
    const res = await axios.post(
      urlcat(BASE_URL, POST_MSG_URL),
      {
        message: textChatContent,
        to: selectedUser,
      },
      {
        headers: {
          "x-client-id": currentUserInfo?._id,
          "x-client-accesstoken": currentUserInfo?.token,
          "x-client-refreshtoken": currentUserInfo?.refreshToken,
        },
      }
    );
    let messageAdd = res?.data?.metaData;
    if (messageAdd) {
      const newUser = {
        to: selectedUser?._id,
        from: currentUserInfo?._id,
        name: selectedUser?.name,
        avatar: selectedUser?.avatar,
        message: textChatContent,
      };
      socket?.emit("send-msg", {
        from: currentUserInfo?._id,
        message: messageAdd,
        to: selectedUser?._id,
        fromUser: newUser,
      });
      addToContactListSend(newUser);
      setStoreMessage(messageAdd);
      setTextChatContent("");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmitSendTextMessage(e);
    }
  };

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

          <Upload className="translate-y-1" showUploadList={false}>
            <Image
              src="/icons/gallery.png"
              alt="uploadImg"
              height={30}
              width={30}
            />
          </Upload>

          <button
            className="primary_bg_pink_color px-7 py-2 text-white rounded-xl float-right"
            onKeyPress={handleKeyPress}
            onClick={handleSubmitSendTextMessage}
          >
            Gửi
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputMessage;
