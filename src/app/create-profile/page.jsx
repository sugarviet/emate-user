"use client";

import Image from "next/image";
import { Form, Input, Select } from "antd";

import { motion as m } from "framer-motion";

import styles from "./createProfile.module.css";

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
          <div className="flex gap-4 w-96">
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

          {/* NAJOR START */}
          <Form.Item
            name="major"
            rules={[
              {
                required: true,
                message: "Please input your major!",
              },
            ]}
          >
            <Select
              className={styles.custom_select}
              style={{ width: "400px" }}
              showSearch
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
          </Form.Item>
          {/* MAJOR END */}

          <Form.Item>
            <button className="pink_btn" type="submit">
              Tiếp theo
            </button>
          </Form.Item>
        </Form>
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
