import CourseDetail from "@/components/CourseDetail";

function CourseDetailPage({ params }) {
  return (
    <div>
      <CourseDetail id={params.courseId} />
    </div>
  );
}

export default CourseDetailPage;
