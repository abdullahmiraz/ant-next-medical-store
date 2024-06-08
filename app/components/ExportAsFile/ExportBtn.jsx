import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Space } from "antd"; // Import Tooltip
import jsPDF from "jspdf";
import "jspdf-autotable";
import { findDOMNode } from "react-dom";
import * as XLSX from "xlsx"; // Import the XLSX library

const ExportBtn = ({ tableRef }) => {
  const handleExcelDownload = () => {
    // eslint-disable-next-line react/no-find-dom-node
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
