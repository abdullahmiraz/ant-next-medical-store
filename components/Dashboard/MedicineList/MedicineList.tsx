"use client";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import { Button, Modal, Space, Table, message } from "antd";
import React, { Suspense, useEffect, useRef, useState } from "react";

import { getInventoryDetails, updateProduct } from "../../../api";
import EditModal from "../EditModal/EditModal";
import TaskBar from "../TaskBar/TaskBar";
import { Item } from "./MedicineList.types";
import ProductViewPrint from "./ProductViewPrint/ProductViewPrint";

const MedicineList: React.FC = () => {
  const tableRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [visibleColumns, setVisibleColumns] = useState<string[]>([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [printModalVisible, setPrintModalVisible] = useState(false);
  const [editItem, setEditItem] = useState<Item | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsData = await getInventoryDetails();
        setItems(itemsData.medicine);
        setFilteredItems(itemsData.medicine);
        // Set default visible columns based on fetched data
        if (itemsData.medicine.length > 0) {
          const keys = Object.keys(itemsData.medicine[0]);
          setVisibleColumns(
            keys.filter((key) => !["id", "name", "image"].includes(key))
          );
        }
      } catch (error) {
        console.error("Error fetching medical items:", error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (item: Item) => {
    setEditItem(item);
    setEditModalVisible(true);
  };

  const handlePrintModalView = (item: Item) => {
    setEditItem(item);
    setPrintModalVisible(!printModalVisible);
  };

  const handleSaveEdit = (updatedItem: Item) => {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
    setEditModalVisible(false);
    message.success("Item updated successfully");
  };

  const saveEditedItem = async () => {
    try {
      if (!editItem) return;

      await updateProduct(editItem.id, editItem);
      message.success("Item updated successfully");
      setItems((prevItems) =>
        prevItems.map((item) => (item.id === editItem.id ? editItem : item))
      );

      setEditModalVisible(false);
    } catch (error) {
      console.error("Failed to update item:", error);
      message.error("Failed to update item. Please try again.");
    }
  };

  const handleDelete = (id: string) => {
    Modal.confirm({
      title: "Are you sure you want to delete this item?",
      content: "This action cannot be undone.",
      okText: "Yes",
      cancelText: "No",
      onOk: async () => {
        try {
          const updatedItems = items.filter((item) => item.id !== id);
          setItems(updatedItems);
          message.success("Item deleted successfully");
        } catch (error) {
          message.error("Failed to delete the item");
        }
      },
      onCancel() {
        console.log("Delete cancelled");
      },
    });
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  useEffect(() => {
    let filteredData = items;

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        filteredData = filteredData.filter((item) =>
          item[key]
            .toString()
            .toLowerCase()
            .includes(filters[key].toLowerCase())
        );
      }
    });

    setFilteredItems(filteredData);
  }, [filters, items]);

  const generateColumns = (): TableColumnsType<Item> => {
    if (!filteredItems.length) return [];

    const columns: TableColumnsType<Item> = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
        fixed: "left",
        width: 50,
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        fixed: "left",
        width: 150,
        render: (text: string, record: Item) => <span>{text}</span>,
      },
      ...Object.keys(filteredItems[0])
        .filter((key) => !["id", "name", "image"].includes(key))
        .map((key: string) => ({
          title: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " "),
          dataIndex: key,
          key,
          width: 150,
          render: (text: string | number | boolean) =>
            typeof text === "boolean" ? (text ? "Yes" : "No") : text,
          // Hide column if not in visibleColumns
          hidden: !visibleColumns.includes(key),
        })),
      {
        title: "Actions",
        dataIndex: "actions",
        key: "actions",
        fixed: "right",
        width: 100,
        render: (_text: string, record: Item) => (
          <Space>
            <Button
              type="link"
              icon={<EditOutlined />}
              onClick={() => handleEdit(record)}
            />
            <Button
              type="link"
              icon={<EyeOutlined />}
              onClick={() => handlePrintModalView(record)}
            />
            <Button
              type="link"
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(record.id)}
            />
          </Space>
        ),
      },
    ];

    return columns;
  };

  return (
    <div>
      <TaskBar
        tableRef={tableRef}
        filteredItems={filteredItems}
        visibleColumns={visibleColumns}
        setVisibleColumns={setVisibleColumns}
      />

      <div ref={tableRef}>
        <Table
          columns={generateColumns()}
          dataSource={filteredItems}
          rowKey={(record) => record.id}
          onRow={(record: Item) => ({
            onClick: () => {
              if (selectedRows.includes(record.id)) {
                setSelectedRows((prevSelectedRows) =>
                  prevSelectedRows.filter((rowId) => rowId !== record.id)
                );
              } else {
                setSelectedRows((prevSelectedRows) => [
                  ...prevSelectedRows,
                  record.id,
                ]);
              }
            },
            style: {
              background: selectedRows.includes(record.id) ? "lightblue" : "",
            },
          })}
          scroll={{ x: "max-content", y: "max-content" }}
        />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {editItem && (
          <>
            <EditModal
              open={editModalVisible}
              item={editItem}
              onSave={saveEditedItem}
              onCancel={() => setEditModalVisible(!editModalVisible)}
            />
            <ProductViewPrint
              open={printModalVisible}
              item={editItem}
              onSave={saveEditedItem}
              onCancel={() => setPrintModalVisible(!printModalVisible)}
            />
          </>
        )}
      </Suspense>
    </div>
  );
};

export default MedicineList;
