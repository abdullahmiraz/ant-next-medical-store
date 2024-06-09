import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import TaskForm from "../TaskForm/TaskForm";
import { useRouter } from "next/navigation";

const EditModal = ({ modalOpen, setModalOpen, record }) => {
  const router = useRouter();
  const [open, setOpen] = useState(modalOpen);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  useEffect(() => {
    setOpen(modalOpen);
  }, [modalOpen]);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      setModalOpen(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
    setModalOpen(false);
  };

  return (
    <Modal
      style={{ marginTop: "-2.2rem" }}
      title="Edit your task"
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      footer={null}
    >
      <TaskForm record={record} />
    </Modal>
  );
};

export default EditModal;
