"use client";

import { motion as m } from "framer-motion";
import styles from "./CourseDetail.module.css";
import Image from "next/image";
import CoursePreview from "./CoursePreview";
import CourseBanner from "./CourseBanner";
import { Avatar, Collapse, Rate } from "antd";
import { DesktopOutlined, StarFilled } from "@ant-design/icons";

const course = {
  _id: { $oid: "65142781eb017a57606d63b7" },
  name: "Nodejs From Beginner",
  image: "https://s.udemycdn.com/meta/default-meta-image-v2.png",
  owner: "650ffd11ecf7190320d57aa3",
  subject: "64eef8e529c357baafac5fb8",
  whatWillLearn:
    "Work with one of the most in-demand web development programming languages",
  requirement:
    "General knowledge of how the web works is recommended but not a must-have --- Basic JavaScript knowledge is strongly recommended but could be picked up whilst going through the course",
  description:
    "Join the most comprehensive Node.js course on Udemy and learn Node in both a practical as well as theory-based way!",
  level: "Fundametal JavaScript",
  price: 424000,
  content: [
    {
      name: "Introduction",
      sections: [
        {
          name: "Introduction",
          description:
            "Welcome to this Node.js course! Let me introduce myself and give you a rough overview of this course and what it's all about!",
          video: "introduction.mp4",
          _id: { $oid: "65142781eb017a57606d63b9" },
        },
        {
          name: "What is NodeJs",
          description:
            "What is Node.js? That's the most important question in a Node course I'd argue and in this lecture, we'll explore what exactly NodeJS is and why it's amazing.",
          video: "introduction.mp4",
          _id: { $oid: "65142781eb017a57606d63ba" },
        },
      ],
      _id: { $oid: "65142781eb017a57606d63b8" },
    },
    {
      name: "Understand the basic",
      sections: [
        {
          name: "Module Introduction",
          description: "",
          video: "introduction.mp4",
          _id: { $oid: "65142781eb017a57606d63bc" },
        },
        {
          name: "Javscript in the Nutshell",
          description: "",
          video: "introduction.mp4",
          _id: { $oid: "65142781eb017a57606d63bd" },
        },
      ],
      _id: { $oid: "65142781eb017a57606d63bb" },
    },
  ],
  rating: 4.7,
  visibility: true,
  status: false,
  topReview: [],
  __v: { $numberInt: "0" },
};

function CourseDetail() {
  return (
    <>
      <div className="fixed right-20 z-10">
        <CoursePreview course={course} />
      </div>
      <m.main
        className={`${styles.blur_bg}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-2/3">
          <CourseBanner course={course} />
          <div className={styles.learning_about}>
            <span className="font-bold text-xl">What you'll learn</span>
            <ul className={`${styles.list}`}>
              <li>{course.whatWillLearn}</li>
              <li>{course.whatWillLearn}</li>
              <li>{course.whatWillLearn}</li>
              <li>{course.whatWillLearn}</li>
              <li>{course.whatWillLearn}</li>
              <li>{course.whatWillLearn}</li>
            </ul>
          </div>
          <div className="my-4">
            <span className="font-semibold text-3xl">Course content</span>
            <Collapse
              size="large"
              className="bg-pink-50 mt-8 rounded-none border-pink-300"
              defaultActiveKey={1}
              items={course.content.map((item, index) => ({
                key: index + 1,
                label: <span className="font-bold text-lg">{item.name}</span>,
                children: (
                  <ul>
                    {item.sections.map((section) => (
                      <li className="text-md my-2">
                        <DesktopOutlined />
                        <span className="ml-4">{section.name}</span>
                      </li>
                    ))}
                  </ul>
                ),
                style: {
                  borderRadius: 0,
                  borderColor: "rgb(249 168 212)",
                },
              }))}
            />
          </div>
          <div>
            <span className="text-xl font-bold">
              <StarFilled style={{ color: "#fadb14" }} /> {course.rating} course
              rating
            </span>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="border-t-2 py-4">
                <div className="flex items-center my-2">
                  <Avatar />
                  <div className="flex-col flex text-sm ml-2">
                    <span>Marcos Orza R.</span>
                    <Rate value={5} disabled className="text-xs" />
                  </div>
                </div>
                <span>
                  Great course, If the video is to fast you can slow it down and
                  if the chapter is outdated you can google it and figure it
                  out, that' s part of the learning process.
                </span>
              </div>
              <div className="border-t-2 py-4">
                <div className="flex items-center my-2">
                  <Avatar />
                  <div className="flex-col flex text-sm ml-2">
                    <span>Marcos Orza R.</span>
                    <Rate value={5} disabled className="text-xs" />
                  </div>
                </div>
                <span>
                  Great course, If the video is to fast you can slow it down and
                  if the chapter is outdated you can google it and figure it
                  out, that' s part of the learning process.
                </span>
              </div>
            </div>
          </div>
        </div>
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
    </>
  );
}

export default CourseDetail;
