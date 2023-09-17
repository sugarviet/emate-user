'use client'

import UserContact from "../UserContact/UserContact";
import { useChatStore } from "../stores/useChatStore";

import styles from './Sidebar.module.css';

const Sidebar = () => {
  const increaseCount = useChatStore(state => state.increaseCount);
  return (
    <div className="h-full flex flex-col">
      <div className="h-12 border rounded-tl-2xl">   
        <h1 className="text-center font-bold text-xl translate-y-2">Danh sách tin nhắn</h1>
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
