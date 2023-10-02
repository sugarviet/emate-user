import Link from "next/link";
import styles from "./CourseBanner.module.css";
import { Breadcrumb, Rate } from "antd";

function CourseBanner({ course }) {
  return (
    <div className={styles.container}>
      <Breadcrumb
        separator=">"
        items={[
          { title: "Home", href: "/" },
          { title: "Courses", href: "/courses" },
          { title: "Course detail" },
        ]}
        className="font-bold text-md"
      />
      <span className="font-bold text-3xl my-0.5">{course.name}</span>
      <span className="font-medium text-1xl my-0.5">{course.description}</span>
      <div className="flex text-yellow-400 items-center gap-2 text-sm">
        <h2 className="font-bold ">4.0</h2>
        <Rate value={4} className="text-sm" />
      </div>
      <span className="text-sm my-1">
        Created by:{" "}
        <Link href={"/"}>
          <span className="underline text-purple-400">{course.owner}</span>
        </Link>
      </span>
    </div>
  );
}

export default CourseBanner;
