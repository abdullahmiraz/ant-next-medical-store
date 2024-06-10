import { Layout } from "antd";
import MedicineList from "../../components/MedicineList/MedicineList";

const { Header, Content, Sider } = Layout;

const InventoryPage = () => {
  return (
    <div>
      <MedicineList />
    </div>
  );
};

export default InventoryPage;
