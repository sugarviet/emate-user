"use client";

import { motion as m } from "framer-motion";

import { Rate, Row, Col } from "antd";

import Image from "next/image";
import Link from "next/link";
import { formattedCoin, formattedCurrency } from "@/utils/formatedCurrency";
import { useRouter } from "next/navigation";
import { DEFAULT } from "@/constants/defaultElement";

const BEFORE_4_SLIDES_PRIORITY = 4;

const HireMentorCard = ({ cardData }) => {
  const {
    _id: id,
    avatar,
    name,
    education,
    degree: level,
    rating,
    price: pricePerHour,
    index,
  } = cardData;

  const router = useRouter();

  const handleGoToDetail = () => {
    router.push(`user/${id}?role=mentor`);
  };

  return (
    <div
      onClick={handleGoToDetail}
      className="lg:w-80 md:w-80 xl:w-80 flex flex-col items-center py-3 w-64 hover:cursor-pointer"
      key={id}
    >
      <div className="w-64 h-64 rounded-xl overflow-hidden">
        <Image
          src={avatar ? avatar : DEFAULT.AVATAR_IMAGE_PATH}
          alt="img"
          width={280}
          height={280}
          loading={index > BEFORE_4_SLIDES_PRIORITY ? "lazy" : "eager"}
          priority={index < BEFORE_4_SLIDES_PRIORITY}
        />
      </div>
      <div>
        <div className="px-2 md:px-10">
          <div className="my-2 w-full">
            <Row justify="space-between" gutter={24} align="middle">
              <Col span={17}>
                <h1 className="font-bold text-lg">{name}</h1>
              </Col>
              <Col span={7}>
                {/* <p className="font-bold text-sm">{age} tuổi</p> */}
              </Col>
            </Row>
          </div>

          <div className="w-64">
            <Row justify="space-between" gutter={24} align="middle">
              <Col span={9}>
                <h2 className="font-bold text-base">Học vấn:</h2>
              </Col>
              <Col span={15}>
                <h3 className="text-base truncate_1_lines relative right-8">
                  {education}
                </h3>
              </Col>
            </Row>
          </div>
          <div>
            <h2 className="truncate_2_lines">
              <span className="font-bold text-base">Trình độ: </span>
              <span className="font-normal text-md">{level}</span>
            </h2>
          </div>
          <div className="flex text-yellow-400 items-center gap-7">
            <h2 className="font-bold text-lg">{rating.toFixed(1)}</h2>
            <Rate disabled allowHalf value={rating} />
          </div>
          <h1 className="font-bold text-3xl flex mt-4">
            {formattedCoin(pricePerHour, 60)} / giờ
          </h1>
          <p className="text-sm flex items-center">
            1 <Image width={40} height={40} src={"/emate-coin.svg"} /> ứng với{" "}
            {formattedCurrency(1000)}
          </p>
        </div>
        <Link href={`/mentor/${name}`}>
          <m.button
            className="hire_btn flex justify-end float-right items-center"
            whileHover={{ scale: 1.2 }}
          >
            Thuê
          </m.button>
        </Link>
      </div>
    </div>
  );
};

export default HireMentorCard;
