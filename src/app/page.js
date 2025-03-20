import AddThreatBtn from "@/components/AddThreatBtn";
import CardsLayer from "@/components/CardsLayer";
import CVEMonitorSection from "@/components/CVEMonitorSection";
import CyberNewsFeedCard from "@/components/CyberNewsFeedCard";
import Divider from "@/components/Divider";
import IconImage from "@/components/IconImage";
import IndustrySpecificThreatCards from "@/components/IndustrySpecificThreatCards";
import LeftSideSection from "@/components/LeftSideSection";
import HeaderTitle from "@/components/reuseablleUI/HeaderTitle";
import RightSideSection from "@/components/RightSideSection";
import StatsCard from "@/components/StatsCard";
import ThreatIntelligenceCards from "@/components/ThreatIntelligenceCards";
import Image from "next/image";

export default function Home() {
  return (
    <div className="Dash1 w-[100vw] h-full bg-back text-border py-[27px] px-[30px]">
      {/* L1  */}
      <AddThreatBtn />

      {/* L2*/}
      <CardsLayer />

      {/* layer 3 */}
      <div className="Layer3 gap-[21px] grid grid-cols-5">
        <LeftSideSection />
        <RightSideSection />
      </div>

      {/* layer4  */}
      <CVEMonitorSection />

      {/* layer5  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[19px]">
        <ThreatIntelligenceCards />
        <IndustrySpecificThreatCards />
      </div>
    </div>
  );
}
