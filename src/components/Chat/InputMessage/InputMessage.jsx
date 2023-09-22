"use client";

import { useState } from "react";
import { Upload } from "antd";
import Image from "next/image";

const InputMessage = () => {
  const [fileList, setFileList] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
  };

  const onChange = (newFileList) => {
    setFileList(newFileList);
  };

  const customRequest = ({ file, onSuccess }) => {};

  return (
    <div className="px-2 h-full border-r-2">
      <div>
        <form
          className="flex h-full items-center gap-2 translate-y-1"
          onSubmit={handleSendMessage}
        >
          <input
            type="text"
            className="w-full text-lg py-3 px-3 focus:border-none focus:outline-none"
            placeholder="Nhập gì đó ...."
          />

          {/* <Image src="/icons/gallery.png" alt='uploadImg' height={30} width={30}/> */}

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

          <button className="primary_bg_pink_color px-7 py-2 text-white rounded-xl float-right">
            Gửi
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputMessage;
