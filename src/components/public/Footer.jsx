import { Row, Col } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="my-4">
      <Row gutter={[16, 24]} justify="center">
        <Col lg={4} xs={8}>
          <Link href="/" className="flex gap-2 flex-center">
            <Image
              src="/images/logo.png"
              alt="Emate Logo"
              width={100}
              height={52}
              className="object-contain"
              priority={false} loading="lazy"
            />
          </Link>
        </Col>
        <Col lg={4} xs={8}>
          <div className="display_vertical">
            <b className="text-base">Về chúng tôi</b>
            <a className="text-sm">Điều khoản</a>
            <a className="text-sm">Chính sách bảo mật</a>
          </div>
        </Col>
        <Col lg={4} xs={8}>
          <div className="display_vertical">
            <b className="text-base">Cộng đồng</b>
            <a className="text-sm">Liên hệ</a>
            <a className="text-sm">Chăm sóc khách hàng</a>
            <a className="text-sm">Các khóa học</a>
          </div>
        </Col>
        <Col lg={4} xs={8}>
          <div className="display_vertical">
            <b className="text-base">Địa chỉ</b>
            <span className="text-sm">Sđt: 0904914747</span>
            <span className="text-sm">Email: emate@gmail.com</span>
          </div>
        </Col>
        <Col lg={4} xs={8}>
          <div className="display_vertical">
            <b className="text-base">Tải ứng dụng EMate</b>
            <img className="w-24" src="/images/download-app.png" alt="img" />
          </div>
        </Col>
        <Col lg={4} xs={8}>
          <div className="display_vertical">
            <b className="text-base">Theo dõi chúng tôi tại</b>
            <div className="flex space-x-4 my-1">
              <Link href="/" className="flex gap-2 flex-center">
                <Image
                  src="/icons/fb.png"
                  alt="Follow by facebook"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority={false} loading="lazy"
                />
              </Link>
              <Link href="/" className="flex gap-2 flex-center">
                <Image
                  src="/icons/instagram.png"
                  alt="Follow by instagram"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority={false} loading="lazy"
                />
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
