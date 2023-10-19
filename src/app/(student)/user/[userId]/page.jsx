import UserDetail from "@/components/UserDetail";
import { useSearchParams } from "next/navigation";

export const metadata = {
  title: "Emate - User's Information",
  description: "Emate teaching",
};

const UserDetailPage = ({ params }) => {
  return (
    <div>
      <UserDetail id={params.userId} />
    </div>
  );
};

export default UserDetailPage;
