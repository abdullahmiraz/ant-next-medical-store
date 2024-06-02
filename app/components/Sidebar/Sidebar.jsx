import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  PlusOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Search from "antd/es/input/Search";
import ChooseCalendar from "../ChooseCalendar/ChooseCalendar";

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
  };
});
const onSearch = (value, _e, info) => console.log(info?.source, value);

const Sidebar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["Task Manager"]}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
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
            padding: "0 24px 24px",
          }}
        >
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
                border: "1px solid gray",
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
              <div className="first-section">
                <ChooseCalendar />
              </div>
            </Layout>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
