import Navbar from "@/components/public/Navbar";

function StudentLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default StudentLayout;
