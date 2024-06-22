import React from "react";
import { Checkbox } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

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

  return (
    <div className="bg-slate-300 my-2 p-2 rounded-sm">
      <Checkbox.Group
        options={options}
        value={visibleColumns}
        onChange={onChange}
      />
    </div>
  );
};

export default ColumnVisibilitySelector;
