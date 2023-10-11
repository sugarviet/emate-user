import { useModalStore } from "@/stores/useModalStore";
import { useWallet } from "@/stores/useWallet";
import { formattedCoin } from "@/utils/formatedCurrency";
import { useEffect } from "react";

function Wallet() {
  const { switchDepositModalState } = useModalStore();
  const { balance } = useWallet();

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
      <p>{formattedCoin(balance)}</p>
    </button>
  );
}

export default Wallet;
