import React from "react";
import HeaderTitle from "./reuseablleUI/HeaderTitle";
import DonutChart from "./reuseablleUI/DonutChart";
import TableUI from "./reuseablleUI/TableUI";
import DistributionTable from "./DistributionTable";

const CVEMonitorSection = () => {
  return (
    <div className="CVEMonitorSection flex flex-col mb-[19px] w-full ">
      <div className="Heading font-bold text-18 leading-[140%] mt-[15px] mb-[11px]">
        CVE Monitor
      </div>

      <div className="Capsule flex flex-row flex-wrap gap-[19px]">
        {/* LeftSection  */}
        <div className="NewCVEs bg-white w-[570px] h-[400px] flex flex-col rounded-[8px] shadow-custom pb-[26px]">
          <HeaderTitle
            title="New/Updated CVEs"
            iconSrc="/icons/openLink.png"
            iconAlt="Open Link"
            linkShow={false}
          />

          <div className="ChartDiv flex flex-row mt-[22px] ml-[76px] mr-[37px] mb-[6px] gap-[87px]">
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

          <div className="ab">
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

        {/* Right Section  */}
        <div className="DOVbyCVSS bg-white w-[570px] flex flex-col rounded-[8px] shadow-custom ">
          <HeaderTitle
            title="Distribution of Vulnerabilities by CVSS Scores"
            iconSrc="/icons/openLink.png"
            iconAlt="Open Link"
            linkShow={false}
          />

          <div className="Card mt-[22px] mx-[47px]">
            <div className="title flex flex-row gap-[60px] ">
              <div className="Vuner font-normal text-[#1A1B1F] text-14 leading-[140%] text-right w-[93px] h-[20px]">
                Vulnerabilities
              </div>

              <div className="Vuner font-normal text-[#1A1B1F] text-14 leading-[140%] text-left w-[274px] h-[20px]">
                CVSS Score Range
              </div>
            </div>

            {/* rows  */}
            <div className="dataset flex flex-row gap-[60px] mb-[8px]">
              <div className="text font-bold text-[#41479B] text-18 leading-[140%] text-right w-[93px] h-[20px]">
                2330
              </div>

              <div className="Vuner flex gap-[10px] items-center font-bold text-[#1A1B1F] text-14 leading-[140%] text-left w-[274px] h-[30px]">
                0-1
                <div className="ColorBox bg-[#09B509] h-[7px] w-[57px]"></div>
              </div>
            </div>

            <div className="dataset flex flex-row gap-[60px] mb-[8px]">
              <div className="text font-bold text-[#41479B] text-18 leading-[140%] text-right w-[93px] h-[20px]">
                2330
              </div>

              <div className="Vuner flex gap-[10px] items-center font-bold text-[#1A1B1F] text-14 leading-[140%] text-left w-[274px] h-[30px]">
                1-2
                <div className="ColorBox bg-[#17CF17] h-[7px] w-[12px] #D1FF00"></div>
              </div>
            </div>
            <div className="dataset flex flex-row gap-[60px] mb-[8px]">
              <div className="text font-bold text-[#41479B] text-18 leading-[140%] text-right w-[93px] h-[20px]">
                2330
              </div>

              <div className="Vuner flex gap-[10px] items-center font-bold text-[#1A1B1F] text-14 leading-[140%] text-left w-[274px] h-[30px]">
                2-3
                <div className="ColorBox bg-[#D1FF00] h-[7px] w-[55px]"></div>
              </div>
            </div>
            <div className="dataset flex flex-row gap-[60px] mb-[8px]">
              <div className="text font-bold text-[#41479B] text-18 leading-[140%] text-right w-[93px] h-[20px]">
                2330
              </div>

              <div className="Vuner flex gap-[10px] items-center font-bold text-[#1A1B1F] text-14 leading-[140%] text-left w-[274px] h-[30px]">
                3-4
                <div className="ColorBox bg-[#FFE000] h-[7px] w-[122px] "></div>
              </div>
            </div>
            <div className="dataset flex flex-row gap-[60px] mb-[8px]">
              <div className="text font-bold text-[#41479B] text-18 leading-[140%] text-right w-[93px] h-[20px]">
                2330
              </div>

              <div className="Vuner flex gap-[10px] items-center font-bold text-[#1A1B1F] text-14 leading-[140%] text-left w-[274px] h-[30px]">
                5-6
                <div className="ColorBox bg-[#FF4B55] h-[7px] w-[211px]"></div>
              </div>
            </div>
            <div className="dataset flex flex-row gap-[60px] mb-[8px]">
              <div className="text font-bold text-[#41479B] text-18 leading-[140%] text-right w-[93px] h-[20px]">
                2330
              </div>

              <div className="Vuner flex gap-[10px] items-center font-bold text-[#1A1B1F] text-14 leading-[140%] text-left w-[274px] h-[30px]">
                7-8
                <div className="ColorBox bg-secondary-light h-[10px] w-[90px]"></div>
              </div>
            </div>
            <div className="dataset flex flex-row gap-[60px]">
              <div className="text font-bold text-[#41479B] text-18 leading-[140%] text-right w-[93px] h-[20px]">
                2330
              </div>

              <div className="Vuner flex gap-[10px] items-center font-bold text-[#1A1B1F] text-14 leading-[140%] text-left w-[274px] h-[30px]">
                9+
                <div className="ColorBox bg-secondary-light h-[10px] w-[90px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVEMonitorSection;

const CveStats = ({ createdCount, updatedCount, code }) => {
  return (
    <div className="ContextText flex flex-col w-[230px]">
      <div className="line1">
        <span className="font-bold text-[#41479B] text-18 leading-[140%]">
          {createdCount}&nbsp;
        </span>
        <span className="font-normal text-[#1A1B1F] text-14 leading-[140%]">
          CVEs Created,{" "}
        </span>
        <span className="font-bold text-[#41479B] text-18 leading-[140%]">
          {updatedCount}&nbsp;
        </span>
        <span className="font-normal text-[#1A1B1F] text-14 leading-[140%]">
          CVEs{" "}
        </span>
        <span className="font-normal text-[#1A1B1F] text-14 leading-[140%]">
          {code}
        </span>
      </div>
    </div>
  );
};
