"use client";

import { motion as m } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Zoom } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";

import styles from "./SixthSection.module.css";

const SixthSection = () => {
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      viewport={{once: true}}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>Kết nối cùng gia sư của EMate</h1>
        <p>
          Hãy tìm kiếm và thuê gia sư chất lượng để hỗ trợ việc học tập của
          mình. Tất cả các gia sư đều đã được kiểm tra và đánh giá trước khi
          được liệt kê trên ứng dụng, đảm bảo chất lượng dịch vụ tốt nhất. Bạn
          có thể tìm kiếm gia sư theo môn học, khu vực phù hợp với nhu cầu của
          mình.
        </p>
      </div>

      <div className="px-28 my-20">
        <Swiper
          // className="my-14"
          className={styles.center_carousel}
          spaceBetween={isMobile ? 0 : -200}
          slidesPerView={isMobile ? 1 : 4}
          centeredSlides={true}
          grabCursor
          pagination={{
            clickable: true,
          }}
          autoFocus
          initialSlide={1}
          modules={[Autoplay, Navigation, Zoom]}
        >
          <SwiperSlide>
            <div>
              <Image
                src="/character/mentor1.svg"
                alt="character"
                width={220}
                height={220}
                priority={false}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src="/character/mentor2.svg"
                alt="character"
                width={220}
                height={220}
                priority={false}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src="/character/mentor3.svg"
                alt="character"
                width={220}
                height={220}
                priority={false}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src="/character/mentor4.svg"
                alt="character"
                width={220}
                height={220}
                priority={false}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <Image
        src="/images/pinkDot5.png"
        alt="img"
        width={150}
        height={150}
        className={styles.pink_dot}
        priority={false}
        loading="lazy"
      />
      <Image
        src="/images/yellowDot3.png"
        alt="img"
        width={140}
        height={140}
        className={styles.yellow_dot}
        priority={false}
        loading="lazy"
      />
    </m.div>
  );
};

export default SixthSection;
