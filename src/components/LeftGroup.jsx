import React from "react";
import RecentAttackVictimCard from "./RecentAttackVictimCard";
import HeaderTitle from "./reuseablleUI/HeaderTitle";
import UIButton from "./reuseablleUI/UIButton";

const LeftGroup = () => {
  return (
    <div className="LeftSide gap-[1rem] col-span-5 md:col-span-3">
      {/* L  */}
      <div className="LeftBox1 bg-white flex flex-col rounded-[8px] h-[134px] mb-[18px]">
        {/* A */}
        <HeaderTitle
          title="Active Ransomware Groups"
          iconSrc="/icons/openLink.png"
          iconAlt="Open Link"
          link={"/active-ransomware-groups"}
        />

        <div className="A2 flex flex-col gap-[8px] pt-[16px] pr-[27px] pb-[26px] pl-[24px]">
          <div className="TitleLine w-full font-medium text-12 flex flex-row align-baseline items-center">
            <div className="a flex-[3] font-medium text-12 leading-[100%] text-black">
              Slug
            </div>
            <div className="b flex-[3] font-medium text-12 leading-[100%] text-black">
              Title
            </div>
            <div className="c flex-[3] font-medium text-12 leading-[100%] text-black">
              fqdn
            </div>
          </div>
          <div className="SubjectLine w-full font-medium text-12 flex flex-row align-baseline items-center">
            <div className="a flex-[3] truncate text-neutral-dark leading-[100%]">
              http://basemmnnqwxe...
            </div>

            <div className="b flex-[3] truncate leading-[100%] text-black">
              Home
            </div>
            <div className="c flex-[3] truncate text-neutral-dark leading-[100%]">
              basemmnnqwxevlymli5bs36o5ynti55xojzvn246spahniugwkff2pad.onion
            </div>
          </div>
        </div>
      </div>
      <div className="LeftBox2 bg-white rounded-[8px] h-[344px] mb-[18px]">
        <HeaderTitle
          title="Recent Attack and Victims"
          iconSrc="/icons/openLink.png"
          iconAlt="Open Link"
          link="/recent-attack-victims"
        />

        {/* You are making recent attack victim card  */}
        <div className="CardContainer w-full flex bg-white py-[15px] pl-[14px]  rounded-[8px] gap-[15px] no-scrollbar overflow-x-auto">
          {/* Card  */}
          <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
          <RecentAttackVictimCard iconSrc={"/icons/rav2.svg"} />
          <RecentAttackVictimCard iconSrc={"/icons/rav2.svg"} />
        </div>
      </div>

      <div className="Layer4 bg-white rounded-[8px] mb-[18px] pb-[8px]">
        <HeaderTitle
          title="Ransomware TTPs (Tactics, Techniques and Procedures)"
          iconSrc="/icons/openLink.png"
          iconAlt="Open Link"
          link="/ransomware-ttps"
        />

        <div className="Card flex gap-[6px] flex-wrap ml-[14px] mt-[16px] mr-[19px] mb-[14px]">
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
        </div>
      </div>

      <div className="Layer5 bg-white rounded-[8px]">
        <HeaderTitle
          title="Ransomware Group Posts and Announcements:"
          iconSrc="/icons/openLink.png"
          iconAlt="Open Link"
          link={"/group-posts"}
        />

        <div className="TableGrid pb-[15px] pl-[24px] pt-[12px] pr-[129px] ">
          {/* Header  */}
          <div className="Header grid grid-cols-4 mb-[15px] gap-x-[1rem] lg:gap-x-[70px]">
            <div className="text1 col-span-1 para lh-140 font-medium">Date</div>
            <div className="text2 col-span-2 para lh-140 font-medium">Time</div>
            <div className="text3 col-span-1 para lh-140 font-medium">
              Group
            </div>
          </div>

          <div className="Header grid grid-cols-4 mb-[15px] gap-x-[1rem] gap-y-[15px] lg:gap-x-[70px]">
            {data.map((item) => (
              <React.Fragment key={item.id}>
                <div className="text1 col-span-1 para">{item.date}</div>
                <div className="text2 col-span-2 para">{item.description}</div>
                <div className="text3 col-span-1 para">{item.author}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftGroup;

const data = [
  {
    id: 1,
    date: "01-24-2024",
    description: "Security breach of CAPCOM network",
    author: "ragnarlocker",
  },
  {
    id: 2,
    date: "01-24-2024",
    description: "Security breach of CAPCOM network",
    author: "ragnarlocker",
  },
  {
    id: 3,
    date: "01-24-2024",
    description: "Security breach of CAPCOM network",
    author: "ragnarlocker",
  },
  {
    id: 4,
    date: "01-24-2024",
    description: "Security breach of CAPCOM network",
    author: "ragnarlocker",
  },
  {
    id: 5,
    date: "01-24-2024",
    description: "Security breach of CAPCOM network",
    author: "ragnarlocker",
  },
  {
    id: 6,
    date: "01-24-2024",
    description: "Security breach of CAPCOM network",
    author: "ragnarlocker",
  },
  {
    id: 7,
    date: "01-24-2024",
    description: "Security breach of CAPCOM network",
    author: "ragnarlocker",
  },
];
