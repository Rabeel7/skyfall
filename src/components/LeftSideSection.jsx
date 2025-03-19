import React from "react";
import HeaderTitle from "./reuseablleUI/HeaderTitle";
import Image from "next/image";
import IconBox from "./reuseablleUI/IconBox";
import RecentAttackVictimCard from "./RecentAttackVictimCard";
import UIButton from "./reuseablleUI/UIButton";
import TableUI from "./reuseablleUI/TableUI";

const LeftSideSection = () => {
  return (
    <div className="LeftSide gap-[1rem] flex flex-col w-full xl:max-w-[687px]">
      {/* L  */}
      <div className="LeftBox1 bg-white flex flex-col rounded-[8px] h-[134px]">
        {/* A */}
        <HeaderTitle
          title="Active Ransomware Groups"
          iconSrc="/icons/openLink.png"
          iconAlt="Open Link"
        />

        <div className="A2 flex flex-col gap-[8px] pt-[16px] pr-[27px] pb-[26px] pl-[24px]">
          <div className="TitleLine w-full font-medium text-12 flex flex-row align-baseline items-center">
            <div className="a flex-[3] font-medium text-12 leading-[100%]">
              Slug
            </div>
            <div className="b flex-[3] font-medium text-12 leading-[100%]">
              Title
            </div>
            <div className="c flex-[3] font-medium text-12 leading-[100%]">
              fqdn
            </div>
          </div>
          <div className="SubjectLine w-full font-medium text-12 flex flex-row align-baseline items-center">
            <div className="a flex-[3] truncate text-neutral-dark leading-[100%]">
              http://basemmnnqwxe...
            </div>

            <div className="b flex-[3] truncate leading-[100%]">Home</div>
            <div className="c flex-[3] truncate text-neutral-dark leading-[100%]">
              basemmnnqwxevlymli5bs36o5ynti55xojzvn246spahniugwkff2pad.onion
            </div>
          </div>
        </div>
      </div>
      <div className="LeftBox2 bg-white rounded-[8px] h-[344px]">
        <HeaderTitle
          title="Recent Attack and Victims"
          iconSrc="/icons/openLink.png"
          iconAlt="Open Link"
        />
        {/* You are making recent attack victim card  */}
        <div className="CardContainer w-full flex bg-white py-[15px] pl-[14px] overflow-x-auto rounded-[8px] gap-[15px]">
          {/* Card  */}
          <RecentAttackVictimCard iconSrc={"/icons/rav1.svg"} />
          <RecentAttackVictimCard iconSrc={"/icons/rav2.svg"} />
          <RecentAttackVictimCard iconSrc={"/icons/rav2.svg"} />
        </div>
      </div>

      <div className="Layer4 bg-white rounded-[8px] h-[132px]">
        <HeaderTitle
          title="Ransomware TTPs (Tactics, Techniques and Procedures)"
          iconSrc="/icons/openLink.png"
          iconAlt="Open Link"
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

      <div className="Layer5 bg-white rounded-[8px] h-[313px]">
        <HeaderTitle
          title="Ransomware Group Posts and Announcements:"
          iconSrc="/icons/openLink.png"
          iconAlt="Open Link"
        />
        <div className="Table mx-[2rem]">
          <TableUI
            columns={["Date", "Title", "Group"]}
            data={[
              {
                Date: "01-24-2024",
                Title: "Security breach of CAPCOM network",
                Group: "ragnarlocker",
              },
              {
                Date: "02-10-2024",
                Title: "Unauthorized access to financial records",
                Group: "lockbit",
              },
              {
                Date: "03-05-2024",
                Title: "Major data leak from government agency",
                Group: "revil",
              },
              {
                Date: "04-15-2024",
                Title: "Cyber attack on multinational corporation",
                Group: "blackbasta",
              },
              {
                Date: "05-22-2024",
                Title: "Compromised credentials used in attack",
                Group: "alphv",
              },
              {
                Date: "06-30-2024",
                Title: "Ransomware attack on healthcare provider",
                Group: "clop",
              },
              {
                Date: "07-14-2024",
                Title: "Sensitive information stolen from bank",
                Group: "darkside",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSideSection;
