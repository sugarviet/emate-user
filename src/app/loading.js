import { Skeleton } from "antd";

export default function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Skeleton active />
    </div>
  );
}
