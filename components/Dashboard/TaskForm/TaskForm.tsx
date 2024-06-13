import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, Upload } from "antd";
import React, { createContext, FC, useContext, useMemo } from "react";

interface MyFormItemProps {
  name?: string | string[];
}

const MyFormItemContext = createContext<string[]>([]);

function toArr(str: string | string[]): string[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = useContext(MyFormItemContext);
  const concatPath = useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );

  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

const MyFormItem = ({ name, ...props }) => {
  const prefixPath = useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  return <Form.Item name={concatName} {...props} />;
};

const TaskForm: FC = () => {
  const onFinish = (value: any) => {
    console.log(value);
  };

  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
      <MyFormItemGroup>
        <div className="taskform-input-group flex flex-wrap justify-between">
          <MyFormItem name="itemName" label="Item Name">
            <Input />
          </MyFormItem>
          <MyFormItem name="category" label="Category">
            <Input />
          </MyFormItem>

          <MyFormItem name="type" label="Type">
            <Input />
          </MyFormItem>

          <MyFormItem name="price" label="Price">
            <Input />
          </MyFormItem>
          <MyFormItem name="stock" label="Stock">
            <Input />
          </MyFormItem>
          <MyFormItem name="manufacturer" label="Manufacturer">
            <Input />
          </MyFormItem>
          <MyFormItem name="expiryDate" label="Expiry Date">
            <Input />
          </MyFormItem>
          <MyFormItem name="batchNumber" label="Batch Number">
            <Input />
          </MyFormItem>
          <MyFormItem name="aisleNumber" label="Aisle Number">
            <Input />
          </MyFormItem>
          <MyFormItem name="prescriptionRequired" label="Prescription Required">
            <Input />
          </MyFormItem>
          <MyFormItem name="prescriptionRequired" label="Prescription Required">
            <Space direction="vertical" style={{ width: "100%" }} size="large">
              <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture"
                maxCount={1}
              >
                <Button className="" icon={<UploadOutlined />}>
                  Upload (Max: 1)
                </Button>
              </Upload>
            </Space>
          </MyFormItem>
        </div>
      </MyFormItemGroup>

      <Button className="w-full" type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TaskForm;
