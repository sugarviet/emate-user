"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./SixthSection.module.css";

const SixthSection = () => {
  return (
    <div>
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
          spaceBetween={-200}
          slidesPerView={4}
          centeredSlides={true}
          grabCursor
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide>
            <div>
              <Image
                src="/character/mentor1.svg"
                alt="character"
                width={220}
                height={220}
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
                priority
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
                priority
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
                priority
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SixthSection;
