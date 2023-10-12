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
  const {
    data: courses,
    isLoading: coursesLoading,
    error: coursesError,
  } = useSWR(
    "https://emate-af7e6f8fb027.herokuapp.com/coursePurchased/list",
    (url) =>
      get_with_header_fetcher(
        url,
        "65277154f68a06061773afca",
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvYW5naWFiYW8yNzZAZ21haWwuY29tIiwiX2lkIjoiNjUyNzcxNTRmNjhhMDYwNjE3NzNhZmNhIiwiaWF0IjoxNjk3MDk5MzI3LCJleHAiOjE3MDIyODMzMjd9.okgJssh99ie7ZewIzH4subyY8phQ9pocGuDMbO4nn5fyD6VJm27UPpH8-HCxU88ADdl8Bls4O6ORWjF70VfdokeYDSBzpB1N8iQRxmvf7CkAbuP0Pe5VrJtLzNADakQyijO5XEeBeZRmgoMiNXYdl2kLMfNm2WIkeFsfwQapvpumXX7uWUaeDxe986nNYqouQnFEwVJbFt7jOriWYxzii6-YHveMbBp2QN9Gl_QkjcxjC4rx2U78cjZhRXt1IEiId0ig8z1G-6ZjYL7_tAQCo7mv6xs2CMDM7U4eql_jGA4VrzeWTAYzVzVUsM6yBc3S6UQojtrNqBD4JEpG3gqA8g",
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvYW5naWFiYW8yNzZAZ21haWwuY29tIiwiX2lkIjoiNjUyNzcxNTRmNjhhMDYwNjE3NzNhZmNhIiwiaWF0IjoxNjk3MDk5MzI3LCJleHAiOjE3MDc0NjczMjd9.eRQUIGq8ahb7wRp4F1_FzJ4n3Hqgvw3HqVeGphjCxL_AS_g3J8gcPsfff7JfL6cqGSiahtqN_j59VMb3kQ4WhLXm3210GUSAPgjKR0LluIeFxmDyzVfE6OcYJbEGX1IWPBWr7L5da0O1yBrq09UsLgxlO4fr_6GPl0VBi_bYkSJ5mkaHCRcZ7hkJrQImGK4MfWiqKg4waOP4v4KBZXzA8kUs1B9sVJoYTRvxsd_9BudKlKdE117pAO5ix1dj0fZRgoK3EixXY-93FcxQemL5iLbDQM2qE7ccDamje5ssbQ66Li8WTE5H1A495tUkitwN9Jo05ltxtpmKx0MNEBh7Lg"
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
