import Image from "next/image";
import React from "react";

const CyberNewsFeedCard = ({ iconSrc, category, title, date }) => {
  return (
    <div className="flex flex-row items-normal gap-[10px] bg-white rounded-[8px] py-[11px] px-[10px] leading-[140%] overflow-hidden text-ellipsis">
      <div className="b1-img min-h-[70px] min-w-[70px]">
        <Image src={iconSrc} alt="Icon" width={70} height={70} />
      </div>
      <div className="b2-content flex flex-row gap-[6px] flex-wrap">
        <div className="font-normal text-11 text-purple leading-[100%] overflow-hidden text-ellipsis">
          {category}
        </div>
        <div className="font-bold text-12 text-black leading-[140%] overflow-hidden text-ellipsis">
          {title}
        </div>
        <div className="CardFooter grid grid-cols-3 gap-[4px] w-full">
          <div className="d1 col-span-1 flex flex-row items-center gap-[6px] leading-[100%] mr-auto">
            <Image
              src="/icons/calendar-icon.png"
              alt="Calendar Icon"
              width={14}
              height={14}
            />
            <div className="date text-10 text-[#8C97B5] font-normal">
              {date}
            </div>
          </div>
          <div className="d2 col-span-1 justify-self-end flex flex-row items-center gap-[6px] cursor-pointer">
            <div className="date text-10 text-[#41479B] font-normal">Save</div>
            <Image
              src="/icons/save-icon.svg"
              alt="Save Icon"
              width={15}
              height={15}
            />
          </div>
          <div className="d3 col-span-1 justify-self-end flex flex-row items-center gap-[6px] cursor-pointer">
            <div className="date text-10 text-[#41479B] font-normal">Share</div>
            <Image
              src="/icons/share-icon.svg"
              alt="Share Icon"
              width={15}
              height={15}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberNewsFeedCard;
