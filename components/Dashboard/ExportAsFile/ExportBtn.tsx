import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { ExportBtnProps } from "./ExportBtn.types";

const ExportBtn: React.FC<ExportBtnProps> = ({ tableData }) => {
  const handleExcelDownload = () => {
    if (tableData?.length > 0) {
      const ws = XLSX.utils.json_to_sheet(tableData);
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

      const tableRows = tableData.map((item) => [
        item.id,
        item.name,
        item.category,
        item.type,
        item.price,
        item.stock,
        item.manufacturer,
        item.expiry_date,
        item.batch_number,
        item.aisle_location,
        item.prescription_required ? "Yes" : "No",
      ]);

      doc.autoTable({
        head: [
          [
            "ID",
            "Name",
            "Category",
            "Type",
            "Price",
            "Stock",
            "Manufacturer",
            "Expiry Date",
            "Batch Number",
            "Aisle Location",
            "Prescription Required",
          ],
        ],
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
