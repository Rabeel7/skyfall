import AddThreatBtn from "@/components/AddThreatBtn";
import CardsLayer from "@/components/CardsLayer";
import CVEMonitorSection from "@/components/CVEMonitorSection";
import IndustrySpecificThreatCards from "@/components/IndustrySpecificThreatCards";
import LeftGroup from "@/components/LeftGroup";
import NewsRightBar from "@/components/NewsRightBar";
import ThreatIntelligenceCards from "@/components/ThreatIntelligenceCards";

export default function Home() {
  return (
    <div className="Dash1 w-full h-fulltext-border py-[27px] px-[30px]">
      {/* L1  */}
      <AddThreatBtn />

      {/* L2*/}
      <CardsLayer />

      {/* L3 */}
      <div className="Layer3 gap-[21px] grid grid-cols-5">
        <LeftGroup />
        <NewsRightBar />
      </div>

      {/* L4  */}
      <CVEMonitorSection />

      {/* L5  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[19px]">
        <ThreatIntelligenceCards />
        <IndustrySpecificThreatCards />
      </div>
    </div>
  );
}
