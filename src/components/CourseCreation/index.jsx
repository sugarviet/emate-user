"use client";
import { Steps, message } from "antd";

import { motion as m } from "framer-motion";
import styles from "./CourseCreation.module.css";
import { useEffect, useState } from "react";
import CourseTitleCreation from "./CourseTitleCreation";
import CourseCategoryCreation from "./CourseCategoryCreation";
import CourseDetailCreation from "./CourseDetailCreation";
import { useForm } from "react-hook-form";
import { get_fetcher, post_fetcher, put_fetcher } from "@/utils/fetcher";
import {
  COURSE_API,
  course_item_api,
  course_update_api,
} from "@/constants/api";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { useChatStore } from "@/stores/useChatStore";

const DEFAULT_STATE = {
  title: "Course Title",
  description: "Course Description",
  component: <span>Welcome To Course Creation</span>,
  isPrevious: true,
  isContinue: true,
};

const steps = [
  {
    ...DEFAULT_STATE,
    title: "Bước 1",
    description: "Chọn tiêu đề cho khóa học.",
    component: CourseTitleCreation,
    isPrevious: false,
  },
  {
    ...DEFAULT_STATE,
    title: "Bước 2",
    description: "Chọn lĩnh vực mà bạn muốn truyền tải.",
    component: CourseCategoryCreation,
  },
  {
    ...DEFAULT_STATE,
    title: "Bước 3",
    description: "Chi tiết về khóa học của bạn.",
    component: CourseDetailCreation,
    isContinue: false,
  },
];

function CourseCreation() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const { control, handleSubmit } = useForm();
  const [course, setCourse] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { currentUserInfo } = useChatStore();
  const { _id } = currentUserInfo;

  const params = useSearchParams();
  const id = params.get("id");

  useEffect(async () => {
    if (!id) return;

    setIsLoading(true);

    await axios
      .get(course_item_api(id))
      .then((res) => res.data)
      .then((res) => res.metaData)
      .then((data) => setCourse(data))
      .then(() => setIsLoading(false));
  }, []);

  const router = useRouter();

  const handleContinue = () => {
    setCurrentStepIndex(currentStepIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentStepIndex(currentStepIndex - 1);
  };

  const handleCreateCourse = async (data) => {
    const newCourse = {
      ...data,
      owner: _id,
      whatWillLearn: data.whatWillLearn.map((item) => item.value),
      content: data.content.map((item) => item.value),
    };

    await post_fetcher(
      COURSE_API,
      newCourse,
      () => {
        message.success("Bạn đã thêm khóa học thành công");
        router.push("/instructor/courses");
      },
      (err) => {
        message.error("Bạn đã thêm khóa học thất bại");
      }
    );
  };

  const handleUpdateCourse = async (data) => {
    const newCourse = {
      ...data,
      name: data.name,
      whatWillLearn: data.whatWillLearn.map((item) => item.value),
      content: data.content.map((item) => item.value),
    };

    await put_fetcher(
      course_update_api(id),
      newCourse,
      () => {
        message.success("Bạn đã cập nhật khóa học thành công");
        router.push("/instructor/courses");
      },
      (err) => {
        message.error("Bạn đã cập nhật khóa học thất bại");
      }
    );
  };

  const Form = steps[currentStepIndex].component;

  if (isLoading) return;

  return (
    <m.div
      className={styles.blur_bg}
      initial={{ opacity: 0, x: -100 }}
      animate={{ x: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Steps progressDot current={currentStepIndex} items={steps} />
      <div className="my-12 flex-1">
        <Form control={control} course={course} />
      </div>
      <div className="flex w-full h-32 justify-between">
        {steps[currentStepIndex].isPrevious ? (
          <button
            onClick={handlePrevious}
            className="w-40 h-16 border border-black text-xl"
          >
            Bước trước
          </button>
        ) : (
          <div></div>
        )}
        {steps[currentStepIndex].isContinue ? (
          <button
            onClick={handleContinue}
            className="bg-pink-300 w-40 h-16 text-white font-bold text-xl"
          >
            Bước tiếp
          </button>
        ) : id ? (
          <button
            onClick={handleSubmit(handleUpdateCourse)}
            className="bg-pink-300 w-48 h-16 text-white font-bold text-xl"
          >
            Cập nhật khóa học
          </button>
        ) : (
          <button
            onClick={handleSubmit(handleCreateCourse)}
            className="bg-pink-300 w-40 h-16 text-white font-bold text-xl"
          >
            Tạo khóa học
          </button>
        )}
      </div>
    </m.div>
  );
}

export default CourseCreation;
