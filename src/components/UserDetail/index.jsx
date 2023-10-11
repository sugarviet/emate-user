"use client";

import { motion as m } from "framer-motion";
import styles from "./UserDetail.module.css";
import { Col, Row } from "antd";

import UserBio from "./UserBio";
import UserCourse from "./UserCourse";
import UserInfo from "./UserInfo";
import Image from "next/image";
import Comment from "../public/Comment";
import useSWR from "swr";
import { get_fetcher } from "@/utils/fetcher";
import { mentor_course_api, user_api } from "@/constants/api";

const MentorDetail = ({ id }) => {
  const comments = [
    { id: 1, text: "Comment 1" },
    { id: 2, text: "Comment 2" },
    { id: 3, text: "Comment 3" },
    { id: 4, text: "Comment 4" },
    { id: 5, text: "Comment 5" },
    { id: 6, text: "Comment 6" },
    { id: 7, text: "Comment 7" },
    { id: 8, text: "Comment 8" },
  ];

  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useSWR(user_api(id), get_fetcher);

  const {
    data: courses,
    isLoading: coursesLoading,
    error: coursesError,
  } = useSWR(mentor_course_api(id), get_fetcher);

  if (userLoading || userError) return null;
  if (coursesLoading || coursesError) return null;

  console.log(user);

  return (
    <m.main
      className={styles.blur_bg}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Row gutter={[100, 16]} justify="center">
        <Col xl={14} md={24} lg={24}>
          <div>
            <UserBio user={user} courses={courses} />
          </div>
        </Col>
        <Col xl={10} md={24} lg={24}>
          <UserInfo avatar={user.avatar} />
        </Col>
        <Col span={24}>
          <UserCourse courses={courses} />
        </Col>
        <Col span={24}>
          <Comment comments={user.topReview} />
        </Col>
      </Row>

      {/* Images */}
      <Image
        src="/images/pinkDot1.png"
        alt="img"
        width={150}
        height={150}
        className={styles.pink_dot_first}
      />
      <Image
        src="/images/pinkDot2.png"
        alt="img"
        width={150}
        height={150}
        className={styles.pink_dot_second}
      />
      <Image
        src="/images/yellowDot1.png"
        alt="img"
        width={150}
        height={150}
        className={styles.yellow_dot_first}
      />
      <Image
        src="/images/yellowDot3.png"
        alt="img"
        width={150}
        height={150}
        className={styles.yellow_dot_second}
      />
    </m.main>
  );
};

export default MentorDetail;
