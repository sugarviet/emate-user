"use client";

import { useCartStore } from "@/stores/useCartStore";
import { formattedCoin } from "@/utils/formatedCurrency";
import Image from "next/image";

import styles from "./CheckOut.module.css";
import { useWallet } from "@/stores/useWallet";
import { useModalStore } from "@/stores/useModalStore";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { MY_COURSES_PAGE_URL } from "@/constants/url";
import { ORDER_COURSE_API } from "@/constants/api";
import useFetcher from "@/hooks/global/useFetcher";

function CheckOut() {
  const {
    purchasingCourses,
    selectedCourses,
    cleanUpPurchasingCourses,
    cleanUpSelectedCourse,
    setSelectedCourses,
    total,
  } = useCartStore();
  const { balance, widthRaw } = useWallet();
  const { switchDepositModalState } = useModalStore();
  const { post_with_header_fetcher } = useFetcher();

  const router = useRouter();

  const handlePayment = () => {
    if (balance < total) {
      switchDepositModalState(true);
      return;
    }

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
      () => {
        message.success("Bạn đã thanh toán thành công");
        widthRaw(total);
        cleanUpPurchasingCourses();
        // cleanUpSelectedCourse();
        const newCourses = selectedCourses.filter(
          (c) => !purchasingCourses.some((item) => item._id === c._id)
        );
        setSelectedCourses(newCourses);
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
