import React from "react";
import DashboardTemplate from "../../components/DashboardTemplate/DashboardTemplate";
import Navbar from "../../components/Navbar/Navbar.tsx";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <DashboardTemplate>{children}</DashboardTemplate>
    </>
  );
};

export default layout;
