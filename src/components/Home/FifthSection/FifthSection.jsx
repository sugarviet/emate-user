"use client";

import { motion as m } from "framer-motion";
import Image from "next/image";
import { Col, Row } from "antd";
import styles from "./FifthSection.module.css";

const FifthSection = () => {
  return (
    <m.div
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      viewport={{once: true}}
    >
      <h1 className={styles.title}>
        Hàng triệu đối tác học tập trong mọi lĩnh vực
      </h1>

      <div>
        <Row gutter={[35, 35]}>
          <Col lg={8} xs={24}>
            <Row className={styles.card_bg} gutter={[16, 16]}>
              <Col span={8}>
                <div>
                  <Image
                    src="/character/hoangNgocLinh.svg"
                    alt="character"
                    width={100}
                    height={100}
                    priority={false}
                    loading="lazy"
                  />
                </div>
              </Col>
              <Col span={16}>
                <div className="flex flex-col gap-1">
                  <h1 className="font-black text-lg">Hoàng Ngọc Linh</h1>
                  <p className="flex gap-2">
                    <Image
                      src="/icons/location.png"
                      alt="icon"
                      width={20}
                      height={10}
                      priority={false}
                      loading="lazy"
                    />{" "}
                    Hồ Chí Minh
                  </p>
                  <p className="flex gap-2 text-xs sm:text-sm">
                    <Image
                      src="/icons/graduation-cap.png"
                      alt="icon"
                      width={20}
                      height={10}
                    />{" "}
                    Chuyên ngành Marketing
                  </p>
                  <p>Tìm bạn học: Marketing</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={8} xs={24}>
            <Row className={styles.card_bg} gutter={[16, 16]}>
              <Col span={8}>
                <div>
                  <Image
                    src="/character/huynhVu.svg"
                    alt="character"
                    width={100}
                    height={100}
                    priority={false}
                    loading="lazy"
                  />
                </div>
              </Col>
              <Col span={16}>
                <div className="flex flex-col gap-1">
                  <h1 className="font-black text-lg">Huỳnh Vũ</h1>
                  <p className="flex gap-2">
                    <Image
                      src="/icons/location.png"
                      alt="icon"
                      width={20}
                      height={10}
                      priority={false}
                      loading="lazy"
                    />
                    Đồng Nai
                  </p>
                  <p className="flex gap-2 text-xs sm:text-sm">
                    <Image
                      src="/icons/graduation-cap.png"
                      alt="icon"
                      width={20}
                      height={10}
                    />{" "}
                    Nhiếp ảnh gia
                  </p>
                  <p>Tìm bạn học: Thiết kế đồ họa</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={8} xs={24}>
            <Row className={styles.card_bg} gutter={[16, 16]}>
              <Col span={8}>
                <div>
                  <Image
                    src="/character/ngoTuTran.svg"
                    alt="character"
                    width={100}
                    height={100}
                    priority={false}
                    loading="lazy"
                  />
                </div>
              </Col>
              <Col span={16}>
                <div className="flex flex-col gap-1">
                  <h1 className="font-black text-lg">Ngô Tú Trân</h1>
                  <p className="flex gap-2">
                    <Image
                      src="/icons/location.png"
                      alt="icon"
                      width={20}
                      height={10}
                    />
                    Hồ Chí Minh
                  </p>
                  <p className="flex gap-2 text-xs sm:text-sm">
                    <Image
                      src="/icons/graduation-cap.png"
                      alt="icon"
                      width={20}
                      height={10}
                    />{" "}
                    Giáo viên Tiếng Hàn
                  </p>
                  <p>Tìm bạn học: Tiếng Anh</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={8} xs={24}>
            <Row className={styles.card_bg} gutter={[16, 16]}>
              <Col span={8}>
                <div>
                  <Image
                    src="/character/manhHung.svg"
                    alt="character"
                    width={100}
                    height={100}
                    priority={false}
                    loading="lazy"
                  />
                </div>
              </Col>
              <Col span={16}>
                <div className="flex flex-col gap-1">
                  <h1 className="font-black text-lg">Mạnh Hùng</h1>
                  <p className="flex gap-2">
                    <Image
                      src="/icons/location.png"
                      alt="icon"
                      width={20}
                      height={10}
                      priority={false}
                      loading="lazy"
                    />
                    Nha Trang
                  </p>
                  <p className="flex gap-2 text-xs sm:text-sm">
                    <Image
                      src="/icons/graduation-cap.png"
                      alt="icon"
                      width={20}
                      height={10}
                    />{" "}
                    Chuyên ngành IT
                  </p>
                  <p>Tìm bạn học: IT</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={8} xs={24}>
            <Row className={styles.card_bg} gutter={[16, 16]}>
              <Col span={8}>
                <div>
                  <Image
                    src="/character/thaiGiaBao.svg"
                    alt="character"
                    width={100}
                    height={100}
                    priority={false}
                    loading="lazy"
                  />
                </div>
              </Col>
              <Col span={16}>
                <div className="flex flex-col gap-1">
                  <h1 className="font-black text-lg">Mạnh Hùng</h1>
                  <p className="flex gap-2">
                    <Image
                      src="/icons/location.png"
                      alt="icon"
                      width={20}
                      height={10}
                      priority={false}
                      loading="lazy"
                    />
                    Hồ Chí Minh
                  </p>
                  <p className="flex gap-2 text-xs sm:text-sm">
                    <Image
                      src="/icons/graduation-cap.png"
                      alt="icon"
                      width={20}
                      height={10}
                    />{" "}
                    Chuyên ngành Kinh tế
                  </p>
                  <p>Tìm bạn học: Kinh tế</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={8} xs={24}>
            <Row className={styles.card_bg} gutter={[16, 16]}>
              <Col span={8}>
                <div>
                  <Image
                    src="/character/kimNguyen.svg"
                    alt="character"
                    width={100}
                    height={100}
                    priority={false}
                    loading="lazy"
                  />
                </div>
              </Col>
              <Col span={16}>
                <div className="flex flex-col gap-1">
                  <h1 className="font-black text-lg">Kim Nguyễn</h1>
                  <p className="flex gap-2">
                    <Image
                      src="/icons/location.png"
                      alt="icon"
                      width={20}
                      height={10}
                      priority={false}
                      loading="lazy"
                    />
                    Bình Dương
                  </p>
                  <p className="flex gap-2 text-xs sm:text-sm">
                    <Image
                      src="/icons/graduation-cap.png"
                      alt="icon"
                      width={20}
                      height={10}
                    />{" "}
                    Thiết kế đồ hoa
                  </p>
                  <p>Tìm bạn học: Thiết kế đồ hoa</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </m.div>
  );
};

export default FifthSection;
