"use client";
import { Layout, theme } from "antd";
import SideBar from "../../Dashboard/SideBar/SideBar";
import FooterComp from "../FooterComp/FooterComp";

const { Header, Content, Sider } = Layout;

const DashboardTemplate = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      {/* <Navbar /> */}
      <Layout>
        <SideBar />

        <Layout style={{ padding: 0 }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              background: "#f0f0f0",
              borderRadius: borderRadiusLG,
            }}
          >
            <Layout>{children}</Layout>
          </Content>
          <FooterComp />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardTemplate;
