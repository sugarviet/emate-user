"use client";
import { PlusCircleFilled } from "@ant-design/icons";
import { Input, InputNumber } from "antd";
import Image from "next/image";
import { useState } from "react";

const INITIAL_WHAT_WILL_LEARN = [
  {
    value: "",
    placeholder:
      "Example: Define the roles and responsibilities of a project manager",
  },
  {
    value: "",
    placeholder: "Example: Estimate project timelines and budgets",
  },
  {
    value: "",
    placeholder: "Example: Identify and manage project risks",
  },
];

const INITIAL_REQUIREMENTS = [
  {
    value: "",
    placeholder:
      "Example: No programming experience needed. You will learn everything you need to know",
  },
];

const INITIAL_CONTENT = [
  {
    name: "Introduction",
    sections: [
      {
        name: "Introduction",
        description:
          "Welcome to this Node.js course! Let me introduce myself and give you a rough overview of this course and what it's all about!",
        video: "introduction.mp4",
        status: false,
        _id: "651d78dee930bca272fb3008",
      },
    ],
  },
];

const SectionItem = ({ content, sectionIndex }) => {
  const [lessons, setLessons] = useState(content.sections);

  const handleAddNewLesson = () => {
    const newLesson = {
      name: "",
      description: "",
      video: "",
    };

    setLessons([...lessons, newLesson]);
  };

  const handleUpdateNameLesson = (value, index) => {
    const newLessons = [...lessons];

    newLessons[index].name = value;

    setLessons(newLessons);
  };

  return (
    <div className="w-full border border-black bg-gray-50 p-4 my-2">
      <div className="flex items-center">
        <span className="font-bold">Nội dung {sectionIndex}:</span>
        <Input value={content.name} bordered={false} className="w-fit" />
      </div>
      <div className="ml-8 my-2">
        {lessons.map((lesson, index) => (
          <div className="border border-black bg-white w-full p-2 my-2">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold">Bài học {index + 1}: </span>
                <Input
                  onChange={(e) =>
                    handleUpdateNameLesson(e.target.value, index)
                  }
                  value={lesson.name}
                  bordered={false}
                  className="w-fit"
                />
              </div>
              <button className="border border-black text-pink-300 p-2 font-bold">
                <PlusCircleFilled /> Video
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={handleAddNewLesson}
          className="text-pink-300 font-semibold mt-4"
        >
          <PlusCircleFilled />
          <span>Thêm</span>
        </button>
      </div>
    </div>
  );
};

function CourseDetailCreation() {
  const [whatWillLearn, setWhatWillLearn] = useState(INITIAL_WHAT_WILL_LEARN);
  const [requirements, setRequirements] = useState(INITIAL_REQUIREMENTS);
  const [level, setLevel] = useState("");

  const [contents, setContents] = useState(INITIAL_CONTENT);

  const handleAddMoreWhatWillLearnOption = () => {
    const newOption =
      INITIAL_WHAT_WILL_LEARN[
        whatWillLearn.length % INITIAL_WHAT_WILL_LEARN.length
      ];
    setWhatWillLearn([...whatWillLearn, newOption]);
  };

  const handleAddMoreRequirementOption = () => {
    const newOption = INITIAL_REQUIREMENTS[0];
    setRequirements([...requirements, newOption]);
  };

  const handleUpdateWhatWillLearnValue = (value, index) => {
    const newWhatWillLearn = [...whatWillLearn];

    newWhatWillLearn[index].value = value;

    setWhatWillLearn([...newWhatWillLearn]);
  };

  const handleUpdateRequirementsValue = (value, index) => {
    const newRequirements = [...requirements];

    newRequirements[index].value = value;

    setRequirements(newRequirements);
  };

  const handleUpdateLevelValue = (value) => {
    setLevel(value);
  };

  const handleAddNewSection = () => {
    const newContent = {
      name: "",
      sections: [
        {
          name: "",
          description: "",
          video: "",
        },
      ],
    };

    setContents([...contents, newContent]);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <div className="my-2">
          <span className="font-bold">
            Học sinh sẽ học được những gì từ khóa học?
          </span>
          {whatWillLearn.map((item, index) => (
            <Input
              className="my-2"
              size="large"
              key={`${item} + ${index}`}
              placeholder={item.placeholder}
              value={item.value}
              onChange={(e) =>
                handleUpdateWhatWillLearnValue(e.target.value, index)
              }
            />
          ))}
          <button
            onClick={handleAddMoreWhatWillLearnOption}
            className="text-pink-300 font-semibold"
          >
            <PlusCircleFilled /> Thêm
          </button>
        </div>
        <div className="my-2">
          <span className="font-bold">
            Các yêu cầu và điều kiện tiên quyết để tham gia khóa học của bạn?
          </span>
          {requirements.map((item, index) => (
            <Input
              className="my-2"
              size="large"
              key={`${item} + ${index}`}
              placeholder={item.placeholder}
              value={item.value}
              onChange={(e) =>
                handleUpdateRequirementsValue(e.target.value, index)
              }
            />
          ))}
          <button
            onClick={handleAddMoreRequirementOption}
            className="text-pink-300 font-semibold"
          >
            <PlusCircleFilled /> Thêm
          </button>
        </div>
        <div className="my-2">
          <span className="font-bold">Khóa học của bạn dành cho những ai?</span>
          <Input
            className="my-2"
            size="large"
            placeholder="Example: Beginner Python developers curious about data science"
            value={level}
            onChange={(e) => handleUpdateLevelValue(e.target.value)}
          />
        </div>
      </div>
      <div className="col-span-1">
        {contents.map((content, index) => (
          <SectionItem
            key={`${content} + ${index}`}
            content={content}
            sectionIndex={index + 1}
          />
        ))}
        <button
          onClick={handleAddNewSection}
          className="text-pink-300 font-semibold mt-4"
        >
          <PlusCircleFilled />
          <span>Thêm</span>
        </button>
        <div className="my-4 flex">
          <div className="border border-black flex items-center justify-center">
            <Image
              alt="emate-coin"
              width={48}
              height={48}
              src={"/emate-coin.svg"}
            />
          </div>
          <InputNumber
            placeholder="Giá khóa học"
            className="border w-32 border-black ml-4 flex items-center justify-center text-md"
          />
        </div>
      </div>
    </div>
  );
}

export default CourseDetailCreation;
