"use client";
import { UserOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Header } = Layout;

const Navbar: React.FC = () => {
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
      <Link href="/userprofile">
        <UserOutlined
          style={{
            color: "#fff",
            padding: ".5rem",
            borderRadius: "50%",
            border: "3px solid white",
            cursor: "pointer",
          }}
        />
      </Link>
    </Header>
  );
};

export default Navbar;
