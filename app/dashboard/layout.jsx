import React from "react";
import DashboardTemplate from "../../components/DashboardTemplate/DashboardTemplate";

const layout = ({ children }) => {
  return (
    <div>
      <DashboardTemplate>{children}</DashboardTemplate>
    </div>
  );
};

export default layout;
