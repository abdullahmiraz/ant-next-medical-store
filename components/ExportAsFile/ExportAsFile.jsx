import { Table } from "antd";
import "jspdf-autotable";
import { useRef } from "react";
import TaskBar from "../TaskBar/TaskBar";
import styles from "./ExportAsFile.module.css";
const ExportAsFile = ({ columns, filteredItems }) => {
  const tableRef = useRef(null);

  return (
    <div>
      <TaskBar tableRef={tableRef} />
      <div ref={tableRef}>
        <Table
          columns={columns}
          dataSource={filteredItems}
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
