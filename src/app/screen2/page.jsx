import RecentAttackVictimCard from "@/components/RecentAttackVictimCard";
import BackBtn from "@/components/reuseablleUI/BackBtn";
import Card from "@/components/reuseablleUI/Card";
import PaginationRow from "@/components/reuseablleUI/PaginationRow";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="Screen2 px-[16px] py-[14px] bg-back h-full flex flex-row flex-wrap gap-[12px]">
      <div className="seperationDiv flex-col w-full h-[100vh]">
        <Link href="/">
          <BackBtn />
        </Link>

        <Card className="flex flex-col p-[1rem] rounded-[8px] pl-[14px] pt-[16px] pr-[12px] pb-[15px]">
          <div className="grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-4 gap-[12px]">
            <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
            <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
            <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
            <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
            <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
            <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
            <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
            <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
            <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
          </div>
          <div className="Pagination flex items-center justify-end">
            <PaginationRow />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default page;
