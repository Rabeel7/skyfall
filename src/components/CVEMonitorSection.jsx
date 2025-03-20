import React from "react";
import HeaderTitle from "./reuseablleUI/HeaderTitle";
import DonutChart from "./reuseablleUI/DonutChart";
import TableUI from "./reuseablleUI/TableUI";
import DistributionTable from "./DistributionTable";
import CVEMonitorLeftSection from "./CVEMonitorLeftSection";
import CVEMonitorRightSection from "./CVEMonitorRightSection";

const CVEMonitorSection = () => {
  return (
    <div className="CVEMonitorSection flex flex-col mb-[19px] w-full ">
      <div className="Heading font-bold text-18 leading-[140%] mt-[15px] mb-[11px]">
        CVE Monitor
      </div>

      <div className="Capsule grid grid-cols-1 lg:grid-cols-2 gap-[19px]">
        {/* LeftSection  */}
        <CVEMonitorLeftSection />

        {/* Right Section  */}
        <CVEMonitorRightSection />
      </div>
    </div>
  );
};

export default CVEMonitorSection;
