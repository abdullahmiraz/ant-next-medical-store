"use client";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import EditModal from "../EditModal/EditModal";
// import { useTableExport } from "react-table-export"; // Import library
import Link from "next/link";

const TodoList = ({ todos }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editRecord, setEditRecord] = useState(null);
  const exportRef = useRef(null); // Reference for download button

  const handleEdit = (record) => {
    setEditRecord(record);
    setModalOpen(true);
  };

  const handleDelete = (record) => {
    // yet to do
    alert("Deleted record:", record);
  };

  const [searchText, setSearchText] = useState({
    title: "",
    description: "",
    date: "",
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

  const filteredTodos = todos.filter((todo) => {
    return (
      todo.title.toLowerCase().includes(searchText.title.toLowerCase()) &&
      todo.description
        .toLowerCase()
        .includes(searchText.description.toLowerCase()) &&
      todo.date.toLowerCase().includes(searchText.date.toLowerCase())
    );
  });

  const columns = [
    {
      title: (
        <div>
          <div>Title</div>
          <Input
            placeholder="Search title"
            value={searchText.title}
            onChange={(e) => handleSearch(e, "title")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: "title",
      key: "title",
      width: "30%",
      ...getColumnSearchProps("title"),
    },
    {
      title: (
        <div>
          <div>Description</div>
          <Input
            placeholder="Search description"
            value={searchText.description}
            onChange={(e) => handleSearch(e, "description")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: "description",
      key: "description",
      width: "40%",
      ...getColumnSearchProps("description"),
    },
    {
      title: (
        <div>
          <div>Date</div>
          <Input
            placeholder="Search date"
            value={searchText.date}
            onChange={(e) => handleSearch(e, "date")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: "date",
      key: "date",
      ...getColumnSearchProps("date"),
      sorter: (a, b) => a.date.length - b.date.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Actions",
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

  // const handleExport = () => {
  //   const filteredData = todos.filter((todo) => {
  //     // ... your filtering logic ...
  //   });
  //   exportDataAsExcel({ columns, data: filteredData }); // Export filtered data
  // };

  const handleExport = () => {
    const filteredData = todos.filter((todo) => {
      // ... your filtering logic ...
    });

    const ws = XLSX.utils.json_to_sheet(filteredData); // Convert data to worksheet
    const wb = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(wb, ws, "Tasks"); // Add worksheet to workbook

    /* Optional: Set workbook properties (e.g., sheet name) */
    // wb.SheetNames.push("My Tasks"); // Set sheet name if desired

    XLSX.writeFile(wb, "my_tasks.xlsx"); // Write workbook to a file

    // Simulate a download click to trigger browser behavior
    exportRef.current.click();
  };

  return (
    <>
      <Table columns={columns} dataSource={filteredTodos} />

      {modalOpen && (
        <EditModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          record={editRecord}
        />
      )}
      <Button ref={exportRef} download style={{ border: "1px solid red" }} />
    </>
  );
};

export default TodoList;
