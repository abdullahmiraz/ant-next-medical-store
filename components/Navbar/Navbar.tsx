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
        <Image width={40} height={40} src="/brand.png" alt="brand" />
      </Link>
      {/* <nav
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          gap: "1.3rem",
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/request-order">Request Order</Link>
        <Link href="/special-offers">Special Offers</Link>
        <Link href="/branch-locations">Branch Locations</Link>
        <Link href="/review">Review</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/contact-us">Contact Us</Link>
      </nav> */}
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
