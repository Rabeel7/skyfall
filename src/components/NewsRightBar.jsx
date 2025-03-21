import Image from "next/image";
import React from "react";
import CyberNewsFeedCard from "./CyberNewsFeedCard";
import HeaderTitle from "./reuseablleUI/HeaderTitle";

const NewsRightBar = () => {
  return (
    <div className="col-span-5 md:col-span-2">
      <div className="NewsRightBar w-full rounded-[8px] bg-bgColors-light overflow-y-auto max-w-[540px] ml-auto">
        <HeaderTitle
          title="Cyber News Feed"
          iconSrc="/icons/openLink.png"
          iconAlt="Open Link"
          linkShow={false}
        />
        <div className="MainLeftBox flex flex-row flex-wrap  pl-[26px] pt-[17px] pr-[25px] pb-[16px] gap-[10px] w-full  h-[435px] md:h-[919px] no-scrollbar overflow-y-auto">
          {/* CyberNewsFeedCards */}
          {newsFeedData.map((news, index) => (
            <CyberNewsFeedCard
              key={index}
              iconSrc={news.iconSrc}
              category={news.category}
              title={news.title}
              date={news.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsRightBar;

const newsFeedData = [
  {
    iconSrc: "/icons/cnf1.svg",
    category: "Network Security / Vulnerability",
    title:
      "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
    date: "Jan 23, 2025",
  },
  {
    iconSrc: "/icons/cnf2.svg",
    category: "Network Security / Vulnerability",
    title:
      "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
    date: "Jan 23, 2025",
  },
  {
    iconSrc: "/icons/cnf3.svg",
    category: "Network Security / Vulnerability",
    title:
      "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
    date: "Jan 23, 2025",
  },
  {
    iconSrc: "/icons/cnf4.svg",

    category: "Network Security / Vulnerability",
    title:
      "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
    date: "Jan 23, 2025",
  },
  {
    iconSrc: "/icons/cnf5.svg",

    category: "Network Security / Vulnerability",
    title:
      "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
    date: "Jan 23, 2025",
  },
  {
    iconSrc: "/icons/cnf2.svg",

    category: "Network Security / Vulnerability",
    title:
      "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
    date: "Jan 23, 2025",
  },
  {
    iconSrc: "/icons/cnf6.svg",

    category: "Network Security / Vulnerability",
    title:
      "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
    date: "Jan 23, 2025",
  },
  {
    iconSrc: "/icons/cnf7.svg",

    category: "Network Security / Vulnerability",
    title:
      "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
    date: "Jan 23, 2025",
  },
  {
    iconSrc: "/icons/cnf7.svg",

    category: "Network Security / Vulnerability",
    title:
      "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
    date: "Jan 23, 2025",
  },
  {
    iconSrc: "/icons/cnf7.svg",

    category: "Network Security / Vulnerability",
    title:
      "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
    date: "Jan 23, 2025",
  },
];
