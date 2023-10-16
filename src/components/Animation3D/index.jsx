import Lottie from "lottie-react";
import { checkout_success, success } from "@/animations_data";

const TYPE = {
  checkout_success: {
    data: checkout_success,
  },
  success: {
    data: success,
  },
};

function Animation3D({ loop = true, name }) {
  return (
    <Lottie
      loop={loop}
      width={60}
      height={60}
      animationData={TYPE[name].data}
    />
  );
}

export default Animation3D;
