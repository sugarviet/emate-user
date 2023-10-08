"use client";

import { useCartStore } from "@/stores/useCartStore";
import { formattedCoin } from "@/utils/formatedCurrency";
import Image from "next/image";

import styles from "./CheckOut.module.css";

function CheckOut() {
  const { purchasingCourses, total } = useCartStore();

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
              <Image width={120} height={120} src={course.thumnail} />
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
          <button className="w-full h-16 bg-pink-300 text-white font-bold text-xl">
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
