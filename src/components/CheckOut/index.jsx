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
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvYW5naWFiYW8yNzZAZ21haWwuY29tIiwiX2lkIjoiNjUyNzcxNTRmNjhhMDYwNjE3NzNhZmNhIiwiaWF0IjoxNjk3MDkxMTYzLCJleHAiOjE3MDIyNzUxNjN9.aOmirsN6IkcnQU3kRATDxCMqeCeGp80U-lKmqqpGBZ0guEcGU0aBLBtdcJIvvanXQbfD2prAUnRPoIa_tmD0_dygRNAyE3Ke7afqwUa-L8SXEKEcNc7uinDNNH98i2MI-ctXXmkhi7aBTI2QRTRva6cbiV0WPkSTJItlcufs4_J8V_o-vy_AXeA3nUHrvFTkeTQsukhqs960lorsFkil6B76k-wmR44P2cOJNrAze12-EIu0i8mCwWLlnk5L_kXpEmVfYeAxA9bmIJzYjjJ1uwz5BEeK3ROAzv61m9AkJQqzZp4t4J2UHEkntT9Mz4jOsiWaLR-oAcyJiqg_7Ffdiw",
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvYW5naWFiYW8yNzZAZ21haWwuY29tIiwiX2lkIjoiNjUyNzcxNTRmNjhhMDYwNjE3NzNhZmNhIiwiaWF0IjoxNjk3MDkxMTYzLCJleHAiOjE3MDc0NTkxNjN9.Rps8dKeKPF-nrFVlqlRqHHy3fJScqu9J-VosUi4XgwVoXdFVZfJNY47qo5306QXwDLOIcml7_8tAOFrR-D7e_XQrvue4iLpH4dDYRE2Kle87NABtPJB6kp5Vd76v73h4LaBabt8Abdfkl1_SHjSdRjikj_mTHbY8lrNxqcmWtIQndo3LAEepfX0aJa5MFEJv7MY8MDhhcsd-M6JGBmV3MxmMEpgEl50V_i9MEu4j73--DPVaOkldGEp5So7jxAKnRwWCSzHGsKJJFFriEt4m_73Wn-9p44jTu7GEI3eAA7wYBP8_6rwYQmYIIV09tmrjgtXY4VzqJtg8Q5__D6pO5Q",
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
