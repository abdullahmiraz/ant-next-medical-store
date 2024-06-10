"use client";
import { Button, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Highlighter from "react-highlight-words";
import Link from "next/link";
import ExportAsFile from "../ExportAsFile/ExportAsFile";
import { getAllSalesDetails } from "../../api";

const SalesManagement = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const salesData = await getAllSalesDetails();
        setSales(salesData);
      } catch (error) {
        console.error("Error fetching sales:", error);
      }
    };

    fetchData();
  }, []);

  const [searchText, setSearchText] = useState({
    id: "",
    customerName: "",
    orderId: "",
    orderDate: "",
    totalAmount: "",
    status: "",
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

  const filteredSales = sales?.filter((sale) => {
    const { customer, order } = sale ?? {};
    const { name, email, phone, address } = customer ?? {};
    const { orderId, date, total, status, items } = order ?? {};

    // Check if any of the fields match the search text
    return (
      name?.toLowerCase().includes(searchText.name?.toLowerCase()) ||
      email?.toLowerCase().includes(searchText.email?.toLowerCase()) ||
      phone?.toLowerCase().includes(searchText.phone?.toLowerCase()) ||
      address?.toLowerCase().includes(searchText.address?.toLowerCase()) ||
      orderId?.toLowerCase().includes(searchText.orderId?.toLowerCase()) ||
      date?.includes(searchText.date) ||
      total?.toString().includes(searchText.total) ||
      status?.toLowerCase().includes(searchText.status?.toLowerCase()) ||
      // Check if any item name matches the search text
      items?.some((item) =>
        item.name?.toLowerCase().includes(searchText.item?.toLowerCase())
      )
    );
  });

  const columns = [
    {
      title: (
        <div>
          <div className="text-center">ID</div>
          <Input
            placeholder="Search ID"
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
          <div className="text-center">Customer Name</div>
          <Input
            placeholder="Search customer name"
            value={searchText.customerName}
            onChange={(e) => handleSearch(e, "customerName")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: ["customer", "name"], // Accessing nested value
      key: "customerName",
      width: "20%",
      ...getColumnSearchProps("customerName"),
      sorter: (a, b) => a.customer.name.localeCompare(b.customer.name), // Sorting by nested value
      sortDirections: ["ascend", "descend"],
      //   render: (text) => <Input value={text} />,
    },
    {
      title: (
        <div>
          <div className="text-center">Order ID</div>
          <Input
            placeholder="Search order ID"
            value={searchText.orderId}
            onChange={(e) => handleSearch(e, "orderId")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: ["order", "orderId"], // Accessing nested value
      key: "orderId",
      width: "20%",
      ...getColumnSearchProps("orderId"),
      sorter: (a, b) => a.order.orderId.localeCompare(b.order.orderId), // Sorting by nested value
      sortDirections: ["ascend", "descend"],
    },
    {
      title: (
        <div>
          <div className="text-center">Order Date</div>
          <Input
            placeholder="Search order date"
            value={searchText.orderDate}
            onChange={(e) => handleSearch(e, "orderDate")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: ["order", "date"], // Accessing nested value
      key: "orderDate",
      width: "10%",
      ...getColumnSearchProps("orderDate"),
      sorter: (a, b) => new Date(a.order.date) - new Date(b.order.date), // Sorting by nested value
      sortDirections: ["ascend", "descend"],
    },
    {
      title: (
        <div>
          <div className="text-center">Total Amount</div>
          <Input
            placeholder="Search total amount"
            value={searchText.totalAmount}
            onChange={(e) => handleSearch(e, "totalAmount")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: ["order", "total"], // Accessing nested value
      key: "totalAmount",
      width: "10%",
      ...getColumnSearchProps("totalAmount"),
      sorter: (a, b) => a.order.total - b.order.total, // Sorting by nested value
      sortDirections: ["ascend", "descend"],
    },
    {
      title: (
        <div>
          <div className="text-center">Status</div>
          <Input
            placeholder="Search status"
            value={searchText.status}
            onChange={(e) => handleSearch(e, "status")}
            style={{ marginTop: 8 }}
          />
        </div>
      ),
      dataIndex: ["order", "status"], // Accessing nested value
      key: "status",
      width: "10%",
      ...getColumnSearchProps("status"),
      sorter: (a, b) => a.order.status.localeCompare(b.order.status), // Sorting by nested value
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
          <Link href={`/sales/${record.id}`}>
            <Button type="link">View</Button>
          </Link>
        </Space>
      ),
    },
  ];

  if (!sales) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className=" ">
        <ExportAsFile columns={columns} filteredItems={filteredSales} />
      </div>
    </>
  );
};

export default SalesManagement;
