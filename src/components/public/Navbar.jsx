"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";
import MobileNavbar from "@/components/Navbar/MobileNavbar";
import SearchBar from "@/components/SearchBar/SearchBar";

import { Avatar, Dropdown } from "antd";
import {
  BellOutlined,
  MessageOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  ContactsOutlined,
  LogoutOutlined,
  ReadOutlined,
  UserOutlined,
  MailOutlined
} from "@ant-design/icons";

const NAVBAR_LINKS_WITHOUT_LOG_IN = [
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

const items = [
  {
    label: (
      <Link href='/'>Khóa học của tôi </Link>
    ),
    key: "0",
    icon: <ReadOutlined/>
  },
  {
    label: <Link href="#">Gia sư của tôi </Link>,
    key: "1",
    icon: <ContactsOutlined/>,
  },
  {
    label: <Link href="#">Chỉnh sửa hồ sơ</Link>,
    key: "2",
    icon: <UserOutlined />
  },
  {
    label: <Link href="#">Cài đặt tài khoản</Link>,
    key: "3",
    icon: <SettingOutlined />
  },
  {
    label: <Link href="#">Trợ giúp</Link>,
    key: "4",
    icon: <MailOutlined />
  },
  {
    type: "divider",
  },
  {
    label: <p>Đăng xuất</p>,
    key: "5",
    icon: <LogoutOutlined />
  },
];

const Navbar = () => {
  const [isUserLogin] = useState(true);
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
        {isUserLogin ? (
          <motion.div
            className="cursor_pointer hide_on_mobile"
            whileHover={{ scale: 1.2 }}
          >
            <Link
              href="/social"
              className={`${
                "/social" === pathname ? "text-purple-400" : "text-black"
              }`}
            >
              <p className="text-xl">Cộng đồng</p>
            </Link>
          </motion.div>
        ) : (
          <></>
        )}

        {NAVBAR_LINKS_WITHOUT_LOG_IN.map((nav) => (
          <motion.div
            key={nav.text}
            className="cursor_pointer hide_on_mobile"
            whileHover={{ scale: 1.2 }}
          >
            <Link
              href={nav.href}
              className={`${
                nav.href === pathname ? "text-purple-400" : "text-black"
              }`}
            >
              <p className="text-xl">{nav.text}</p>
            </Link>
          </motion.div>
        ))}

        {/* NOT LOGGED IN */}
        {isUserLogin ? null : (
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
        )}

        {/* LOG IN */}
        {isUserLogin ? (
          <div className="hidden sm:flex sm:gap-12 items-center">
            <Link href="/">
              <motion.span className="text-2xl" whileHover={{ scale: 1.1 }}>
                <BellOutlined />
              </motion.span>
            </Link>

            <Link href="/">
              <motion.span className="text-2xl" whileHover={{ scale: 1.1 }}>
                <MessageOutlined />
              </motion.span>
            </Link>

            <Link href="/">
              <motion.span className="text-2xl" whileHover={{ scale: 1.1 }}>
                <ShoppingCartOutlined />
              </motion.span>
            </Link>

            <div>
            <Dropdown
                menu={{
                  items,
                }}
                trigger={["hover"]}
                align="middle"            
              >
                <Avatar
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                  style={{ cursor: "pointer" }}
                  size="large"
                />
              </Dropdown>
            </div>
          </div>
        ) : null}

        {/* Show if the screen is on mobile */}
        <div className="sm:hidden block">
          <MobileNavbar />
        </div>
      </nav>

      {/* Show search bar if logged in */}
      {isUserLogin ? <SearchBar /> : null}
    </motion.div>
  );
};

export default Navbar;
