"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button, Input, Space } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { getInventoryDetails } from "../../api";
import EditModal from "../EditModal/EditModal";
import ExportAsFile from "../ExportAsFile/ExportAsFile";

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
}

const MedicineList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsData = await getInventoryDetails();
        setItems(itemsData);
      } catch (error) {
        console.error("Error fetching medical items:", error);
      }
    };

    fetchData();
  }, []);

  console.log(items);

  const [modalOpen, setModalOpen] = useState(false);
  const [editRecord, setEditRecord] = useState<Item | null>(null);
  const tableRef = useRef(null);

  const handleEdit = (record: Item) => {
    setEditRecord(record);
    setModalOpen(true);
  };

  const handleDelete = (record: Item) => {
    alert("Deleted record:" + record);
  };

  const [searchText, setSearchText] = useState({
    id: "",
    name: "",
    category: "",
    type: "",
    expiry_date: "",
  });

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement>,
    dataIndex: string
  ) => {
    const value = e.target.value;
    setSearchText((prevState) => ({
      ...prevState,
      [dataIndex]: value,
    }));
  };

  const getColumnSearchProps = (dataIndex: string) => ({
    filterDropdown: false,
    filterIcon: (filtered: boolean) => (
      <SearchOutlined
        style={{
          color: searchText[dataIndex] ? "#1677ff" : undefined,
        }}
      />
    ),
    render: (text: string) =>
      searchText[dataIndex] ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText[dataIndex]]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const filteredItems = items?.filter((item) => {
    return (
      item?.name.toLowerCase().includes(searchText.name.toLowerCase()) &&
      item?.category
        .toLowerCase()
        .includes(searchText.category.toLowerCase()) &&
      item?.type.toLowerCase().includes(searchText.type.toLowerCase()) &&
      item?.expiry_date
        .toLowerCase()
        .includes(searchText.expiry_date.toLowerCase())
    );
  });

  const columns = [
    {
      title: (
        <div>
          <div className="text-center">id</div>
          <Input
            placeholder="Search id"
            value={searchText?.id}
            onChange={(e) => handleSearch(e, "id")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: "id",
      key: "id",
      width: "5%",
      fixed: "left",
      ...getColumnSearchProps("id"),
      sorter: (a: Item, b: Item) => String(a.id).localeCompare(String(b.id)),
      sortDirections: ["ascend", "descend"],
    },
    // Other columns...
  ];

  if (!items) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className=" ">
        <ExportAsFile columns={columns} filteredItems={filteredItems} />
      </div>
    </>
  );
};

export default MedicineList;
