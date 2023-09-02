"use client";

import { motion as m } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./SeventhSection.module.css";

const SeventhSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <m.div
      className="relative"
      initial={{ opacity: 0, left: -100 }}
      animate={{ opacity: 1, left: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1 className={styles.title}>Mọi người nói gì về EMate?</h1>

      <div className="px-2">
        <Swiper
          className={styles.center_carousel}
          spaceBetween={isMobile ? 0 : 20}
          slidesPerView={isMobile ? 1 : 4}
          centeredSlides={true}
          grabCursor
          initialSlide={1}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide>
            <div className={styles.card}>
              <h1 className={styles.title_card}>Tuyệt vời</h1>
              <p>
                EMate thực sự giúp mình tiết kiệm thời gian và nỗ lực trong việc
                tìm kiếm bạn học. Nó cho phép mình tìm kiếm theo khu vực, chủ đề
                và mức độ chuyên môn, giúp mình tìm được những người phù hợp với
                nhu cầu của mình. Mình sẽ giới thiệu cho bạn bè sử dụng ứng dụng
                này.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <h1 className={styles.title_card}>Rất tốt</h1>
              <p>
                Đúng là học thầy không tày học bạn. Mình đã sử dụng nhiều ứng
                dụng tìm bạn học trước đây, nhưng ứng dụng này là tốt nhất mà
                mình từng thấy. Giao diện thân thiện và dễ sử dụng, cộng đồng
                người dùng đông đảo và đa dạng, giúp mình tìm được những người
                cùng sở thích và mục tiêu học tập.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <h1 className={styles.title_card}>Tuyệt vời</h1>
              <p>
                EMate đã giúp tôi tiết kiệm thời gian và chi phí đi lại đến các
                trung tâm học thêm. Ngoài ra tôi có thể tìm thấy các khóa học
                phù hợp với nhu cầu của mình và học trực tuyến một cách tiện lợi
                và hiệu quả
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </m.div>
  );
};

export default SeventhSection;
