"use client"
import io  from 'socket.io-client'
import React, { useEffect, useRef, useState } from "react";

const socket = io.connect("http://localhost:8080")

const Testpage = () => {
    const handleSendMessage = () => {
        socket.emit("send-msg", {
            message: "hello"
        })
    }

    useEffect(()=>{
        socket.on("msg-recieve", (data) => {
            alert("hello")
        })
    }, [socket])
  return (
    <div className='my-5'>
      <button className='pink_btn' onClick={handleSendMessage}>Send messgage</button>
    </div>
  )
}

export default Testpage
