"use client";

import { motion as m } from "framer-motion";
import Image from "next/image";
import { Col, Row } from "antd";
import styles from "./FourthSection.module.css";

const SKILLS = [
  {
    id: 1,
    title: "IT và Phần mềm",
    image: "public/images/server.png",
    alt: "IT",
  },
  {
    id: 2,
    title: "Kỹ năng mềm",
    image: "/images/soft-skills.png",
    alt: "soft-skills",
  },
  {
    id: 3,
    title: "Kỹ năng mềm",
    image: "/images/soft-skills.png",
    alt: "soft-skills",
  },
  {
    id: 4,
    title: "Kỹ năng mềm",
    image: "/images/soft-skills.png",
    alt: "soft-skills",
  },
  {
    id: 5,
    title: "Kỹ năng mềm",
    image: "/images/soft-skills.png",
    alt: "soft-skills",
  },
  {
    id: 6,
    title: "Kỹ năng mềm",
    image: "/images/soft-skills.png",
    alt: "soft-skills",
  },
  {
    id: 7,
    title: "Kỹ năng mềm",
    image: "/images/soft-skills.png",
    alt: "soft-skills",
  },
  {
    id: 8,
    title: "Kỹ năng mềm",
    image: "/images/soft-skills.png",
    alt: "soft-skills",
  },
];

const FourthSection = () => {
  return (
    <m.div
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      viewport={{once: true}}
    >
      <h1 className={styles.title}>Học tất cả mọi thứ mà bạn muốn</h1>

      <div className="my-7">
        <p className="font-bold my-5">Courses</p>
        <div>
          <Row gutter={[50, 50]} align="middle" justify="center">
            <Col lg={4}>
              <div className={styles.card}>
                <div className={styles.img_wrapper}>
                  <Image
                    src="/images/server.png"
                    alt="skills"
                    height={120}
                    width={120}
                    priority={false}
                    loading="lazy"
                  />
                </div>
                <h1 className={styles.card_title}>IT và Phần mềm</h1>
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.card}>
                <div className={styles.img_wrapper}>
                  <Image
                    src="/images/soft-skills.png"
                    alt="skills"
                    height={120}
                    width={120}
                    priority={false}
                    loading="lazy"
                  />
                </div>
                <h1 className={styles.card_title}>Kỹ năng mềm</h1>
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.card}>
                <div className={styles.img_wrapper}>
                  <Image
                    src="/images/money-growth.png"
                    alt="skills"
                    height={120}
                    width={120}
                    priority={false}
                    loading="lazy"
                  />
                </div>
                <h1 className={styles.card_title}>Kinh tế</h1>
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.card}>
                <div className={styles.img_wrapper}>
                  <Image
                    src="/images/pottery.png"
                    alt="skills"
                    height={120}
                    width={120}
                    priority={false}
                    loading="lazy"
                  />
                </div>
                <h1 className={styles.card_title}>Thủ công</h1>
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.card}>
                <div className={styles.img_wrapper}>
                  <Image
                    src="/images/cooking.png"
                    alt="skills"
                    height={120}
                    width={120}
                    priority={false}
                    loading="lazy"
                  />
                </div>
                <h1 className={styles.card_title}>Nấu ăn</h1>
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.card}>
                <div className={styles.img_wrapper}>
                  <Image
                    src="/images/bullhorn.png"
                    alt="skills"
                    height={120}
                    width={120}
                    priority={false}
                    loading="lazy"
                  />
                </div>
                <h1 className={styles.card_title}>Marketing</h1>
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.card}>
                <div className={styles.img_wrapper}>
                  <Image
                    src="/images/pharmacy.png"
                    alt="skills"
                    height={120}
                    width={120}
                    priority={false}
                    loading="lazy"
                  />
                </div>
                <h1 className={styles.card_title}>Dược</h1>
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.card}>
                <div className={styles.img_wrapper}>
                  <Image
                    src="/images/guitar.png"
                    alt="skills"
                    height={120}
                    width={120}
                    priority={false}
                    loading="lazy"
                  />
                </div>
                <h1 className={styles.card_title}>Âm nhạc</h1>
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.card}>
                <div className={styles.img_wrapper}>
                  <Image
                    src="/images/language.png"
                    alt="skills"
                    height={120}
                    width={120}
                    priority={false}
                    loading="lazy"
                  />
                </div>
                <h1 className={styles.card_title}>Ngôn ngữ</h1>
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.card}>
                <div className={styles.img_wrapper}>
                  <Image
                    src="/images/workout.png"
                    alt="skills"
                    height={120}
                    width={120}
                    priority={false}
                    loading="lazy"
                  />
                </div>
                <h1 className={styles.card_title}>Sức khỏe thể hình</h1>
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.card}>
                <div className={styles.img_wrapper}>
                  <Image
                    src="/images/tripod.png"
                    alt="skills"
                    height={120}
                    width={120}
                    priority={false}
                    loading="lazy"
                  />
                </div>
                <h1 className={styles.card_title}>Nhiếp ảnh</h1>
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.card}>
                <div className={styles.img_wrapper}>
                  <Image
                    src="/images/inspiration.png"
                    alt="skills"
                    height={120}
                    width={120}
                    priority={false}
                    loading="lazy"
                  />
                </div>
                <h1 className={styles.card_title}>Thiết kế</h1>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <button className={styles.btn}>Học ngay</button>
    </m.div>
  );
};

export default FourthSection;
