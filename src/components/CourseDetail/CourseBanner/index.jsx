import Link from "next/link";
import styles from "./CourseBanner.module.css";
import { Breadcrumb, Rate } from "antd";
import { COURSES_PAGE_URL } from "@/constants/url";

function CourseBanner({ course }) {
  const paths = COURSES_PAGE_URL.split("/").map((item) => "/" + item);

  return (
    <div className={styles.container}>
      <Breadcrumb
        separator=">"
        items={[
          ...paths.map((path) => ({
            title: path.replace("/", "") || "Home",
            href: path,
          })),
          {
            title: course.name,
          },
        ]}
        className="font-bold text-md"
      />
      <span className="font-bold text-3xl my-0.5">{course.name}</span>
      <span className="font-medium text-1xl my-0.5">{course.description}</span>
      <div className="flex text-yellow-400 items-center gap-2 text-sm">
        <h2 className="font-bold ">{course.rating}</h2>
        <Rate value={course.rating} className="text-sm" disabled />
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
