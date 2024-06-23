import { Breadcrumb, Button, Layout } from "antd";
import InputModal from "../InputModal/InputModal";
import ExportBtn from "../ExportAsFile/ExportBtn";
import React, { useState } from "react"; // Import React and useState
import DateRange from "./DateRange/DateRange";
import ColumnVisibilitySelector from "../MedicineList/ColumnVisibilitySelector";

const TaskBar = ({
  tableRef,
  filteredItems,
  visibleColumns,
  setVisibleColumns,
}) => {
  // Specify props type
  const [modalOpen, setModalOpen] = useState<boolean>(false); // Initialize modalOpen state

  return (
    <div style={{ marginTop: "-1rem" }}>
      <Layout
        style={{
          borderRadius: ".3rem",
          background: "#fff",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: ".75rem",
          }}
        >
          <Breadcrumb style={{ margin: "0px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="flex gap-2">
            <DateRange />
            <Button type="primary">Search</Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              background: "white",
              gap: "1rem",
            }}
          >
            <ColumnVisibilitySelector
              columns={Object.keys(filteredItems[0] || {}).slice(2, -1)} // Remove the last column from the checkbox options
              visibleColumns={visibleColumns}
              onChange={setVisibleColumns}
            />
            <ExportBtn
              tableData={filteredItems}
              visibleColumns={visibleColumns}
            />
            <div className="flex gap-4">
              <InputModal modalOpen={modalOpen} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default TaskBar;
