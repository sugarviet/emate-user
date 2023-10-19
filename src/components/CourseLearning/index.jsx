"use client";
import { course_item_api } from "@/constants/api";
import { get_fetcher } from "@/utils/fetcher";
import { StarFilled } from "@ant-design/icons";
import { Avatar, Checkbox, Collapse, Progress, Rate } from "antd";
import { useState } from "react";
import useSWR from "swr";
import SpinnerLoading from "../public/SpinnerLoading";

function CourseLearning({ id }) {
  const [currentLesson, setCurrentLesson] = useState({});

  // useEffect(() => {
  //   const isNotCompletedLesson =
  //     lessons.find((lesson) => lesson.isCompleted) ||
  //     lessons[lessons.length - 1];

  //   setCurrentLesson(isNotCompletedLesson._id);
  // }, [lessons]);

  const {
    data: course,
    isLoading: courseLoading,
    error: courseError,
  } = useSWR(course_item_api(id), get_fetcher);

  if (courseLoading || courseError) return <SpinnerLoading />;
  console.log(course);

  const { rating, content, name, owner, topReview } = course;

  const handleChangeLesson = (lesson) => {
    setCurrentLesson(lesson);
  };

  return (
    <div className="border-pink-300 border-2 rounded-3xl overflow-hidden relative">
      <div className="bg-pink-50 h-20 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-full flex items-center">
            <Avatar src={owner.avatar} size={48} />
            <span className="ml-2">{owner.name}</span>
          </div>
          <span className="border border-pink-300 mx-4 h-12"></span>
          <span className="font-semibold text-xl">{name}</span>
        </div>
        <div className="flex items-center">
          <Progress type="circle" percent={99} size={48} strokeWidth={8} />
          <span className="ml-2 text-lg font-medium">Tiến độ học tập</span>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 flex-col">
          <video
            width={1920}
            height={1080}
            controls
            src={currentLesson.video}
          />
          <div className="p-4 font-bold text-2xl">
            <span className="text-xl font-bold">
              <StarFilled style={{ color: "#fadb14" }} /> {rating} đánh giá từ
              học viên
            </span>
            <div>
              <div className="grid grid-rows-1 md:grid-rows-none grid-flow-col md:grid-flow-row overflow-scroll md:overflow-hidden gap-2 md:gap-4 mt-4">
                {topReview.map((item, index) => {
                  const { name: userName, avatar: userAvatar } = item.user;
                  return (
                    <div key={`${item} + ${index}`} className="border-b-2 py-4">
                      <div className="flex my-2">
                        <Avatar src={userAvatar} size={60} />
                        <div className="flex-col flex text-sm ml-2">
                          <span>{userName}</span>
                          <Rate
                            value={item.rating}
                            disabled
                            className="text-xs"
                          />
                          <span className="font-medium mt-4">
                            {item.comment}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="w-72 bg-white shadow-lg overflow-y-scroll max-content">
          <div className="p-4 border-pink-300 border">
            <span className="font-semibold text-xl">Nội dung khóa học</span>
          </div>
          <Collapse
            size="large"
            className="bg-pink-50 rounded-none border-pink-300"
            defaultActiveKey={1}
            expandIconPosition="end"
            items={content.map((item, index) => ({
              key: index + 1,
              label: (
                <div className="flex flex-col">
                  <span className="font-bold text-lg line-clamp-2">{`Section ${
                    index + 1
                  }: ${item.name}`}</span>
                  <span>
                    {
                      item.sections.filter((section) => section.isCompleted)
                        .length
                    }{" "}
                    / {item.sections.length}
                  </span>
                </div>
              ),
              children: (
                <ul>
                  {item.sections.map((lesson, index) => (
                    <li
                      onClick={() => handleChangeLesson(lesson)}
                      key={`${lesson} + ${index}`}
                      className="text-md py-4 hover:font-bold hover:cursor-pointer"
                    >
                      <Checkbox
                        onChange={(value) => {
                          const newLesson = {
                            ...lesson,
                            isCompleted: value.target.checked,
                          };
                        }}
                      />
                      <span className="ml-2">{`${index + 1}. ${
                        lesson.name
                      }`}</span>
                    </li>
                  ))}
                </ul>
              ),
              style: {
                borderRadius: 0,
                borderColor: "rgb(249 168 212)",
              },
            }))}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseLearning;
