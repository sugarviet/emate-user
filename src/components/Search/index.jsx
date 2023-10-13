"use client";
import { motion as m } from "framer-motion";
import styles from "./Search.module.css";
import {
  Row,
  Col,
  List,
  Collapse,
  Radio,
  Space,
  Rate,
  Pagination,
  Checkbox,
} from "antd";
import { IT_DATA_COURSES } from "@/constants/fakeData";
import RegisterCourseCard from "../public/RegisterCourseCard/RegisterCourseCard";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SlideUpCardAnimation from "@/animations/SlideUpCardAnimation";
import { BASE_URL, HOME_PAGE_URL, SEARCH_COURSE_BY_NAME } from "@/constants/url";
import useSWR from "swr";
import fetcher, { get_fetcher } from "@/utils/fetcher";
import urlcat from "urlcat";

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const search = searchParams.get("q");

  const apiSearch =  `${BASE_URL}${SEARCH_COURSE_BY_NAME}${search}`

  console.log(apiSearch)
  const {data, isLoading} = useSWR(apiSearch, get_fetcher);

  if(isLoading){
    return <>Loading...</>
  }

  console.log('data', data);

  if(!search) {
    router.push(HOME_PAGE_URL)
  }

  return (
    <m.main
      className={styles.blur_bg}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="font-bold text-2xl my-5 ml-5">
        100 result(s) for <q className="italic text-3xl">{search}</q>
      </h1>
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
              dataSource={data}
              renderItem={(courseCard, index) => (
                <List.Item>
                  <SlideUpCardAnimation key={index}>
                    <RegisterCourseCard cardData={courseCard} />
                  </SlideUpCardAnimation>
                </List.Item>
              )}
            ></List>

            <div className="w-full flex justify-center my-6">
              <Pagination defaultCurrent={1} total={50} size="default" />
            </div>
          </Col>
        </Row>
      </div>
    </m.main>
  );
};

const SortingSidebar = () => {
  const options = [
    {
      label: "Java",
      value: "java",
    },
    {
      label: "Javascript",
      value: "javascript",
    },
    {
      label: "Docker",
      value: "docker",
    },
  ];
  const [value, setValue] = useState(1);
  const onChangeRadio = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const items = [
    {
      key: "1",
      label: "Ratings",
      children: (
        <>
          <Radio.Group onChange={onChangeRadio} value={value}>
            <Space direction="vertical">
              <Radio value={1}>
                <div className="flex items-center gap-3">
                  <Rate allowHalf defaultValue={5.0} />
                  <p className="text-base font-medium">5.0</p>
                </div>
              </Radio>
              <Radio value={2}>
                <div className="flex items-center gap-3">
                  <Rate allowHalf defaultValue={3.5} />
                  <p className="text-base font-medium">3.5</p>
                </div>
              </Radio>
              <Radio value={3}>
              <div className="flex items-center gap-3">
                <Rate allowHalf defaultValue={2.5} />
                <p className="text-base font-medium">2.5</p>
              </div>
              </Radio>
            </Space>
          </Radio.Group>
        </>
      ),
    },
    {
      key: "2",
      label: "Topics",
      children: (
        <>
          <Checkbox.Group
            options={options}
            defaultValue={["docker"]}
            style={{ flexDirection: "column", gap: 20 }}
          />
        </>
      ),
    },
    {
      key: "3",
      label: "Levels",
      children: (
        <>
          <Radio.Group onChange={onChangeRadio} value={value}>
            <Space direction="vertical">
              <Radio value={1}>Beginner</Radio>
              <Radio value={2}>Junior</Radio>
              <Radio value={3}>Senior</Radio>
            </Space>
          </Radio.Group>
        </>
      ),
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="mt-4">
      <Collapse
        items={items}
        defaultActiveKey={["1", "2", "3"]}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
