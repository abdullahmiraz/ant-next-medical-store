"use client";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Dropdown, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Header } = Layout;

const Navbar: React.FC = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link href="/userprofile">
          User Profile
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link href="/logout">
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1rem",
        zIndex: 99,
        color: "#fff",
        backgroundColor: "#001529",
      }}
    >
      <Link href="/">
        <Image
          style={{ backgroundColor: "white" }}
          width={140}
          height={80}
          src="/brand.png"
          alt="brand"
        />
      </Link>
      <Dropdown
        overlay={menu}
        trigger={['hover']}
      >
        <UserOutlined
          style={{
            color: "#fff",
            padding: ".5rem",
            borderRadius: "50%",
            border: "3px solid white",
            cursor: "pointer",
          }}
        />
      </Dropdown>
    </Header>
  );
};

export default Navbar;
