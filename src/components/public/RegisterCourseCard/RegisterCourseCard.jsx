import { ShoppingCartOutlined } from "@ant-design/icons";

import Image from "next/image";

import { Rate } from "antd";

const RegisterCourseCard = ({cardData}) => {
  const {id, index, thumbnail, courseTitle, author, rate, numberOfRates, price} = cardData;
  return (
    <div className="lg:w-80 md:w-80 xl:w-80 flex flex-col items-center py-3 w-64">
      <div>
        <Image src={thumbnail} alt="img" height={250} width={250} />
      </div>
      <div className="px-2 md:px-0 w-64">
        <div className="h-14 w-full truncate_2_lines mt-2">
          <h1 className="text-lg font-bold">{courseTitle}</h1>
        </div>
        <p className="text-gray-500 truncate_2_lines">
          {author}
        </p>
        <div className="flex items-center gap-4">
          <Rate value={rate} />
          <p className="text-gray-500">({numberOfRates})</p>
        </div>
        <p className="text-lg font-bold">đ{price.toFixed(3)}</p>
        <span className="float-right cursor-pointer">
          <ShoppingCartOutlined className="text-3xl" />
        </span>
      </div>
    </div>
  );
};

export default RegisterCourseCard;
