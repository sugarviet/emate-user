"use client";

import { useSearchParams } from "next/navigation";

const ROLE = {
  user: {
    name: "Bạn đồng hành của bạn",
  },
  mentor: {
    name: "Gia sư",
  },
};

const LEVEL = {
  1: "Sơ cấp",
  2: "Trung cấp",
  3: "Nâng cao",
};

const UserBio = ({ user, courses }) => {
  const { name, about, degree, education, fieldsOfStudy } = user;

  const params = useSearchParams();
  const role = params.get("role");

  const num_of_students = courses.reduce(
    (total, course) => total + course.purchasers,
    0
  );

  return (
    <div>
      <div className="flex flex-col gap-3">
        <h2 className="text-gray-400 font-semibold md:text-2xl text-lg">
          {ROLE[role].name}
        </h2>
        <h1 className="font-bold text-4xl">{name}</h1>
        <h1 className="text-xl font-semibold">{degree}</h1>
      </div>

      {/* Show if mentor is recommend by emate */}
      <div className="bg-purple-300 w-fit h-fit py-2 px-3 my-3 rounded-lg">
        <h1 className="font-medium">Đối tác hướng dẫn của Emate</h1>
      </div>

      {/* Mentor's parameter */}
      <div className="flex gap-9 items-center">
        <div>
          <h2 className="text-gray-400 font-semibold text-lg">
            Số lượng học viên
          </h2>
          <h1 className="font-bold text-2xl">{num_of_students}</h1>
        </div>
        <div>
          <h2 className="text-gray-400 font-semibold text-lg">Reviews</h2>
          <h1 className="font-bold text-2xl">100,000</h1>
        </div>
      </div>

      {/* About me */}
      <div className="mt-5 text-lg">
        <div className="flex items-center">
          <span className="mr-2 font-bold">Giới thiệu: </span>
          <p className="my-2">{about}</p>
        </div>
        <div className="flex items-center">
          <span className="mr-2 font-bold">Giáo dục: </span>
          <p className="my-2">{education}</p>
        </div>
        <div className="flex">
          <span className="mr-2 font-bold">Lĩnh vực: </span>
          <ul className="flex flex-col w-90">
            {fieldsOfStudy.map((item, index) => (
              <li key={`${item} + ${index}`}>
                {item.name} - {LEVEL[item.level]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
