"use client";

import { Suspense } from "react";
import Image from "next/image";

import styles from "./Mentor.module.css";
import CarouselCustom from "../public/CarouselCustom/CarouselCustom";

const top_mentor_data = {
  title: "Những gia sư hàng đầu",
  arrayData: [
    {
      id: 1,
      avatar: "/character/nguyenNgoc.png",
      age: "30",
      name: "Nguyễn Ngọc",
      education: "Đại học Ngoại ngữ",
      level: "Gia sư môn Tiếng Anh, có kinh nghiệm ôn luyện IELTS",
      rate: 4,
      pricePerHour: "120.000",
    },
    {
      id: 2,
      avatar: "/character/haiKhanh.png",
      age: "35",
      name: "Hải Khánh",
      education: "Đại học Kinh tế Quốc dân",
      level: "Giảng viên kinh tế của nhiều trường đại học",
      rate: 4,
      pricePerHour: "120.000",
    },
    {
      id: 3,
      avatar: "/character/khoaAnhLe.png",
      age: "33",
      name: "Khoa Anh Lê",
      education: "Đại học Công nghệ thông tin",
      level:
        "Thạc sĩ Khoa học Máy tính. Lập trình, phát triển phần mềm,quản trị hệ thống, thiết kế web",
      rate: 4,
      pricePerHour: "130.000",
    },
    {
      id: 4,
      avatar: "/character/quocPhong.png",
      age: "29",
      name: "Quốc Phong",
      education: "Đại học Bách khoa",
      level: "Thạc sĩ Khoa học",
      rate: 4,
      pricePerHour: "140.000",
    },
    {
      id: 5,
      avatar: "/character/nguyenNgoc.png",
      age: "30",
      name: "Nguyễn Ngọc",
      education: "Đại học Ngoại ngữ",
      level: "Gia sư môn Tiếng Anh, có kinh nghiệm ôn luyện IELTS",
      rate: 4,
      pricePerHour: "120.000",
    },
  ],
  type: "mentor",
};

const it_mentor_data = {
  title: "IT và phần mềm",
  arrayData: [
    {
      id: 1,
      avatar: "/character/nguyenNgocLinh.png",
      age: "22",
      name: "Nguyễn Ngọc Linh",
      education: "Đại học Công nghệ thông tin",
      level: "Cử nhân Công nghệ thông tin, 2 năm làm việc trong ngành",
      rate: 3,
      pricePerHour: "90.000",
    },
    {
      id: 2,
      avatar: "/character/haiDangKhanh.png",
      age: "35",
      name: "Hải Đăng Khánh",
      education: "Đại học Công nghệ thông tin",
      level: "Thạc sĩ Công nghệ thông tin. 5 năm làm việc trong ngành",
      rate: 4,
      pricePerHour: "100.000",
    },
    {
      id: 3,
      avatar: "/character/ngocAnhLe.png",
      age: "22",
      name: "Khoa Anh Lê",
      education: "Đại học FPT",
      level: "Cử nhân Kĩ thuật phần mềm. 3 năm làm việc trong ngành.",
      rate: 4,
      pricePerHour: "130.000",
    },
    {
      id: 4,
      avatar: "/character/quocTuan.png",
      age: "29",
      name: "Quốc Tuấn",
      education: "Đại học Bách khoa",
      level: "Thạc sĩ ngành Công nghệ thông tin. 6 năm làm việc trong ngành",
      rate: 4,
      pricePerHour: "140.000",
    },
    {
      id: 5,
      avatar: "/character/nguyenNgoc.png",
      age: "30",
      name: "Nguyễn Ngọc",
      education: "Đại học Ngoại ngữ",
      level: "Gia sư môn Tiếng Anh, có kinh nghiệm ôn luyện IELTS",
      rate: 4,
      pricePerHour: "120.000",
    },
  ],
  type: "mentor",
};

const marketing_mentor_data = {
  title: "Marketing",
  arrayData: [
    {
      id: 1,
      avatar: "/character/phamLinh.png",
      age: "22",
      name: "Nguyễn Ngọc Linh",
      education: "Đại học tài chính-marketing",
      level:
        "Cử nhân Marketing, có kinh nghiệm về tìm kiếm thông tin thị trường.",
      rate: 4,
      pricePerHour: "90.000",
    },
    {
      id: 2,
      avatar: "/character/dieuMy.png",
      age: "25",
      name: "Diệu My",
      education: "Đại học Công nghệ thông tin",
      level: "Cử nhân Marketing. Có kinh nghiệm làm việc 3 năm",
      rate: 4,
      pricePerHour: "60.000",
    },
    {
      id: 3,
      avatar: "/character/chauAnhTu.png",
      age: "24",
      name: "Châu Anh Tú",
      education: "Đại học FPT",
      level:
        "CTrình độ: Cử nhân Marketing. Có kinh nghiệm làm việc trong ngành Marketing hơn 5 năm",
      rate: 4,
      pricePerHour: "65.000",
    },
    {
      id: 4,
      avatar: "/character/ngoTraNgan.png",
      age: "26",
      name: "Ngô Trà Ngân",
      education: "Đại học Bách khoa",
      level:
        "Thạc sĩ trong ngành. có kinh nghiệm về tìm kiếm thông tin thị trường, phân tích dữ liệu và đề xuất các chiến lược tiếp thị",
      rate: 4,
      pricePerHour: "130.000",
    },
    {
      id: 5,
      avatar: "/character/nguyenNgoc.png",
      age: "30",
      name: "Nguyễn Ngọc",
      education: "Đại học Ngoại ngữ",
      level: "Gia sư môn Tiếng Anh, có kinh nghiệm ôn luyện IELTS",
      rate: 4,
      pricePerHour: "120.000",
    },
  ],
  type: "mentor",
};

const Mentor = () => {
  return (
    <main className="blur_custom">
      <div className={styles.container}>
        <div>
          <CarouselCustom carouselData={top_mentor_data} />
        </div>
        {/*  */}
        <div>
          <Suspense fallback={<div>Loading ...</div>}>
            <CarouselCustom carouselData={it_mentor_data} />
          </Suspense>
        </div>
        {/*  */}
        <div>
          <Suspense fallback={<div>Loading ...</div>}>
            <CarouselCustom carouselData={marketing_mentor_data} />
          </Suspense>
        </div>

        {/* Images setup */}
        <Image
          src="/images/pinkDot4.png"
          alt="img"
          width={120}
          height={120}
          className={styles.pink_dot_first}
        />
        <Image
          src="/images/pinkDot4.png"
          alt="img"
          width={120}
          height={120}
          className={styles.pink_dot_second}
          loading="lazy"
          priority={false}
        />
        <Image
          src="/images/yellowDot1.png"
          alt="img"
          width={120}
          height={120}
          className={styles.yellow_dot_first}
          loading="lazy"
          priority={false}
        />
      </div>
    </main>
  );
};

export default Mentor;
