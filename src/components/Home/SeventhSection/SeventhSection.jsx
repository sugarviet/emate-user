"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./SeventhSection.module.css";

const SeventhSection = () => {
  return (
    <div>
      <h1 className={styles.title}>Mọi người nói gì về EMate?</h1>

      {/* <div className="flex gap-3">
        <div className={styles.card}>
          <h1>Tuyệt vời</h1>
          <p>
            EMate thực sự giúp mình tiết kiệm thời gian và nỗ lực trong việc tìm
            kiếm bạn học. Nó cho phép mình tìm kiếm theo khu vực, chủ đề và mức
            độ chuyên môn, giúp mình tìm được những người phù hợp với nhu cầu
            của mình. Mình sẽ giới thiệu cho bạn bè sử dụng ứng dụng này.
          </p>
        </div>
      </div> */}

      <div className="px-2">
        <Swiper
          // className="my-14"
          className={styles.center_carousel}
          spaceBetween={20}
          slidesPerView={4}
          centeredSlides={true}
          grabCursor
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
    </div>
  );
};

export default SeventhSection;
