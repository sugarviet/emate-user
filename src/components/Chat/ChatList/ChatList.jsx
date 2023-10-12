import React from 'react'
import Message from '../Message/Message'
import { useChatStore } from '@/stores/useChatStore';
import styles from './ChatList.module.css';

const ChatList = () => {
  const currentMsg = useChatStore(state => state.currentMsg)

  console.log('current msg', currentMsg);
  return (
    <div className={styles.container}>
      {currentMsg?.map((msg, index) => (
        <Message key={index} msg={msg}/>
      ))}  
    </div>
  )
}

export default ChatList
