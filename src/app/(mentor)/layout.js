import MentorNavbar from "@/components/public/MentorNavbar";

function MentorLayout({ children }) {
    return (<>
        <MentorNavbar />
        {children}
    </>);
}

export default MentorLayout;