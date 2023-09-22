import styles from './ChatHeader.module.css';

const ChatHeader = () => {
  return (
    <div className="h-12 flex justify-between px-4 items-center light_bg_pink_color">
       <h1 className="font-bold text-2xl text-black">Châu Anh Tú</h1>
       <div className="flex items-center gap-3">
        <p className='text-black'>Đang hoạt động</p>
        <div className={styles.active}/>
       </div>
    </div>
  )
}

export default ChatHeader
