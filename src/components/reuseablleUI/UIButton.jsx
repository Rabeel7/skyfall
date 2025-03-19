import React from "react";

const UIButton = ({ title, className = "" }) => {
  return (
    <button
      type="button"
      className={`text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold text-12 leading-[140%] rounded-[30px] px-[14px] py-[3.5px]  focus:outline-none w-min ${className}`}
    >
      {title}
    </button>
  );
};

export default UIButton;
