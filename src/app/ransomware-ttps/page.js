import BackBtn from "@/components/reuseablleUI/BackBtn";
import UIButton from "@/components/reuseablleUI/UIButton";
import Link from "next/link";
import React from "react";

const page = () => {
  const executionCards = [
    {
      title: "User Execution",
      code: "T1204.002",
      description: "Executes a malicious file on the victim's system.",
    },
    {
      title: "User Execution",
      code: "T1204.002",
      description: "Executes a malicious file on the victim's system.",
    },
    {
      title: "User Execution",
      code: "T1204.002",
      description: "Executes a malicious file on the victim's system.",
    },
    {
      title: "User Execution",
      code: "T1204.002",
      description: "Executes a malicious file on the victim's system.",
    },
    {
      title: "User Execution",
      code: "T1204.002",
      description: "Executes a malicious file on the victim's system.",
    },
  ];
  return (
    <div className="Screen2 px-[16px] py-[14px] bg-back h-full flex flex-col flex-wrap gap-[12px]">
      <Link href="/">
        <BackBtn />
      </Link>

      <div className="bg-white flex flex-col flex-wrap rounded-[8px]">
        <div className="Card flex gap-[6px] flex-wrap mx-[22px] my-[22px]">
          <UIButton
            title={"Akira"}
            className="bg-[#8C97B5] h-[24px] flex items-center"
          />
          <UIButton
            title={"Everest"}
            className="bg-[#8C97B5] h-[24px] flex items-center"
          />
          <UIButton
            title={"Spacebears"}
            className="bg-[#8C97B5] h-[24px] flex items-center"
          />
          <UIButton
            title={"Dragonforce"}
            className="bg-[#8C97B5] h-[24px] flex items-center"
          />
          <UIButton
            title={"Killsec"}
            className="bg-[#8C97B5] h-[24px] flex items-center"
          />
          <UIButton
            title={"Safeplay"}
            className="bg-[#8C97B5] h-[24px] flex items-center"
          />
          <UIButton
            title={"Funksec"}
            className="bg-[#8C97B5] h-[24px] flex items-center"
          />
          <UIButton
            title={"Clop"}
            className="bg-[#8C97B5] h-[24px] flex items-center"
          />
          <UIButton
            title={"Gdlockersec"}
            className="bg-[#8C97B5] h-[24px] flex items-center"
          />
          <UIButton
            title={"Rhysida"}
            className="bg-[#8C97B5] h-[24px] flex items-center"
          />
          <UIButton
            title={"Fog"}
            className="bg-[#8C97B5] h-[24px] flex items-center"
          />
          <UIButton
            title={"Gdlockersec"}
            className="bg-[#8C97B5] h-[24px] flex items-center tracking-normal"
          />
          <UIButton
            title={"Fog"}
            className="bg-[#8C97B5] h-[24px] flex items-center"
          />
          <UIButton
            title={"Gdlockersec"}
            className="bg-[#8C97B5] h-[24px] flex items-center tracking-normal"
          />
        </div>
        <div className="border-t border-[#EEEEEE]"></div>

        <div className="SectionBottom flex flex-col w-full mt-[30px] px-[20px]">
          <p className="para font-bold text-16 lh-140 mb-[30px]">Braincipher</p>

          {/* start  */}
          {/* <p className="headingE para text-[13px] font-bold mb-[12px]">
            Execution
          </p>
          <div className="GridCards grid grid-cols-5 gap-x-[30px]">
            {[0, 1, 2, 4].map((item) => {
              return (
                <div
                  key={item}
                  className="col-span-1 flex flex-col gap-[8px] w-[180px]"
                >
                  <div>
                    <span className="para font-medium">User Execution </span>
                    <span className="para text-[#41479B] font-medium">
                      (T1204.002)
                    </span>
                  </div>

                  <p className="para text-[#666666]">
                    Executes a malicious file on the victim's system.
                  </p>
                </div>
              );
            })}
          </div> */}
          {/* end  */}
          <GridSection title="Execution" cards={executionCards.slice(0, 2)} />
          <GridSection
            title="Defense Evasion"
            cards={executionCards.slice(0, 4)}
          />
          <GridSection title="Discovery " cards={executionCards.slice(0, 2)} />
          <GridSection title="Impact" cards={executionCards.slice(0, 5)} />
        </div>
      </div>
    </div>
  );
};

export default page;

const GridSection = ({ title, cards }) => {
  return (
    <div className="GridSect mb-[30px]">
      <p className="headingE para text-[13px] font-bold mb-[12px]">{title}</p>
      <div className="GridCards grid grid-cols-5 gap-x-[30px]">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, code, description }) => {
  return (
    <div className="col-span-1 flex flex-col gap-[8px] w-[180px]">
      <div>
        <span className="para font-medium">{title} </span>
        <span className="para text-[#41479B] font-medium">({code})</span>
      </div>
      <p className="para text-[#666666]">{description}</p>
    </div>
  );
};
