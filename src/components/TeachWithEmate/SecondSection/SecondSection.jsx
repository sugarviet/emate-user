import Image from "next/image";
import Link from "next/link";

import { Row, Col } from "antd";
import styles from "./SecondSection.module.css";

const SecondSection = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.main_text}>
        Tạo một khóa học hấp dẫn trong mọi lĩnh vực
      </h1>
      <div className={styles.description_wrapper}>
        <p className="text-center">
          Cho dù bạn đã giảng dạy trong nhiều năm hay lần đầu tiên giảng dạy,
          bạn đều có thể tạo ra một khóa học hấp dẫn, thu hút khách hàng. Chúng
          tôi đã tổng hợp các tài nguyên và phương pháp hay nhất để giúp bạn đạt
          tạo khóa học của riêng mình.
        </p>
      </div>

      <div>
        <Row gutter={[16, 50]} align="middle" justify="center">
          <Col span={24}>
            <div className="display_vertical">
              <div>
                <Image
                  src="/images/online-course.png"
                  alt="video"
                  width={250}
                  height={250}
                />
              </div>
              <h1 className={styles.card_description}>Bắt đầu cùng video</h1>
              <div className={styles.card_description_wrapper}>
                <p className="text-center text-base">
                  Tạo khóa học bằng video là một cách hiệu quả để chia sẻ kiến
                  thức và kinh nghiệm của bạn với một số lượng lớn người học
                  trên toàn thế giới.{" "}
                </p>
              </div>
            </div>
          </Col>
          <Col span={24}>
            <div className="display_vertical">
              <div>
                <Image
                  src="/images/video.png"
                  alt="video"
                  width={250}
                  height={250}
                />
              </div>
              <h1 className={styles.card_description}>Xây dựng khách hàng </h1>
              <div className={styles.card_description_wrapper}>
                <p className="text-center text-base">
                  Xây dựng khách hàng là một quá trình quan trọng và không thể
                  thiếu đối với bất kỳ việc kinh doanh nào. Để có thể thành công
                  với khóa học, bạn cần có một lượng khách hàng đáng tin cậy,
                  đóng góp cho doanh số bán hàng và giúp tăng trưởng cho bạn
                  trong tương lai{" "}
                </p>
              </div>
            </div>
          </Col>
          <Col span={24}>
            <div className="display_vertical">
              <div>
                <Image
                  src="/images/rating.png"
                  alt="video"
                  width={250}
                  height={250}
                />
              </div>
              <h1 className="text-black font-bold leading-normal text-4xl mt-4">Thu về lợi nhuận</h1>
              <div className={styles.card_description_wrapper}>
                <p className="text-center text-base">
                  {" "}
                  Thu lợi nhuận trực tuyến một cách hiệu quả và dễ dàng thông
                  qua việc chia sẻ kiến thức của bạn với cộng đồng. Với khóa học
                  của bạn, bạn có thể giúp người học học được những kỹ năng mới,
                  nâng cao sự nghiệp và đạt được mục tiêu cá nhân. Chúng tôi
                  cung cấp bạn cách bán khóa học một cách hiệu quả và thu lợi
                  nhuận thông qua chúng.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

        <Link href="/mentor-package">
          <button className={styles.btn}>Đăng kí ngay</button>
        </Link>

        <Image src="/images/pinkDot1.png" height={150} width={150} alt="img" className={styles.pink_dot_first}/>
        <Image src="/images/pinkDot4.png" height={100} width={100} alt="img" className={styles.pink_dot_second}/>
        <Image src="/images/pinkDot4.png" height={120} width={120} alt="img" className={styles.pink_dot_third}/>
        {/*  */}
        <Image src="/images/yellowDot1.png" height={150} width={150} alt="img" className={styles.yellow_dot_first}/>
        <Image src="/images/yellowDot1.png" height={120} width={120} alt="img" className={styles.yellow_dot_second}/>
    </div>
  );
};

export default SecondSection;
