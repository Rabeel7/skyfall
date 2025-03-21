import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderTitle = ({
  title,
  iconSrc,
  iconAlt = "Icon",
  className = "",
  linkShow = true,
  link = "",
}) => {
  return (
    <div className={`HeaderTitleBox flex flex-col ${className}`}>
      <div className="flex flex-row items-center justify-between ml-[14px] mt-[13px] mr-[18px] mb-[12px] gap-[14px] ">
        <div className="HeaderTitleDiv text-[#1A1B1F] font-bold text-14 leading-[140%]">
          {title}
        </div>
        {iconSrc && linkShow && (
          <Link href={link} className="cursor-pointer">
            <Image src={iconSrc} alt={iconAlt} width={20} height={20} />
          </Link>
        )}
      </div>

      <div className="border-t border-[#EEEEEE]"></div>
    </div>
  );
};

export default HeaderTitle;
