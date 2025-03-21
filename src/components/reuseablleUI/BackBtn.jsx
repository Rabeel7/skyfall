import Image from "next/image";
import React from "react";

const BackBtn = ({ className }) => {
  return (
    <div
      className={`btn bg-white border-[1px] border-[#E0E5EC] rounded-[8px] h-[50px] w-[60px] flex items-center justify-center mb-[14px] ${className}`}
    >
      <Image
        src="/icons/arrowVector.svg"
        alt="Calendar Icon"
        width={20}
        height={15}
      />
    </div>
  );
};

export default BackBtn;
