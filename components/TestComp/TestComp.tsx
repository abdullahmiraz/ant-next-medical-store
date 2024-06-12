"use client";

import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { getInventoryDetails } from "../../api";

interface Item {
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
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsData = await getInventoryDetails();
        setItems(itemsData.medicine);
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

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    onSelect: (record: Item, selected: boolean) => {
      if (selected) {
        setSelectedRows((prevSelectedRows) => [...prevSelectedRows, record.id]);
      } else {
        setSelectedRows((prevSelectedRows) =>
          prevSelectedRows.filter((rowId) => rowId !== record.id)
        );
      }
    },
    onSelectAll: (
      selected: boolean,
      selectedRows: Item[],
      changeRows: React.Key[]
    ) => {
      if (selected) {
        setSelectedRows((prevSelectedRows) => [
          ...prevSelectedRows,
          ...changeRows.map((row) => row.toString()),
        ]);
      } else {
        setSelectedRows((prevSelectedRows) =>
          prevSelectedRows.filter((rowId) => !changeRows.includes(rowId))
        );
      }
    },
  };

  const generateColumns = (data: Item[]): TableColumnsType<Item> => {
    if (!data || data.length === 0) return [];

    const columns: TableColumnsType<Item> = [
      {
        title: "",
        dataIndex: "",
        key: "checkbox",
      },
      ...Object.keys(data[0]).map((key: string) => ({
        title: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " "),
        dataIndex: key,
        key,
        render: (text: string | number | boolean) =>
          typeof text === "boolean" ? (text ? "Yes" : "No") : text,
      })),
    ];

    return columns;
  };

  return (
    <div>
      <Table
        columns={generateColumns(items)}
        dataSource={items}
        rowKey={(record) => record.id}
        rowSelection={rowSelection}
        onRow={(record: Item) => {
          return {
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
          };
        }}
      />
    </div>
  );
};

export default TestComp;
