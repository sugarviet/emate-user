"use client";

import { useSearchParams } from "next/navigation";
import { Image as AntdImg } from "antd";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  QRCode,
  Row,
  Col,
  Form,
  Input,
  Button,
  Select,
  Upload,
  message,
} from "antd";
import {
  ArrowLeftOutlined,
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useChatStore } from "@/stores/useChatStore";

import { motion as m } from "framer-motion";

import styles from "./RegisterMentorPackage.module.css";
import useSWR from "swr";
import { BASE_URL, GET_ALL_SUBJECT_SELECT } from "@/constants/url";
import urlcat from "urlcat";
import fetcher from "@/utils/fetcher";

const PACKAGE = {
  yearly: {
    title: "Gói hàng năm",
    pricePerMonth: "230.000",
    total: "2.760.000",
    totalByMonthOrYear: "năm",
  },
  monthly: {
    title: "Gói hàng tháng",
    pricePerMonth: "300.000",
    total: "300.000",
    totalByMonthOrYear: "tháng",
  },
};

const RegisterMentorPackage = () => {
  const API_KEY = "373bc9b180e920e9c2ebceaa3b341eed";
  const UPLOAD_IMG_URL = "https://api.imgbb.com/1/upload";
  const currentUserInfo = useChatStore((state) => state.currentUserInfo);
  const searchParams = useSearchParams();
  const search = searchParams.get("package");

  const { data, isLoading } = useSWR(
    urlcat(BASE_URL, GET_ALL_SUBJECT_SELECT),
    fetcher
  );

  console.log("currentUserInfo", currentUserInfo);

  const [degreeImgUrl, setDegreeImgUrl] = useState("");
  const onFinish = (values) => {
    console.log("Success:", {
      ...values,
      price: +values.price
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  console.log("data", data);

  const customRequest = async ({ file, onSuccess, onError }) => {
    const formData = new FormData();
    formData.set("key", API_KEY);
    formData.append("image", file);

    try {
      const response = await axios.post(UPLOAD_IMG_URL, formData);

      if (response.status === 200 && response.data && response.data.data) {
        // Successful upload
        const imageUrl = response.data.data.url;

        setDegreeImgUrl(imageUrl);
        console.log("img URL", imageUrl);

        onSuccess();
        message.success(`${file.name} uploaded successfully`);
      } else {
        onError();
        message.error(`Failed to upload ${file.name}`);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      onError(error);
      message.error(`Failed to upload ${file.name}`);
    }
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  return (
    <main className="blur_custom">
      <m.div
        className={styles.container}
        initial={{ opacity: 0, top: -100 }}
        animate={{ opacity: 1, top: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Link href="/mentor-package">
          <button>
            <ArrowLeftOutlined /> Quay lại{" "}
          </button>
        </Link>
        <h1 className={styles.main_text}>Đăng kí tài khoản dạy học</h1>

        <div className="my-8">
          <Row gutter={[16, 16]}>
            <Col lg={13} sm={24}>
              <h1 className="text-center text-2xl font-bold my-2">Thông tin</h1>
              <div className={styles.card}>
                <h2 className="text-lg font-semibold">
                  Đăng kí tài khoản người hướng dẫn
                </h2>
                <p>( {PACKAGE[search].title} )</p>

                <div className="flex gap-2 my-5 items-center mr-72 sm:mr-0">
                  <h3 className="text-2xl">đ{PACKAGE[search].pricePerMonth}</h3>
                  <p>/</p>
                  <p className="text-gray-400">tháng</p>
                </div>

                <div className="flex gap-4 items-center">
                  <h2 className="text-xl font-semibold">Tổng cộng:</h2>
                  <h1 className="font-bold text-2xl">
                    đ{PACKAGE[search].total}
                  </h1>
                  <p>/</p>
                  <p className="text-gray-400">
                    {PACKAGE[search].totalByMonthOrYear}
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={11} sm={24}>
              <m.div
              // className="py-4"
              >
                <h1 className="text-2xl font-bold text-center my-2">
                  Thông tin đăng ký
                </h1>
                <Form
                  className="px-20 mt-2"
                  name="basic"
                  initialValues={{
                    email: currentUserInfo.email,
                    majorSubject: data.metaData,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập email!",
                      },
                    ]}
                  >
                    <Input placeholder="Email" readOnly />
                  </Form.Item>
                  <Form.Item
                    name="majorSubject"
                    initialValue={data.metaData}
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn chuyên ngành của bạn!",
                      },
                    ]}
                  >
                    <Select placeholder="Chuyên ngành">
                      {data.metaData.map((item) => (
                        <Select.Option key={item._id} value={item._id}>
                          {item.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="education"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập trường bạn (đã) đang theo học",
                      },
                    ]}
                  >
                    <Input placeholder="Học vấn" />
                  </Form.Item>

                  <Form.Item
                    name="price"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập giá tiền thuê 1h của bạn!",
                      },
                    ]}
                  >
                    <Input placeholder="Giá thuê 1h" />
                  </Form.Item>

                  <Form.Item
                    name="degreeImg"
                    valuePropName="fileList"
                    getValueFromEvent={(e) => {
                      if (Array.isArray(e)) {
                        return e;
                      }
                      return e && e.fileList;
                    }}
                  >
                    <Upload
                      customRequest={customRequest}
                      name="avatar"
                      listType="picture-card"
                      showUploadList={false}
                    >
                      {degreeImgUrl ? (
                        <AntdImg src={degreeImgUrl} alt="Avatar" />
                      ) : (
                        uploadButton
                      )}
                    </Upload>
                  </Form.Item>

                  <Button
                    type="primary"
                    htmlType="submit"
                    className="mx-auto flex justify-center px-5 py-5 items-center"
                  >
                    Submit
                  </Button>
                </Form>
              </m.div>
            </Col>
          </Row>
        </div>

        <button className="border border-black px-36 py-3 flex justify-center items-center mx-auto my-20">
          Thanh toán
        </button>

        {/* Images */}
        <Image
          src="/images/pinkDot4.png"
          alt="img"
          height={130}
          width={130}
          className={styles.pink_dot_first}
        />
        <Image
          src="/images/pinkDot4.png"
          alt="img"
          height={100}
          width={100}
          className={styles.pink_dot_second}
        />
        <Image
          src="/images/yellowDot1.png"
          alt="img"
          height={100}
          width={100}
          className={styles.yellow_dot_first}
        />
      </m.div>
    </main>
  );
};

export default RegisterMentorPackage;
