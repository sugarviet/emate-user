import { useModalStore } from "@/stores/useModalStore";
import { useWallet } from "@/stores/useWallet";
import { formattedCoin } from "@/utils/formatedCurrency";
import { useEffect } from "react";
import { useStoreCurrentUserDetail } from "@/stores/useStoreCurrentUserDetail";

function Wallet() {
  const { switchDepositModalState } = useModalStore();
  const { balance } = useWallet();

  const userDetail = useStoreCurrentUserDetail((state) => state.userDetail);

  useEffect(() => {
    //TODO: call API TO set balance.
  }, []);

  return (
    <button
      onClick={() => {
        switchDepositModalState(true);
      }}
      className="flex items-center"
    >
      {/* <p>{formattedCoin(balance)}</p> */}
      <p>{formattedCoin(userDetail.wallet)}</p>

    </button>
  );
}

export default Wallet;
