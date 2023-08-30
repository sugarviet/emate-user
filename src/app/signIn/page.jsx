"use client";

import Image from "next/image";
import { Form, Input } from "antd";

import styles from "./SignIn.module.css";

const SignInPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <main className={styles.blur_bg}>
      <div className={`${styles.form_wrapper}`}>
        <h1 className="text-3xl mb-16 text-center font-bold ">Đăng nhập</h1>
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
              Đăng nhập
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
    </main>
  );
};

export default SignInPage;
