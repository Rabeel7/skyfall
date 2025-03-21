"use client";
import React, { useState } from "react";

const DropdownUI = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="para flex flex-row justify-between border-[1px] border-[#D3DBF1] focus:outline-none rounded-[6px] w-[121px] h-[40px] px-[16px] pt-[12px] pb-[13px] items-center bg-whtie text-[#666666]"
        type="button"
        style={{ background: "white" }}
      >
        {title}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
          style={{
            height: "14px",
            width: " 7.56px",
            color: "#666666",
          }}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
        >
          <ul
            className="text-sm text-gray-700 dark:text-gray-200 flex flex-col gap-[8px] rounded-[6px] bg-white p-[6px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)]"
            aria-labelledby="dropdownDefaultButton"
          >
            {data.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block rounded-[4px] bg-red text-para  py-[6px] px-[10px] text-black hover:text-white hover:bg-gradient-to-r from-[#6E3EA0] to-[#3D54A5]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownUI;
