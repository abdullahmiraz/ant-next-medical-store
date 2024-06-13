import { Table } from "antd";
import { useRef, useState } from "react";
import TaskBar from "../TaskBar/TaskBar";
import styled from "styled-components";

const ExportAsFile = ({ columns, filteredItems }) => {
  const [selectedRowKey, setSelectedRowKey] = useState<string | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <TaskBar tableRef={tableRef} />
      <div ref={tableRef}>
        <Table
          columns={columns}
          dataSource={filteredItems}
          pagination={{ pageSize: 10 }}
          scroll={{ x: 1300 }}
          onRow={(record) => ({
            // onClick: () => onRowClick(record),
          })}
          // rowClassName={rowClassName}
        />
      </div>
    </div>
  );
};

export default ExportAsFile;
