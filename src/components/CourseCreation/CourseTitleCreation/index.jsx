import { WarningFilled } from "@ant-design/icons";
import { Input } from "antd";
import { Controller } from "react-hook-form";

function CourseTitleCreation({ control, course }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-bold text-3xl mb-4">
        Tiêu đề của bạn về khóa học là gì?
      </span>
      <span className="text-lg my-2 w-2/5 text-center mb-8">
        Bạn chưa nghĩ ra một cái tên hay ư? không sao bạn có thể thay đổi nó sau
      </span>
      <Controller
        name="name"
        control={control}
        defaultValue={course.name}
        rules={{
          required: { value: true, message: "Bắt buộc nhập" },
          minLength: { value: 4, message: "Tối thiểu 4 ký tự" },
        }}
        render={({ field, fieldState }) => {
          return (
            <div className="w-3/5">
              <Input
                className="my-4 w-full text-lg h-16"
                maxLength={60}
                size="large"
                placeholder="e.g. Learn Photoshop CS6 from Scratch"
                {...field}
              />
              {fieldState.error && (
                <span className="text-red-400 text-sm font-semibold">
                  <WarningFilled /> {fieldState.error?.message}
                </span>
              )}
            </div>
          );
        }}
      />
    </div>
  );
}

export default CourseTitleCreation;
