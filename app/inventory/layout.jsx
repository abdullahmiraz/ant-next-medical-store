import React from "react";
import MedicineList from "../../components/MedicineList/MedicineList";
import DashboardTemplate from "../../components/DashboardTemplate/DashboardTemplate";

const InventoryPageLayout = ({children}) => {
  return (
    <DashboardTemplate>
     {children}
    </DashboardTemplate>
  );
};

export default InventoryPageLayout;
