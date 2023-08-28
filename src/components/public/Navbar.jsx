"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { MenuOutlined } from "@ant-design/icons";

import Drawer from "@/components/Navbar/Drawer";
// import Footer from '@/components/public/Footer'

const Navbar = () => {

  return (
    <motion.div
      initial={{ y: -100 }} 
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <nav className="w-full flex px-6 items-center py-5 rounded-sm justify-between font-medium bg-slate-200">
        <div>
          <Link href="/" className="flex gap-2 flex-center">
            <Image
              src="/images/logo.png"
              alt="Emate Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Show if the screen is on desktop */}
        <motion.div
          className="cursor_pointer hide_on_mobile"
          whileHover={{ scale: 1.2 }}
        >
          <Link href="/">
            <p>Khoá học</p>
          </Link>
        </motion.div>
        <motion.div
          className="cursor_pointer hide_on_mobile"
          whileHover={{ scale: 1.2 }}
        >
          <Link href="/">
            <p>Gia sư</p>
          </Link>
        </motion.div>
        <motion.div
          className="cursor_pointer hide_on_mobile"
          whileHover={{ scale: 1.2 }}
        >
          <Link href="/">
            <p>Dạy cùng Emate</p>
          </Link>
        </motion.div>
        <div className="hidden sm:flex sm:gap-5">
          <motion.button className="none_btn_color" whileHover={{ scale: 1.1 }}>
            Đăng nhập
          </motion.button>
          <motion.button className="blue_btn_color" whileHover={{ scale: 1.1 }}>
            Đăng Kí
          </motion.button>
        </div>

        {/* Show if the screen is on mobile */}
        <MobileNavbar />
      </nav>
    </motion.div>
  );
};


const MobileNavbar = () => {
  const [isDrawerVisible, setDrawerVisible] = useState(false);

  const openMobileNavbar = () => {

  }

  const hideDrawer = () => {
    setDrawerVisible(false);
  };

  const handleShowDrawable = () => {
    setDrawerVisible(!isDrawerVisible);
  };

  return (
    <div className="sm:hidden display-center">
      <MenuOutlined onClick={handleShowDrawable}/>
      <Drawer isDrawerVisible={isDrawerVisible} hideDrawer={hideDrawer} />
    </div>
  )
}


export default Navbar;
