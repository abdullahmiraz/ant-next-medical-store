"use client";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import dayjs from "dayjs";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import EditModal from "../EditModal/EditModal";
import ExportAsFile from "../ExportAsFile/ExportAsFile";

const TodoList = ({ todos }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editRecord, setEditRecord] = useState(null);
  const tableRef = useRef(null);

  const handleEdit = (record) => {
    setEditRecord(record);
    setModalOpen(true);
  };

  const handleDelete = (record) => {
    // Yet to implement
    alert("Deleted record:", record);
  };

  const [searchText, setSearchText] = useState({
    name: "",
    category: "",
    type: "",
    expiry_date: "",
  });

  const handleSearch = (e, dataIndex) => {
    const value = e.target.value;
    setSearchText((prevState) => ({
      ...prevState,
      [dataIndex]: value,
    }));
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: false,
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: searchText[dataIndex] ? "#1677ff" : undefined,
        }}
      />
    ),
    render: (text) =>
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

  const filteredTodos = todos?.filter((todo) => {
    return (
      todo.name.toLowerCase().includes(searchText.name.toLowerCase()) &&
      todo.category.toLowerCase().includes(searchText.category.toLowerCase()) &&
      todo.type.toLowerCase().includes(searchText.type.toLowerCase()) &&
      todo.expiry_date
        .toLowerCase()
        .includes(searchText.expiry_date.toLowerCase())
    );
  });

  const columns = [
    {
      title: (
        <div>
          <div>Name</div>
          <Input
            placeholder="Search name"
            value={searchText.name}
            onChange={(e) => handleSearch(e, "name")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: "name",
      key: "name",
      width: "20%",
      fixed: "left",
      ...getColumnSearchProps("name"),
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: (
        <div>
          <div>Category</div>
          <Input
            placeholder="Search category"
            value={searchText.category}
            onChange={(e) => handleSearch(e, "category")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: "category",
      key: "category",
      width: "10%",
      ...getColumnSearchProps("category"),
      sorter: (a, b) => a.category.localeCompare(b.category),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: (
        <div>
          <div>Type</div>
          <Input
            placeholder="Search type"
            value={searchText.type}
            onChange={(e) => handleSearch(e, "type")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: "type",
      key: "type",
      width: "10%",
      ...getColumnSearchProps("type"),
      sorter: (a, b) => a.type.localeCompare(b.type),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: (
        <div>
          <div>Price</div>
          <Input
            placeholder="Search price"
            value={searchText.price}
            onChange={(e) => handleSearch(e, "price")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: "price",
      key: "price",
      width: "10%",
      ...getColumnSearchProps("price"),
      sorter: (a, b) => a.price - b.price,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: (
        <div>
          <div>Stock</div>
          <Input
            placeholder="Search stock"
            value={searchText.stock}
            onChange={(e) => handleSearch(e, "stock")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: "stock",
      key: "stock",
      width: "10%",
      ...getColumnSearchProps("stock"),
      sorter: (a, b) => a.stock - b.stock,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: (
        <div>
          <div>Manufacturer</div>
          <Input
            placeholder="Search manufacturer"
            value={searchText.manufacturer}
            onChange={(e) => handleSearch(e, "manufacturer")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: "manufacturer",
      key: "manufacturer",
      width: "20%",
      ...getColumnSearchProps("manufacturer"),
      sorter: (a, b) => a.manufacturer.localeCompare(b.manufacturer),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: (
        <div>
          <div>Expiry Date</div>
          <Input
            placeholder="Search expiry date"
            value={searchText.expiry_date}
            onChange={(e) => handleSearch(e, "expiry_date")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: "expiry_date",
      key: "expiry_date",
      width: "10%",
      ...getColumnSearchProps("expiry_date"),
      sorter: (a, b) => new Date(a.expiry_date) - new Date(b.expiry_date),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: (
        <div>
          <div>Batch Number</div>
          <Input
            placeholder="Search batch number"
            value={searchText.batch_number}
            onChange={(e) => handleSearch(e, "batch_number")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: "batch_number",
      key: "batch_number",
      width: "10%",
      ...getColumnSearchProps("batch_number"),
      sorter: (a, b) => a.batch_number.localeCompare(b.batch_number),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: (
        <div>
          <div>Aisle Location</div>
          <Input
            placeholder="Search aisle location"
            value={searchText.aisle_location}
            onChange={(e) => handleSearch(e, "aisle_location")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: "aisle_location",
      key: "aisle_location",
      width: "10%",
      ...getColumnSearchProps("aisle_location"),
      sorter: (a, b) => a.aisle_location.localeCompare(b.aisle_location),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: (
        <div>
          <div>Prescription Required</div>
          <Input
            placeholder="Search prescription required"
            value={searchText.prescription_required}
            onChange={(e) => handleSearch(e, "prescription_required")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: "prescription_required",
      key: "prescription_required",
      width: "10%",
      ...getColumnSearchProps("prescription_required"),
      sorter: (a, b) => a.prescription_required - b.prescription_required,
      sortDirections: ["ascend", "descend"],
      render: (text) => (
        <span style={{ color: text ? "red" : "blue" }}>
          {text ? "True" : "False"}
        </span>
      ),
    },
    {
      title: "Actions",
      width: "10%",
      fixed: "right",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
          <Button
            type="link"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
          />
        </Space>
      ),
    },
  ];

  if (!todos) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className=" ">
        <ExportAsFile tableCol={columns} filteredTodos={filteredTodos} />
      </div>

      {modalOpen && (
        <EditModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          record={editRecord}
        />
      )}
    </>
  );
};

export default TodoList;
