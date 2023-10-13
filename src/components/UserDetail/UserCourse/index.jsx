"use client";
import { motion as m } from "framer-motion";
import RegisterCourseCard from "@/components/public/RegisterCourseCard/RegisterCourseCard";
import { Row, Col } from "antd";
import useSWR from "swr";
import { get_fetcher } from "@/utils/fetcher";
import { mentor_course_api } from "@/constants/api";

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

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
    },
  }),
  hoverInDesktop: {
    y: -10,
  },
  hoverInMobile: {
    y: 0,
  },
};

const UserCourse = ({ courses }) => {
  it_data_courses.arrayData = courses;

  return (
    <div className="md:translate-x-0">
      <h1 className="font-bold text-xl my-2">
        Mentor Course ({it_data_courses.arrayData.length})
      </h1>
      <div className="">
        <Row gutter={[66, 16]}>
          {it_data_courses.arrayData.map((item, index) => (
            <Col xxl={6} xl={8} lg={12} md={12} key={item.id}>
              <m.div
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                whileHover={"hoverInDesktop"}
                viewport={{ once: true }}
                custom={index}
              >
                <RegisterCourseCard index={index} cardData={item} />
              </m.div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default UserCourse;
