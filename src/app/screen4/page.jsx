import CyberNewsFeedCardTwo from "@/components/CyberNewsFeedCardTwo";
import BackBtn from "@/components/reuseablleUI/BackBtn";
import Card from "@/components/reuseablleUI/Card";
import React from "react";

const page = () => {
  return (
    <div>
      <Card>
        <BackBtn />
        {newsFeedData.map((news, index) => (
          <CyberNewsFeedCardTwo
            key={index}
            iconSrc={news.iconSrc}
            category={news.category}
            title={news.title}
            date={news.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default page;

const newsFeedData = [
  {
    iconSrc: "/icons/laptop.png",
    category: "Network Security / Vulnerability",
    title:
      "Cisco Fixes Critical Privilege Escalation Flaw in Meeting Management (CVSS 9.9)",
    date: "Jan 23, 2025",
  },
];
