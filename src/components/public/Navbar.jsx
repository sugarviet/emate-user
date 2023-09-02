"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";
import { MenuOutlined } from "@ant-design/icons";

import Drawer from "@/components/Navbar/Drawer";

const NAVBAR_LINKS = [
  {
    href: "/courses",
    text: "Khoá học",
  },
  {
    href: "/mentor",
    text: "Gia sư",
  },
  {
    href: "/teach-with-emate",
    text: "Dạy cùng Emate",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <nav className="w-full flex px-6 items-center md:py-5 py-10 rounded-sm justify-between font-medium bg-transparent">
        <motion.div whileHover={{ scale: 1.2 }}>
          <Link href="/" className="flex gap-2 flex-center">
            <Image
              src="/images/logo.png"
              alt="Emate Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
        </motion.div>

        {/* Show if the screen is on desktop */}

        {NAVBAR_LINKS.map((nav) => (
          <motion.div
            key={nav.text}
            className="cursor_pointer hide_on_mobile"
            whileHover={{ scale: 1.2 }}
          >
            <Link href={nav.href} className={`${nav.href === pathname ? "text-purple-400" : "text-black"}`}>
              <p>{nav.text}</p>
            </Link>
          </motion.div>
        ))}
        {/* <motion.div
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
          <Link href="/teach-with-emate">
            <p>Dạy cùng Emate</p>
          </Link>
        </motion.div> */}
        <div className="hidden sm:flex sm:gap-5">
          <Link href="/signIn">
            <motion.button
              className="none_btn_color"
              whileHover={{ scale: 1.1 }}
            >
              Đăng nhập
            </motion.button>
          </Link>

          <Link href="/signUp">
            <motion.button
              className="blue_btn_color"
              whileHover={{ scale: 1.1 }}
            >
              Đăng Kí
            </motion.button>
          </Link>
        </div>

        {/* Show if the screen is on mobile */}
        <MobileNavbar />
      </nav>
    </motion.div>
  );
};

const MobileNavbar = () => {
  const [isDrawerVisible, setDrawerVisible] = useState(false);

  const hideDrawer = () => {
    setDrawerVisible(false);
  };

  const handleShowDrawable = () => {
    setDrawerVisible(!isDrawerVisible);
  };

  return (
    <div className="sm:hidden display-center">
      <motion.div whileHover={{ scale: 1.2 }}>
        <MenuOutlined onClick={handleShowDrawable} className="text-3xl" />
      </motion.div>
      <Drawer isDrawerVisible={isDrawerVisible} hideDrawer={hideDrawer} />
    </div>
  );
};

export default Navbar;
