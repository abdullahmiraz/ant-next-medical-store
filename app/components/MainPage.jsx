"use client";
import React, { useState } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  PlusOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Search from "antd/es/input/Search";
import ChooseCalendar from "./ChooseCalendar/ChooseCalendar";
import { Footer } from "antd/es/layout/layout";
import TodoList from "./TodoList/TodoList";
import TaskBar from "./TaskBar/TaskBar";
import Image from "next/image";

const { Header, Content, Sider } = Layout;

const items1 = ["Home", "About Us", "Gallery", "Task Manager"].map((key) => ({
  key,
  label: `${key}`,
}));

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

const MainPage = ({ todos }) => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          margin: "0",
          padding: "0",
          paddingLeft: "1rem",
          // border: "1px solid red",
          zIndex: 99,
        }}
      >
        <Image width={40} height={40} src="/brand.png" alt="brand" />
        {/* change the values below, to make sure they are ok */}
        <Menu
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={["Task Manager"]}
          // items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />

        <UserOutlined
          style={{
            color: "#fff",
            padding: ".5rem",
            borderRadius: "50%",
            border: "3px solid white",
            marginRight: "1rem",
          }}
        />
      </Header>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
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
        </Sider>
        <Layout
          style={{
            padding: "0  ",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              // background: "#000",
            }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              // minHeight: "80vh",
              background: "#f0f0f0",
              borderRadius: borderRadiusLG,
            }}
          >
            <TaskBar />
            <Layout>
              <div className="first-section">
                {/* <ChooseCalendar /> */}
                <TodoList todos={todos} />
              </div>
            </Layout>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default MainPage;
