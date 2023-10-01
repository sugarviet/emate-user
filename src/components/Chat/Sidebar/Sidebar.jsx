'use client'

import UserContact from "../UserContact/UserContact";
import { useChatStore } from "../stores/useChatStore";

import styles from './Sidebar.module.css';

const messages = [
  {id: 1, name: 'Châu Anh Tú', time: '12:30pm', messageTo: 'Chào bạn', img: '/character/chauAnhTu.png', number: 1},
  {id: 2, name: 'Diệu My', time: '7:30am', messageTo: 'Quao !', img: '/character/dieuMy.png', number: 2},
  {id: 3, name: 'Hải Đăng Khánh', time: '2:30pm', messageTo: 'Bạn hướng dẫn mình phần này với ạ', img: '/character/haiDangKhanh.png', number: 3},
  {id: 4, name: 'Khoa Anh Lê', time: '1:30pm', messageTo: 'Bạn đang muốn học IT ?', img: '/character/khoaAnhLe.png', number: 1},
  {id: 5, name: 'Nguyễn Nhi', time: '12:30pm', messageTo: 'Chào bạn', img: '/character/nguyenNhi.png', number: 1},
  {id: 6, name: 'Ngô Trà Ngân', time: '12:30pm', messageTo: 'Chào bạn', img: '/character/ngoTraNgan.png', number: 1},
  {id: 7, name: 'Châu Anh Tú', time: '12:30pm', messageTo: 'Chào bạn', img: '/character/chauAnhTu.png', number: 2},
  {id: 8, name: 'Châu Anh Tú', time: '12:30pm', messageTo: 'Chào bạn', img: '/character/chauAnhTu.png', number: 1},
  {id: 9, name: 'Châu Anh Tú', time: '12:30pm', messageTo: 'Chào bạn', img: '/character/chauAnhTu.png', number: 1},
]

const Sidebar = () => {
  const increaseCount = useChatStore(state => state.increaseCount);
  return (
    <div className="h-full flex flex-col">
      <div className="h-12 rounded-tl-2xl light_bg_pink_color border-r-2 border-white">   
        <h1 className="text-center font-semibold text-xl translate-y-2 text-black">Danh sách tin nhắn</h1>
        </div>
      <DesktopSidebar />
    </div>
  );
};

const DesktopSidebar = () => {
  return (
    <div
      className={styles.container}
    >
     <ul>
      {messages.map(message => (
        <li key={message.id}>
            <UserContact message={message}/>
        </li>
      ))}
        {/* <li>
            <UserContact />
        </li>
        <li>
            <UserContact />
        </li>
        <li>
            <UserContact />
        </li>
        <li>
            <UserContact />
        </li>
        <li>
            <UserContact />
        </li>
        <li>
            <UserContact />
        </li>
        <li>
            <UserContact />
        </li>
        
         */}
        
     </ul>

    </div>
  );
};

export default Sidebar;
