import React from "react";
import HeaderTitle from "./reuseablleUI/HeaderTitle";
import DonutChart from "./reuseablleUI/DonutChart";
import CVEStats from "./CveStats";
import CveStats from "./CveStats";

const CVEMonitorLeftSection = () => {
  return (
    <div className="NewCVEs bg-white w-full h-auto flex flex-col rounded-[8px] pb-[26px]">
      <HeaderTitle
        title="New/Updated CVEs"
        iconSrc="/icons/openLink.png"
        iconAlt="Open Link"
        linkShow={false}
      />

      <div className="ChartDiv flex flex-row md:mt-[22px] md:ml-[76px] md:mr-[37px] md:pb-[6px] mt-[22px] ml-[76px] mr-[37px] mb-[0px]  gap-[1rem] flex-wrap">
        <DonutChart />
        <div className="flex flex-col gap-[5px]">
          <CveStats
            createdCount={200}
            updatedCount={500}
            code={"updated since yesterday"}
          />
          <CveStats
            createdCount={1013}
            updatedCount={2104}
            code={"updated in last 7 days"}
          />
          <CveStats
            createdCount={3933}
            updatedCount={7720}
            code={"updated in last 30 days"}
          />
        </div>
      </div>

      <div className="ab mb-[1rem] md:mb-0">
        <div className="font-bold mt-[10px] text-[##1A1B1F] text-14 leading-[140%] w-full text-center mb-[3px]">
          Know exploited vulnerabilities
        </div>

        <div className="ExpoitedVunerabilities w-full h-[46px] flex flex-row items-center justify-between pl-[46px] pr-[41px]">
          <div className="A h-[46px] w-[107px]">
            <div className="text font-normal text-[#1A1B1F] text-14 leading-[140%] text-center">
              Since Yesterday
            </div>
            <div className="text font-bold text-[#41479B] text-18 leading-[140%] text-center">
              0
            </div>
          </div>
          <div className="A h-[46px] w-[107px]">
            <div className="text font-normal text-[#1A1B1F] text-14 leading-[140%] text-center">
              Last 7 days
            </div>
            <div className="text font-bold text-[#41479B] text-18 leading-[140%] text-center">
              1
            </div>
          </div>
          <div className="A h-[46px] w-[107px]">
            <div className="text font-normal text-[#1A1B1F] text-14 leading-[140%] text-center">
              Last 30 days
            </div>
            <div className="text font-bold text-[#41479B] text-18 leading-[140%] text-center">
              12
            </div>
          </div>
        </div>
      </div>

      <div className="ba">
        <div className="font-bold text-[##1A1B1F] text-14 leading-[140%] w-full text-center mt-[6px] mb-[3px]">
          Recent EPSS score changes
        </div>

        <div className="ExpoitedVunerabilities w-full flex flex-row items-center justify-between px-[46px]">
          <div className="A h-[46px] w-[107px]">
            <div className="text font-normal text-[#1A1B1F] text-14 leading-[140%] text-center">
              &gt;5%
            </div>
            <div className="text font-bold text-[#41479B] text-18 leading-[140%] text-center">
              10
            </div>
          </div>
          <div className="A h-[46px] w-[107px]">
            <div className="text font-normal text-[#1A1B1F] text-14 leading-[140%] text-center">
              &gt;10%
            </div>
            <div className="text font-bold text-[#41479B] text-18 leading-[140%] text-center">
              4
            </div>
          </div>
          <div className="A h-[46px] w-[107px]">
            <div className="text font-normal text-[#1A1B1F] text-14 leading-[140%] text-center">
              &gt;50%
            </div>
            <div className="text font-bold text-[#41479B] text-18 leading-[140%] text-center">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVEMonitorLeftSection;
