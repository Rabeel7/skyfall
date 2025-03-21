"use client";
import { Table } from "antd";
import { useState } from "react";

const AntTable = ({ rowSelectionIsOn = true, data, columns }) => {
  const [selectionType, setSelectionType] = useState("checkbox");
  const [bottom, setBottom] = useState("bottomRight");
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <Table
      rowSelection={
        rowSelectionIsOn
          ? {
              type: selectionType,
              ...rowSelection,
            }
          : false
      }
      columns={columns}
      dataSource={data}
      // pagination={{
      // position: ["bottomRight"],
      // current: 1,
      // total: 20,
      // itemRender: () => <h1 className="para">Hey</h1>,
      // defaultCurrent: 6,
      // total: 500,
      // }}
      pagination={false}
    />
  );
};
export default AntTable;
