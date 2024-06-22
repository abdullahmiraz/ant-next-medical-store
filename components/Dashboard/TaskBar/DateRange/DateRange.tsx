import React from "react";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

const DateRange: React.FC = () => (
  <Space direction="vertical" size={12}>
    <RangePicker placeholder={["Select Start Date", "Select Ending Date"]} />
  </Space>
);

export default DateRange;
