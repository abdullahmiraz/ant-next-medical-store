// ModalComp.tsx

import React from "react";
import { Modal } from "antd";
import { Item } from "../TestComp/TestComp";

interface ModalCompProps {
  visible: boolean;
  itemData: Item;
  onCancel: () => void;
  onSave: (updatedItem: Item) => void;
}

const ModalComp: React.FC<ModalCompProps> = ({
  visible,
  itemData,
  onCancel,
  onSave,
}) => {
  const handleSave = () => {
    // Implement save logic here
    onSave(itemData); // Example: Just pass back the item data for now
  };

  return (
    <Modal
      title="Edit Item"
      visible={visible}
      onCancel={onCancel}
      onOk={handleSave}
    >
      {/* Your form fields go here */}
      <p>ID: {itemData.id}</p>
      <p>Name: {itemData.name}</p>
      {/* Add other fields as needed */}
    </Modal>
  );
};

export default ModalComp;
