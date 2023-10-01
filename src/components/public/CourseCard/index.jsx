"use client";

import Image from "next/image";
import Link from "next/link";
import { Row, Col } from "antd";

import { ArrowRightOutlined } from "@ant-design/icons";

import { Progress } from "antd";

import styles from "./CourseCard.module.css";

const CourseCard = () => {
  return (
      <div className={styles.container}>
        <Row>
          <Col span={6}>
            <div>
              <Image
                src={"/courses/it-4.png"}
                alt="img"
                height={300}
                width={300}
              />
            </div>
          </Col>
          <Col span={18}>
            <div className="">
              <div className="w-full">
                <h1 className="text-2xl font-bold">
                  Thiết kế và phát triển website
                </h1>
                <h2 className="my-2">Khóa học của mentor Huyền Phạm</h2>
              </div>
              <Progress percent={40} status="active" strokeColor={"#E087FC"} size="small" />
              <div className="mt-6">
                <button className="primary_bg_pink_color py-3 px-7 text-white rounded-lg">Tiếp tục <ArrowRightOutlined className="ml-3"/></button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
  );
};

export default CourseCard;
