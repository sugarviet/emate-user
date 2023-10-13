"use client";

import { motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckOutlined } from "@ant-design/icons";
import styles from "./MentorPackage.module.css";

const MentorPackage = () => {
  return (
    <main className="blur_custom">
      <m.div
        className={styles.container}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className={styles.main_text}>Tài khoản dạy học</h1>
        <div className="w-3/6 mx-auto">
          <p className="text-center my-4">
            Nhận quyền sáng tạo và bán không giới hạn mọi khóa học ở mọi lĩnh
            vực ngành nghề, trở thành gia sư trực tuyến mọi lúc, mọi nơi.
          </p>
        </div>
        {/* flex gap-2 items-center justify-center my-20 flex-wrap md:flex-nowrap */}

        <div className="w-full flex my-11 items-center justify-around flex-wrap px-52">
          <div className={styles.card_wrapper_1}>
            <div className={styles.card}></div>
            <div className={styles.card_1}>
              <div>
                <h1 className="text-gray-400 text-xl text-center">
                  Gói hàng tháng
                </h1>
                <h1 className="text-2xl font-bold text-center my-2">
                  đ300.000
                </h1>
                <p className="text-center text-xs">
                  Mỗi tháng, thanh toán hàng tháng
                </p>

                <div className="flex gap-5 my-3">
                  <div>
                    <CheckOutlined />
                  </div>
                  <div>
                    <h3>Bán khóa học</h3>
                    <p className="text-xs">
                      (không giới hạn số lượng, lĩnh vực)
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-5">
                  <div>
                    <CheckOutlined />
                  </div>
                  <div>
                    <h3>Trở thành gia sư</h3>
                    <p className="text-xs">(được thuê theo giờ)</p>
                  </div>
                </div>
              </div>
              {/* <Link href="register-mentor-package">
                <button className="blue_btn_color">Đăng kí</button>
              </Link> */}
               <Link href={{
                pathname: 'register-mentor-package',
                query: {package: "monthly"}
              }}>
                <button className="blue_btn_color">Đăng kí</button>
              </Link>
            </div>
          </div>

          <div className={styles.card_wrapper_2}>
            <div className={styles.card}></div>
            <div className={styles.card_1}>
              <div>
                <h1 className="text-gray-400 text-xl text-center">
                  Gói hàng năm
                </h1>
                <h1 className="text-2xl font-bold text-center my-2">
                  đ230.000
                </h1>
                <p className="text-center text-xs">
                  Mỗi tháng, thanh toán hàng năm
                </p>

                <div className="flex gap-5 my-3">
                  <div>
                    <CheckOutlined />
                  </div>
                  <div>
                    <h3>Bán khóa học</h3>
                    <p className="text-xs">
                      (không giới hạn số lượng, lĩnh vực)
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-5">
                  <div>
                    <CheckOutlined />
                  </div>
                  <div>
                    <h3>Trở thành gia sư</h3>
                    <p className="text-xs">(được thuê theo giờ)</p>
                  </div>
                </div>
              </div>
              <Link href={{
                pathname: 'register-mentor-package',
                query: {package: "yearly"}
              }}>
                <button className="blue_btn_color">Đăng kí</button>
              </Link>
            </div>
          </div>
        </div>
        {/*  */}
        <Image
          src="/images/pinkDot4.png"
          height={120}
          width={120}
          alt="img"
          className={styles.pink_dot_first}
        />
        <Image
          src="/images/pinkDot4.png"
          height={120}
          width={120}
          alt="img"
          className={styles.pink_dot_second}
        />
        {/*  */}
        <Image
          src="/images/yellowDot1.png"
          height={120}
          width={120}
          alt="img"
          className={styles.yellow_dot_first}
        />
        <Image
          src="/images/yellowDot1.png"
          height={120}
          width={120}
          alt="img"
          className={styles.yellow_dot_second}
        />
      </m.div>
    </main>
  );
};

export default MentorPackage;
