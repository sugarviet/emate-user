"use client";
import { StarFilled } from "@ant-design/icons";
import { Avatar, Checkbox, Collapse, Progress, Rate } from "antd";
import { CldVideoPlayer } from "next-cloudinary";
import { useState, useEffect } from "react";

const data = {
  _id: "651a6cedc5e7f623c7acec0d",
  name: "Nodejs For Pro",
  image: "nodejs.png",
  owner: "651a69cebaf2f58aa1cb63b5",
  subject: "650ff722b36ad198e85ab814",
  whatWillLearn:
    "Work with one of the most in-demand web development programming languages",
  requirement:
    "General knowledge of how the web works is recommended but not a must-have --- Basic JavaScript knowledge is strongly recommended but could be picked up whilst going through the course",
  description:
    "Join the most comprehensive Node.js course on Udemy and learn Node in both a practical as well as theory-based way!",
  level: "Fundametal JavaScript",
  price: 424000,
  content: [
    {
      name: "Introduction",
      sections: [
        {
          name: "Introduction",
          description:
            "Welcome to this Node.js course! Let me introduce myself and give you a rough overview of this course and what it's all about!",
          video: "introduction.mp4",
          status: false,
          _id: "651a6cedc5e7f623c7acec0f",
          isCompleted: false,
        },
        {
          name: "What is NodeJs",
          description:
            "What is Node.js? That's the most important question in a Node course I'd argue and in this lecture, we'll explore what exactly NodeJS is and why it's amazing.",
          video: "introduction.mp4",
          status: false,
          _id: "651a6cedc5e7f623c7acec10",
          isCompleted: false,
        },
      ],
      _id: "651a6cedc5e7f623c7acec0e",
    },
    {
      name: "Understand the basic",
      sections: [
        {
          name: "Module Introduction",
          description: "",
          video: "introduction.mp4",
          status: false,
          _id: "651a6cedc5e7f623c7acec12",
          isCompleted: false,
        },
        {
          name: "Javscript in the Nutshell",
          description: "",
          video: "introduction.mp4",
          status: false,
          _id: "651a6cedc5e7f623c7acec13",
          isCompleted: false,
        },
      ],
      _id: "651a6cedc5e7f623c7acec11",
    },
  ],
  rating: 0,
  duration: 4,
  isCompleted: 0,
  purchasers: 0,
  visibility: true,
  status: true,
  topReview: [],
  __v: 0,
};

function CourseLearning({ course }) {
  const [lessons, setLessons] = useState(
    [].concat(...data.content.map((item) => item.sections))
  );
  const [contents, setContents] = useState(data.content);
  const [currentLesson, setCurrentLesson] = useState();

  const handleUpdateLesson = (lesson) => {
    setContents(
      contents.map((item) => ({
        ...item,
        sections: item.sections.map((section) =>
          section._id === lesson._id ? lesson : section
        ),
      }))
    );
  };

  useEffect(() => {
    const isNotCompletedLesson =
      lessons.find((lesson) => lesson.isCompleted) ||
      lessons[lessons.length - 1];

    setCurrentLesson(isNotCompletedLesson._id);
  }, [lessons]);

  return (
    <div className="border-pink-300 border-2 rounded-3xl overflow-hidden relative">
      <div className="bg-pink-50 h-20 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-full flex items-center">
            <Avatar size={48} />
            <span className="ml-2">{data.owner}</span>
          </div>
          <span className="border border-pink-300 mx-4 h-12"></span>
          <span className="font-semibold text-xl">{data.name}</span>
        </div>
        <div className="flex items-center">
          <Progress type="circle" percent={99} size={48} strokeWidth={8} />
          <span className="ml-2 text-lg font-medium">Your progress</span>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <CldVideoPlayer
            className="bg-black"
            controls
            src="/courses/unity-course-01"
          />
          <div className="p-4 font-bold text-2xl">
            <span>Reviews</span>
            <span className="text-xl font-bold">
              <StarFilled style={{ color: "#fadb14" }} /> 4.7 course rating
            </span>
            <div>
              <div className="grid grid-rows-1 md:grid-rows-none grid-flow-col md:grid-flow-row overflow-scroll md:overflow-hidden gap-2 md:gap-4 mt-4">
                <div className="border-b-2 py-4">
                  <div className="flex my-2">
                    <Avatar size={60} />
                    <div className="flex-col flex text-sm ml-2">
                      <span>Marcos Orza R.</span>
                      <Rate value={5} disabled className="text-xs" />
                      <span className="font-medium mt-4">
                        Great course, If the video is to fast you can slow it
                        down and if the chapter is outdated you can google it
                        and figure it out, that is part of the learning process.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border-b-2 py-4">
                  <div className="flex my-2">
                    <Avatar size={60} />
                    <div className="flex-col flex text-sm ml-2">
                      <span>Marcos Orza R.</span>
                      <Rate value={5} disabled className="text-xs" />
                      <span className="font-medium mt-4">
                        Great course, If the video is to fast you can slow it
                        down and if the chapter is outdated you can google it
                        and figure it out, that is part of the learning process.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border-b-2 py-4">
                  <div className="flex my-2">
                    <Avatar size={60} />
                    <div className="flex-col flex text-sm ml-2">
                      <span>Marcos Orza R.</span>
                      <Rate value={5} disabled className="text-xs" />
                      <span className="font-medium mt-4">
                        Great course, If the video is to fast you can slow it
                        down and if the chapter is outdated you can google it
                        and figure it out, that is part of the learning process.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-72 bg-white shadow-lg overflow-y-scroll max-content">
          <div className="p-4 border-pink-300 border">
            <span className="font-semibold text-xl">Course content</span>
          </div>
          <Collapse
            size="large"
            className="bg-pink-50 rounded-none border-pink-300"
            defaultActiveKey={1}
            expandIconPosition="end"
            items={contents.map((content, index) => ({
              key: index + 1,
              label: (
                <div className="flex flex-col">
                  <span className="font-bold text-lg line-clamp-2">{`Section ${
                    index + 1
                  }: ${content.name}`}</span>
                  <span>
                    {
                      content.sections.filter((section) => section.isCompleted)
                        .length
                    }{" "}
                    / {content.sections.length}
                  </span>
                </div>
              ),
              children: (
                <ul>
                  {content.sections.map((lesson, index) => (
                    <li key={`${lesson} + ${index}`} className="text-md my-2">
                      <Checkbox
                        onChange={(value) => {
                          const newLesson = {
                            ...lesson,
                            isCompleted: value.target.checked,
                          };
                          console.log(value);
                          handleUpdateLesson(newLesson);
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
