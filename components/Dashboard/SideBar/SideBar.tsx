"use client";
import { LaptopOutlined, UserOutlined } from "@ant-design/icons";
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
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link href="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<LaptopOutlined />}>
          <Link href="/dashboard/inventory">Inventory</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<LaptopOutlined />}>
          <Link href="/dashboard/userreport">User Report</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<LaptopOutlined />}>
          <Link href="/dashboard/salesreport">Sales Report</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<LaptopOutlined />} title="Sales">
          <Menu.Item key="5">
            <Link href="/dashboard/sales">Sales Report</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link href="/dashboard/reports"> Demo Report</Link>
          </Menu.Item>
        </SubMenu>

        {/* <Menu.Item key="8" icon={<UserOutlined />}>
          <Link href="/dashboard/user-management">User Management</Link>
        </Menu.Item> */}

        <Menu.Item key="11" icon={<LaptopOutlined />}>
          <Link href="/dashboard/settings">Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
