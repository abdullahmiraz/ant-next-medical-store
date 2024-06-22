import { Button, Modal } from "antd";
import React, { useRef } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { EditModalProps } from "../../EditModal/EditModal.types";

const ProductViewPrint: React.FC<EditModalProps> = ({
  open,
  item,
  onCancel,
}) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (!componentRef.current) return;

    const doc = new jsPDF("p", "mm", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Generate table data
    const tableData = generateTableData(item);

    // AutoTable configuration
    doc.autoTable({
      head: [["Attribute", "Value"]],
      body: tableData,
      startY: 20,
      theme: "grid", // Optional - "striped", "grid", "plain"
      margin: { top: 10, left: 13, right: 13, bottom: 10 },
      styles: { overflow: "linebreak" },
      columnStyles: { 0: { fontStyle: "bold" } },
    });

    // Save the PDF
    doc.save("product_details.pdf");
  };

  const generateTableData = (item: any) => {
    return [
      ["Name", item?.name],
      ["Category", item?.category],
      ["Type", item?.type],
      ["Price", `$${item?.price}`],
      ["Stock", item?.stock],
      ["Manufacturer", item?.manufacturer],
      ["Expiry Date", item?.expiry_date],
      ["Batch Number", item?.batch_number],
      ["Aisle Location", item?.aisle_location],
      ["Prescription Required", item?.prescription_required ? "Yes" : "No"],
    ];
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel} // Ensure onCancel is correctly bound to close the modal
      footer={
        <div className="flex justify-end mb-4">
          <Button type="primary" onClick={handlePrint}>
            Print as PDF
          </Button>
        </div>
      }
    >
      <div className="p-4">
        <div ref={componentRef}>
          <h2 className="text-center text-2xl font-bold mb-4">
            Product Details
          </h2>
          <table className="min-w-full bg-white border">
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
          </table>
        </div>
      </div>
    </Modal>
  );
};

export default ProductViewPrint;
