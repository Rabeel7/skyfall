"use client";
import CyberNewsFeedCard from "@/components/CyberNewsFeedCard";
import Divider from "@/components/Divider";
import BackBtn from "@/components/reuseablleUI/BackBtn";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [selectedTab, setSelectedTab] = useState("Data Breaches");

  const newsFeedData = [
    {
      id: 1,
      iconSrc: "/icons/cnf1.svg",
      category: "Network Security / Vulnerability",
      title:
        "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
      date: "Jan 23, 2025",
    },
    {
      id: 2,

      iconSrc: "/icons/cnf2.svg",
      category: "Network Security / Vulnerability",
      title:
        "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
      date: "Jan 23, 2025",
    },
    {
      id: 3,
      iconSrc: "/icons/cnf3.svg",
      category: "Network Security / Vulnerability",
      title:
        "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
      date: "Jan 23, 2025",
    },
    {
      id: 4,
      iconSrc: "/icons/cnf4.svg",
      category: "Network Security / Vulnerability",
      title:
        "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
      date: "Jan 23, 2025",
    },
    {
      id: 5,
      iconSrc: "/icons/cnf5.svg",
      category: "Network Security / Vulnerability",
      title:
        "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
      date: "Jan 23, 2025",
    },
    {
      id: 6,
      iconSrc: "/icons/cnf2.svg",
      category: "Network Security / Vulnerability",
      title:
        "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
      date: "Jan 23, 2025",
    },
    {
      id: 7,
      iconSrc: "/icons/cnf7.svg",
      category: "Network Security / Vulnerability",
      title:
        "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
      date: "Jan 23, 2025",
    },
    {
      id: 8,
      iconSrc: "/icons/cnf7.svg",
      category: "Network Security / Vulnerability",
      title:
        "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
      date: "Jan 23, 2025",
    },
    {
      id: 9,
      iconSrc: "/icons/cnf7.svg",
      category: "Network Security / Vulnerability",
      title:
        "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
      date: "Jan 23, 2025",
    },
  ];

  const dummyData = [
    {
      id: 122,
      iconSrc: "/icons/cnf1.svg",
      category: "Network Security / Vulnerability",
      title:
        "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
      date: "Jan 23, 2025",
    },
    {
      id: 2333,
      iconSrc: "/icons/cnf2.svg",
      category: "Network Security / Vulnerability",
      title:
        "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
      date: "Jan 23, 2025",
    },
    {
      id: 34343,
      iconSrc: "/icons/cnf3.svg",
      category: "Network Security / Vulnerability",
      title:
        "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
      date: "Jan 23, 2025",
    },
    {
      id: 2333443,
      iconSrc: "/icons/cnf2.svg",
      category: "Network Security / Vulnerability",
      title:
        "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
      date: "Jan 23, 2025",
    },
    {
      id: 3434334234,
      iconSrc: "/icons/cnf3.svg",
      category: "Network Security / Vulnerability",
      title:
        "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
      date: "Jan 23, 2025",
    },
  ];

  return (
    <div className="p-[30px] flex flex-col">
      <Link href="/" className="mb-[15px]">
        <BackBtn />
      </Link>

      <div className="MainCol grid grid-cols-2 gap-x-[21px]">
        <div className="Left">
          <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

          <div className="Card bg-white pl-[39px] pt-[32px] pr-[44px] pb-[20px] flex- flex-col rounded-[8px]">
            {dummyData.map((news) => (
              <div key={news.id}>
                {" "}
                {/* Use news.id as the key */}
                <Link href={`/trending-news/${news.id}`}>
                  <CyberNewsFeedCard
                    iconSrc={news.iconSrc}
                    category={news.category}
                    title={news.title}
                    date={news.date}
                    onTrendingNews={true}
                  />
                </Link>
                <Divider />
              </div>
            ))}
            <div className="Pagination flex items-center justify-end mt-[12.5px]">
              <Image
                src="/icons/pagination-icon.svg"
                alt="Calendar Icon"
                width={190}
                height={25}
              />
            </div>
          </div>
        </div>

        {selectedTab !== "Saved News" ? (
          <>
            <div className="Right bg-bgColors-light flex flex-col rounded-[8px] border-[1px] border-[#F4F8FF]">
              <p className="para font-bold text-14 leading-[129%] px-[25px] pt-[15px]">
                Trending News
              </p>
              <Divider className={"border-[#E0E5EC] mt-0"} />
              <div className="px-[26px] py-[17px]">
                {newsFeedData.map((news) => (
                  <div key={news.id}>
                    {" "}
                    {/* Use news.id as the key */}
                    <Link href="/trending-news">
                      <CyberNewsFeedCard
                        iconSrc={news.iconSrc}
                        category={news.category}
                        title={news.title}
                        date={news.date}
                      />
                    </Link>
                    <Divider />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default page;

const Tabs = ({ selectedTab, setSelectedTab }) => {
  const tabs = [
    { id: "111", name: "Data Breaches" },
    { id: "2222", name: "Cyber Attacks" },
    { id: "33333", name: "Vunerabilities" },
    { id: "444444", name: "Expert Insights" },
    { id: "5555555", name: "Saved News" },
  ];

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <ul className="flex flex-row flex-wrap para font-medium lh-100 text-center text-[#8C97B5] border-[#E0E5EC] border-b mb-[30px]">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <a
              href="#"
              onClick={() => handleTabClick(tab.name)}
              className={`flex items-center justify-center text-center px-[15px] py-[7.5px] rounded-t-[10px] w-[112px] h-[30px] para ${
                selectedTab === tab.name
                  ? "text-white bg-gradient-to-r from-[#6E3EA0] to-[#3D54A5] font-bold"
                  : "hover:text-gray-600 hover:bg-gray-50"
              } ${
                tab.name === "Disabled"
                  ? "cursor-not-allowed text-gray-400"
                  : ""
              }`}
            >
              {tab.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
