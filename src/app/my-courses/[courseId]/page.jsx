import CourseLearning from "@/components/CourseLearning";

function CourseLearningPage({ params }) {
  return (
    <div>
      <CourseLearning id={params.courseId} />
    </div>
  );
}

export default CourseLearningPage;
