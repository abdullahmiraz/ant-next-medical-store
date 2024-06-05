import React from "react";
import { Button, Dropdown, Input, Menu, Space, Table, Tooltip } from "antd"; // Import Tooltip
import {  
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  DownloadOutlined,
  DownOutlined,
} from "@ant-design/icons";

const ExportBtn = ({ handleExcelDownload, handlePdfDownload }) => {
  return (
    <>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item
              key="1"
              onClick={() => {
                handleExcelDownload();
              }}
            >
              Export to Excel
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => {
                handlePdfDownload();
              }}
            >
              Export to PDF
            </Menu.Item>
          </Menu>
        }
      >
        <Button>
          <Space>
            Export
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </>
  );
};

export default ExportBtn;
