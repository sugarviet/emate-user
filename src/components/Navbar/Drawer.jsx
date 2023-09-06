import { Drawer as AntdDrawer, Menu, Button, Space } from "antd";
import Link from "next/link";

import { UserOutlined, HomeOutlined, ReadOutlined, TeamOutlined, ContactsOutlined } from "@ant-design/icons";

const MENU_ARR = [
  {
    id: 1,
    link: "/",
    title: "Trang chủ",
    icon: <HomeOutlined />,
  },
  {
    id: 2,
    link: "/",
    title: "Khoá học",
    icon: <ReadOutlined />,
  },
  {
    id: 3,
    link: "/",
    title: "Gia sư",
    icon: <TeamOutlined />,
  },
  {
    id: 4,
    link: "/",
    title: "Dạy cùng Emate",
    icon: <ContactsOutlined />,
  },
];

const Drawer = ({ hideDrawer, isDrawerVisible }) => {
  return (
    <div>
      <AntdDrawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={hideDrawer}
        open={isDrawerVisible}
        bodyStyle={{ padding: 0 }}
        width={280}
      >
        <Menu mode="vertical" >
          {MENU_ARR.map((item) => (
            <Menu.Item key={item.id} icon={item.icon} className="hover:bg-slate-100 focus-visible:bg-slate-100 active:bg-slate-100 focus-within:bg-slate-100" >
              <Link href={item.link}>{item.title}</Link>
            </Menu.Item>
          ))}
          {/* SIGNIN-SIGNUP BUTTONS */}
          <Menu.Item>
            <Space>
              <Button>Đăng nhập</Button>
              <Button>Đăng kí</Button>
            </Space>
          </Menu.Item>
        </Menu>

      </AntdDrawer>
    </div>
  );
};


export default Drawer;