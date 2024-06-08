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
import TaskBar from "../TaskBar/TaskBar";
//
const ExportAsFile = ({ tableCol, filteredTodos }) => {
  const tableRef = useRef(null); // Reference for table

  return (
    <div>
      <TaskBar tableRef={tableRef} />
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
