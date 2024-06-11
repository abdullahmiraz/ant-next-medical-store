import { Table } from "antd";
import { useRef } from "react";
import TaskBar from "../TaskBar/TaskBar";
import styled from "styled-components";

interface Props {
  columns: any[];
  filteredItems: any[];
}

const StyledTable = styled(Table)`
  .ant-table-measure-row:hover {
    background-color: lightblue;
  }
  .ant-table-row:hover {
    background-color: lightblue;
  }
  ant-table-wrapper .ant-table-tbody > tr > td {
    transition: none;
  }
`;

const ExportAsFile: React.FC<Props> = ({ columns, filteredItems }) => {
  const tableRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <TaskBar tableRef={tableRef} />
      <div ref={tableRef}>
        <StyledTable
          columns={columns}
          dataSource={filteredItems}
          pagination={{ pageSize: 10 }}
          scroll={{
            x: 1300,
          }}
        />
      </div>
    </div>
  );
};

export default ExportAsFile;
