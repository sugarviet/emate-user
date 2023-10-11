import { Avatar, Rate } from "antd";
import { StarFilled } from "@ant-design/icons";
import useSWR from "swr";
import { get_fetcher } from "@/utils/fetcher";
import { course_reviews_api } from "@/constants/api";
import { useEffect, useState } from "react";

function CourseReview({ id, average_rating, top_reviews }) {
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const [reviews, setReviews] = useState(top_reviews);
  const [loadedReviews, setLoadedReviews] = useState([]);

  const { data: reviewsData, isLoading: reviewLoading } = useSWR(
    course_reviews_api(id, currentReviewPage),
    get_fetcher
  );

  const handleLoadMoreComments = () => {
    setReviews([...reviews, ...loadedReviews]);
    setCurrentReviewPage(currentReviewPage + 1);
  };

  useEffect(() => {
    if (reviewLoading || !reviewsData) return;

    setLoadedReviews(reviewsData);
  }, [reviewLoading, reviewsData, currentReviewPage]);

  return (
    <div>
      <span className="text-xl font-bold">
        <StarFilled style={{ color: "#fadb14" }} /> {average_rating} course
        rating
      </span>
      <div className="grid grid-rows-1 md:grid-rows-none grid-flow-col md:grid-flow-row overflow-scroll md:overflow-hidden md:grid-cols-2 gap-2 md:gap-4 mt-4">
        {reviews.map((review, index) => {
          const { name, avatar } = review.user;
          return (
            <div key={`${review} + ${index}`} className="border-t-2 py-4">
              <div className="flex items-center my-2">
                <Avatar src={avatar} />
                <div className="flex-col flex text-sm ml-2">
                  <span>{name}</span>
                  <Rate value={review.rating} disabled className="text-xs" />
                </div>
              </div>
              <span>{review.comment}</span>
            </div>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          onClick={handleLoadMoreComments}
          className="w-24 h-12 bg-pink-300 text-white my-8 font-bold"
        >
          Xem thêm
        </button>
      </div>
    </div>
  );
}

export default CourseReview;
