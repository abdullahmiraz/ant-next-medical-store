import {
  BoxPlotOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { useState } from "react";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      style={{ minHeight: "100vh" }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link href="/dashboard">Dashboard</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<LaptopOutlined />} title="My Tasks">
          <Menu.Item key="2">
            <Link href="/tasks/important">Important</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/tasks/urgent">Urgent</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link href="/tasks/completed">Completed</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="5" icon={<NotificationOutlined />}>
          <Link href="/notifications">Notifications</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<BoxPlotOutlined />}>
          <Link href="/posts">Blog</Link>
        </Menu.Item>
      </Menu>
      {/* <div className="collapse-button" onClick={handleToggleCollapse}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div> */}
    </Sider>
  );
};

export default SideBar;
