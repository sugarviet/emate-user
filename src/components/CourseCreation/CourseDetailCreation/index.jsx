"use client";
import { IMG_BB_API_KEY } from "@/constants/apiKey";
import {
  CloseCircleFilled,
  DeleteFilled,
  PlusCircleFilled,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Input, InputNumber, Upload, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Controller, useFieldArray } from "react-hook-form";
import axios from "axios";
import { CldUploadWidget } from "next-cloudinary";

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

const INITIAL_CONTENT = [
  {
    name: "",
    sections: [
      {
        name: "",
        description: "",
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
  }, [lessons, handleUpdateContent]);

  return (
    <div className="w-full border border-black bg-gray-50 p-4 my-2">
      <div className="flex items-center">
        <span className="font-bold">Nội dung {sectionIndex}:</span>
        <Input
          value={content.name}
          placeholder="Viết phần giới thiệu ở đây..."
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
                      placeholder="Viết nội dung của bạn ở đây..."
                    />
                  </div>
                  <CldUploadWidget
                    options={{
                      publicId: `${content.name}-${sectionIndex}-${index}`,
                    }}
                    onUpload={(result) => {
                      handleUpdateLesson(
                        {
                          video: result.info.url,
                          videoPublicId: result.info.public_id,
                        },
                        index
                      );
                    }}
                    uploadPreset="emate_course_videos"
                  >
                    {({ open }) => {
                      function handleOnClick(e) {
                        e.preventDefault();
                        open();
                      }
                      return (
                        <div className="flex flex-col w-24">
                          <button
                            onClick={handleOnClick}
                            className="border border-black text-pink-300 p-2 font-bold"
                          >
                            <PlusCircleFilled /> Video
                          </button>
                          <div className="text-sm w-full truncate_2_lines">
                            <span>{lesson.videoPublicId}</span>
                          </div>
                        </div>
                      );
                    }}
                  </CldUploadWidget>
                </div>
                <div className="flex-1">
                  <TextArea
                    onChange={(e) =>
                      handleUpdateLesson({ description: e.target.value }, index)
                    }
                    value={lesson.description}
                    bordered={false}
                    placeholder="Viết mô tả của bạn ở đây..."
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
    fields: content,
    append: appendContents,
    remove: removeContents,
    insert: insertContents,
  } = useFieldArray({
    control,
    name: "content",
  });

  useEffect(() => {
    if (whatWillLearn.length > 0) return;
    INITIAL_WHAT_WILL_LEARN.forEach((value, index) => {
      insertWhatWillLearn(index, value);
    });
  }, [whatWillLearn.length, insertWhatWillLearn]);

  useEffect(() => {
    if (content.length > 0) return;
    INITIAL_CONTENT.forEach((item, index) => {
      insertContents(index, { value: item });
    });
  }, [content.length, insertContents]);

  const handleAddMoreWhatWillLearnOption = () => {
    const newOption =
      INITIAL_WHAT_WILL_LEARN[
        whatWillLearn.length % INITIAL_WHAT_WILL_LEARN.length
      ];
    appendWhatWillLearn(newOption);
  };

  const handleAddNewSection = () => {
    const newContent = INITIAL_CONTENT[0];

    appendContents({ value: newContent });
  };

  const customRequestForUploadImage = async (
    { file, onSuccess, onError },
    onChange
  ) => {
    const formData = new FormData();
    formData.set("key", IMG_BB_API_KEY);
    formData.append("image", file);

    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData
      );

      if (response.status === 200 && response.data && response.data.data) {
        // Successful upload
        const imageUrl = response.data.data.url;

        onChange(imageUrl);

        onSuccess();
        message.success(
          `${file.name} uploaded successfully. Image URL: ${imageUrl}`
        );
      } else {
        // Handle upload failure
        message.error(`Failed to upload ${file.name}`);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error uploading image:", error);
      onError(error);
      message.error(`Failed to upload ${file.name}`);
    }
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
          <div className="flex items-center">
            <Controller
              name={`requirement`}
              control={control}
              render={({ field }) => (
                <Input
                  className="my-2"
                  size="large"
                  placeholder={
                    "Example: No programming experience needed. You will learn everything you need to know"
                  }
                  {...field}
                />
              )}
            />
          </div>
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
        {content.map((item, index) => (
          <div className="flex items-center relative" key={item.id}>
            <Controller
              name={`content[${index}].value`}
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
        <div className="my-4">
          <span className="font-semibold mr-4 text-lg">
            Hình ảnh về khóa học:{" "}
          </span>
          <Controller
            name="image"
            control={control}
            render={({ field: { onChange } }) => (
              <Upload
                customRequest={(props) =>
                  customRequestForUploadImage({ ...props }, onChange)
                }
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            )}
          />
        </div>
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
