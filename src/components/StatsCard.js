import React from "react";
import Image from "next/image"; // If using Next.js, otherwise replace with an img tag

const StatsCard = ({ title, iconSrc, mainValue, totalLabel, totalValue }) => {
  return (
    <div className="Card min-w-[220px] min-h-[110px] gap-[8px] flex flex-col h-full bg-white rounded-[8px] pt-[13px] pb-[6px] px-[18px] gap-[10.5px ">
      <div className="text-[12px] font-bold">{title}</div>
      <div className="flex flex-row items-center justify-between ">
        <div>
          <Image src={iconSrc} alt="Icon" width={24} height={24} />
        </div>
        <div className="font-bold text-[24px]">{mainValue}</div>
      </div>
      {totalLabel.length > 0 && totalValue.length > 0 ? (
        <>
          <div className="flex flex-row items-cflex bg-white gap-[8px] rounded-[8px] gap-[10.5px justify-between">
            <div className="text-[10px] font-medium leading-[140%]">
              {totalLabel}
            </div>
            <div className="text-[12px] font-bold leading-[140%]">
              {totalValue}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default StatsCard;
