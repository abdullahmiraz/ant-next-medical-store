"use client";
import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import DashboardTemplate from "../../components/DashboardTemplate/DashboardTemplate";
import MedicineList from "../../components/MedicineList/MedicineList";
import { getAllTodos } from "../../api";

const { Header, Content, Sider } = Layout;

const InventoryPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todosData = await getAllTodos();
        setTodos(todosData);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchData();
  }, []);

  console.log(todos);

  return (
    <DashboardTemplate>
      <div className="first-section">
        <MedicineList todos={todos} />
      </div>
    </DashboardTemplate>
  );
};

export default InventoryPage;
