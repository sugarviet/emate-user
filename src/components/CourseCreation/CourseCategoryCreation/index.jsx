import { Select } from "antd";

function CourseCategoryCreation() {
  return (
    <div className="flex flex-col items-center">
      <span className="font-bold text-3xl w-3/5 text-center mb-4">
        Lĩnh vực phù hợp nhất với kiến thức mà bạn muốn chia sẽ là?
      </span>
      <span className="text-lg my-2 w-3/5 text-center mb-8">
        Bạn chưa chắc chắn về lĩnh vực mình muốn truyền tải? Không sao, bạn có
        thể thay đổi nó sau.
      </span>
      <Select className="my-4 w-3/5 text-lg h-16" size="large" />
    </div>
  );
}

export default CourseCategoryCreation;
