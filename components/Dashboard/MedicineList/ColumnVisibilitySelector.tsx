import React from "react";
import { Checkbox, Dropdown, Button, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

interface ColumnVisibilitySelectorProps {
  columns: string[];
  visibleColumns: string[];
  onChange: (checkedValues: string[]) => void;
}

const ColumnVisibilitySelector: React.FC<ColumnVisibilitySelectorProps> = ({
  columns,
  visibleColumns,
  onChange,
}) => {
  // Remove the last column from the columns array
  const columnsExcludingLast = columns.slice(0, -1);

  const menu = (
    <Menu>
      {columnsExcludingLast.map((column) => (
        <Menu.Item key={column}>
          <Checkbox
            onChange={(e) => {
              const checkedColumns = e.target.checked
                ? [...visibleColumns, column]
                : visibleColumns.filter((col) => col !== column);
              onChange(checkedColumns);
            }}
            checked={visibleColumns.includes(column)}
          >
            {column.charAt(0).toUpperCase() +
              column.slice(1).replace(/_/g, " ")}
          </Checkbox>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]} placement="bottomLeft">
      <Button>
        Select Columns <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default ColumnVisibilitySelector;
