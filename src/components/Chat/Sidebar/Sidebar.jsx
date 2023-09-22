'use client'

import UserContact from "../UserContact/UserContact";
import { useChatStore } from "../stores/useChatStore";

import styles from './Sidebar.module.css';

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
        <li>
            <UserContact />
        </li>
        <li>
            <UserContact />
        </li>
        
        
        
     </ul>

    </div>
  );
};

export default Sidebar;
