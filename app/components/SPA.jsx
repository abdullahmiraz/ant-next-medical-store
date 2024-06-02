"use client";
import React, { useState } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  PlusOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Search from "antd/es/input/Search";
import ChooseCalendar from "./ChooseCalendar/ChooseCalendar";
import { Footer } from "antd/es/layout/layout";

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
const onSearch = (value, _e, info) => console.log(info?.source, value);

const SPA = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          width={300}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "0  ",
            border: "1px solid red",
          }}
        >
          <Header
            style={{
              display: "flex",
              alignItems: "center",
              border: "5px solid green",
              margin: "0",
              padding: "0",
              paddingLeft: "1rem",
            }}
          >
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["Task Manager"]}
              items={items1}
              style={{
                flex: 1,
                minWidth: 0,
                border: "1px solid white",
              }}
            />
          </Header>

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: "80vh",
              background: "#f0f0f0",
              borderRadius: borderRadiusLG,
            }}
          >
            <Layout
              style={{
                borderRadius: "1rem",
                background: "#fff",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: ".5rem",
                }}
              >
                <div>
                  <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    enterButton
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    background: "white",
                    gap: "1rem",
                  }}
                >
                  <Button type="primary" icon={<PlusOutlined />}>
                    Add Your Task
                  </Button>
                  <MailOutlined />
                  <UserOutlined />
                </div>
              </div>
            </Layout>
            <Layout>
              <div className="first-section">{/* <ChooseCalendar /> */}</div>
            </Layout>
          </Content>
        </Layout>
      </Layout>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default SPA;
