"use client";

import Link from "next/link";
import Image from "next/image";
import { Form, Input } from "antd";

import { motion as m } from "framer-motion";

import styles from "./SignUp.module.css";

const SignUpPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <m.main
      className={styles.blur_bg}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className={`${styles.form_wrapper}`}>
        <h1 className={styles.title}>Đăng kí tài khoản</h1>
        <Form
          name="basic"
          className="flex flex-col items-center gap-2"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
            <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input placeholder="Tên người dùng" className="black_border_input" />
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
            <Input placeholder="Tên đăng nhập" className="black_border_input" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              placeholder="Mật khẩu"
              className="black_border_input focus-within:shadow-none focus:shadow-none focus-visible:shadow-none"
            />
          </Form.Item>

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

export default SignUpPage;
