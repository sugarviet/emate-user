"use client";
import styles from "./Cart.module.css";
import { Input, Button, Image, Checkbox } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { motion as m } from "framer-motion";
import { useEffect } from "react";
import { formattedCoin } from "@/utils/formatedCurrency";
import { useCartStore } from "@/stores/useCartStore";
import { useRouter } from "next/navigation";
import { CHECKOUT_PAGE_URL } from "@/constants/url";

const Cart = () => {
  const {
    purchasingCourses,
    setPurchasingCourses,
    selectedCourses,
    removeFromSelectedCourses,
    total,
    setTotal,
  } = useCartStore();

  const router = useRouter();

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

  const handleRemoveFromCart = (course) => {
    removeFromSelectedCourses(course);
  };

  useEffect(() => {
    const result = purchasingCourses.reduce(
      (totalPrice, currentCourse) => totalPrice + currentCourse.price,
      0
    );

    setTotal(result);
  }, [purchasingCourses, setTotal]);

  const handleGoToCheckout = () => {
    router.push(CHECKOUT_PAGE_URL);
  };

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
                <Checkbox
                  checked={selectedCourses.length === purchasingCourses.length}
                  onChange={handleSelectAllCourse}
                />
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
                    <Image alt="product" src={course.image} />
                    <div className={styles.sub_course}>
                      <b className="line-clamp-2">{course.name}</b>
                      <span className="font-thin text-xs">
                        {course.owner.name}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center font-bold text-xl col-span-4">
                    {formattedCoin(course.price, 60)}
                  </div>
                  <Button
                    onClick={() => handleRemoveFromCart(course)}
                    type="text"
                    icon={<CloseOutlined />}
                  />
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
            <b className="text-5xl my-2">{formattedCoin(total, 120)}</b>
          </div>
          <button
            className={
              purchasingCourses.length
                ? "text-xl md:w-full w-3/4 border my-4 py-4 border-black flex items-center justify-center"
                : "text-xl md:w-full w-3/4 border my-4 py-4 bg-gray-300 text-white flex items-center justify-center"
            }
            disabled={purchasingCourses.length === 0}
            onClick={handleGoToCheckout}
          >
            Tiến hành thanh toán
          </button>
        </div>
      </div>
    </m.main>
  );
};

export default Cart;
