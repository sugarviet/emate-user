"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

import { motion } from "framer-motion";
import MobileNavbar from "@/components/Navbar/MobileNavbar";
import SearchBar from "@/components/SearchBar/SearchBar";

import { Avatar, Dropdown, Badge } from "antd";
import {
  BellOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  ContactsOutlined,
  LogoutOutlined,
  ReadOutlined,
  UserOutlined,
  MailOutlined,
} from "@ant-design/icons";

import {
  BASE_URL_LOCAL_HOST,
  CART_PAGE_URL,
  CHAT_PAGE_URL,
  COURSES_PAGE_URL,
  LOGIN_PAGE_URL,
  MENTOR_PAGE_URL,
  MY_COURSES_PAGE_URL,
  SIGN_UP_PAGE_URL,
  SOCIAL_PAGE_URL,
  TEACH_WITH_EMATE_PAGE_URL,
} from "@/constants/url";

const NAVBAR_LINKS_WITH_LOG_IN = [
  {
    href: COURSES_PAGE_URL,
    text: "Khoá học",
  },
  {
    href: MENTOR_PAGE_URL,
    text: "Gia sư",
  },
  {
    href: TEACH_WITH_EMATE_PAGE_URL,
    text: "Dạy cùng Emate",
  },
];

const items = [
  {
    label: <Link href={MY_COURSES_PAGE_URL}>Khóa học của tôi </Link>,
    key: "0",
    icon: <ReadOutlined />,
  },
  {
    label: <Link href="#">Gia sư của tôi </Link>,
    key: "1",
    icon: <ContactsOutlined />,
  },
  {
    label: <Link href="#">Chỉnh sửa hồ sơ</Link>,
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: <Link href="#">Cài đặt tài khoản</Link>,
    key: "3",
    icon: <SettingOutlined />,
  },
  {
    label: <Link href="#">Trợ giúp</Link>,
    key: "4",
    icon: <MailOutlined />,
  },
  {
    type: "divider",
  },
  {
    label: (
      <p onClick={() => signOut({ callbackUrl: BASE_URL_LOCAL_HOST })}>
        Đăng xuất
      </p>
    ),
    key: "5",
    icon: <LogoutOutlined />,
  },
];

const Navbar = () => {
  const { data: isUserLogin } = useSession();
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
              href={SOCIAL_PAGE_URL}
              className={`${
                SOCIAL_PAGE_URL === pathname ? "text-purple-400" : "text-black"
              }`}
            >
              <p className="lg:text-xl text-base">Cộng đồng</p>
            </Link>
          </motion.div>
        ) : (
          <></>
        )}

    {
          NAVBAR_LINKS_WITH_LOG_IN.map((nav) => (
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
                <p className="lg:text-xl text-base">{nav.text}</p>
              </Link>
            </motion.div>
          ))
        }
        

        {/* NOT LOGGED IN */}
        {isUserLogin ? null : (
          <div className="hidden lg:flex sm:gap-5">
            <Link href={LOGIN_PAGE_URL}>
              <motion.button
                className="none_btn_color"
                whileHover={{ scale: 1.1 }}
              >
                Đăng nhập
              </motion.button>
            </Link>

            <Link href={SIGN_UP_PAGE_URL}>
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
          <div className="hidden lg:flex sm:gap-12 items-center">
            <Link href="/">
              <Badge count={2}>
                <motion.span className="text-2xl" whileHover={{ scale: 1.1 }}>
                  <BellOutlined />
                </motion.span>
              </Badge>
            </Link>

            <Link href={CHAT_PAGE_URL}>
              <Badge count={3}>
                <motion.span className="text-2xl" whileHover={{ scale: 1.1 }}>
                  <MessageOutlined />
                </motion.span>
              </Badge>
            </Link>

            <Link href={CART_PAGE_URL}>
              <Badge count={6}>
                <motion.span className="text-2xl" whileHover={{ scale: 1.1 }}>
                  <ShoppingCartOutlined />
                </motion.span>
              </Badge>
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
                  alt="User Image"
                  style={{ cursor: "pointer" }}
                  size="large"
                />
              </Dropdown>
            </div>
          </div>
        ) : null}

        {/* Show if the screen is on mobile */}
        <div className="block lg:hidden">
          <MobileNavbar />
        </div>
      </nav>

      {/* Show search bar if logged in */}
      {isUserLogin ? <SearchBar /> : null}
    </motion.div>
  );
};

export default Navbar;
