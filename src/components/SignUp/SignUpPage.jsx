"use client";

import Image from "next/image";
import { Form, Input } from "antd";

import { motion as m } from "framer-motion";

import styles from "./SignUp.module.css";
import { request } from "@/utils/serverSideRequest";
import { REGISTER_URL } from "@/constants/url";
import { METHOD } from "@/constants/method";
import { VALIDATOR } from "@/utils/validate";

const SignUpPage = () => {
  
  const onFinish = async(values) => {
    console.log("Success:", values);
    const res = await request(REGISTER_URL, METHOD.POST, {
      ...values,
      isLoginWithGoogle: false
    });

    console.log('res', res);
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
                message: "Vui lòng nhập tên người dùng!",
              },
            ]}
          >
            <Input
              placeholder="Tên người dùng"
              className="black_border_input"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Vui Lòng nhập email!",
              },
              {
                validator: VALIDATOR.VALIDATE_EMAIL
              }
            ]}
          >
            <Input placeholder="Email" className="black_border_input" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
              {
                validator: VALIDATOR.VALIDATE_PASSWORD
              }
            ]}
          >
            <Input.Password
              placeholder="Mật khẩu"
              className="black_border_input focus-within:shadow-none focus:shadow-none focus-visible:shadow-none"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập lại mật khẩu!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Mật khẩu không khớp"));
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Nhập lại mật khẩu"
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
