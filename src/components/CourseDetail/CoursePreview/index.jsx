import Image from "next/image";
import styles from "./CoursePreview.module.css";
import { formattedCurrency } from "@/utils/formatedCurrency";
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
    content: "42.5 hours on-demand video",
  },
  {
    icon: <BookOutlined />,
    content: "5 coding exercise",
  },
  {
    icon: <FileTextOutlined />,
    content: "39 articles",
  },
  {
    icon: <DownloadOutlined />,
    content: "9 downloadable resources",
  },
  {
    icon: <FieldTimeOutlined />,
    content: "Full lifetime access",
  },
  {
    icon: <CrownOutlined />,
    content: "Certificate of completion",
  },
];

function CoursePreview({ course }) {
  const price = formattedCurrency(course.price);

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
          <span className="font-bold text-xl">This course includes: </span>
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
