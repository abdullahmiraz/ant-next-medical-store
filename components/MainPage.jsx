"use client";
import { Layout, theme } from "antd";
import FooterComp from "./FooterComp/FooterComp";
import Navbar from "./Navbar/Navbar";
import SideBar from "./SideBar/SideBar";
import TodoList from "./TodoList/TodoList";

const { Header, Content, Sider } = Layout;

const MainPage = ({ todos }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Navbar />
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
              background: "#f0f0f0",
              borderRadius: borderRadiusLG,
            }}
          >
            <Layout>
              <div className="first-section">
                <TodoList todos={todos} />
              </div>
            </Layout>
          </Content>

          <FooterComp />
        </Layout>
      </Layout>
    </Layout>
  );
};
export default MainPage;
