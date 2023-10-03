import { Avatar, Rate } from "antd";
import { StarFilled } from "@ant-design/icons";
import useSWR from "swr";
import { get_fetcher } from "@/utils/fetcher";
import { course_all_reviews_api, course_rating_api } from "@/constants/api";

function CourseReview({ id }) {
  const { data: rating, isLoading: ratingLoading } = useSWR(
    course_rating_api(id),
    get_fetcher
  );

  const { data: reviews, isLoading: reviewLoading } = useSWR(
    course_all_reviews_api(id),
    get_fetcher
  );

  if (!ratingLoading || !reviewLoading) return null;

  const data = [1, 1];

  return (
    <div>
      <span className="text-xl font-bold">
        <StarFilled style={{ color: "#fadb14" }} /> 4.7 course rating
      </span>
      <div className="grid grid-rows-1 md:grid-rows-none grid-flow-col md:grid-flow-row overflow-scroll md:overflow-hidden md:grid-cols-2 gap-2 md:gap-4 mt-4">
        {data.map((review, index) => (
          <div key={`${review} + ${index}`} className="border-t-2 py-4">
            <div className="flex items-center my-2">
              <Avatar />
              <div className="flex-col flex text-sm ml-2">
                <span>Marcos Orza R.</span>
                <Rate value={5} disabled className="text-xs" />
              </div>
            </div>
            <span>
              Great course, If the video is to fast you can slow it down and if
              the chapter is outdated you can google it and figure it out, that
              is part of the learning process.
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseReview;
