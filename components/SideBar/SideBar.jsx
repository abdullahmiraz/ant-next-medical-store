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
          <Link href="/inventory">Inventory</Link>
        </Menu.Item>

        <SubMenu
          key="sub2"
          icon={<BoxPlotOutlined />}
          title="Sales and Billing"
        >
          <Menu.Item key="5">
            <Link href="/sales/new-sale">New Sale</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link href="/sales/invoice-management">Invoice Management</Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link href="/sales/sales-reports">Sales Reports</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="8" icon={<UserOutlined />}>
          <Link href="/user-management">User Management</Link>
        </Menu.Item>
        <SubMenu key="sub3" icon={<NotificationOutlined />} title="Reports">
          <Menu.Item key="9">
            <Link href="/reports/inventory">Inventory Reports</Link>
          </Menu.Item>
          <Menu.Item key="10">
            <Link href="/reports/sales">Sales Analytics</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="11" icon={<LaptopOutlined />}>
          <Link href="/settings">Settings</Link>
        </Menu.Item>
      </Menu>

      {/* <div className="collapse-button" onClick={handleToggleCollapse}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div> */}
    </Sider>
  );
};

export default SideBar;
