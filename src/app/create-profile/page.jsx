"use client";

import Image from "next/image";
import { Form, Input, Select, Radio } from "antd";

import { motion as m } from "framer-motion";

import styles from "./createProfile.module.css";
import Link from "next/link";

const CreateProfileFirstPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <m.main
      className={styles.blur_bg}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.form_wrapper}>
        <h1 className={styles.title}>Hồ sơ của bạn</h1>
        <Form
          name="basic"
          className="flex flex-col items-center gap-2"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          {/* FIRST NAME & LAST NAME START*/}
          <div className="flex gap-4 md:w-96 w-72">
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input
                placeholder="Họ"
                className={styles.custom_black_border_input}
              />
            </Form.Item>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                placeholder="Tên"
                className={styles.custom_black_border_input}
              />
            </Form.Item>
          </div>
          {/* FIRST NAME & LAST NAME END*/}

          {/* AGE START */}
          <Form.Item
            name="age"
            rules={[
              {
                required: true,
                message: "Please input your age!",
              },
            ]}
          >
            <Input placeholder="Tuổi" className="black_border_input" />
          </Form.Item>
          {/* AGE END */}

          {/* EMAIL START */}
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="Email" className="black_border_input" />
          </Form.Item>
          {/* EMAIL END */}

          <Form.Item
            name="gender"
            className={styles.input_block}
            rules={[
              {
                required: true,
                message: "Please input your gender!",
              },
            ]}
          >
            <div className="grid grid-cols-4">
              <b>Giới tính</b>
              <Radio.Group className="col-span-3 flex justify-evenly">
                <Radio value={1}>Nam</Radio>
                <Radio value={0}>Nữ </Radio>
              </Radio.Group>
            </div>
          </Form.Item>

          {/* MAJOR START */}
          <Form.Item
            name="major"
            className={styles.input_block}
            rules={[
              {
                required: true,
                message: "Please input your major!",
              },
            ]}
          >
            <Select
              className={`${styles.custom_select}`}
              showSearch
              bordered={false}
              placeholder="Lĩnh vực đang học"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "IT",
                  label: "IT",
                },
                {
                  value: "economy",
                  label: "Kinh Tế",
                },
                {
                  value: "design",
                  label: "Thiết kế",
                },
              ]}
            />

            <div className="grid grid-cols-4 mt-8">
              <b>Trình độ</b>
              <Radio.Group className="col-span-3">
                <Radio value={0}>Sơ cấp</Radio>
                <Radio value={1}>Trung cấp</Radio>
                <Radio value={2}>Nâng cao</Radio>
              </Radio.Group>
            </div>
          </Form.Item>
          {/* MAJOR END */}

          <Form.Item
            name="follow_major"
            className={styles.input_block}
            rules={[
              {
                required: true,
                message: "Please input your follow major!",
              },
            ]}
          >
            <Select
              className={`${styles.custom_select}`}
              showSearch
              bordered={false}
              placeholder="Lĩnh vực muốn học"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "IT",
                  label: "IT",
                },
                {
                  value: "economy",
                  label: "Kinh Tế",
                },
                {
                  value: "design",
                  label: "Thiết kế",
                },
              ]}
            />

            <div className="grid grid-cols-4 mt-8">
              <b>Trình độ</b>
              <Radio.Group className="col-span-3">
                <Radio value={0}>Sơ cấp</Radio>
                <Radio value={1}>Trung cấp</Radio>
                <Radio value={2}>Nâng cao</Radio>
              </Radio.Group>
            </div>
          </Form.Item>

          <Form.Item>
            <button className="pink_btn" type="submit">
              Tiếp theo
            </button>
          </Form.Item>
        </Form>

        <Link className="font-thin text-sm" href={"/"}>
          <u>Quay lại</u>
        </Link>
      </div>

      {/* Images setup */}
      <Image
        src="/images/pinkDot4.png"
        alt="el"
        height={120}
        width={120}
        className={styles.pink_dot_first}
      />
      <Image
        src="/images/pinkDot4.png"
        alt="el"
        height={120}
        width={120}
        className={styles.pink_dot_second}
      />
      <Image
        src="/images/yellowDot1.png"
        alt="el"
        height={120}
        width={120}
        className={styles.yellow_dot_first}
      />
      <Image
        src="/images/yellowDot2.png"
        alt="el"
        height={120}
        width={120}
        className={styles.yellow_dot_second}
      />
    </m.main>
  );
};

export default CreateProfileFirstPage;
