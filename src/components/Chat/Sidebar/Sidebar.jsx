"use client";

import UserContact from "../UserContact/UserContact";
import { useChatStore } from "@/stores/useChatStore";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-12 rounded-tl-2xl light_bg_pink_color border-r-2 border-white">
        <h1 className="text-center font-semibold text-xl translate-y-2 text-black">
          Danh sách tin nhắn
        </h1>
      </div>
      <DesktopSidebar />
    </div>
  );
};
const DesktopSidebar = () => {
  const listUsers = useChatStore((state) => state.listUsers);
  return (
    <div className={styles.container}>
      <ul>
        {listUsers?.map((message, index) => (
          <li key={index}>
            <UserContact message={message} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
