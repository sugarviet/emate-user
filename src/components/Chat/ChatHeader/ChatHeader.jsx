import styles from './ChatHeader.module.css';

const ChatHeader = () => {
  return (
    <div className="h-10 flex justify-between px-4 items-center border-b-2">
       <h1 className="font-bold text-2xl">Châu Anh Tú</h1>
       <div className="flex items-center gap-3">
        <p>Đang hoạt động</p>
        <div className={styles.active}/>
       </div>
    </div>
  )
}

export default ChatHeader
