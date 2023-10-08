"use client";
import styles from "./Cart.module.css";
import { Input, Button, Image, Checkbox } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { formattedCurrency } from "@/utils/formatedCurrency";
import { useCartStore } from "@/stores/useCartStore";
import Link from "next/link";

const course_data = [
  {
    thumnail: "/courses/it-4.png",
    name: "Blockchain và các ứng dụng trên nền tảng này",
    owner: "Tuấn Võ Phạm",
    price: 400000,
  },
  {
    thumnail: "/courses/it-2.png",
    name: "Nâng cao kỹ năng giao tiếp",
    owner: "Hạ Linh",
    price: 300000,
  },
];

const Cart = () => {
  const {
    purchasingCourses,
    setPurchasingCourses,
    selectedCourses,
    setSelectedCourses,
    total,
    setTotal,
  } = useCartStore();

  const handleSelectCourse = (e) => {
    const { checked, value: course } = e.target;
    if (checked) setPurchasingCourses([...purchasingCourses, course]);
    if (!checked)
      setPurchasingCourses(
        purchasingCourses.filter((c) => c.name !== course.name)
      );
  };

  const handleSelectAllCourse = (e) => {
    const { checked } = e.target;
    if (checked) setPurchasingCourses([...selectedCourses]);
    if (!checked) setPurchasingCourses([]);
  };

  useEffect(() => {
    const result = purchasingCourses.reduce(
      (totalPrice, currentCourse) => totalPrice + currentCourse.price,
      0
    );

    setTotal(result);
  }, [purchasingCourses]);

  useEffect(() => {
    setSelectedCourses(course_data);
  }, []);

  return (
    <m.main
      className="blur_custom py-12 px-8 md:px-16"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col">
          <b className="text-lg">Giỏ hàng của bạn</b>
          <div className="mt-8">
            <div className="grid grid-cols-10 py-4 border-b border-black">
              <div className="col-span-1">
                <Checkbox onChange={handleSelectAllCourse} />
              </div>
              <b className="col-span-4">{selectedCourses.length} Sản phẩm</b>
              <b className="col-span-4 text-center">Giá</b>
            </div>
            <div className={styles.cart_item}>
              {selectedCourses.map((course, index) => (
                <div
                  key={index}
                  className="grid grid-cols-10 mb-20 md:mb-24 flex items-center"
                >
                  <Checkbox
                    className="col-span-1"
                    value={course}
                    checked={purchasingCourses.some(
                      (c) => c.name === course.name
                    )}
                    onChange={handleSelectCourse}
                  />
                  <div className="col-span-4 flex flex-col relative">
                    <Image alt="product" src={course.thumnail} />
                    <div className={styles.sub_course}>
                      <b className="line-clamp-2">{course.name}</b>
                      <span className="font-thin text-xs">{course.owner}</span>
                    </div>
                  </div>
                  <b className="text-center col-span-4">đ{course.price}</b>
                  <Button type="text" icon={<CloseOutlined />} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <Input
              className="border-black my-4"
              placeholder="Nhập mã voucher của bạn"
              prefix={
                <Image width={32} src="/icons/voucher.png" alt="voucher" />
              }
            />
            <button className="bg-pink-300 text-white font-bold w-24 rounded-lg h-11 ml-2">
              Áp dụng
            </button>
          </div>
        </div>
        <div className="flex flex-col my-8 ml-4 w-full relative">
          <div className="flex flex-col">
            <b className="text-xl">Tổng cộng: </b>
            <b className="text-5xl my-2">{formattedCurrency(total)}</b>
          </div>
          <div className="text-xl md:w-full w-3/4 border my-4 py-4 border-black flex items-center justify-center">
            <Link href={"/cart/checkout"}>Tiến hành thanh toán</Link>
          </div>
        </div>
      </div>
    </m.main>
  );
};

export default Cart;
