"use client"

import { motion as m } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { TwitterOutlined, SendOutlined, YoutubeOutlined, FacebookOutlined } from "@ant-design/icons";

const CONNECT_WITH_MENTOR = [
    {
        text: 'Send message',
        icon: <SendOutlined className="text-white text-base"/>,
        href: '/',
        priority: true
    },
    {
        text: 'Youtube',
        icon: <YoutubeOutlined className="text-white text-base"/>,
        href: '/'
    },
    {
        text: 'Facebook',
        icon: <FacebookOutlined className="text-white text-lg"/>,
        href: '/'
    },
]

const MentorInfo = () => {
  return (
    <div className="flex flex-col items-center mt-10">

      {/* Mentor avatar */}
      <div>
        <Image
          src="/character/nguyenNgoc.png"
          alt="mentor"
          width={250}
          height={250}
          className="rounded-full"
        />
      </div>

      {/* Connect with mentor */}
      <div>
        {CONNECT_WITH_MENTOR.map(info => (
          <m.div key={info.text} whileHover={{scale: 1.2}}>
              <Link href="/" key={info.text}>
              <div className="bg-purple-300 w-40 h-12 border border-white my-3 flex items-center justify-center cursor-pointer rounded-lg gap-2 p-2">
                  <p className="text-center text-lg text-white font-semibold">{info.text}</p>
                  {/* <SendOutlined className="text-white"/> */}
                  {info.icon}
              </div>
          </Link>
          </m.div>
        ))}

      </div>
    </div>
  );
};

export default MentorInfo;
