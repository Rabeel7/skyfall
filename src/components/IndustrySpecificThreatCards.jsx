import React from "react";
import HeaderTitle from "./reuseablleUI/HeaderTitle";
import Image from "next/image";

const IndustrySpecificThreatCards = () => {
  return (
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
  );
};

export default IndustrySpecificThreatCards;
