"use client";
import { DEFAULT } from "@/constants/defaultElement";
import { useChatStore } from "@/stores/useChatStore";
import { FireFilled } from "@ant-design/icons";
import { Rate } from "antd";
import { motion as m } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CHAT_PAGE_URL } from "@/constants/url";

const about_default =
  "Xin chào! Mình là sinh viên đại học và đang tìm kiếm một bạn học để cùng nhau học tập online. Mình mong muốn tìm kiếm bạn có cùng sở thích và cùng chí hướng học tập.";

const UserCard = ({ data }) => {
  const router = useRouter();
  const storeSelectedUser = useChatStore((state) => state.storeSelectedUser);
  const {
    _id,
    avatar = DEFAULT.AVATAR_IMAGE_PATH,
    name = "Emate",
    about = about_default,
    fieldsOfStudy,
  } = data;
  const handleFetchChooseUser = () => {
    storeSelectedUser({
      _id: _id,
      name: name,
      avatar: avatar,
    });
    router.push(CHAT_PAGE_URL);
  };
  return (
    <m.div className="w-full my-10" whileHover={{ y: -10 }}>
      <div className="w-64 h-fit max-h-90 mx-auto flex flex-col justify-center items-centeroverflow-hidden rounded-lg">
        <div className="flex items-center justify-center w-full bg-pink-50 rounded-xl h-60 overflow-hidden">
          <Image
            alt="User"
            src={avatar ? avatar : DEFAULT.AVATAR_IMAGE_PATH}
            height={320}
            width={280}
          />
        </div>
        <div className="flex flex-col mt-4 ">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-base lg:text-xl">{name}</h1>
          </div>

          <div className="my-1">
            <span className="font-bold text-base">Chuyên ngành:</span>
            <span className="font-semibold mx-1">
              {fieldsOfStudy?.length ? fieldsOfStudy[0].name : "Not yet"}
            </span>
            <span>
              <Rate
                disabled
                value={
                  fieldsOfStudy?.length &&
                  Math.ceil((fieldsOfStudy[0].level * 3) / 2)
                }
                className="text-xs text-pink-300"
                character={<FireFilled />}
              />
            </span>
          </div>

          <div className="my-1">
            <span className="font-bold text-base">Muốn học:</span>
            <span className="font-semibold mx-1">
              {fieldsOfStudy?.length ? fieldsOfStudy[0].name : "Not yet"}
            </span>
            <span>
              <Rate
                value={
                  fieldsOfStudy?.length &&
                  Math.ceil((fieldsOfStudy[0].level * 3) / 2)
                }
                className="text-xs text-pink-300"
                character={<FireFilled />}
              />
            </span>
          </div>

          <div>
            <p className="line-clamp-3">{about ? about : about_default}</p>
          </div>
        </div>
        <div
          className="flex justify-center mx-auto items-center mt-5"
          onClick={() => handleFetchChooseUser()}
        >
          <button className="primary_bg_pink_color text-white font-bold rounded-xl px-7 py-3">
            Nhắn tin
          </button>
        </div>
      </div>
    </m.div>
  );
};

export default UserCard;
