import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, Space } from "antd"; // Import Tooltip
import dayjs from "dayjs";
import "jspdf-autotable";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import EditModal from "../EditModal/EditModal";
import ExportAsFile from "../ExportAsFile/ExportAsFile";

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
      fixed: "left",
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
      sorter: (a, b) => dayjs(a.date).unix() - dayjs(b.date).unix(),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Actions",
      width: "100",
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
