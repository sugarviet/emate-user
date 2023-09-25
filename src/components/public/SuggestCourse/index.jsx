"use client"

import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import CarouselCustom from "../CarouselCustom/CarouselCustom";
import { Suspense } from "react";
import { COURSES_PAGE_URL } from "@/constants/url";

const it_data_courses = {
    title: "",
    type: "course",
    arrayData: [
      {
        id: 1,
        thumbnail: "/courses/it-1.png",
        courseTitle: "Lập trình Python cơ bản",
        author: "Đăng Nguyễn, Nhật Trường",
        rate: 4,
        numberOfRates: 899,
        price: 380,
      },
      {
        id: 2,
        thumbnail: "/courses/it-2.png",
        courseTitle: "Thiết kế và phát triển website",
        author: "Phạm Thế Anh",
        rate: 4,
        numberOfRates: 1242,
        price: 250,
      },
      {
        id: 3,
        thumbnail: "/courses/it-3.png",
        courseTitle: "An toàn thông tin và bảo mật mạng",
        author: "Nguyễn Ngọc Quang",
        rate: 4,
        numberOfRates: 678,
        price: 270,
      },
      {
        id: 4,
        thumbnail: "/courses/it-4.png",
        courseTitle: "Blockchain và các ứng dụng trên nền tảng này",
        author: "Tuấn Võ Phạm",
        rate: 4,
        numberOfRates: 2138,
        price: 400,
      },
    ],
  };
const SuggestCourse = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5 mt-10 ml-9">Các khóa học có thể bạn quan tâm</h1>
      <div>
        <CarouselCustom carouselData={it_data_courses}/>
      </div>

    <Link href={COURSES_PAGE_URL}>
      <button className="primary_bg_pink_color font-bold text-xl py-3 px-7 rounded-lg mx-auto flex justify-center items-center">Xem thêm các khóa học <ArrowRightOutlined className="ml-4"/></button>
      </Link>

    </div>
  )
}

export default SuggestCourse
