import React from "react";
import HeaderTitle from "./reuseablleUI/HeaderTitle";

const CVEMonitorRightSection = () => {
  return (
    <div className="DOVbyCVSS bg-white w-full flex flex-col rounded-[8px] overflow-hidden">
      <HeaderTitle
        title="Distribution of Vulnerabilities by CVSS Scores"
        iconSrc="/icons/openLink.png"
        iconAlt="Open Link"
        linkShow={false}
      />

      <div className="wrapper pt-0 pb-[1rem] px-[47px]">
        {/* <div className="Card">
          <div className="Title grid grid-cols-10 gap-x-[60px] mb-[6px]">
            <div className="Vuner text-right text-14 lh-129 col-span-2">
              Vulnerabilities
            </div>

            <div className="Vuner text-14 lh-140 lh-129 col-span-8">
              CVSS Score Range
            </div>
          </div>

          <div className="Data grid grid-cols-12 gap-x-[60px]">
            <ColorBar text="0-1" colorCode="#41479B" power={1} />
            <ColorBar text="0-2" colorCode="#FF0000" power={2} />
            <ColorBar text="0-3" colorCode="#00FF00" power={3} />
            <ColorBar text="0-4" colorCode="#0000FF" power={4} />
            <ColorBar text="0-5" colorCode="#FFFF00" power={5} />
            <ColorBar text="0-6" colorCode="#FF00FF" power={6} />
          </div>
        </div> */}
        <div className="Card mt-[22px]">
          <div className="title flex flex-row gap-[60px] ">
            <div className="Vuner font-normal text-[#1A1B1F] text-14 leading-[140%] text-right w-[93px] h-[20px]">
              Vulnerabilities
            </div>

            <div className="Vuner font-normal text-[#1A1B1F] text-14 leading-[140%] text-left w-[274px] h-[20px]">
              CVSS Score Range
            </div>
          </div>

          {/* rows  */}
          <DatasetRow value="2330" range="0-1" color="#09B509" width="57px" />
          <DatasetRow value="2330" range="1-2" color="#17CF17" width="12px" />
          <DatasetRow value="2330" range="2-3" color="#D1FF00" width="55px" />
          <DatasetRow value="2330" range="3-4" color="#FFE000" width="122px" />
          <DatasetRow value="2330" range="5-6" color="#FF4B55" width="111px" />
          <DatasetRow value="2330" range="7-8" color="#FF4B55" width="90px" />
          <DatasetRow value="2330" range="9+" color="#FF4B55" width="90px" />
        </div>
      </div>
    </div>
  );
};

export default CVEMonitorRightSection;

function ColorBar({ text = "0-1", colorCode = "#41479B", power = 1 }) {
  // Scale the width of the ColorBar based on the power value
  const barWidth = power * 40; // Adjust the multiplier as needed

  return (
    <>
      <div className="Vuner col-span-2 text-right text-14 lh-129 font-bold text-[#41479B] ">
        2330
      </div>
      <div className="Vuner col-span-10 flex flex-row gap-[17px] items-center">
        <div className="text-left text-14 font-bold lh-129 text-#000000">
          {text}
        </div>
        <div
          className="ColorBar h-[7px]"
          style={{ backgroundColor: colorCode, width: `${barWidth}px` }}
        ></div>
      </div>
    </>
  );
}

const DatasetRow = ({ value, range, color, width }) => {
  return (
    <div className="dataset flex flex-row gap-[60px] mb-[8px]">
      <div className="text font-bold text-[#41479B] text-18 leading-[140%] text-right w-[93px] h-[20px]">
        {value}
      </div>

      <div className="Vuner flex gap-[17px] items-center font-bold text-[#1A1B1F] text-14 leading-[140%] text-left w-[274px] h-[30px]">
        {range}
        <div
          className="ColorBox h-[7px]"
          style={{ backgroundColor: color, width: width }}
        ></div>
      </div>
    </div>
  );
};
