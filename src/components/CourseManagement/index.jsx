"use client";
import Image from "next/image";
import styles from "./CourseManagement.module.css";
import Link from "next/link";
import useSWR from "swr";
import { delete_fetcher, get_fetcher, put_fetcher } from "@/utils/fetcher";
import { ArrowRightOutlined, DeleteFilled } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { CREATE_COURSE_PAGE_URL } from "@/constants/url";
import { Switch, message } from "antd";
import { useState } from "react";
import { course_item_api, mentor_course_api } from "@/constants/api";
import { useChatStore } from "@/stores/useChatStore";

const CourseItem = ({
  course,
  handleDeleteCourse,
  handleGoToEditCourse,
  handleSwitchStatus,
}) => {
  const { _id, image, name, visibility } = course;
  const [isPublic, setIsPublic] = useState(visibility);
  return (
    <div className="grid grid-cols-8 col-span-2 flex items-center justify-between bg-white border border-black shadow-lg px-8 h-40 rounded-lg">
      <div className="col-span-1">
        <div>
          <Image
            className="rounded-xl"
            src={image}
            alt="img"
            height={300}
            width={300}
          />
        </div>
      </div>
      <div className="col-span-7 flex justify-between">
        <div className="ml-4">
          <div className="w-full h-full flex items-center justify-center">
            <h1 className="text-2xl font-bold">{name}</h1>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="flex items-center justify-end mb-4">
            <span className="font-semibold mr-4">
              {isPublic ? "Công khai" : "Riêng tư"}
            </span>
            <Switch
              className="bg-gray-200"
              checked={isPublic}
              onChange={(value) => {
                handleSwitchStatus(_id, () => {
                  setIsPublic(value);
                });
              }}
            />
          </div>
          <div>
            <button
              onClick={() => handleDeleteCourse(_id)}
              className="bg-red-400 py-3 px-7 text-white rounded-lg mx-2"
            >
              Xóa
              <DeleteFilled className="ml-3" />
            </button>
            <button
              disabled={!isPublic}
              onClick={() => handleGoToEditCourse(_id)}
              className={
                isPublic
                  ? "primary_bg_pink_color py-3 px-7 text-white rounded-lg mx-2"
                  : "bg-gray-300 py-3 px-7 text-white rounded-lg mx-2"
              }
            >
              Chỉnh sửa <ArrowRightOutlined className="ml-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function CourseManagement() {
  const router = useRouter();

  const { currentUserInfo } = useChatStore();
  const { _id } = currentUserInfo;

  const {
    data: courses,
    isLoading: coursesLoading,
    error: errorLoading,
    mutate,
  } = useSWR(mentor_course_api(_id), get_fetcher);

  if (coursesLoading || errorLoading) return null;

  const handleDeleteCourse = (id) => {
    delete_fetcher(
      course_item_api(id),
      () => {
        message.success("Bạn đã xóa khóa học thành công!");
        mutate(courses.filter((course) => course._id !== id));
      },
      () => {
        message.error("Bạn đã xóa khóa học thất bại!");
      }
    );
  };

  const handleGoToEditCourse = (id) => {
    router.push(`${CREATE_COURSE_PAGE_URL}?id=${id}`);
  };

  const handleSwitchStatus = (id, callback) => {
    put_fetcher(
      `https://emate-af7e6f8fb027.herokuapp.com/course/status/${id}`,
      {},
      () => {
        message.success("Bạn đã thay đổi chế độ khóa học thành công!");
        callback();
      },
      () => {
        message.error("Bạn đã thay đổi chế độ khóa học thất bại!");
      }
    );
  };

  return (
    <div className={styles.blur_bg}>
      <div className="grid grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <CourseItem
            handleDeleteCourse={handleDeleteCourse}
            handleSwitchStatus={handleSwitchStatus}
            handleGoToEditCourse={handleGoToEditCourse}
            key={`${course} + ${index}`}
            course={course}
          />
        ))}
        <div className="col-span-2 flex items-center justify-between bg-white border border-black shadow-lg h-40 p-8 rounded-lg">
          <span className="text-xl">Bắt đầu tạo khóa học</span>
          <Link
            href={"/instructor/courses/create"}
            className="w-72 h-16 bg-pink-300 text-xl text-white font-bold flex items-center justify-center"
          >
            Tạo Khóa Học
          </Link>
        </div>
        <div className="col-span-2 flex items-center justify-between bg-white border border-black shadow-lg h-40 p-8 rounded-lg">
          <div className="grid grid-cols-5">
            <div className="col-span-2 flex items-center justify-center">
              <Image
                alt="engaging-course-image"
                width={124}
                height={124}
                src={"/images/engaging-course-2x.jpg"}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <span className="font-semibold text-lg mb-4">
                Tạo ra một khóa học hấp dẫn
              </span>
              <span>
                Cho dù bạn đã giảng dạy nhiều năm hay mới giảng dạy lần đầu
                tiên, bạn đều có thể sử thực hiện một khóa học hấp dẫn. Chúng
                tôi đã biên soạn các tài nguyên và phương pháp hay nhất để trợ
                giúp bạn sẽ đạt đến cấp độ tiếp theo, bất kể bạn bắt đầu từ đâu
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-between bg-white border border-black shadow-lg h-40 p-8 rounded-lg">
          <div className="grid grid-cols-5">
            <div className="col-span-2 flex items-center justify-center">
              <Image
                alt="video-creation-image"
                width={124}
                height={124}
                src={"/images/video-creation-2x.jpg"}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <span className="font-semibold text-lg mb-4">
                Bắt đầu với Video
              </span>
              <span>
                Bài giảng video chất lượng có thể thiết lập khóa học của bạn.
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-between bg-white border border-black shadow-lg h-40 p-8 rounded-lg">
          <div className="grid grid-cols-5">
            <div className="col-span-2 flex items-center justify-center">
              <Image
                alt="build-audience-image"
                width={124}
                height={124}
                src={"/images/build-audience-2x.jpg"}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <span className="font-semibold text-lg mb-4">
                Xây dựng khán giả của bạn
              </span>
              <span>
                Hãy thiết lập lộ trình thành công của bạn bằng cách xây dựng
                khán giả của bạn.
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-between bg-white border border-black shadow-lg h-40 p-8 rounded-lg">
          <div className="grid grid-cols-5">
            <div className="col-span-2 flex items-center justify-center">
              <Image
                alt="newcomer-challenge-image"
                width={124}
                height={124}
                src={"/images/newcomer-challenge-2x.jpg"}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <span className="font-semibold text-lg mb-4">
                Hãy tham gia thử thách dành cho người hướng dẫn mới
              </span>
              <span>
                Nhận các mẹo và tài nguyên độc quyền được thiết kế để giúp bạn
                khởi độgn khóa học đầu tiên của mình nhanh hơn! Những giảng viên
                đủ điều kiện xuất bản khóa học đầu tiên đúng thời hạn sẽ nhận
                được phần thưởng đặc biệt. Bắt đầu hôm nay.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseManagement;
