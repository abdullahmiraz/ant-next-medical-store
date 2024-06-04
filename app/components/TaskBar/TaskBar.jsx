import { Breadcrumb, Button, Layout } from "antd";
import InputModal from "../InputModal/InputModal";

const onSearch = (value, _e, info) => console.log(info?.source, value);

const TaskBar = () => {
  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };
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
          {/* <div>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
            />
          </div> */}
          <Breadcrumb style={{ margin: "0px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              background: "white",
              gap: "1rem",
            }}
          >
            <div className="flex gap-4">
              <Button type={"primary"}>Print/XL/Docx</Button>
              <InputModal />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default TaskBar;
