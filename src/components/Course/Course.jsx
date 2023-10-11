"use client";

import { Suspense } from "react";
import Image from "next/image";
import styles from "./Course.module.css";
import CarouselCustom from "../public/CarouselCustom/CarouselCustom";
import useSWR from "swr";
import { get_fetcher } from "@/utils/fetcher";
import { courses_by_subject_api } from "@/constants/api";

const it_data_courses = {
  title: "IT và phần mềm",
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
    {
      id: 5,
      thumbnail: "/courses/it-1.png",
      courseTitle: "Lập trình Python cơ bản",
      author: "Đăng Nguyễn, Nhật Trường",
      rate: 4,
      numberOfRates: 899,
      price: 380,
    },
  ],
};

const soft_skills_data_courses = {
  title: "Kỹ năng mềm",
  type: "course",
  arrayData: [
    {
      id: 1,
      thumbnail: "/courses/soft-skill-1.png",
      courseTitle: "Nâng cao kỹ năng giao tiếp",
      author: "Hạ Linh",
      rate: 4,
      numberOfRates: 899,
      price: 300,
    },
    {
      id: 2,
      thumbnail: "/courses/soft-skill-2.png",
      courseTitle: "Thống trị quản lý thời gian",
      author: "Phạm Tuấn Anh",
      rate: 4,
      numberOfRates: 1242,
      price: 230,
    },
    {
      id: 3,
      thumbnail: "/courses/soft-skill-3.png",
      courseTitle: "Xây dựng sự kiên cường và trí thông minh cảm xúc",
      author: "Nguyễn Minh Tú",
      rate: 4,
      numberOfRates: 678,
      price: 250,
    },
    {
      id: 4,
      thumbnail: "/courses/soft-skill-4.png",
      courseTitle: "Đàm phán và giải quyết xung đột",
      author: "Phong Đạt Lê",
      rate: 4,
      numberOfRates: 2138,
      price: 2300,
    },
    {
      id: 5,
      thumbnail: "/courses/soft-skill-1.png",
      courseTitle: "Nâng cao kỹ năng giao tiếp",
      author: "Đăng Nguyễn, Nhật Trường",
      rate: 4,
      numberOfRates: 899,
      price: 380,
    },
  ],
};

const economy_data_courses = {
  title: "Kinh tế",
  type: "course",
  arrayData: [
    {
      id: 1,
      thumbnail: "/courses/economy-1.png",
      courseTitle: "Khóa học Cơ bản về Kinh tế",
      author: "Thu Trang Võ",
      rate: 4,
      numberOfRates: 899,
      price: 380,
    },
    {
      id: 2,
      thumbnail: "/courses/economy-2.png",
      courseTitle: "Khóa học Kinh tế phát triển",
      author: "Thanh Thảo Phạm",
      rate: 4,
      numberOfRates: 1242,
      price: 330,
    },
    {
      id: 3,
      thumbnail: "/courses/economy-3.png",
      courseTitle: "Khóa học Kinh tế quốc tế",
      author: "Ngọc Đăng Khoa",
      rate: 4,
      numberOfRates: 678,
      price: 270,
    },
    {
      id: 4,
      thumbnail: "/courses/it-4.png",
      courseTitle: "Khóa học Kinh tế đối ngoại.",
      author: "Lê Hải",
      rate: 4,
      numberOfRates: 2138,
      price: 430,
    },
    {
      id: 5,
      thumbnail: "/courses/soft-skill-4.png",
      courseTitle: "Lập trình Python cơ bản",
      author: "Đăng Nguyễn, Nhật Trường",
      rate: 4,
      numberOfRates: 899,
      price: 380,
    },
  ],
};

const Course = () => {
  const {
    data: courses,
    isLoading: coursesLoading,
    error: courseError,
  } = useSWR(
    courses_by_subject_api("650ff722b36ad198e85ab814?page=1&limit=12"),
    get_fetcher
  );

  if (coursesLoading || courseError) return null;

  it_data_courses.arrayData = courses;
  soft_skills_data_courses.arrayData = courses;
  economy_data_courses.arrayData = courses;

  return (
    <main className="blur_custom">
      <div className={styles.container}>
        <div>
          <CarouselCustom carouselData={it_data_courses} />
        </div>
        <div>
          <Suspense fallback={<div>Loading ...</div>}>
            <CarouselCustom carouselData={soft_skills_data_courses} />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<div>Loading ...</div>}>
            <CarouselCustom carouselData={economy_data_courses} />
          </Suspense>
        </div>

        {/* Images setup */}
        <Image
          src="/images/pinkDot4.png"
          alt="img"
          width={120}
          height={120}
          className={styles.pink_dot_first}
        />
        <Image
          src="/images/pinkDot4.png"
          alt="img"
          width={120}
          height={120}
          className={styles.pink_dot_second}
          loading="lazy"
          priority={false}
        />
        <Image
          src="/images/yellowDot1.png"
          alt="img"
          width={120}
          height={120}
          className={styles.yellow_dot_first}
          loading="lazy"
          priority={false}
        />
      </div>
    </main>
  );
};

export default Course;
