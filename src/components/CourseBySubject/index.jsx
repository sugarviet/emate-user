"use client";
import { Suspense } from "react";
import Image from "next/image";
import styles from "./CourseBySubject.module.css";
import CarouselCustom from "../public/CarouselCustom/CarouselCustom";
import SpinnerLoading from "../public/SpinnerLoading";
import useSWR from "swr";
import {
  ALL_COURSE_API,
  courses_by_subject_api,
  subject_item_api,
} from "@/constants/api";
import { get_fetcher } from "@/utils/fetcher";
import { List } from "antd";
import RegisterCourseCard from "../public/RegisterCourseCard/RegisterCourseCard";
import Animation3D from "../Animation3D";
import { coming_soon } from "@/animations_data";

const it_data_courses = {
  title: "Lập trình Game",
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

const top_data_courses = {
  title: "Khóa học có nhiều học viên nhất",
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

const favorite_data_courses = {
  title: "Khóa học được yêu thích nhất",
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

function CourseBySubject({ id }) {
  const {
    data: courses,
    isLoading: coursesLoading,
    error: coursesError,
  } = useSWR(courses_by_subject_api(`${id}?page=1&limit=12`), get_fetcher);

  const {
    data: subject,
    isLoading: subjectLoading,
    error: subjectError,
  } = useSWR(subject_item_api(`${id}`), get_fetcher);

  const {
    data: allCourses,
    isLoading: allCoursesLoading,
    error: allCoursesError,
  } = useSWR(ALL_COURSE_API, get_fetcher);

  if (coursesLoading || coursesError) return <SpinnerLoading />;
  if (subjectLoading || subjectError) return <SpinnerLoading />;
  if (allCoursesLoading || allCoursesError) return <SpinnerLoading />;

  it_data_courses.arrayData = courses;
  it_data_courses.title = subject.name;

  favorite_data_courses.arrayData = [
    ...allCourses.sort((a, b) => b.rating - a.rating),
  ];
  top_data_courses.arrayData = [
    ...allCourses.sort((a, b) => b.purchasers - a.purchasers),
  ];

  const number_of_purchaser = courses.reduce(
    (total, currentCourse) => currentCourse.purchasers + total,
    0
  );

  return (
    <main className="blur_custom">
      <div className={styles.container}>
        <div className="flex flex-col mb-20">
          <span className="font-bold text-4xl">{subject.description}</span>
          <span className="text-xl my-2">{number_of_purchaser} người học</span>
          <span className="text-xl my-2 w-3/4">
            Emate là nền tảng học trực tuyến cung cấp các khóa học chất lượng
            với giảng viên giàu kinh nghiệm và giá cả phù hợp với học sinh, sinh
            viên. Với Emate, bạn có thể học tập mọi lúc, mọi nơi và nâng cao kỹ
            năng của mình một cách hiệu quả.
          </span>
        </div>
        <div>
          {/* <CarouselCustom carouselData={it_data_courses} /> */}
          <h1 className="text-3xl font-bold underline sm:ml-9 mb-6">
            {it_data_courses.title}
          </h1>
          {it_data_courses.arrayData.length > 0 ? (
            <List
              grid={{
                gutter: 16,
                xxl: 4,
                xl: 4,
                lg: 3,
                md: 2,
                xs: 1,
              }}
              dataSource={it_data_courses.arrayData}
              renderItem={(course, index) => (
                <div key={course._id} className="hover:cursor-pointer">
                  <RegisterCourseCard index={index} cardData={course} />
                </div>
              )}
            />
          ) : (
            <div className="flex items-center justify-center h-40 my-20">
              <Animation3D name="coming_soon" loop />
            </div>
          )}
        </div>
        <div>
          <Suspense fallback={<SpinnerLoading />}>
            <CarouselCustom carouselData={top_data_courses} />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<SpinnerLoading />}>
            <CarouselCustom carouselData={favorite_data_courses} />
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
}

export default CourseBySubject;
