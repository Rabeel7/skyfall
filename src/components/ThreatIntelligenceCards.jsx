import React from "react";
import HeaderTitle from "./reuseablleUI/HeaderTitle";
import Image from "next/image";

const ThreatIntelligenceCards = () => {
  return (
    <div className="L5 bg-white w-full flex flex-col flex-wrap rounded-[8px] ">
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
  );
};

export default ThreatIntelligenceCards;
