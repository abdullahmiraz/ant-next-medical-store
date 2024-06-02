import React from "react";
import { UserOutlined, PlusOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Search from "antd/es/input/Search";
import InputModal from "../InputModal/InputModal";

const onSearch = (value, _e, info) => console.log(info?.source, value);

const TaskBar = () => {
  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <div>
      <Layout
        style={{
          borderRadius: "1rem",
          background: "#fff",
          marginBottom: "1rem",
          border: "1px solid red",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: ".5rem",
          }}
        >
          <div>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              background: "white",
              gap: "1rem",
            }}
          >
            <div>
              {/* <Button
                onClick={handleToggleModal}
                type="primary"
                icon={<PlusOutlined />}
              >
                Open Modal
              </Button> */}
              <InputModal />
            </div>
            <MailOutlined />
            
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default TaskBar;
