"use client";

import { Button, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Highlighter from "react-highlight-words";
import Link from "next/link";
import ExportAsFile from "../ExportAsFile/ExportAsFile";
import { getAllUsersDetails } from "../../api";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await getAllUsersDetails();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  const [searchText, setSearchText] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
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

  const filteredUsers = users?.filter((user) => {
    return (
      user?.id?.toString().includes(searchText.id) &&
      user?.name.toLowerCase().includes(searchText.name.toLowerCase()) &&
      user?.email.toLowerCase().includes(searchText.email.toLowerCase()) &&
      user?.phone.toLowerCase().includes(searchText.phone.toLowerCase()) &&
      user?.address.toLowerCase().includes(searchText.address.toLowerCase())
    );
  });

  const columns = [
    {
      title: (
        <div>
          <div className="text-center">id</div>
          <Input
            placeholder="Search id"
            value={searchText.id}
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
      sorter: (a, b) => String(a.id).localeCompare(String(b.id)),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: (
        <div>
          <div className="text-center">Name</div>
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
      ...getColumnSearchProps("name"),
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: (
        <div>
          <div className="text-center">email</div>
          <Input
            placeholder="Search email"
            value={searchText.email}
            onChange={(e) => handleSearch(e, "email")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: "email",
      key: "email",
      width: "20%",
      ...getColumnSearchProps("email"),
      sorter: (a, b) => a.email.localeCompare(b.email),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: (
        <div>
          <div className="text-center">phone</div>
          <Input
            placeholder="Search phone"
            value={searchText.phone}
            onChange={(e) => handleSearch(e, "phone")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: "phone",
      key: "phone",
      width: "10%",
      ...getColumnSearchProps("phone"),
      sorter: (a, b) => a.phone.localeCompare(b.phone),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: (
        <div>
          <div className="text-center">address</div>
          <Input
            placeholder="Search address"
            value={searchText.address}
            onChange={(e) => handleSearch(e, "address")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: "address",
      key: "address",
      width: "10%",
      ...getColumnSearchProps("address"),
      sorter: (a, b) => a.address.localeCompare(b.address),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: (
        <div>
          <div className="ml-[20%]">Actions</div>
        </div>
      ),
      key: "actions",
      width: "10%",
      fixed: "right",
      render: (text, record) => (
        <Space size="middle">
          <Link href={`/user/${record.id}`}>
            <Button type="link">View</Button>
          </Link>
        </Space>
      ),
    },
  ];

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className=" ">
        <ExportAsFile columns={columns} filteredItems={filteredUsers} />
      </div>
    </>
  );
};

export default UserManagement;
