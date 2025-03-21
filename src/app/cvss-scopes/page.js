import BackBtn from "@/components/reuseablleUI/BackBtn";
import UIButton from "@/components/reuseablleUI/UIButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  // Example array of security card data
  const securityData = [
    {
      id: 1,
      cve: "CVE-2025-26495",
      description:
        "Cleartext Storage of Sensitive Information vulnerability in Salesforce Tableau Server can record the Personal Access Token (PAT) into logging repositories. This issue affects Tableau Server: before 2022.1.3, before 2021.4.8, before 2021.3.13, before 2021.2.14, before 2021.1.16, before 2020.4.19. Source: Salesforce, Inc.",
      source: "Salesforce Inc",
      maxCVSS: "N/L",
      epssScore: "0.04%",
      publishedDate: "2025-01-23",
      updatedDate: "2025-01-23",
    },
    {
      id: 2,
      cve: "CVE-2025-26495",
      description:
        "Cleartext Storage of Sensitive Information vulnerability in Salesforce Tableau Server can record the Personal Access Token (PAT) into logging repositories. This issue affects Tableau Server: before 2022.1.3, before 2021.4.8, before 2021.3.13, before 2021.2.14, before 2021.1.16, before 2020.4.19. Source: Salesforce, Inc.",
      source: "Salesforce Inc",
      maxCVSS: "N/L",
      epssScore: "0.04%",
      publishedDate: "2025-01-23",
      updatedDate: "2025-01-23",
    },
    {
      id: 3,
      cve: "CVE-2025-26495",
      description:
        "Cleartext Storage of Sensitive Information vulnerability in Salesforce Tableau Server can record the Personal Access Token (PAT) into logging repositories. This issue affects Tableau Server: before 2022.1.3, before 2021.4.8, before 2021.3.13, before 2021.2.14, before 2021.1.16, before 2020.4.19. Source: Salesforce, Inc.",
      source: "Salesforce Inc",
      maxCVSS: "N/L",
      epssScore: "0.04%",
      publishedDate: "2025-01-23",
      updatedDate: "2025-01-23",
    },
    {
      id: 4,
      cve: "CVE-2025-26495",
      description:
        "Cleartext Storage of Sensitive Information vulnerability in Salesforce Tableau Server can record the Personal Access Token (PAT) into logging repositories. This issue affects Tableau Server: before 2022.1.3, before 2021.4.8, before 2021.3.13, before 2021.2.14, before 2021.1.16, before 2020.4.19. Source: Salesforce, Inc.",
      source: "Salesforce Inc",
      maxCVSS: "N/L",
      epssScore: "0.04%",
      publishedDate: "2025-01-23",
      updatedDate: "2025-01-23",
    },
    {
      id: 5,
      cve: "CVE-2025-26495",
      description:
        "Cleartext Storage of Sensitive Information vulnerability in Salesforce Tableau Server can record the Personal Access Token (PAT) into logging repositories. This issue affects Tableau Server: before 2022.1.3, before 2021.4.8, before 2021.3.13, before 2021.2.14, before 2021.1.16, before 2020.4.19. Source: Salesforce, Inc.",
      source: "Salesforce Inc",
      maxCVSS: "N/L",
      epssScore: "0.04%",
      publishedDate: "2025-01-23",
      updatedDate: "2025-01-23",
    },
    // Add more objects as needed
  ];

  return (
    <div className="Screen p-[30px] bg-back h-full flex flex-col flex-wrap gap-[12px]">
      <Link href="/">
        <BackBtn />
      </Link>

      <div className="bg-white flex flex-col flex-wrap rounded-[8px]">
        <div className="SectionBottom flex flex-col w-full mt-[30px] px-[20px] pb-[30px]">
          <p className="para font-bold text-16 lh-140 mb-[30px]">
            Security Vulnerabilities, CVEs
          </p>

          {/* Card Start  */}
          {securityData.map((data) => (
            <React.Fragment key={data.id}>
              <SecurityCard id={data?.id} data={data} />
              <Divider />
            </React.Fragment>
          ))}
          {/* Card End  */}
        </div>
        <div className="border-t border-[#EEEEEE] mt-[20px]"></div>

        <div className="PaginationBox px-[33px] py-[12.5px] flex flex-row justify-between">
          <div className="p1">
            <Image
              src="/icons/showingpages.svg"
              alt="Calendar Icon"
              width={215}
              height={25}
            />
          </div>
          <div className="p2">
            <Image
              src="/icons/pagination-icon.svg"
              alt="Calendar Icon"
              width={190}
              height={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

const Divider = () => (
  <>
    <div className="border-t border-[#EEEEEE] mt-[20px] mb-[20px]"></div>
  </>
);

function SecurityCard({ id, data }) {
  return (
    <div className="SecurityCard grid grid-cols-10 gap-x-[60px]">
      <div className="A col-span-6 flex flex-col">
        <Link href={`/cvss-scopes/${id}`} className="cursor-pointer">
          <p className="para text-[#41479B] font-bold mb-[8px]">{data.cve}</p>
        </Link>

        <p className="para text-[#666666] text-ellipsis mb-[1rem]">
          {data.description}
        </p>
        <p className="para text-[#000000]">Source: {data.source}</p>
      </div>
      <div className="B col-span-2 flex flex-col">
        <p className="para font-medium text-[#333333] w-[67px] h-[60px]">
          Max CVSS EPSS Score Published Updated
        </p>
      </div>
      <div className="C col-span-2 flex flex-col gap-[10px]">
        <div className="null h-[20px] w-[31px] rounded-[4px] bg-[#EDFFEB] para text-[#05AF00] px-[5px] py-[2.5px]">
          {data.maxCVSS}
        </div>
        <div className="per h-[20px] w-[48px] rounded-[4px] bg-[#FFFBE0] para text-[#E9D32D] px-[5px] py-[2.5px]">
          {data.epssScore}
        </div>
        <div>
          <div className="date1 para text-[#666666]">{data.publishedDate}</div>
          <div className="date2 para text-[#666666]">{data.updatedDate}</div>
        </div>
      </div>
    </div>
  );
}
