"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { Col, Row } from "antd";

import styles from "./FirstSection.module.css";

const FirstSection = () => {
  const dotAnimationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, left: -100 }}
      animate={{ opacity: 1, left: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={24} lg={10}>
          <div className="py-52">
            <h1 className={styles.main_text}>Người bạn học</h1>
            <h1 className={styles.main_text}>mà bạn cần</h1>
            <p className="block my-3 text-xl">
              Tham gia với EMate để kết nối với những người muốn <b>học hỏi</b>{" "}
              và <b>chia sẻ kiến ​​thức</b> một cách dễ dàng và thuận tiện.
            </p>
            <motion.button
              className={styles.start_btn}
              whileHover={{ scale: 1.1 }}
            >
              Bắt đầu
            </motion.button>
          </div>
        </Col>
        <Col xs={24} lg={14}>
          <div
            className={styles.main_img}
            exit={{ opacity: 1, left: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src="/images/homeImgVideoCall.png"
              alt="Video Call"
              width={600}
              height={600}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={styles.img_video_call}
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
      <div initial="hidden" animate="visible" variants={dotAnimationVariants}>
        <Image
          src="/images/curve.png"
          alt="Curve Image"
          width={550}
          height={550}
          className={styles.curve_img}
        />
      </div>
    </motion.div>
  );
};

export default FirstSection;
