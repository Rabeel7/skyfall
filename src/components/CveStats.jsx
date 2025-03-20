import React from "react";

const CveStats = ({ createdCount, updatedCount, code }) => {
  return (
    <div className="ContextText flex flex-col w-[230px]">
      <div className="line1 font-normal text-[#1A1B1F] text-14 leading-[129%]">
        <span className="font-bold text-[#41479B] text-18 leading-[140%]">
          {createdCount}&nbsp;
        </span>
        <span className="">CVEs Created, </span>
        <span className="font-bold text-[#41479B] text-18 leading-[140%]">
          {updatedCount}&nbsp;
        </span>
        <span>CVEs </span>
        <span>{code}</span>
      </div>
    </div>
  );
};

export default CveStats;
