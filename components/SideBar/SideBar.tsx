"use client";
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

const SideBar: React.FC = () => {
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
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link href="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<LaptopOutlined />}>
          <Link href="/dashboard/inventory">Inventory</Link>
        </Menu.Item>

        <Menu.Item key="8" icon={<UserOutlined />}>
          <Link href="/dashboard/user-management">User Management</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<BoxPlotOutlined />}>
          <Link href="/dashboard/sales">Sales</Link>
        </Menu.Item>

        <Menu.Item key="9" icon={<NotificationOutlined />}>
          <Link href="/dashboard/reports"> Reports</Link>
        </Menu.Item>

        <Menu.Item key="11" icon={<LaptopOutlined />}>
          <Link href="/dashboard/settings">Settings</Link>
        </Menu.Item>
      </Menu>

      {/* <div className="collapse-button" onClick={handleToggleCollapse}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div> */}
    </Sider>
  );
};

export default SideBar;
