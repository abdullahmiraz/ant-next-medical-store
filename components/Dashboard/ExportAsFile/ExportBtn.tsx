import { Modal, Table } from "antd";
import jsPDF from "jspdf";
import "jspdf-autotable";
import React, { useRef } from "react";
import { EditModalProps } from "../EditModal/EditModal.types";

const ProductViewPrint: React.FC<EditModalProps> = ({
  visible,
  item,
  onCancel,
}) => {
  const tableRef = useRef<Table<any>>(null);

  const handlePdfDownload = () => {
    if (!tableRef.current) return;

    const doc = new jsPDF();

    // Set initial y position for the table
    let startY = 20;

    // Prepare table data
    const tableRows = [
      ["Name", item.name],
      ["Category", item.category],
      ["Type", item.type],
      ["Price", `$${item.price}`],
      ["Stock", item.stock],
      ["Manufacturer", item.manufacturer],
      ["Expiry Date", item.expiry_date],
      ["Batch Number", item.batch_number],
      ["Aisle Location", item.aisle_location],
      ["Prescription Required", item.prescription_required ? "Yes" : "No"],
    ];

    // Configure styles and options for the table
    const tableStyles = { startY, styles: { overflow: "linebreak" } };
    const tableColumns = [
      { header: "Property", dataKey: 0 },
      { header: "Value", dataKey: 1 },
    ];

    // Add the table to the PDF document
    doc.autoTable(tableColumns, tableRows, tableStyles);

    // Save the PDF
    doc.save("product_details.pdf");
  };

  return (
    <Modal
      title={[
        <div
          className="text-center text-2xl font-bold border-b-2 py-1 w-full"
          key="edit"
        >
          Edit Product
        </div>,
      ]}
      visible={visible}
      onCancel={onCancel}
    >
      <div className="p-4">
        <div className="border p-4 bg-white">
          <h2 className="text-center text-2xl font-bold mb-4">
            Product Details
          </h2>
          <Table ref={tableRef} className="min-w-full bg-white border">
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Name:</td>
                <td className="px-4 py-2">{item?.name}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-2 font-semibold">Category:</td>
                <td className="px-4 py-2">{item?.category}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Type:</td>
                <td className="px-4 py-2">{item?.type}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-2 font-semibold">Price:</td>
                <td className="px-4 py-2">${item?.price}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Stock:</td>
                <td className="px-4 py-2">{item?.stock}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-2 font-semibold">Manufacturer:</td>
                <td className="px-4 py-2">{item?.manufacturer}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Expiry Date:</td>
                <td className="px-4 py-2">{item?.expiry_date}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-2 font-semibold">Batch Number:</td>
                <td className="px-4 py-2">{item?.batch_number}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Aisle Location:</td>
                <td className="px-4 py-2">{item?.aisle_location}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-2 font-semibold">
                  Prescription Required:
                </td>
                <td className="px-4 py-2">
                  {item?.prescription_required ? "Yes" : "No"}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </Modal>
  );
};

export default ProductViewPrint;
