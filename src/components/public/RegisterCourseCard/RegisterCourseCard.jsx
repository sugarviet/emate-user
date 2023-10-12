"use client";
import { motion as m } from "framer-motion";
import { ShoppingCartOutlined } from "@ant-design/icons";

import Image from "next/image";

import { Rate } from "antd";
import { formattedCoin } from "@/utils/formatedCurrency";
import { useRouter } from "next/navigation";
import { COURSES_PAGE_URL } from "@/constants/url";
import { useCartStore } from "@/stores/useCartStore";

const RegisterCourseCard = ({ cardData }) => {
  const { _id, index, image, name, rating, purchasers, owner, price } =
    cardData;

  const router = useRouter();

  const { addToSelectedCourses } = useCartStore();

  const handleGoToDetail = () => {
    router.push(`${COURSES_PAGE_URL}/${_id}`);
  };

  const handleAddToCart = (course) => {
    addToSelectedCourses(course);
  };

  return (
    <div className="flex flex-col items-center py-3 w-80 hover:cursor-pointer">
      {/* lg:w-80 md:w-80 xl:w-80 flex flex-col items-center py-3 w-64 */}
      <div onClick={handleGoToDetail}>
        <Image
          className="rounded-xl max-h-32"
          src={image}
          alt="img"
          height={40}
          width={240}
        />
      </div>
      <div className="px-2 md:px-0 w-64">
        <div onClick={handleGoToDetail}>
          <div className="h-14 w-full truncate_2_lines mt-2">
            <h1 className="text-lg font-bold">{name}</h1>
          </div>
          <p className="text-gray-500 truncate_2_lines">{owner?.name}</p>
          <div className="flex items-center gap-4">
            <Rate disabled value={rating} />
            <p className="text-gray-500">({purchasers})</p>
          </div>
          <p className="text-lg font-bold">{formattedCoin(price)}</p>
        </div>
        <m.span
          className="float-right cursor-pointer"
          whileHover={{ scale: 1.4 }}
          onClick={() => handleAddToCart(cardData)}
        >
          <ShoppingCartOutlined className="text-3xl" />
        </m.span>
      </div>
    </div>
  );
};

export default RegisterCourseCard;
