"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Button, Input, Modal, Space, Table, message } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import type { TableColumnsType } from "antd";

import EditModal from "../EditModal/EditModal";
import { getInventoryDetails, updateProduct } from "../../../api";

export interface Item {
  id: any;
  name: string;
  category: string;
  type: string;
  price: number;
  stock: number;
  manufacturer: string;
  expiry_date: string;
  batch_number: string;
  aisle_location: string;
  prescription_required: boolean;
  image: string;
}

const TestComp: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editItem, setEditItem] = useState<Item | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsData = await getInventoryDetails();
        setItems(itemsData.medicine);
        setFilteredItems(itemsData.medicine);
      } catch (error) {
        console.error("Error fetching medical items:", error);
      }
    };

    fetchData();
  }, []);

  const onSelectChange = (
    selectedRowKeys: React.Key[],
    selectedRows: Item[]
  ) => {
    setSelectedRowKeys(selectedRowKeys);
    setSelectedRows(selectedRows.map((row) => row.id));
  };

  const handleEdit = (item: Item) => {
    setEditItem(item);
    setEditModalVisible(true);
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

      await updateProduct(editItem.id, editItem); // Assuming updateProduct is defined correctly

      message.success("Item updated successfully");

      // Update local items state with edited item
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
          // Call your API to delete the item
          // await deleteItemById(id); // Implement this function
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

  const generateColumns = (data: Item[]): TableColumnsType<Item> => {
    if (!data || data.length === 0) return [];

    const columns: TableColumnsType<Item> = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
        fixed: "left", // Fixed to the left
        width: 100, // Set a fixed width for the ID column
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        fixed: "left", // Fixed to the left
        width: 150, // Set a fixed width for the Name column
        render: (text: string, record: Item) => <span>{text}</span>,
      },
      ...Object.keys(data[0])
        .filter((key) => key !== "id" && key !== "name" && key !== "image")
        .map((key: string) => ({
          title: (
            <div>
              <div>
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " ")}
              </div>
              <Input
                placeholder={`Search ${key}`}
                onChange={(e) => handleFilterChange(key, e.target.value)}
                value={filters[key] || ""}
              />
            </div>
          ),
          dataIndex: key,
          width: 200, // Set a fixed width for other columns
          minWidth: 200, // Minimum width for other columns
          key,
          render: (text: string | number | boolean) =>
            typeof text === "boolean" ? (text ? "Yes" : "No") : text,
        })),
      {
        title: "Actions",
        dataIndex: "actions",
        key: "actions",
        fixed: "right", // Fixed to the right
        width: 100, // Set a fixed width for the Actions column
        render: (_text: string, record: Item) => (
          <Space>
            <Button
              type="link"
              icon={<EditOutlined />}
              onClick={() => handleEdit(record)}
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
      <Table
        columns={generateColumns(items)}
        dataSource={filteredItems} // Use the filtered data
        rowKey={(record) => record.id}
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
        }}
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
        scroll={{ x: "max-content", y: "max-content" }} // Adjust y value as needed
      />

      <Suspense fallback={<div>Loading...</div>}>
        {editItem && (
          <EditModal
            open={editModalVisible}
            item={editItem}
            onSave={saveEditedItem}
            onCancel={() => setEditModalVisible(false)}
          />
        )}
      </Suspense>
    </div>
  );
};

export default TestComp;
