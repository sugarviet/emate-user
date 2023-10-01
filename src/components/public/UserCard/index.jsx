"use client";

import { motion as m } from "framer-motion";
import Image from "next/image";

const UserCard = ({ data }) => {
  const { img, name, age, major, interest } = data;
  return (
    <m.div className="w-full my-10" whileHover={{y: -10}}>
      <div className="w-full mx-auto flex justify-center items-center">
        <Image alt="User" src={img} height={250} width={250} />
      </div>

      <div className="flex flex-col px-16 mt-4">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">{name}</h1>
          <h2>{age} tuổi</h2>
        </div>

        <div className="flex justify-between items-center my-1">
          <h1 className="font-bold text-base">Chuyên ngành:</h1>
          <h2 className="font-semibold">{major}</h2>
        </div>

        <div className="flex justify-between items-center my-1">
          <h1 className="font-bold text-base">Muốn học:</h1>
          <h2 className="font-semibold">{interest}</h2>
        </div>

        <div>
          <p>
            Xin chào! Mình là sinh viên đại học và đang tìm kiếm một bạn học để
            cùng nhau học tập online. Mình mong muốn tìm kiếm bạn có cùng sở
            thích và cùng chí hướng học tập.
          </p>
        </div>
      </div>
    </m.div>
  );
};

export default UserCard;
