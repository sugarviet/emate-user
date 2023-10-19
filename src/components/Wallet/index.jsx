import { useModalStore } from "@/stores/useModalStore";
import { useWallet } from "@/stores/useWallet";
import { formattedCoin } from "@/utils/formatedCurrency";
import { useEffect } from "react";
import { useStoreCurrentUserDetail } from "@/stores/useStoreCurrentUserDetail";
import { Popover } from "antd";
import { coinDescription } from "@/constants/description";

function Wallet() {
  const { switchDepositModalState } = useModalStore();
  const { balance, setBalance } = useWallet();

  const userDetail = useStoreCurrentUserDetail((state) => state.userDetail);

  useEffect(() => {
    setBalance(userDetail.wallet);
  }, [userDetail]);

  return (
    <button
    onClick={() => {
      switchDepositModalState(true);
      }}
      className="flex items-center"
      >
      {/* <p>{formattedCoin(balance)}</p> */}
      <Popover content={coinDescription}>
      <p>{formattedCoin(balance)}</p>
      </Popover>
    </button>
  );
}

export default Wallet;
