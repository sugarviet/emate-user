"use client";
import {
  CloseCircleFilled,
  DeleteFilled,
  PlusCircleFilled,
} from "@ant-design/icons";
import { Input, InputNumber } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Controller, useFieldArray } from "react-hook-form";

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
    name: "Viết phần giới thiệu ở đây...",
    sections: [
      {
        name: "Viết nội dung của bạn ở đây...",
        description: "Viết mô tả của bạn ở đây...",
        video: "",
      },
    ],
  },
];

const SectionItem = ({ content, sectionIndex, onChange }) => {
  const [lessons, setLessons] = useState(content.sections);

  const handleUpdateContent = (value) => {
    const newContent = {
      ...content,
      ...value,
    };

    onChange(newContent);
  };

  const handleAddNewLesson = () => {
    const newLesson = INITIAL_CONTENT[0].sections[0];

    setLessons([...lessons, newLesson]);
  };

  const handleRemoveLesson = (index) => {
    const newLessons = [...lessons];

    newLessons.splice(index, 1);

    setLessons(newLessons);
  };

  const handleUpdateLesson = (value, index) => {
    const newLessons = [...lessons];

    newLessons[index] = {
      ...newLessons[index],
      ...value,
    };

    setLessons(newLessons);
  };

  useEffect(() => {
    handleUpdateContent({ sections: lessons });
  }, [lessons]);

  return (
    <div className="w-full border border-black bg-gray-50 p-4 my-2">
      <div className="flex items-center">
        <span className="font-bold">Nội dung {sectionIndex}:</span>
        <Input
          value={content.name}
          onChange={(e) => handleUpdateContent({ name: e.target.value })}
          bordered={false}
          className="w-fit"
        />
      </div>
      <div className="ml-8 my-2">
        {lessons.map((lesson, index) => (
          <div key={`${lesson} + ${index}`} className="flex">
            <div className="border border-black bg-white w-full p-2 my-2">
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex-1 flex items-center">
                    <span className="font-semibold">Bài học {index + 1}: </span>
                    <Input
                      onChange={(e) =>
                        handleUpdateLesson({ name: e.target.value }, index)
                      }
                      value={lesson.name}
                      bordered={false}
                      className="flex-1"
                    />
                  </div>
                  <button className="border border-black text-pink-300 p-2 font-bold">
                    <PlusCircleFilled /> Video
                  </button>
                </div>
                <div className="flex-1">
                  <TextArea
                    onChange={(e) =>
                      handleUpdateLesson({ description: e.target.value }, index)
                    }
                    value={lesson.description}
                    bordered={false}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => handleRemoveLesson(index)}
              className="text-pink-300 font-semibold ml-2"
            >
              <DeleteFilled />
            </button>
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

function CourseDetailCreation({ control }) {
  const {
    fields: whatWillLearn,
    append: appendWhatWillLearn,
    remove: removeWhatWillLearn,
    insert: insertWhatWillLearn,
  } = useFieldArray({
    control,
    name: "whatWillLearn",
  });

  const {
    fields: requirements,
    append: appendRequirements,
    remove: removeRequirements,
    insert: insertRequirements,
  } = useFieldArray({
    control,
    name: "requirements",
  });

  const {
    fields: contents,
    append: appendContents,
    remove: removeContents,
    insert: insertContents,
  } = useFieldArray({
    control,
    name: "contents",
  });

  useEffect(() => {
    if (whatWillLearn.length > 0) return;
    INITIAL_WHAT_WILL_LEARN.forEach((value, index) => {
      insertWhatWillLearn(index, value);
    });
  }, []);

  useEffect(() => {
    if (requirements.length > 0) return;
    INITIAL_REQUIREMENTS.forEach((value, index) => {
      insertRequirements(index, value);
    });
  }, []);

  useEffect(() => {
    if (contents.length > 0) return;
    INITIAL_CONTENT.forEach((item, index) => {
      insertContents(index, { value: item });
    });
  }, []);

  const handleAddMoreWhatWillLearnOption = () => {
    const newOption =
      INITIAL_WHAT_WILL_LEARN[
        whatWillLearn.length % INITIAL_WHAT_WILL_LEARN.length
      ];
    appendWhatWillLearn(newOption);
  };

  const handleAddMoreRequirementOption = () => {
    const newOption = INITIAL_REQUIREMENTS[0];
    appendRequirements(newOption);
  };

  const handleAddNewSection = () => {
    const newContent = INITIAL_CONTENT[0];

    appendContents({ value: newContent });
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <div className="my-2">
          <span className="font-bold">
            Học sinh sẽ học được những gì từ khóa học?
          </span>
          {whatWillLearn.map((item, index) => (
            <div className="flex items-center" key={item.id}>
              <Controller
                name={`whatWillLearn[${index}].value`}
                control={control}
                render={({ field }) => (
                  <Input
                    className="my-2"
                    size="large"
                    placeholder={item.placeholder}
                    {...field}
                  />
                )}
              />
              <button
                onClick={() => removeWhatWillLearn(index)}
                className="text-pink-300 font-semibold ml-2"
              >
                <DeleteFilled />
              </button>
            </div>
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
            <div className="flex items-center" key={item.id}>
              <Controller
                name={`requirements[${index}].value`}
                control={control}
                render={({ field }) => (
                  <Input
                    className="my-2"
                    size="large"
                    placeholder={item.placeholder}
                    {...field}
                  />
                )}
              />
              <button
                onClick={() => removeRequirements(index)}
                className="text-pink-300 font-semibold ml-2"
              >
                <DeleteFilled />
              </button>
            </div>
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
          <Controller
            name="level"
            control={control}
            render={({ field }) => (
              <Input
                className="my-2"
                size="large"
                placeholder="Example: Beginner Python developers curious about data science"
                {...field}
              />
            )}
          />
        </div>
      </div>
      <div className="col-span-1">
        {contents.map((item, index) => (
          <div className="flex items-center relative" key={item.id}>
            <Controller
              name={`contents[${index}].value`}
              control={control}
              render={({ field: { value, onChange } }) => {
                return (
                  <SectionItem
                    content={value}
                    onChange={onChange}
                    sectionIndex={index + 1}
                  />
                );
              }}
            />
            <button
              onClick={() => removeContents(index)}
              className="text-pink-300 font-semibold ml-2 absolute top-3 right-2"
            >
              <CloseCircleFilled />
            </button>
          </div>
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
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <InputNumber
                placeholder="Giá khóa học"
                className="border w-32 border-black ml-4 flex items-center justify-center text-md"
                {...field}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseDetailCreation;
