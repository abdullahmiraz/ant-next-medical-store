"use client";
import { Layout, theme } from "antd";
import FooterComp from "./FooterComp/FooterComp";
import Navbar from "./Navbar/Navbar";
import SideBar from "./SideBar/SideBar";
import MedicineList from "./MedicineList/MedicineList";
import DashboardTemplate from "./DashboardTemplate/DashboardTemplate";
import InventoryPage from "../app/inventory/page";

const { Header, Content, Sider } = Layout;

const MainPage = () => {
  return <InventoryPage />;
};
export default MainPage;
