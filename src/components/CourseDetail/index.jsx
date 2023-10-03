"use client";

import { motion as m } from "framer-motion";
import styles from "./CourseDetail.module.css";
import Image from "next/image";
import CoursePreview from "./CoursePreview";
import CourseBanner from "./CourseBanner";
import { Collapse } from "antd";
import { DesktopOutlined } from "@ant-design/icons";
import useSWR from "swr";
import { course_item_api } from "@/constants/api";
import CourseReview from "./CourseReview";
import { get_fetcher } from "@/utils/fetcher";
import { formattedCurrency } from "@/utils/formatedCurrency";

function CourseDetail({ id }) {
  const { data, isLoading } = useSWR(course_item_api(id), get_fetcher);

  if (isLoading) return null;

  const course = {
    ...data,
    image: "https://s.udemycdn.com/meta/default-meta-image-v2.png",
    whatWillLearn: [data.whatWillLearn, "hehe"],
  };

  const price = formattedCurrency(course.price);

  return (
    <>
      <div className="hidden md:block fixed right-20 z-10 ">
        <CoursePreview course={course} />
      </div>
      <div className="fixed bottom-0 z-10 w-screen bg-white flex items-center p-2 md:hidden">
        <span className="font-bold text-xl w-28">{price}</span>
        <button className={styles.primary_btn}>Mua ngay</button>
      </div>
      <m.main
        className={`${styles.blur_bg}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-full md:w-2/3">
          <CourseBanner course={course} />
          <div className="bottom-0 z-10 w-screen flex flex-col mb-4 md:hidden">
            <span className="font-bold text-3xl my-2 w-28">{price}</span>
            <button className={styles.primary_btn}>Add To Cart</button>
          </div>
          <div className={styles.learning_about}>
            <span className="font-bold text-xl">What you will learn</span>
            <ul className={`${styles.list}`}>
              {course.whatWillLearn.map((item, index) => (
                <li key={`${item} + ${index}`}>{item}</li>
              ))}
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
                    {item.sections.map((section, index) => (
                      <li
                        key={`${section} + ${index}`}
                        className="text-md my-2"
                      >
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
          <CourseReview id={course._id} />
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
