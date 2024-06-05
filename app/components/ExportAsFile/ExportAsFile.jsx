import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  DownloadOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Input, Menu, Space, Table, Tooltip } from "antd"; // Import Tooltip
import { useRef, useState } from "react";
import { findDOMNode } from "react-dom";
import ReactDOM from "react-dom";
import Highlighter from "react-highlight-words";
import EditModal from "../EditModal/EditModal";
import { DownloadTableExcel } from "react-export-table-to-excel";
import * as XLSX from "xlsx"; // Import the XLSX library
import jsPDF from "jspdf";
import "jspdf-autotable";
import dayjs from "dayjs";
import styles from "./ExportAsFile.module.css"; // Import CSS module
import ExportBtn from "./ExportBtn";
//
const ExportAsFile = ({ tableCol, filteredTodos }) => {
  const tableRef = useRef(null); // Reference for table

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
    <div>
      <ExportBtn
        handlePdfDownload={handlePdfDownload}
        handleExcelDownload={handleExcelDownload}
      />
      <div ref={tableRef}>
        <Table
          columns={tableCol}
          dataSource={filteredTodos}
          rowClassName={styles.customRow}
          pagination={true}
          scroll={{
            x: 1300,
          }}
        />
      </div>
    </div>
  );
};

export default ExportAsFile;
