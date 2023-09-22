"use client"


import Image from "next/image";
import Link from "next/link";

import { Progress } from "antd";
const CourseCard = () => {
  return (
    <Link href="/" className="hover:text-pink-400">
    <div className="mx-auto flex flex-col items-center">
    {/* lg:w-80 md:w-80 xl:w-80 flex flex-col items-center py-3 w-64 */}
    <div>
      <Image src={"/courses/it-4.png"} alt="img" height={250} width={250} />
    </div>
    <div className="px-2 md:px-0 w-64">
      <div className="h-14 w-full truncate_2_lines mt-2">
        <h1 className="text-lg font-bold">NextJS 13 cuc hay cung Viet Dang</h1>
      </div>
      <Progress percent={50} status="active" strokeColor={"#E087FC"}/>
      <p className="text-gray-500 truncate_2_lines">
        Author: Viet Dang
      </p>
    </div>
  </div>
  </Link>
  )
}

export default CourseCard
