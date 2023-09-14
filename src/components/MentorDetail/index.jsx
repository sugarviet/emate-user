'use client'

import { motion as m } from "framer-motion"
import styles from './MentorDetail.module.css';
import { Col, Row } from "antd";

import MentorBio from "./MentorBio";
import MentorCourse from "./MentorCourse";
import MentorInfo from "./MentorInfo";
import Image from "next/image";

const MentorDetail = () => {
  return (
    <m.main
    className={styles.blur_bg}
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.4 }}
  >
    <Row gutter={[100,16]}>
      <Col xl={14} md={24} lg={24}>
        <div>
          <MentorBio />
        </div>
      </Col>
      <Col xl={10} md={24} lg={24}>
        <MentorInfo />
      </Col>
      <Col span={24}>
        <MentorCourse />
      </Col>
    </Row>

    {/* Images */}
    <Image src="/images/pinkDot1.png" alt="img" width={150} height={150} className={styles.pink_dot_first}/>
    <Image src="/images/pinkDot2.png" alt="img" width={150} height={150} className={styles.pink_dot_second}/>
    <Image src="/images/yellowDot1.png" alt="img" width={150} height={150} className={styles.yellow_dot_first}/>
    <Image src="/images/yellowDot3.png" alt="img" width={150} height={150} className={styles.yellow_dot_second}/>
    </m.main>
  )
}

export default MentorDetail
