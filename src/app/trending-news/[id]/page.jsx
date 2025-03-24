"use client";
import CyberNewsFeedCard from "@/components/CyberNewsFeedCard";
import Divider from "@/components/Divider";
import BackBtn from "@/components/reuseablleUI/BackBtn";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
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
      id: 4324234,
      iconSrc: "/icons/cnf4.svg",
      category: "Network Security / Vulnerability",
      title:
        "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
      date: "Jan 23, 2025",
    },
    {
      id: 5324234,
      iconSrc: "/icons/cnf5.svg",
      category: "Network Security / Vulnerability",
      title:
        "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
      date: "Jan 23, 2025",
    },
    {
      id: 6324234,
      iconSrc: "/icons/cnf2.svg",
      category: "Network Security / Vulnerability",
      title:
        "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
      date: "Jan 23, 2025",
    },
    {
      id: 32437,
      iconSrc: "/icons/cnf7.svg",
      category: "Network Security / Vulnerability",
      title:
        "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
      date: "Jan 23, 2025",
    },
    {
      id: 832,
      iconSrc: "/icons/cnf7.svg",
      category: "Network Security / Vulnerability",
      title:
        "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
      date: "Jan 23, 2025",
    },
    {
      id: 9334,
      iconSrc: "/icons/cnf7.svg",
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
          <div className="Card bg-white pl-[39px] pt-[32px] pr-[44px] pb-[32px] flex flex-col rounded-[8px] gap-[15px]">
            <CyberNewsFeedCard
              iconSrc="/icons/trending-news-icon.svg"
              category="Network Security / Vulnerability"
              title="Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)"
              date="Jan 23, 2025"
              onTrendingNews={true}
              onCard={true}
            />

            <p className="para text-[#8C97B5] ">
              The North Korean threat actor known as the Lazarus Group has been
              observed leveraging a "web-based administrative platform" to
              oversee its command-and-control (C2) infrastructure, giving the
              adversary the ability to centrally supervise all aspects of their
              campaigns.
            </p>
            <p className="para text-[#8C97B5]">
              "Each C2 server hosted a web-based administrative platform, built
              with a React application and a Node.js API," SecurityScorecard's
              STRIKE team said in a new report shared with The Hacker News.
              "This administrative layer was consistent across all the C2
              servers analyzed, even as the attackers varied their payloads and
              obfuscation techniques to evade detection."
            </p>
            <p className="para font-bold text-[#31394F] ">
              International AIDS Vaccine Initiative (iavi.org)  
            </p>
            <p className="para text-[#8C97B5] ">
              The hidden framework has been described as a comprehensive system
              and a hub that allows attackers to organize and manage exfiltrated
              data, maintain oversight of their compromised hosts, and handle
              payload delivery.
            </p>
            <p className="para text-[#8C97B5]  ">
              The web-based admin panel has been identified in connection with a
              supply chain attack campaign dubbed Operation Phantom Circuit
              targeting the cryptocurrency sector and developers worldwide with
              trojanized versions of legitimate software packages that contain
              backdoors.
            </p>
            <p className="para text-[#8C97B5] ">
              The campaign, which took place between September 2024 and January
              2025, is estimated to have claimed 233 victims across the world,
              with most of them identified in Brazil, France, and India. In
              January alone, the activity targeted 110 unique victims in India.
            </p>
            <Image
              className=""
              src="/icons/banner1.svg"
              alt="Calendar Icon"
              width={601}
              height={117}
            />
            <p className="para text-[#8C97B5]  ">
              The North Korean threat actor known as the Lazarus Group has been
              observed leveraging a "web-based administrative platform" to
              oversee its command-and-control (C2) infrastructure, giving the
              adversary the ability to centrally supervise all aspects of their
              campaigns.
            </p>
            <p className="para text-[#8C97B5] ">
              "Each C2 server hosted a web-based administrative platform, built
              with a React application and a Node.js API," SecurityScorecard's
              STRIKE team said in a new report shared with The Hacker News.
              "This administrative layer was consistent across all the C2
              servers analyzed, even as the attackers varied their payloads and
              obfuscation techniques to evade detection."
            </p>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default page;
