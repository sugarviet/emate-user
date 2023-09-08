import UserContact from "../UserContact/UserContact";

const Sidebar = ({ children }) => {
  return (
    <div className="h-full mt-5 flex w-full">
      <DesktopSidebar />
      <main className="h-full flex-1">{children}</main>
    </div>
  );
};

const DesktopSidebar = () => {
  return (
    <div
      className="w-80 border rounded-l-lg h-96 p-2 overflow-y-scroll"
    >
     <ul>
        <li>
            <UserContact />
        </li>
        <li>
            <UserContact />
        </li>
        <li>
            <UserContact />
        </li>
        <li>
            <UserContact />
        </li>
        
     </ul>

    </div>
  );
};

export default Sidebar;
