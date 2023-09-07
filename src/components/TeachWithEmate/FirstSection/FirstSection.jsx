"use client"

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { Col, Row } from "antd";

import styles from "./FirstSection.module.css";
const FirstSection = () => {
  const dotAnimationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div className={styles.container} initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}}>
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={24} lg={14}>
          <div className="py-52">
            <h1 className={styles.main_text}>Thay đổi cuộc đời</h1>
            <h1 className={styles.main_text}>với kiến thức của bạn</h1>
            <p className="italic md:text-4xl text-3xl font-thin leading-snug my-4">
              Hãy trở thành người hướng dẫn
            </p>
              <p className="block my-5 md:text-xl text-lg">
                Đăng kí để trở thành người hướng dẫn ngay bây giờ <br /> với mọi
                khóa học tuyệt vời <b>do chính bạn sáng tạo</b>
              </p>

            <Link href="/mentor-package">
              <motion.button
                className={styles.start_btn}
                whileHover={{ scale: 1.1 }}
              >
                Đăng kí ngay
              </motion.button>
            </Link>
          </div>
        </Col>
        <Col xs={24} lg={10}>
          <div
            className={styles.main_img}
            initial="hidden"
            animate="visible"
            variants={dotAnimationVariants}
          >
            <Image
              src="/images/knowledge.png"
              alt="Video Call"
              width={520}
              height={520}
              priority={true}
              className={styles.img_knowledge}
            />
          </div>
        </Col>
      </Row>
      {/* Images setup */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={dotAnimationVariants}
      >
        <Image
          src="/images/yellowDot1.png"
          alt="Yellow Dot 1"
          width={130}
          height={130}
          className={styles.yellow_dot_first}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={dotAnimationVariants}
      >
        <Image
          src="/images/yellowDot2.png"
          alt="Yellow Dot 2"
          width={200}
          height={200}
          className={styles.yellow_dot_second}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={dotAnimationVariants}
      >
        <Image
          src="/images/pinkDot1.png"
          alt="Pink Dot 1"
          width={130}
          height={130}
          className={styles.pink_dot_first}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={dotAnimationVariants}
      >
        <Image
          src="/images/pinkDot2.png"
          alt="Pink Dot 2"
          width={150}
          height={150}
          className={styles.pink_dot_second}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={dotAnimationVariants}
      >
        <Image
          src="/images/curve.png"
          alt="Curve Image"
          width={550}
          height={550}
          className={styles.curve_img}
        />
      </motion.div>
    </motion.div>
  );
};

export default FirstSection;
