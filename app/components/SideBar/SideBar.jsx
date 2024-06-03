"use client";
import React, { useState } from "react";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
const { Header, Content, Sider } = Layout;
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
const pageNames = ["Dashboard", "My Tasks", "Notifications"];
const icons = [UserOutlined, LaptopOutlined, NotificationOutlined];

const items2 = icons.map((icon, index) => {
  const key = String(index + 1);
  const label = pageNames[index];
  return {
    key,
    icon: React.createElement(icon),
    label: `${label}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          height: "100%",
          position: "relative",
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            borderRight: 0,
           
          }}
          items={items2}
        />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: "100%",
            height: "10vh",
            position: "sticky",
            top: "90vh",
            borderTop: "2px solid gray",
            borderRadius: 0,
            zIndex: 999,
            background: "transparent",
            color: "white",
          }}
        />
      </Sider>
    </div>
  );
};

export default SideBar;
