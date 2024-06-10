import { Table } from "antd";
import "jspdf-autotable";
import { useRef } from "react";
import TaskBar from "../TaskBar/TaskBar";
import styles from "./ExportAsFile.module.css";

interface Props {
  columns: any[];
  filteredItems: any[];
}

const ExportAsFile: React.FC<Props> = ({ columns, filteredItems }) => {
  const tableRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <TaskBar tableRef={tableRef} />
      <div ref={tableRef}>
        <Table
          columns={columns}
          dataSource={filteredItems}
          rowClassName={styles.customRow}
          pagination={{ pageSize: 10 }} // Set pagination to true with configuration
          scroll={{
            x: 1300,
          }}
        />
      </div>
    </div>
  );
};

export default ExportAsFile;
