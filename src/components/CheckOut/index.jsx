"use client";

import { useCartStore } from "@/stores/useCartStore";
import { formattedCoin } from "@/utils/formatedCurrency";
import Image from "next/image";

import styles from "./CheckOut.module.css";
import { useWallet } from "@/stores/useWallet";
import { useModalStore } from "@/stores/useModalStore";
import { post_with_header_fetcher } from "@/utils/fetcher";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { MY_COURSES_PAGE_URL } from "@/constants/url";
import { ORDER_COURSE_API } from "@/constants/api";

function CheckOut() {
  const { purchasingCourses, cleanUpPurchasingCourses, total } = useCartStore();
  const { balance, widthRaw } = useWallet();
  const { switchDepositModalState } = useModalStore();

  const router = useRouter();

  const handlePayment = () => {
    if (balance < total) {
      switchDepositModalState(true);
      return;
    }

    widthRaw(total);
    cleanUpPurchasingCourses();

    post_with_header_fetcher(
      ORDER_COURSE_API,
      {
        totalPrice: total,
        orderCheckout: purchasingCourses.map((order) => ({
          course: order._id,
          mentor: order.owner._id,
          price: order.price,
        })),
      },
      "65277154f68a06061773afca",
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvYW5naWFiYW8yNzZAZ21haWwuY29tIiwiX2lkIjoiNjUyNzcxNTRmNjhhMDYwNjE3NzNhZmNhIiwiaWF0IjoxNjk3MTA0MDQ0LCJleHAiOjE3MDIyODgwNDR9.qJk1R6M7y-HyxMuWYViAgxdg0IOILII9Wc2uEHO0JwXCvSYw2xn6GFFrZdrwmRYcYcyvnWl-QrD7YC8aYbDpsWN0P273yST_EywsfRu-HqrmkqqZkxVaSK7GHQ1luttXu--9drEvPBz25mujZRHqAtwQk0mMPoXYrFGkzGuY1ZiYKt_s13irF1UXN-ov90CrKYA6S1CFn3Kuoccb7KQXHwJNUMD_iMwjFHN168aOtDv3uJ3akri_UquNlKgdhq0jBnGMH8RO7aCKSDJNIt5eGgIys4sdB52FgKMU_wb5F03QZYaTgVYxaMPhICDn2hlYZrSuqKM3xOR-p3NXPdWwsg",
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvYW5naWFiYW8yNzZAZ21haWwuY29tIiwiX2lkIjoiNjUyNzcxNTRmNjhhMDYwNjE3NzNhZmNhIiwiaWF0IjoxNjk3MTA0MDQ0LCJleHAiOjE3MDc0NzIwNDR9.BC8r8sr8UZYUvW6qoSCseE5wB2tInyT2XLNrYyRwJ5_snluMc58KSg-2_c7TnAx0wzFY2qndueQnOtzh-SXE-dseoG0xtMwvUJO_t_yze9vDby5bxncQzP6Hhmg7NPyWkQ-3b1ly0a_cqtvQhPxbEY23i9rAOZipXZCukvBNF57ObDnvf__pHsoqp6HCLcoElG9yHXm9R28_hPZwMOQOjS7tkybvuRbhrkoCZPcoCXzq5i7BEIx_Qjggt5dgA8zeEvIhMVPiRZR0FolYz_oYa28_QfwF6OadNxJ6RVDFLuLpLR-se-yh89kqCncPPAVyHahBNID65EZfJDNivgG20g",
      () => {
        message.success("Bạn đã thanh toán thành công");
        router.push(MY_COURSES_PAGE_URL);
      },
      () => {
        message.error("Bạn thanh toán thất bại");
      }
    );
  };

  return (
    <div className={styles.blur_bg}>
      <div className="grid grid-cols-8 gap-8 h-screen">
        <div className="col-span-5 flex flex-col">
          <span className="font-bold text-3xl mb-4">Kiểm tra đơn hàng</span>
          <span className="font-semibold text-2xl my-2">Chi tiết đơn hàng</span>
          {purchasingCourses.map((course, index) => (
            <div
              key={`${course} + ${index}`}
              className="flex items-center justify-between my-2"
            >
              <Image width={120} height={120} src={course.image} />
              <span className="flex-1 font-semibold text-xl mx-4 line-clamp-2">
                {course.name}
              </span>
              <span className="text-xl">{formattedCoin(course.price)}</span>
            </div>
          ))}
        </div>
        <div className="col-span-3">
          <span className="font-bold text-xl">Tổng cộng:</span>
          <div className="my-4">
            <div className="flex items-center justify-between text-lg">
              <span>Giá ban đầu: </span>
              <span>{formattedCoin(total)}</span>
            </div>
            <span className="border flex w-full my-2"></span>
            <div className="flex items-center justify-between text-xl font-semibold">
              <span>Tổng cộng: </span>
              <span>{formattedCoin(total)}</span>
            </div>
          </div>
          <button
            onClick={handlePayment}
            className="w-full h-16 bg-pink-300 text-white font-bold text-xl"
          >
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
