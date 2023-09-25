"use client";

import Image from "next/image";

import { Row, Col } from "antd"
import { motion as m } from "framer-motion";

import styles from './MyProfile.module.css';
import Sidebar from "./Sidebar";
import ProfileInfo from "./ProfileInfo";

const MyProfile = () => {
  return (
    <main className="blur_custom">
        <m.div className={styles.container} initial={{bottom: -100, opacity: 0}} animate={{bottom: 0, opacity: 1}} transition={{duration: 0.4}}>
            <Row>
                <Col span={8}>
                    <Sidebar />
                </Col>
                <Col span={16}>
                    <ProfileInfo />
                </Col>
            </Row>


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

export default MyProfile
