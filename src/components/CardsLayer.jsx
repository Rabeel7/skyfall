import React from "react";
import StatsCard from "./StatsCard";

const CardsLayer = () => {
  return (
    <div className="Layer2 gap-[12px] mb-[17px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-baseline">
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
  );
};

export default CardsLayer;

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
