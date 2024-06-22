import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { ExportBtnProps } from "./ExportBtn.types";

const ExportBtn: React.FC<ExportBtnProps> = ({ tableData, visibleColumns }) => {
  const handleExcelDownload = () => {
    if (tableData?.length > 0) {
      // Filter table data based on visible columns
      const filteredData = tableData.map((item) => {
        const filteredItem = {};
        visibleColumns.forEach((column) => {
          filteredItem[column] = item[column];
        });
        return filteredItem;
      });

      const ws = XLSX.utils.json_to_sheet(filteredData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Medicine List");
      XLSX.writeFile(wb, "medicine_list.xlsx");
    } else {
      console.error("Table data is empty");
    }
  };

  const handlePdfDownload = () => {
    if (tableData?.length > 0) {
      const doc = new jsPDF();

      // Filter table data based on visible columns
      const tableRows = tableData.map((item) => {
        return visibleColumns?.map((column) => item[column]);
      });

      const tableHeaders = visibleColumns.map(
        (column) =>
          column.charAt(0).toUpperCase() + column.slice(1).replace(/_/g, " ")
      );

      doc.autoTable({
        head: [tableHeaders],
        body: tableRows,
        startY: 10,
        styles: {
          overflow: "linebreak",
        },
      });

      doc.save("medicine_list.pdf");
    } else {
      console.error("Table data is empty");
    }
  };

  const menuItems = [
    {
      key: "1",
      label: <div onClick={handleExcelDownload}>Export to Excel</div>,
    },
    {
      key: "2",
      label: <div onClick={handlePdfDownload}>Export to PDF</div>,
    },
  ];

  return (
    <Dropdown menu={{ items: menuItems }}>
      <Button>
        <Space>
          Export
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default ExportBtn;
