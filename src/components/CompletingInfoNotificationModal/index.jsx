import { useModalStore } from "@/stores/useModalStore";
import { HeartFilled } from "@ant-design/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function CompletingInfoNotification() {
  const { isCompletingInfoNotificationModalOpened } = useModalStore();

  if (!isCompletingInfoNotificationModalOpened) return null;

  return (
    <motion.div
      initial={{ opacity: 0, top: -100 }}
      animate={{ opacity: 1, top: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-pink-300 bg-opacity-80"
    >
      <div className="w-3/5 h-fit bg-white rounded-3xl p-4 flex flex-col items-center justify-center">
        <div className="text-center text-xl flex flex-col">
          <div className="flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Emate Logo"
              width={60}
              height={60}
              className="object-contain mx-2"
            />
            <span>
              chưa biết về <b>lĩnh vực mà bạn muốn học</b>.
            </span>
          </div>
          <div className="flex items-center justify-center">
            Hãy cập nhật để{" "}
            <Image
              src="/images/logo.png"
              alt="Emate Logo"
              width={60}
              height={60}
              className="object-contain mx-2"
            />
            <span>
              hỗ trợ bạn học tập tốt hơn nhé{" "}
              <HeartFilled width={24} height={24} className="text-red-300" />
            </span>
          </div>
        </div>

        <Link
          className="text-xl p-4 bg-pink-300 text-white font-bold mt-4"
          href={"/profile"}
        >
          Cập nhật ngay
        </Link>
      </div>
    </motion.div>
  );
}

export default CompletingInfoNotification;
