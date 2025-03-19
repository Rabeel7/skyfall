import CVEMonitorSection from "@/components/CVEMonitorSection";
import CyberNewsFeedCard from "@/components/CyberNewsFeedCard";
import Divider from "@/components/Divider";
import IconImage from "@/components/IconImage";
import LeftSideSection from "@/components/LeftSideSection";
import HeaderTitle from "@/components/reuseablleUI/HeaderTitle";
import RightSideSection from "@/components/RightSideSection";
import StatsCard from "@/components/StatsCard";
import Image from "next/image";

const statsData = [
  {
    title: "Active Ransomware Groups",
    iconSrc: "/icons/stats_box_icons.png",
    mainValue: 62,
    totalLabel: "Total Groups:",
    totalValue: "264",
  },
  {
    title: "Recent Attack & Victims",
    iconSrc: "/icons/stats_box_icon2.png",
    mainValue: 162,
    totalLabel: "Last Month:",
    totalValue: "96",
  },
  {
    title: "TTPs",
    iconSrc: "/icons/stats_box_icon3.png",
    mainValue: 162,
    totalLabel: "",
    totalValue: "",
  },
  {
    title: "Post & Announcement",
    iconSrc: "/icons/stats_box_icon4.png",
    mainValue: 162,
    totalLabel: "Recent Post:",
    totalValue: "2 hr ago",
  },
  {
    title: "Potential Targets",
    iconSrc: "/icons/stats_box_icon5.png",
    mainValue: 162,
    totalLabel: "Total Targets:",
    totalValue: "06",
  },
];

export default function Home() {
  return (
    <div className="Dash1 w-[100vw] bg-back text-border py-[27px] px-[30px]">
      {/* layer1  */}
      {/* <h1 className="text-accent text-14">Hello</h1> */}
      <div className="layer1 cursor-pointer bg-white p-[16px] mb-[17px] flex items-center justify-start border-1 rounded-[10px] gap-[1rem] h-[50px] w-[250px]">
        <div className="text-13 font-bold leading-[140%]">
          + Add Threat Source
        </div>
        <div className="text-13 color-neutral">: google.com</div>
      </div>

      {/* layer2 */}
      <div className="layer2 gap-[12px] mb-[17px] flex flex-row items-baseline justify-start flex-wrap">
        {/* Card1 */}
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            iconSrc={stat.iconSrc}
            mainValue={stat.mainValue}
            totalLabel={stat.totalLabel}
            totalValue={stat.totalValue}
          />
        ))}
      </div>

      {/* layer 3 */}
      <div className="Layer3 gap-[21px] flex flex-wrap flex-col md:flex-row items-normal justify-start w-full overflow-x-auto">
        <LeftSideSection />

        <RightSideSection />
      </div>

      {/* layer4  */}
      <CVEMonitorSection />

      <div className="flex flex-row flex-wrap gap-[19px]">
        {/* layer5  */}
        <div className="L5 bg-white w-[570px] flex flex-col flex-wrap rounded-[8px] ">
          <HeaderTitle
            title="Threat Intelligence"
            iconSrc="/icons/openLink.png"
            iconAlt="Open Link"
            linkShow={false}
          />

          <div className="flex flex-row flex-wrap gap-[9px] px-[17px] py-[14px]">
            <Image
              src="/icons/google.svg"
              alt="Calendar Icon"
              width={100}
              height={64}
            />
            <Image
              src="/icons/facebook.svg"
              alt="Calendar Icon"
              width={100}
              height={64}
            />
            <Image
              src="/icons/teslap.png"
              alt="Calendar Icon"
              width={100}
              height={64}
            />
            <Image
              src="/icons/google.svg"
              alt="Calendar Icon"
              width={100}
              height={64}
            />
            <Image
              src="/icons/facebook.svg"
              alt="Calendar Icon"
              width={100}
              height={64}
            />
          </div>
        </div>

        {/* layer6 */}
        <div className="L6 bg-white flex flex-col rounded-[8px] ">
          <HeaderTitle
            title="Industry-Specific Threats"
            iconSrc="/icons/openLink.png"
            iconAlt="Open Link"
            linkShow={true}
          />

          <div className="flex flex-row flex-wrap gap-[9px] px-[17px] py-[14px]">
            <Image
              src="/icons/aerospace.svg"
              alt="Calendar Icon"
              width={100}
              height={64}
            />
            <Image
              src="/icons/agriculture.svg"
              alt="Calendar Icon"
              width={100}
              height={64}
            />

            <Image
              src="/icons/chemical.svg"
              alt="Calendar Icon"
              width={100}
              height={64}
            />
            <Image
              src="/icons/construction.svg"
              alt="Calendar Icon"
              width={100}
              height={64}
            />
            <Image
              src="/icons/education.svg"
              alt="Calendar Icon"
              width={100}
              height={64}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
