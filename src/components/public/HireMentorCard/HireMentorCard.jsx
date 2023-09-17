"use client"

import { motion as m } from "framer-motion";

import { Rate, Row, Col } from "antd";

import Image from "next/image";
import Link from "next/link";

const BEFORE_4_SLIDES_PRIORITY = 4;

const HireMentorCard = ({cardData}) => {
  const {id, avatar, age, name, education, level, rate, pricePerHour, index} = cardData; 

  console.log(cardData);
  return (
    <div className="lg:w-80 md:w-80 xl:w-80 flex flex-col items-center py-3 w-64" key={id}>
              <div>
                <Image
                  src={avatar}
                  alt="img"
                  width={250}
                  height={250}
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
                        <p className="font-bold text-sm">{age} tuổi</p>
                      </Col>
                    </Row>
                  </div>

                  <div className="w-64">
                    <Row justify="space-between" gutter={24} align="middle">
                      <Col span={9}>
                        <h2 className="font-bold text-base">Học vấn:</h2>
                      </Col>
                      <Col span={15}>
                        <h3 className="text-sm truncate_1_lines relative right-8">
                        {education}
                        </h3>
                      </Col>
                    </Row>
                  </div>
                  <div>
                  <h2 className="truncate_2_lines h-12">
                    <span className="font-bold">Trình độ:{" "}</span>
                    <span className="font-normal text-sm">
                    {level}
                    </span>
                  </h2>
                  </div>
                  <div className="flex text-yellow-400 items-center gap-7">
                    <h2 className="font-bold text-lg">{rate.toFixed(1)}</h2>
                    <Rate allowHalf value={rate} />
                  </div>
                  <h1 className="font-bold text-lg">đ{pricePerHour} / giờ</h1>
                </div>
                <Link href={`/mentor/${name}`}>
                <m.button className="hire_btn flex justify-end float-right items-center" whileHover={{scale: 1.2}}>
                  Thuê
                </m.button>
                </Link>
              </div>
            </div>
  )
}

export default HireMentorCard
