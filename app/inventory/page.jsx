import { Layout } from "antd";
import DashboardTemplate from "../../components/DashboardTemplate/DashboardTemplate";
import TodoList from "../../components/TodoList/TodoList";
import { getAllTodos } from "../../api";

const { Header, Content, Sider } = Layout;

const InventoryPage = async () => {
  const todos = await getAllTodos();
  console.log(todos);
  return (
    <DashboardTemplate>
      <div className="first-section">
        <TodoList todos={todos} />
      </div>
    </DashboardTemplate>
  );
};

export default InventoryPage;
