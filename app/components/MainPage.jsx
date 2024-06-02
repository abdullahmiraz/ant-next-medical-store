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
import SideBar from "./SideBar/SideBar";

const { Header, Content, Sider } = Layout;

const items1 = ["Home", "About Us", "Gallery", "Task Manager"].map((key) => ({
  key,
  label: `${key}`,
}));

const MainPage = ({ todos }) => {

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
        <SideBar />
        <Layout
          style={{
            padding: "0",
          }}
        >
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
