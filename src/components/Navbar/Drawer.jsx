import { Drawer as AntdDrawer, Menu, Button, Space } from "antd";
import Link from "next/link";

import { UserOutlined, HomeOutlined } from "@ant-design/icons";

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
    icon: <UserOutlined />,
  },
  {
    id: 3,
    link: "/",
    title: "Gia sư",
    icon: <UserOutlined />,
  },
  {
    id: 4,
    link: "/",
    title: "Dạy cùng Emate",
    icon: <UserOutlined />,
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
        visible={isDrawerVisible}
        bodyStyle={{ padding: 0 }}
        width={280}
      >
        <Menu mode="vertical">
          {MENU_ARR.map((item) => (
            <Menu.Item key={item.id} icon={item.icon}>
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