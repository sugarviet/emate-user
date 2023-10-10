import { subject_api } from "@/constants/api";
import { get_fetcher } from "@/utils/fetcher";
import { Select } from "antd";
import { Controller } from "react-hook-form";
import useSWR from "swr";

function CourseCategoryCreation({ control }) {
  const {
    data: subjectsData,
    isLoading: subjectsDataLoading,
    error: subjectError,
  } = useSWR(subject_api, get_fetcher);

  if (subjectsDataLoading || subjectError) return;

  return (
    <div className="flex flex-col items-center">
      <span className="font-bold text-3xl w-3/5 text-center mb-4">
        Lĩnh vực phù hợp nhất với kiến thức mà bạn muốn chia sẽ là?
      </span>
      <span className="text-lg my-2 w-3/5 text-center mb-8">
        Bạn chưa chắc chắn về lĩnh vực mình muốn truyền tải? Không sao, bạn có
        thể thay đổi nó sau.
      </span>
      <Controller
        name="subject"
        control={control}
        render={({ field }) => (
          <Select
            options={subjectsData.map((subject) => ({
              value: subject.name,
              label: subject.name,
            }))}
            placeholder="e.g Game Developer"
            className="my-4 w-3/5 text-lg flex items-center"
            size="large"
            {...field}
          />
        )}
      />
    </div>
  );
}

export default CourseCategoryCreation;
