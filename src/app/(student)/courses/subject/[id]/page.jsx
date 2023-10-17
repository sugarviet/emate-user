import CourseBySubject from "@/components/CourseBySubject";

function CourseBySubjectPage({ params }) {
  return (
    <div>
      <CourseBySubject id={params.id} />
    </div>
  );
}

export default CourseBySubjectPage;
