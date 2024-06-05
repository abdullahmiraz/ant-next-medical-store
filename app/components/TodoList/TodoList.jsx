import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import { useRef, useState } from "react";
import { findDOMNode } from "react-dom";
import ReactDOM from "react-dom";
import Highlighter from "react-highlight-words";
import EditModal from "../EditModal/EditModal";
import { DownloadTableExcel } from "react-export-table-to-excel";
import * as XLSX from "xlsx"; // Import the XLSX library
import jsPDF from "jspdf";
import "jspdf-autotable";

const TodoList = ({ todos }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editRecord, setEditRecord] = useState(null);
  const tableRef = useRef(null); // Reference for table

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

  const handleExcelDownload = () => {
    const node = findDOMNode(tableRef.current);
    if (node) {
      const tableElement = node.querySelector("table");
      if (tableElement) {
        const ws = XLSX.utils.table_to_sheet(tableElement);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Tasks");
        XLSX.writeFile(wb, "tasks.xlsx");
      }
    }
  };

  const handlePdfDownload = () => {
    if (tableRef.current && tableRef.current.querySelector("table")) {
      const doc = new jsPDF();

      const table = tableRef.current.querySelector("table");
      const columnsToSkip = table.querySelectorAll(
        "th:last-child, td:last-child"
      ); // Select last column headers and cells

      columnsToSkip.forEach((column) => (column.style.display = "none")); // Hide the last column

      doc.autoTable({
        html: table,
        startY: 10,
        styles: {
          overflow: "linebreak", // Ensure text doesn't overlap
        },
      });

      columnsToSkip.forEach((column) => (column.style.display = "")); // Restore display of the last column

      doc.save("tasks.pdf");
    } else {
      console.error("Table content not found or empty");
    }
  };

  return (
    <>
      <div className="flex justify-end gap-4 my-2">
        <Button
          className="float-right"
          icon={<DownloadOutlined />}
          onClick={handleExcelDownload}
        >
          Export to Excel
        </Button>

        <Button
          className="float-right"
          icon={<DownloadOutlined />}
          onClick={handlePdfDownload}
        >
          Export to PDF
        </Button>
      </div>

      <div ref={tableRef}>
        <Table columns={columns} dataSource={filteredTodos} />
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
