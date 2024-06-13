import DashboardTemplate from "../../components/Shared/DashboardTemplate/DashboardTemplate";
import Navbar from "../../components/Shared/Navbar/Navbar";

 

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <DashboardTemplate>{children}</DashboardTemplate>
    </>
  );
};

export default layout;
