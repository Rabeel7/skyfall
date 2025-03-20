import Image from "next/image";
import React from "react";
import IconBox from "@/components/reuseablleUI/IconBox";
import UIButton from "@/components/reuseablleUI/UIButton";

const RecentAttackVictimCard = ({ iconSrc }) => {
  return (
    <div className="Card bg-white p-[10px] w-[349px] h-[267px] flex flex-row border-[#E0E0E0] border-[1px] rounded-[8px] ">
      <div className="LeftCardSection mr-[15px] gap-[14px] flex flex-col ">
        <Image
          src={iconSrc || ""}
          alt="Icon"
          width={100}
          height={75}
          className="box1 w-full flex items-center"
        />

        <div className="box2 flex flex-col gap-[7.5px]">
          <div className="text font-normal text-11 leading-[100%] whitespace-nowrap">
            Ransomware Group:
          </div>
          <UIButton title={"Incrason"} className="bg-[#FF4B55]" />
        </div>

        <div className="box3 flex flex-col">
          <div className="text text-11 font-normal text-[#1A1B1F] leading-[140%]">
            Discovery Date:
          </div>
          <div className="text-11 text-[#8C97B5] leading-[140%] font-normal">
            2025-01-27 00:19
          </div>
        </div>

        <div className="box4 flex flex-col">
          <div className="text leading-[140%] text-11 font-normal text-[#1A1B1F]">
            Sector:
          </div>
          <div className="text leading-[140%] text-11 font-bold text-[#41479B]">
            Healthcare
          </div>
        </div>

        <div className="mt-auto">
          <IconBox />
        </div>
      </div>

      <div className="min-h-[246px] border-[#DEE7F7] border-[0.5px] w-[2px] self-stretch bg-black "></div>

      <div className="RightCardSection gap-[11px] flex flex-col ml-[15px] w-[247px] ">
        <div className="text font-bold text-14 leading-[140%] text-black">
          International AIDS Vaccine Initiative (iavi.org)  
        </div>
        <div className="texting-grey">
          The International AIDS Vaccine Initiative (IAVI) is a global
          not-for-profit, public-private partnership working to accelerate the
          development of vaccines to prevent HIV infection and AIDS. IAVI
          researches and develops vaccine candidates, conducts policy analyses,
          serves as an advocate for the HIV prevention field and engages
          communities in the trial process and AIDS vaccine education.
        </div>
        <div className="flex flex-row gap-[13px] mt-auto">
          <div className="text font-normal text-10 leading-[100%]">Victim:</div>
          <IconBox />
        </div>
      </div>
    </div>
  );
};

export default RecentAttackVictimCard;
