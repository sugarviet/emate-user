"use client";

import { Suspense } from "react";
import Image from "next/image";

import { Col, Row } from "antd";

import { motion as m } from "framer-motion";
import CourseCard from "../public/CourseCard";
import styles from "./MyCourses.module.css";
import SuggestCourse from "../public/SuggestCourse";

import useSWR from "swr";
import { get_with_header_fetcher } from "@/utils/fetcher";
import { useChatStore } from "@/stores/useChatStore";
import { PURCHASED_COURSE_API } from "@/constants/api";

const MyCourse = () => {
  return (
    <main className="blur_custom">
      <m.div
        className={styles.container}
        initial={{ bottom: -100, opacity: 0 }}
        animate={{ bottom: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className={styles.main_text}>Khóa học của tôi</h1>

        <Suspense fallback={<>Loading...</>}>
          <CourseList />
        </Suspense>

        <Suspense fallback={<>Loading...</>}>
          <SuggestCourse />
        </Suspense>

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
      </m.div>
    </main>
  );
};

const CourseList = () => {
  const { currentUserInfo } = useChatStore();

  const {
    data: courses,
    isLoading: coursesLoading,
    error: coursesError,
  } = useSWR(PURCHASED_COURSE_API, (url) =>
    get_with_header_fetcher(
      url,
      currentUserInfo._id,
      currentUserInfo.refreshToken,
      currentUserInfo.token
    )
  );

  if (coursesLoading || coursesError) return null;

  return (
    <div className="mt-10 w-full">
      <Row gutter={[16, 40]} align="middle">
        {courses.map((item, index) => (
          <Col key={`${item} + ${index}`} span={24}>
            <CourseCard course={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyCourse;
