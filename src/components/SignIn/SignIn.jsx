"use client";

import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import { Form, Input } from "antd";

import { motion as m } from "framer-motion";

import styles from "./SignIn.module.css";

const SignIn = () => {
  const { data } = useSession();
  console.log("data", data);
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
        <h1 className={styles.title}>Đăng nhập</h1>
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

      <div className={styles.line}/>
    
      </div>

      <div className="-translate-y-44">
        <button className="bg-blue-500 py-2 px-2 rounded-md flex items-center gap-3 w-48" onClick={() => signIn("google")}>
          <Image src="/icons/google.png" alt="google" width={25} height={25}/>
          <p className="text-white font-medium">Login with Google</p>
        </button>
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

export default SignIn;
