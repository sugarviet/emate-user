"use client";

import { Suspense } from "react";
import Image from "next/image";
import styles from "./MyCourses.module.css";

import { Col, Row } from "antd";

import { motion as m } from "framer-motion";
import CourseCard from "../public/CourseCard";

const MyCourse = () => {
  return (
    <main className="blur_custom">
      <m.div className={styles.container} initial={{bottom: -100, opacity: 0}} animate={{bottom: 0, opacity: 1}} transition={{duration: 0.4}}>
          <h1 className={styles.main_text}>Khóa học của tôi</h1>

          <Suspense fallback={<>Loading...</>}>
            <CourseList />
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
  )
}


const CourseList = ({data}) => {
  return (
    <div className="mt-10 w-full">
      <Row gutter={[16, 16]} align="middle">
        <Col xxl={6} xl={6} lg={8} md={12} xs={24} className="">
            <CourseCard />
        </Col>
        <Col xxl={6} xl={6} lg={8} md={12} xs={24}>
            <CourseCard />
        </Col>
        <Col xxl={6} xl={6} lg={8} md={12} xs={24}>
            <CourseCard />
        </Col>
        <Col xxl={6} xl={6} lg={8} md={12} xs={24}>
            <CourseCard />
        </Col>
        <Col xxl={6} xl={6} lg={8} md={12} xs={24}>
            <CourseCard />
        </Col>
      </Row>
    </div>
  )
}

export default MyCourse
