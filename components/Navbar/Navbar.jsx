"use client";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Header, Content, Sider } = Layout;

const Navbar = () => {
  return (
    <>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          margin: "0",
          padding: "0",
          paddingLeft: "1rem",
          zIndex: 99,
        }}
      >
        <Link href={"/"}>
          <Image width={40} height={40} src="/brand.png" alt="brand" />
        </Link>

        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
        <Link href="/userpage">
          <UserOutlined
            style={{
              color: "#fff",
              padding: ".5rem",
              borderRadius: "50%",
              border: "3px solid white",
              marginRight: "1rem",
            }}
          />
        </Link>
      </Header>
    </>
  );
};

export default Navbar;
