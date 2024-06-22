import { Button, Form, Input, Modal, Switch, message } from "antd";
import React, { useState } from "react";
import { updateProduct } from "../../../api";
import { EditModalProps } from "./EditModal.types";
import "./EditModal.css";

const EditModal: React.FC<EditModalProps> = ({
  visible,
  item,
  onSave,
  onCancel,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      const updatedData = {
        ...item,
        ...values,
      };
      await updateProduct(item.id, updatedData);
      message.success("Product updated successfully");
      onSave();
    } catch (error) {
      console.error("Failed to update product:", error);
      message.error("Failed to update product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title={[
        <div
          className="text-center text-2xl font-bold  border-b-2  py-1 w-full"
          key="edit"
        >
          Edit Product
        </div>,
      ]}
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button
          key="save"
          type="primary"
          loading={loading}
          onClick={handleSave}
        >
          Save
        </Button>,
      ]}
    >
      <Form
        form={form}
        initialValues={item}
        layout="vertical"
        onFinish={handleSave}
        className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter product name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please enter product category" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="type"
          label="Type"
          rules={[{ required: true, message: "Please enter product type" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Please enter product price" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="stock"
          label="Stock"
          rules={[{ required: true, message: "Please enter product stock" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="manufacturer"
          label="Manufacturer"
          rules={[{ required: true, message: "Please enter manufacturer" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="expiry_date"
          label="Expiry Date"
          rules={[{ required: true, message: "Please enter expiry date" }]}
        >
          <Input type="date" />
        </Form.Item>
        <Form.Item
          name="batch_number"
          label="Batch Number"
          rules={[{ required: true, message: "Please enter batch number" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="aisle_location"
          label="Aisle Location"
          rules={[{ required: true, message: "Please enter aisle location" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="prescription_required"
          label="Prescription Required"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
