"use client";

import Link from "next/link";
import Image from "next/image";

import { QRCode, Row, Col, Rate } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { motion as m } from "framer-motion";

import styles from "./MentorInfo.module.css";

const MentorInfo = () => {
  return (
    <main className="blur_custom">
      <m.div
        className={styles.container}
        initial={{ opacity: 0, top: -100 }}
        animate={{ opacity: 1, top: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Link href="/mentor-package">
          <button>
            <ArrowLeftOutlined /> Quay lại{" "}
          </button>
        </Link>

        <div className="my-8">
          <Row gutter={[50, 16]} align="middle" justify="center">
            <Col lg={16} sm={24} className="w-full">
              <h1 className="text-center text-xl font-bold my-8">
                Thông tin gia sư
              </h1>
              <div className={styles.card}>
                <div>
                  <Row gutter={[0, 16]}>
                    <Col span={10}>
                      <Image
                        src="/character/khoaAnhLe.png"
                        alt="mentor"
                        width={250}
                        height={250}
                      />
                    </Col>
                    <Col span={14}>
                      <div className="flex justify-between items-center mb-5">
                        <h1 className="font-bold text-2xl">Khoa Anh Lê</h1>
                        <p className="font-bold text-lg">33 tuổi</p>
                      </div>
                      {/*  */}
                      <div>
                        <h2 className="truncate_2_linesbg-red-500">
                          <span className="font-bold text-xl">Học vấn: </span>
                          <span className="font-normal text-base">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Iusto id assumenda, tempore autem quod
                            veritatis inventore ipsam, eligendi sunt recusandae
                            sit qui commodi. Incidunt illum harum aliquid
                            perferendis. Minima, libero.
                          </span>
                        </h2>
                      </div>

                      {/*  */}
                      <div className="my-5">
                        <h2 className="">
                          <span className="font-bold text-xl">Trình độ: </span>
                          <span className="font-normal text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Esse quas veniam enim sequi. Nisi, asperiores
                            autem dolores laborum omnis dignissimos aperiam
                            repellendus assumenda ab quod voluptates impedit,
                            iusto corporis ut.
                          </span>
                        </h2>
                      </div>
                      {/*  */}
                      <div className="flex text-yellow-400 items-center gap-7 text-xl">
                        <h2 className="font-bold ">4.0</h2>
                        <Rate value={4} />
                      </div>
                    </Col>
                  </Row>

                  {/* price */}
                  <div className="my-7 w-full flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <h1 className="font-bold text-2xl">Giá</h1>
                      <span className="text-gray-400">(Giờ)</span>
                    </div>
                    <div>
                      <h1 className="font-bold text-2xl">đ150.000 </h1>
                    </div>
                  </div>

                  {/* Time hiring */}
                  <div className="my-7 w-full flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <h1 className="font-bold text-2xl">Thời gian thuê</h1>
                      <span className="text-gray-400">(Giờ)</span>
                    </div>
                    <div>
                      <div className={styles.increaseBtnWrapper}>
                        <span className={styles.minus}>-</span>
                        <span className={styles.num}>1</span>
                        <span className={styles.plus}>+</span>
                      </div>
                    </div>
                  </div>

                  {/* total */}
                  <div className="my-10 w-full flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <h1 className="font-bold text-2xl">Tổng</h1>
                    </div>
                    <div>
                      <h1 className="font-bold text-2xl">đ150.000 </h1>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={8} sm={24}>
              <m.div
                className="flex flex-col gap-2 mt-12 justify-center"
                whileInView={{ scale: 1.1 }}
              >
                <div className={styles.qr_wrapper}>
                  <QRCode
                    value={"https://www.youtube.com/watch?v=UNuogmk7oEA"}
                  />
                </div>
                <p className="font-medium ml-8">Quét để thanh toán</p>
              </m.div>
            </Col>
          </Row>
        </div>

        <button className="border border-black px-36 py-3 flex justify-center items-center mx-auto my-20">
          Thanh toán
        </button>

        {/* Images */}
        <Image
          src="/images/pinkDot4.png"
          alt="img"
          height={130}
          width={130}
          className={styles.pink_dot_first}
        />
        <Image
          src="/images/pinkDot4.png"
          alt="img"
          height={100}
          width={100}
          className={styles.pink_dot_second}
        />
        <Image
          src="/images/yellowDot1.png"
          alt="img"
          height={100}
          width={100}
          className={styles.yellow_dot_first}
        />
      </m.div>
    </main>
  );
};

export default MentorInfo;
