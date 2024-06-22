"use client";
import React, { useState } from "react";
import { Button, Modal, Tooltip } from "antd";
import { useRouter } from "next/navigation";
import TaskForm from "../TaskForm/TaskForm";
const InputModal = ({ modalOpen }) => {
  const router = useRouter();
  const [open, setOpen] = useState(modalOpen);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <>
      <Tooltip title="Add a new task">
        <Button type="primary" onClick={showModal}>
          Add
        </Button>
      </Tooltip>
      <Modal
        style={{ marginTop: "-2.2rem" }}
        title={[
          <div
            className="text-center text-2xl font-bold  border-b-2  py-1 w-full"
            key="edit"
          >
            Add Product
          </div>,
        ]}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
        width={800} // Adjust the width here as needed
      >
        <TaskForm />
      </Modal>
    </>
  );
};
export default InputModal;
