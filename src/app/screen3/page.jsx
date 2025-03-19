import RecentAttackVictimCard from "@/components/RecentAttackVictimCard";
import BackBtn from "@/components/reuseablleUI/BackBtn";
import Card from "@/components/reuseablleUI/Card";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="Screen3 px-[16px] py-[14px] bg-back h-full flex flex-row flex-wrap gap-[12px]">
      <div className="seperationDiv flex flex-col">
        <BackBtn />
        <Card className="p-[1rem] rounded-[8px] pl-[14px] pt-[16px] pr-[12px] pb-[15px] flex flex-row flex-wrap gap-[12px]">
          <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
          <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
          <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
          <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
          <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
          <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
          <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
          <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
          <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
        </Card>
      </div>
    </div>
  );
};

export default page;
