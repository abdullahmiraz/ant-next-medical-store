import { Button, Modal } from "antd";
import React, { useRef } from "react";
import jsPDF from "jspdf";
import { EditModalProps } from "../../EditModal/EditModal.types";

const ProductViewPrint: React.FC<EditModalProps> = ({
  visible,
  item,
  onCancel,
}) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (!componentRef.current) return;

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    pdf.html(componentRef.current, {
      callback: () => {
        pdf.save("product_details.pdf");
      },
      x: 10,
      y: 10,
      html2canvas: {
        scale: 0.43, // Adjust scale as needed to fit content within page
        width: pageWidth,
        height: pageHeight,
      },
    });
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
      footer={
        <div className="flex justify-end mb-4">
          <Button type="primary" onClick={handlePrint}>
            Print as PDF
          </Button>
        </div>
      }
    >
      <div className="p-4">
        <div ref={componentRef} className="border p-4 bg-white">
          <h2 className="text-center text-2xl font-bold mb-4">
            Product Details
          </h2>
          <table className="min-w-full bg-white border">
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Name:</td>
                <td className="px-4 py-2">{item.name}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-2 font-semibold">Category:</td>
                <td className="px-4 py-2">{item.category}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Type:</td>
                <td className="px-4 py-2">{item.type}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-2 font-semibold">Price:</td>
                <td className="px-4 py-2">${item.price}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Stock:</td>
                <td className="px-4 py-2">{item.stock}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-2 font-semibold">Manufacturer:</td>
                <td className="px-4 py-2">{item.manufacturer}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Expiry Date:</td>
                <td className="px-4 py-2">{item.expiry_date}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-2 font-semibold">Batch Number:</td>
                <td className="px-4 py-2">{item.batch_number}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Aisle Location:</td>
                <td className="px-4 py-2">{item.aisle_location}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-2 font-semibold">
                  Prescription Required:
                </td>
                <td className="px-4 py-2">
                  {item.prescription_required ? "Yes" : "No"}
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
