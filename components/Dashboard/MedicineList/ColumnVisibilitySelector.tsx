import React from "react";
import { Checkbox, Dropdown, Button, Space, Menu } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { DownOutlined } from "@ant-design/icons";

interface ColumnVisibilitySelectorProps {
  columns: string[];
  visibleColumns: string[];
  onChange: (checkedValues: CheckboxValueType[]) => void;
}

const ColumnVisibilitySelector: React.FC<ColumnVisibilitySelectorProps> = ({
  columns,
  visibleColumns,
  onChange,
}) => {
  // Remove the last column from the columns array
  const columnsExcludingLast = columns.slice(0, -1);

  const options = columnsExcludingLast.map((column) => ({
    label: column.charAt(0).toUpperCase() + column.slice(1).replace(/_/g, " "),
    value: column,
  }));

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Checkbox.Group options={options} value={visibleColumns} onChange={onChange} />
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button>
        <Space>
          Select Columns
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default ColumnVisibilitySelector;
