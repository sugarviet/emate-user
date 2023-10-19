"use client";

import Image from "next/image";
import Link from "next/link";
import { Row, Col } from "antd";

import { ArrowRightOutlined } from "@ant-design/icons";

import { Progress } from "antd";

import styles from "./CourseCard.module.css";
import { useRouter } from "next/navigation";
import { MY_COURSES_PAGE_URL } from "@/constants/url";

const CourseCard = ({ course }) => {
  const router = useRouter();

  const { _id, image, name, duration, isCompleted } = course;
  const progress = (isCompleted / duration).toFixed(1) * 100;

  const handleGoToLearning = () => {
    router.push(`${MY_COURSES_PAGE_URL}/${_id}`);
  };

  return (
    <div className={styles.container}>
      <Row>
        <Col span={6}>
          <div>
            <Image src={image} alt="img" height={300} width={300} />
          </div>
        </Col>
        <Col span={18}>
          <div className="ml-4">
            <div className="w-full">
              <h1 className="text-2xl font-bold">{name}</h1>
              <h2 className="my-2">Khóa học của bạn</h2>
            </div>
            <Progress
              percent={progress}
              status="active"
              strokeColor={"#E087FC"}
              size="small"
            />
            <div className="mt-6">
              <button
                onClick={handleGoToLearning}
                className="primary_bg_pink_color py-3 px-7 text-white rounded-lg"
              >
                Tiếp tục <ArrowRightOutlined className="ml-3" />
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CourseCard;
