import React from "react";

const UIButton = ({ title, className = "" }) => {
  return (
    <button
      type="button"
      className={`para text-white hover:bg-blue-800  font-bold rounded-[30px] px-[14px] py-[3.5px] focus:outline-none w-min ${className}`}
    >
      {title}
    </button>
  );
};

export default UIButton;
