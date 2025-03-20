import Image from "next/image";
import React from "react";
import CyberNewsFeedCard from "./CyberNewsFeedCard";
import HeaderTitle from "./reuseablleUI/HeaderTitle";
import NewsRightBar from "./reuseablleUI/NewsRightBar";

const RightSideSection = () => {
  return (
    <div className="col-span-5 md:col-span-2">
      <NewsRightBar />
    </div>
  );
};

export default RightSideSection;
