import Image from "next/image";
import styles from "./CourseManagement.module.css";
import Link from "next/link";

function CourseManagement() {
  return (
    <div className={styles.blur_bg}>
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-2 flex items-center justify-between bg-white border border-black shadow-lg h-40 p-8 rounded-lg">
          <span className="text-xl">Bắt đầu tạo khóa học</span>
          <Link
            href={"/instructor/courses/create"}
            className="w-72 h-16 bg-pink-300 text-xl text-white font-bold flex items-center justify-center"
          >
            Tạo Khóa Học
          </Link>
        </div>
        <div className="col-span-2 flex items-center justify-between bg-white border border-black shadow-lg h-40 p-8 rounded-lg">
          <div className="grid grid-cols-5">
            <div className="col-span-2 flex items-center justify-center">
              <Image
                width={124}
                height={124}
                src={"/images/engaging-course-2x.jpg"}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <span className="font-semibold text-lg mb-4">
                Tạo ra một khóa học hấp dẫn
              </span>
              <span>
                Cho dù bạn đã giảng dạy nhiều năm hay mới giảng dạy lần đầu
                tiên, bạn đều có thể sử thực hiện một khóa học hấp dẫn. Chúng
                tôi đã biên soạn các tài nguyên và phương pháp hay nhất để trợ
                giúp bạn sẽ đạt đến cấp độ tiếp theo, bất kể bạn bắt đầu từ đâu
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-between bg-white border border-black shadow-lg h-40 p-8 rounded-lg">
          <div className="grid grid-cols-5">
            <div className="col-span-2 flex items-center justify-center">
              <Image
                width={124}
                height={124}
                src={"/images/video-creation-2x.jpg"}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <span className="font-semibold text-lg mb-4">
                Bắt đầu với Video
              </span>
              <span>
                Bài giảng video chất lượng có thể thiết lập khóa học của bạn.
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-between bg-white border border-black shadow-lg h-40 p-8 rounded-lg">
          <div className="grid grid-cols-5">
            <div className="col-span-2 flex items-center justify-center">
              <Image
                width={124}
                height={124}
                src={"/images/build-audience-2x.jpg"}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <span className="font-semibold text-lg mb-4">
                Xây dựng khán giả của bạn
              </span>
              <span>
                Hãy thiết lập lộ trình thành công của bạn bằng cách xây dựng
                khán giả của bạn.
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-between bg-white border border-black shadow-lg h-40 p-8 rounded-lg">
          <div className="grid grid-cols-5">
            <div className="col-span-2 flex items-center justify-center">
              <Image
                width={124}
                height={124}
                src={"/images/newcomer-challenge-2x.jpg"}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <span className="font-semibold text-lg mb-4">
                Hãy tham gia thử thách dành cho người hướng dẫn mới
              </span>
              <span>
                Nhận các mẹo và tài nguyên độc quyền được thiết kế để giúp bạn
                khởi độgn khóa học đầu tiên của mình nhanh hơn! Những giảng viên
                đủ điều kiện xuất bản khóa học đầu tiên đúng thời hạn sẽ nhận
                được phần thưởng đặc biệt. Bắt đầu hôm nay.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseManagement;
