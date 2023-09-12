import React from 'react'
import Message from '../Message/Message'

import styles from './ChatList.module.css';

const ChatList = () => {
  return (
    <div className={styles.container}>
      <Message me={false}/>
      <Message me={true}/>
      <Message me={true}/>
      <Message me={false}/>
      <Message me={false}/>
      <Message me={true}/>
      <Message me={true}/>
      <Message me={false}/>
      <Message me={true}/>
      <Message me={true}/>
      <Message me={false}/>
      <Message me={true}/>
      <Message me={true}/>
      
    </div>
  )
}

export default ChatList
