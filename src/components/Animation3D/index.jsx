import Lottie from "lottie-react";
import { checkout_success } from "@/animations_data";

const TYPE = {
  checkout_success: {
    data: checkout_success,
  },
};

function Animation3D({ name }) {
  return <Lottie width={60} height={60} animationData={TYPE[name].data} />;
}

export default Animation3D;
