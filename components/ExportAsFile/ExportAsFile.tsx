import { Table } from "antd";
import { useRef, useState } from "react";
import TaskBar from "../TaskBar/TaskBar";
import styled from "styled-components";

interface Props {
  columns: any[];
  filteredItems: any[];
}

const StyledTable = styled(Table)`
  tr:hover {
    background-color: #f5f5f5;
  }

  .ant-table-cell-row-selected {
    background-color: lightblue !important;
  }
`;

const ExportAsFile: React.FC<Props> = ({ columns, filteredItems }) => {
  const [selectedRowKey, setSelectedRowKey] = useState<string | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  const onRowClick = (record: any) => {
    setSelectedRowKey(record.key === selectedRowKey ? null : record.key);
  };

  const rowClassName = (record: any) => {
    return record.key === selectedRowKey ? "ant-table-cell-row-selected" : "";
  };

  return (
    <div>
      <TaskBar tableRef={tableRef} />
      <div ref={tableRef}>
        <StyledTable
          columns={columns}
          dataSource={filteredItems}
          pagination={{ pageSize: 10 }}
          scroll={{ x: 1300 }}
          onRow={(record) => ({
            onClick: () => onRowClick(record),
          })}
          rowClassName={rowClassName}
        />
      </div>
    </div>
  );
};

export default ExportAsFile;
