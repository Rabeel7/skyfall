import React from "react";

const AddThreatBtn = () => {
  return (
    <div className="Layer1 cursor-pointer bg-white p-[16px] mb-[17px] flex items-center justify-start border-1 rounded-[10px] gap-[1rem] h-[50px] w-[250px]">
      <div className="text-13 font-bold leading-[140%]">
        + Add Threat Source
      </div>
      <div className="text-13 color-neutral">: google.com</div>
    </div>
  );
};

export default AddThreatBtn;
