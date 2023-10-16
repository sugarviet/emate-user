"use client";
import { useModalStore } from "@/stores/useModalStore";
import { formattedCoin, formattedCurrency } from "@/utils/formatedCurrency";
import { CloseCircleFilled } from "@ant-design/icons";
import { QRCode, Table } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import urlcat from "urlcat";
import { BASE_URL, REQUEST_UPDATE_WALLET } from "@/constants/url";
import { useStoreCurrentUserDetail } from "@/stores/useStoreCurrentUserDetail";
import { useChatStore } from "@/stores/useChatStore";
import { notification } from "antd";
import Animation3D from "../Animation3D";

const columns = [
  {
    title: "Giá",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Thêm điểm",
    dataIndex: "coin",
    key: "coin",
  },
];

const data = [
  {
    key: "1",
    price: formattedCurrency(10000),
    coin: formattedCoin(10),
    value: 10,
  },
  {
    key: "2",
    price: formattedCurrency(20000),
    coin: formattedCoin(20),
    value: 20,
  },
  {
    key: "3",
    price: formattedCurrency(50000),
    coin: formattedCoin(50),
    value: 50,
  },
  {
    key: "4",
    price: formattedCurrency(100000),
    coin: formattedCoin(100),
    value: 100,
  },
  {
    key: "5",
    price: formattedCurrency(200000),
    coin: formattedCoin(200),
    value: 200,
  },
  {
    key: "6",
    price: formattedCurrency(500000),
    coin: formattedCoin(500),
    value: 500,
  },
  {
    key: "7",
    price: formattedCurrency(1000000),
    coin: formattedCoin(1000),
    value: 1000,
  },
  {
    key: "8",
    price: formattedCurrency(2000000),
    coin: formattedCoin(2000),
    value: 2000,
  },
];

export default function DepositModal() {
  const userDetail = useStoreCurrentUserDetail((state) => state.userDetail);
  const isDepositModalOpened = useModalStore(
    (state) => state.isDepositModalOpened
  );
  const switchDepositModalState = useModalStore(
    (state) => state.switchDepositModalState
  );
  const currentUserInfo = useChatStore((state) => state.currentUserInfo);

  const [selectedDepositOption, setSelectedDepositOption] = useState(undefined);
  const [paymentCode, setPaymentCode] = useState(undefined);
  const [moneyWantToSend, setMoneyWantToSend] = useState(0);
  const [dealSuccess, setDealSuccess] = useState(false);

  const handleSelectDeposit = (record) => {
    setDealSuccess(false);
    setSelectedDepositOption(record);
    setMoneyWantToSend(record.value);
  };

  const handleConfirmPayment = () => {
    setPaymentCode(`${userDetail.email}_${moneyWantToSend}`);
  };

  const handleConfirmPaymentFinal = () => {
    updateWallet();
    setSelectedDepositOption(undefined);
    setPaymentCode(undefined);
  };

  const handleCloseModal = () => {
    resetState();
    switchDepositModalState(false);
  };

  const resetState = () => {
    setSelectedDepositOption(undefined);
    setPaymentCode(undefined);
    setDealSuccess(false);
  };

  useEffect(() => {
    setPaymentCode(undefined);
  }, [selectedDepositOption]);

  const updateWallet = async () => {
    const res = await axios.post(
      urlcat(BASE_URL, REQUEST_UPDATE_WALLET),
      {
        code: paymentCode,
        price: moneyWantToSend,
        type: "Recharge",
      },
      {
        headers: {
          "x-client-id": currentUserInfo._id,
          "x-client-refreshtoken": currentUserInfo.refreshToken,
          "x-client-accesstoken": currentUserInfo.token,
        },
      }
    );
    if (res.data.status === 200) {
      setDealSuccess(true);
      notification.success({
        message: "Yêu cầu nạp tiền của bạn đã được chuyển đến Emate thành công",
      });
    }
  };

  if (!isDepositModalOpened) return null;

  return (
    <motion.div
      initial={{ opacity: 0, top: -100 }}
      animate={{ opacity: 1, top: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 z-50 bottom-0 left-0 right-0 flex items-center justify-center bg-pink-300 bg-opacity-80"
    >
      <div className="w-3/5 h-fit bg-white rounded-3xl grid grid-cols-2 p-4 relative">
        <Table
          className="w-full h-full"
          rowSelection={{ type: "radio", onSelect: handleSelectDeposit }}
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
        />
        {dealSuccess && (
          <div className="flex items-center justify-center">
            <div className="w-72 h-72">
              <Animation3D loop={false} name="success" />
            </div>
          </div>
        )}
        {selectedDepositOption ? (
          paymentCode ? (
            <div className="flex flex-col h-full items-center justify-center p-4">
              <span className="text-lg text-center">
                Quét mã QR bằng ví MOMO và nhập mã thanh toán vào nội dung tin
                nhắn
              </span>
              {/* <QRCode
                className="my-4 flex-1"
                size={200}
                value="https://ant.design/"
              /> */}
              <div className="w-64 h-64 overflow-hidden">
                <Image
                  src={"/QR_code.jpg"}
                  alt="Qr_code"
                  width={250}
                  height={250}
                />
              </div>
              <span className="text-lg">
                Mã thanh toán: <span className="font-bold">{paymentCode}</span>
              </span>
              <button
                onClick={handleConfirmPaymentFinal}
                className="w-full bg-pink-400 h-12 font-bold rounded-md text-xl text-white mt-8"
              >
                Hoàn tất thanh toán
              </button>
            </div>
          ) : (
            <div className="p-4">
              <span className="font-bold text-2xl">Chi tiết giao dịch</span>
              <div className="flex items-center justify-between text-lg py-2 mt-4">
                <span className="font-medium">Sản phẩm được chọn:</span>
                <span>{selectedDepositOption.coin}</span>
              </div>
              <div className="flex items-center justify-between text-lg py-2">
                <span className="font-medium">Giá:</span>
                <span>{selectedDepositOption.price}</span>
              </div>
              <div className="flex items-center justify-between text-lg py-2">
                <span className="font-medium">Phương thức thanh toán:</span>
                <span className="flex">
                  Ví{" "}
                  <Image
                    alt="momo-logo"
                    className="ml-4"
                    width={32}
                    height={32}
                    src={"/images/MoMo_Logo.png"}
                  />
                </span>
              </div>
              <div className="flex items-center justify-between text-lg py-2">
                <span className="font-medium">Tên tài khoản:</span>
                <span>Việt Đặng</span>
              </div>
              <button
                onClick={handleConfirmPayment}
                className="w-full bg-pink-400 h-12 font-bold rounded-md text-xl text-white mt-8"
              >
                Xử lý thanh toán
              </button>
            </div>
          )
        ) : dealSuccess ? (
          ""
        ) : (
          <div className="h-full flex items-center">
            <span className="font-medium text-lg text-center">
              Vui lòng chọn mệnh giá tương ứng ở bên trái để thanh toán
            </span>
          </div>
        )}
        <button
          onClick={handleCloseModal}
          className="absolute top-0 right-0 p-4 w-fit h-fit text-xl text-pink-400"
        >
          <CloseCircleFilled />
        </button>
      </div>
    </motion.div>
  );
}
