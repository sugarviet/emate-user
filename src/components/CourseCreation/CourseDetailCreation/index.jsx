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

function CourseDetailCreation() {
  const [whatWillLearn, setWhatWillLearn] = useState(INITIAL_WHAT_WILL_LEARN);
  const [requirements, setRequirements] = useState(INITIAL_REQUIREMENTS);
  const [level, setLevel] = useState("");

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
        <div className="w-full border border-black bg-gray-50 p-4">
          <div className="flex items-center">
            <span className="font-bold">Section 1:</span>
            <Input value={"introduction"} bordered={false} className="w-fit" />
          </div>
          <div className="ml-8 my-2">
            <div className="border border-black bg-white w-full p-2">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold">Lecture 1: </span>
                  <Input
                    value={"Introduction"}
                    bordered={false}
                    className="w-fit"
                  />
                </div>
                <button className="border border-black text-pink-300 p-2 font-bold">
                  <PlusCircleFilled /> Video
                </button>
              </div>
            </div>
            <button className="text-pink-300 font-semibold mt-4">
              <PlusCircleFilled />
              <span>Thêm</span>
            </button>
          </div>
        </div>
        <button className="text-pink-300 font-semibold mt-4">
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
