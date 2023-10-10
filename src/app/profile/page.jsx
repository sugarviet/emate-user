"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Form, Input, Avatar, Image as Img, Radio, Select } from "antd";

import { motion as m } from "framer-motion";

import styles from "./profile.module.css";
import Link from "next/link";
const { TextArea } = Input;

const ProfilePage = () => {
  const [aboutImages, setAboutImages] = useState([
    "error",
    "/character/nguyenNgoc.png",
  ]);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleAddAboutImage = () => {
    console.log("On add about-image");
  };

  const handleChangeAvatar = () => {
    console.log("On change avatar");
  };

  return (
    <m.main
      className={styles.blur_bg}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className={`${styles.container} grid grid-cols-3 md:grid-cols-4 gap-10`}
      >
        <div className="display_center_vertical gap-2">
          <Avatar size={160} src="/character/nguyenNgoc.png" />
          <button onClick={handleChangeAvatar}>
            <Image src="/icons/plus.png" alt="add" height={20} width={20} />
          </button>
          <span>Chọn ảnh đại diện</span>
        </div>

        <div className={`col-span-3`}>
          <h1 className={styles.title}>Hồ sơ của bạn</h1>
          <Form
            name="basic"
            className="display_center_vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              className="w-full"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Tên của bạn đang trống kìa!",
                },
              ]}
            >
              <div>
                <span>Tên của bạn</span>
                <Input className={styles.custom_black_border_input} />
              </div>
            </Form.Item>

            <Form.Item
              name="gender"
              className={styles.input_block}
              rules={[
                {
                  required: true,
                  message: "Giới tính của bạn là gì?",
                },
              ]}
            >
              <div className="grid grid-cols-4">
                <span>Giới tính</span>
                <Radio.Group className="col-span-3 flex justify-evenly">
                  <Radio value={1}>Nam</Radio>
                  <Radio value={0}>Nữ </Radio>
                </Radio.Group>
              </div>
            </Form.Item>

            <Form.Item
              name="follow_major"
              className={styles.input_block}
              rules={[
                {
                  required: true,
                  message: "Hãy nói ra lĩnh vực và trình độ mà bạn muốn học!",
                },
              ]}
            >
              <div>
                <span>Lĩnh vực bạn muốn học</span>
                <Select
                  className={`${styles.custom_select}`}
                  showSearch
                  bordered={false}
                  optionFilterProp="children"
                  // onChange={onChange}
                  // onSearch={onSearch}
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
                  <span>Trình độ</span>
                  <Radio.Group className="col-span-3">
                    <Radio value={1}>Sơ cấp</Radio>
                    <Radio value={2}>Trung cấp</Radio>
                    <Radio value={3}>Nâng cao</Radio>
                  </Radio.Group>
                </div>
              </div>
            </Form.Item>

            <Form.Item className="display_vertical" name="about">
              <div>
                <span>Nói điều gì đó về bạn</span>
              </div>
              <TextArea
                className="black_border_input"
                autoSize={{
                  minRows: 3,
                  maxRows: 5,
                }}
              />
            </Form.Item>

            <Form.Item>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-4">
                <button
                  onClick={handleAddAboutImage}
                  className={styles.add_image_button}
                >
                  <Image
                    src="/icons/plus.png"
                    alt="add"
                    height={40}
                    width={40}
                  />
                  <div className={styles.plus_button_blur_bg}></div>
                </button>
                {aboutImages.map((url, index) => (
                  <Img
                    key={index}
                    width={112}
                    src={url}
                    fallback="data:image/png;base64,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"
                  />
                ))}
              </div>
            </Form.Item>

            <Form.Item>
              <button className="pink_btn" type="submit">
                Cập nhật
              </button>
            </Form.Item>
          </Form>

          <Link className="font-thin text-sm" href={"/"}>
            <u>Quay lại</u>
          </Link>
        </div>
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

export default ProfilePage;
