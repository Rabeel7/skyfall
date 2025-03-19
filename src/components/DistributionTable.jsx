import React from "react";

const DistributionTable = ({ columns, data }) => {
  return (
    <table className="border-separate border-spacing-y-[15px] font-medium text-12 leading-[100%] w-[427px]">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th
              key={col}
              //   className={`text-left ${index !== 0 ? "pl-[70px]" : ""}`}
              className={`${
                index === 0 ? "text-right" : "text-left pl-[70px]"
              }`}
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td
                key={colIndex}
                className={`${
                  colIndex === 0 ? "text-right" : "text-left pl-[70px]"
                } font-normal text-12 leading-[100%]`}
              >
                {row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DistributionTable;
