"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

import { motion } from "framer-motion";
import MobileNavbar from "@/components/Navbar/MobileNavbar";
import {
  SettingOutlined,
  ContactsOutlined,
  LogoutOutlined,
  ReadOutlined,
  UserOutlined,
  MailOutlined,
  WalletOutlined,
} from "@ant-design/icons";

import {
  COURSES_PAGE_URL,
  HOME_PAGE_URL,
  LOGIN_PAGE_URL,
  MENTOR_PAGE_URL,
  MY_COURSES_PAGE_URL,
  MY_PROFILE_PAGE_URL,
  SIGN_UP_PAGE_URL,
  TEACH_WITH_EMATE_PAGE_URL,
} from "@/constants/url";
import Wallet from "../Wallet";
import Navbar from "./Navbar";

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
    label: <Link href={MY_PROFILE_PAGE_URL}>Chỉnh sửa hồ sơ</Link>,
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
    label: <Wallet />,
    key: "5",
    icon: <WalletOutlined />,
  },
  {
    type: "divider",
  },
  {
    label: (
      <p onClick={() => signOut({ callbackUrl: HOME_PAGE_URL })}>Đăng xuất</p>
    ),
    key: "6",
    icon: <LogoutOutlined />,
  },
];

const GuestNavbar = () => {
  const { data: isUserLogin } = useSession();
  const pathname = usePathname();

  if (isUserLogin) return <Navbar />;

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

        {NAVBAR_LINKS_WITH_LOG_IN.map((nav) => (
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
        ))}

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

        {/* Show if the screen is on mobile */}
        <div className="block lg:hidden">
          <MobileNavbar />
        </div>
      </nav>
    </motion.div>
  );
};
export default GuestNavbar;
