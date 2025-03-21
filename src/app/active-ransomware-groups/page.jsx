"use client";
import AntTable from "@/components/reuseablleUI/AntTable";
import BackBtn from "@/components/reuseablleUI/BackBtn";
import DropdownUI from "@/components/reuseablleUI/DropdownUI";
import { Tag } from "antd";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    key: "1",
    title: "Home",
    lastscrape: "2025-01-28 10:00:15.557773",
    type: "DLS",
    enabled: "false",
    avaliable: "true",
    updated: "2023-11-03 15:01:36.958704",
  },
  {
    key: "1",
    title: "Home",
    lastscrape: "2025-01-28 10:00:15.557773",
    type: "DLS",
    enabled: "false",
    avaliable: "true",
    updated: "2023-11-03 15:01:36.958704",
  },
];

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <p className="para text-[#666666]">{text}</p>,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Lastscrape",
    dataIndex: "lastscrape",
    key: "lastscrape",
    render: (text) => <p className="para text-[#333333]">{text}</p>,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (text) => <p className="para ">{text}</p>,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Enabled",
    key: "enabled",
    dataIndex: "enabled",
    render: () => (
      <>
        <p className="para ">false</p>
      </>
    ),
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Avaliable",
    dataIndex: "avaliable",
    key: "avaliable",
    sorter: (a, b) => a.age - b.age,
    render: () => (
      <>
        <div className="flex flex-row gap-[1rem] ">
          <div className="false bg-[#FFECED] para text-[#EE404C] rounded-[4px] py-[2.5px] px-[5px]">
            false
          </div>
          <div className="true bg-[#EDFFEB] para text-[#05AF00] rounded-[4px] py-[2.5px] px-[5px]">
            true
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Updated",
    dataIndex: "updated",
    key: "updated",
    sorter: (a, b) => a.age - b.age,
    render: (text) => <p className="para ">{text}</p>,
  },
];

const page = () => {
  return (
    <div className="main flex flex-col">
      <Link href="/">
        <BackBtn />
      </Link>

      <div className="tabel relative flex flex-col bg-white rounded-[8px]">
        <div className="overcard px-[11px] py-[10px] bg-white rounded-t-[8px]">
          <div className="searchandstatus flex flex-row justify-between ">
            <div className="search flex flex-row gap-[1rem] bg-white border border-[#E0E5EC] px-[16px] py-[12px] h-[40px] w-[246px] focus:outline-none rounded-[8px]">
              <Image
                src="/icons/search-icon.svg"
                alt="Calendar Icon"
                width={16}
                height={16}
              />
              <input
                type="text"
                id="first_name"
                className="text-12 w-full focus:outline-none"
                placeholder="Domain Name"
                required
              />
            </div>
            <div className="search">
              <DropdownUI
                title="Status"
                data={[
                  { label: "True", link: "#" },
                  { label: "False", link: "#" },
                ]}
              />
            </div>
          </div>
        </div>
        <AntTable data={data} columns={columns} />

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
