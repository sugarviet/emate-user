"use client";
import { Steps, message } from "antd";

import styles from "./CourseCreation.module.css";
import { useState } from "react";
import CourseTitleCreation from "./CourseTitleCreation";
import CourseCategoryCreation from "./CourseCategoryCreation";
import CourseDetailCreation from "./CourseDetailCreation";
import { useForm } from "react-hook-form";
import { post_fetcher } from "@/utils/fetcher";
import { COURSE_API } from "@/constants/api";
import { useRouter } from "next/navigation";

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
      owner: "651e2891262f21a98b85eb9e",
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

  const Form = steps[currentStepIndex].component;

  return (
    <div className={styles.blur_bg}>
      <Steps progressDot current={currentStepIndex} items={steps} />
      <div className="my-12 flex-1">
        <Form control={control} />
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
        ) : (
          <button
            onClick={handleSubmit(handleCreateCourse)}
            className="bg-pink-300 w-40 h-16 text-white font-bold text-xl"
          >
            Tạo khóa học
          </button>
        )}
      </div>
    </div>
  );
}

export default CourseCreation;
