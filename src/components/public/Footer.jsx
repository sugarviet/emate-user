import { Row, Col } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20 py-16">
      <Row gutter={[16, 24]} justify="center">
        <Col lg={4} xs={8}>
          <Link href="/" className="flex gap-2 flex-center">
            <Image
              src="/images/logo.png"
              alt="Emate Logo"
              width={100}
              height={52}
              className="object-contain"
              priority={false}
              loading="lazy"
            />
          </Link>
        </Col>
        <Col lg={4} xs={8}>
          <div className="display_vertical">
            <b className="text-lg">Về chúng tôi</b>
            <a className="text-base">Điều khoản</a>
            <a className="text-base">Chính sách bảo mật</a>
          </div>
        </Col>
        <Col lg={4} xs={8}>
          <div className="display_vertical">
            <b className="text-lg">Cộng đồng</b>
            <a className="text-base">Liên hệ</a>
            <a className="text-base">Chăm sóc khách hàng</a>
            <a className="text-base">Các khóa học</a>
          </div>
        </Col>
        <Col lg={4} xs={8}>
          <div className="display_vertical">
            <b className="text-lg">Địa chỉ</b>
            <span className="text-base">Sđt: 0904914747</span>
            <span className="text-base">Email: emate@gmail.com</span>
          </div>
        </Col>
        <Col lg={4} xs={8}>
          <div className="display_vertical">
            <b className="text-lg">Tải ứng dụng EMate</b>
            <img className="w-32" src="/images/download-app.png" />
          </div>
        </Col>
        <Col lg={4} xs={8}>
          <div className="display_vertical">
            <b className="text-lg">Theo dõi chúng tôi tại</b>
            <div className="flex space-x-4 my-1">
              <a href="/" className="flex gap-2 flex-center">
                <Image
                  src="/icons/fb.png"
                  alt="Follow by facebook"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority={false}
                  loading="lazy"
                />
              </a>
              <a href="/" className="flex gap-2 flex-center">
                <Image
                  src="/icons/instagram.png"
                  alt="Follow by instagram"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority={false}
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
