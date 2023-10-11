import Image from "next/image";
import styles from "./CoursePreview.module.css";
import { formattedCoin } from "@/utils/formatedCurrency";
import {
  DesktopOutlined,
  FileTextOutlined,
  BookOutlined,
  CrownOutlined,
  DownloadOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";

const about_course = [
  {
    icon: <DesktopOutlined />,
    content: "42.5 giờ học trên video",
  },
  {
    icon: <BookOutlined />,
    content: "5 bài tập",
  },
  {
    icon: <FileTextOutlined />,
    content: "39 tài liệu",
  },
  {
    icon: <DownloadOutlined />,
    content: "9 nguồn tư liệu để tải xuống",
  },
  {
    icon: <FieldTimeOutlined />,
    content: "Khóa học trọn đời",
  },
  {
    icon: <CrownOutlined />,
    content: "Chứng chỉ hoàn thành khóa học",
  },
];

function CoursePreview({ course }) {
  const price = formattedCoin(course.price, 100);

  return (
    <div
      className={`flex flex-col items-center shadow-xl w-96 ${styles.white_bg}`}
    >
      <Image
        alt="Course's image review"
        width={480}
        height={240}
        src={course.image}
      />
      <div className="w-full px-8 py-4">
        <span className="font-bold text-5xl">{price}</span>
        <div className="flex flex-col mt-4">
          <button className={styles.primary_btn}>Mua ngay</button>
          <button className={styles.secondary_btn}>Thêm vào giỏ hàng</button>
        </div>
        <div className="mt-4">
          <span className="font-bold text-xl">Khóa học bao gồm: </span>
          <ul className="my-2">
            {about_course.map((item, index) => (
              <li key={index}>
                <div className="flex items-center text-md my-1">
                  {item.icon}
                  <span className="ml-4">{item.content}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CoursePreview;
