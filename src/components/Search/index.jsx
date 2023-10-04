"use client";
import { motion as m } from "framer-motion";
import styles from "./Search.module.css";
import { Row, Col, List, Collapse, Radio, Space, Rate  } from "antd";
import { IT_DATA_COURSES } from "@/constants/fakeData";
import RegisterCourseCard from "../public/RegisterCourseCard/RegisterCourseCard";
import { useState } from "react";

const Search = () => {
  return (
    <main className={styles.blur_bg}>
      <h1 className="font-bold text-3xl my-5 ml-5">100 result for Java</h1>
      <div>
        <Row gutter={[16, 16]} justify="space-between">
          <Col xxl={6} xl={6} lg={8}>
            <SortingSidebar />
          </Col>
          <Col xxl={18} xl={18} lg={16}>
            <List
              grid={{
                xxl: 3,
                xl: 3,
                lg: 2,
                xs: 2,
                md: 1,
              }}
              dataSource={IT_DATA_COURSES.arrayData}
              renderItem={(courseCard) => (
                <List.Item>
                  <RegisterCourseCard cardData={courseCard} />
                </List.Item>
              )}
            ></List>
          </Col>
        </Row>
      </div>
    </main>
  );
};

const SortingSidebar = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const [value, setValue] = useState(1);
  const onChangeRadio = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const items = [
    {
      key: "1",
      label: "Ratings",
      children: <>
      <Radio.Group onChange={onChangeRadio} value={value}>
      <Space direction="vertical">
        <Radio value={1}><Rate allowHalf defaultValue={5.0} /></Radio>
        <Radio value={2}><Rate allowHalf defaultValue={3.5} /></Radio>
        <Radio value={3}><Rate allowHalf defaultValue={2.5} /></Radio>
      </Space>
    </Radio.Group>
      </>,
    },
    {
      key: "2",
      label: "Topics",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "Levels",
      children: <p>{text}</p>,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
    </div>
  );
};

export default Search;
