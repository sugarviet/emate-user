import { Input } from "antd";
import { Controller } from "react-hook-form";

function CourseTitleCreation({ control }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-bold text-3xl mb-4">
        Tiêu đề của bạn về khóa học là gì?
      </span>
      <span className="text-lg my-2 w-2/5 text-center mb-8">
        Bạn chưa nghĩ ra một cái tên hay ư? không sao bạn có thể thay đổi nó sau
      </span>
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <Input
            className="my-4 w-3/5 text-lg h-16"
            maxLength={60}
            size="large"
            placeholder="e.g. Learn Photoshop CS6 from Scratch"
            {...field}
          />
        )}
      />
    </div>
  );
}

export default CourseTitleCreation;
