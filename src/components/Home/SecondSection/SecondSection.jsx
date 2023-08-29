import Image from "next/image";

import { Col, Row } from "antd";

import styles from "./SecondSection.module.css";

const SecondSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title_wrapper}>
        <h1 className={styles.main_text}>Về EMate</h1>
        <p className="text-center">
          Nền tảng học tập online nơi mà mọi người kết <br />
          nối và trao đổi học tập cùng nhau
        </p>
      </div>
      <div className={styles.content_wrapper}>
        <Row gutter={[16, 24]} align="middle" justify="center">
          <Col lg={8} xs={24}>
            <div className={styles.card}>
              <div className={styles.card_bg}>
                <Image src="/images/friend.png" alt="friend" height={100} width={100}/>
              </div>
              <h1 className={styles.card_title}>Tìm bạn học</h1>
              <p className={styles.card_description}>EMate giúp bạn tìm đúng người trao đổi học tập mà bạn cần. Được tìm kiếm theo lĩnh vực, giáo dục, địa điểm, sở thích và hơn thế nữa.</p>
            </div>
          </Col>
          <Col lg={8} xs={24}>
            <div className={styles.card}>
              <div className={styles.card_bg}>
                <Image src="/images/elearning.png" alt="e-learning" height={100} width={100}/>
              </div>
              <h1 className={styles.card_title}>Đa dạng các khóa học</h1>
              <p className={styles.card_description}>Học bất cứ thứ gì bạn thích với chuyên gia ở mọi lúc, mọi nơi.</p>
            </div>
          </Col>
          <Col lg={8} xs={24}>
            <div className={styles.card}>
              <div className={styles.card_bg}>
                <Image src="/images/tutor.png" alt="e-tutor" height={100} width={100}/>
              </div>
              <h1 className={styles.card_title}>Trợ giúp từ gia sư</h1>
              <p className={styles.card_description}>Gặp vấn đề trong học tập? Chỉ cần liên hệ với gia sư của chúng tôi, bạn sẽ có giải pháp.</p>
            </div>
          </Col>
          <Col lg={8} xs={24}>
            <div className={styles.card}>
              <div className={styles.card_bg}>
                <Image src="/images/male.png" alt="male" height={100} width={100}/>
              </div>
              <h1 className={styles.card_title}>Trở thành người hướng dẫn</h1>
              <p className={styles.card_description}>Bạn đã có kinh nghiệm chuyên môn? Hãy trở thành người hướng dẫn và sáng tạo các khóa học cùng Emate.</p>
            </div>
          </Col>
          
        </Row>
      </div>
    </div>
  );
};

export default SecondSection;
