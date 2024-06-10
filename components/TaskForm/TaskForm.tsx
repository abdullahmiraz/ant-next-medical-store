import React, { createContext, FC, useContext, useMemo } from "react";
import { Button, DatePicker, Form, Input } from "antd";

interface MyFormItemProps {
  name?: string | string[];
}

const MyFormItemContext = createContext<string[]>([]);

function toArr(str: string | string[]): string[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup: FC<{
  prefix: string | string[];
  children: React.ReactNode;
}> = ({ prefix, children }) => {
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

const MyFormItem: FC<MyFormItemProps> = ({ name, ...props }) => {
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
      <MyFormItemGroup prefix={["user"]}>
        <MyFormItemGroup prefix={["name"]}>
          <MyFormItem name="taskTitle" label="Task Title">
            <Input />
          </MyFormItem>
          <MyFormItem name="taskDesc" label="Task Description">
            <Input />
          </MyFormItem>
        </MyFormItemGroup>

        <MyFormItem name="date" label="Date">
          <DatePicker style={{ width: "100%" }} />
        </MyFormItem>
      </MyFormItemGroup>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TaskForm;
