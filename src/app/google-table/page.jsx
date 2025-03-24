"use client";
import AntTable from "@/components/reuseablleUI/AntTable";
import BackBtn from "@/components/reuseablleUI/BackBtn";
import DropdownUI from "@/components/reuseablleUI/DropdownUI";
import { Tag } from "antd";
import Image from "next/image";
import Link from "next/link";

// Function to get styles for labels
const getLabelStyles = (label) => {
  switch (label) {
    case "rat":
      return { background: "#EDFFEB", color: "#05AF00" };
    case "mykloadclient":
      return { background: "#FFEFE1", color: "#FFA507" };
    case "plugx":
      return { background: "#FFECED", color: "#EE404C" };
    case "dropper":
      return { background: "#E0EAFF", color: "#4778E3" };
    case "xmrig":
      return { background: "#E0EAFF", color: "#4778E3" };
    case "cve-2021-21551":
      return { background: "#FFF5E0", color: "#FF8A00" };
    case "aws":
      return { background: "#FFF5E0", color: "#FF8A00" };
    case "online shopping":
      return { background: "#FFFBE0", color: "#E9D32D" };
    case "chromous":
      return { background: "#FFECED", color: "#EE404C" };
    case "kubernetes":
      return { background: "#FFECED", color: "#EE404C" };
    default:
      return { background: "#F0F0F0", color: "#666666" }; // For "no label"
  }
};

// Function to get styles for type
const getTypeStyles = (type) => {
  switch (type) {
    case "Indicator":
      return { background: "#FFECED", color: "#EE404C" };
    case "Data Source":
      return { background: "#E0EAFF", color: "#2068BA" };
    case "Report":
      return { background: "#FFEFE1", color: "#EF8629" };
    default:
      return { background: "#E0EAFF", color: "#666666" };
  }
};

// Columns configuration
const columns = [
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (text) => {
      const styles = getTypeStyles(text);
      return (
        <Tag
          style={{
            background: styles.background,
            color: styles.color,
            border: "none",
          }}
          className="para px-[5px] py-[2.5px]"
        >
          {text}
        </Tag>
      );
    },
    sorter: (a, b) => a.type.localeCompare(b.type),
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
    render: (text) => <p className="para text-[#666666]">{text}</p>,
    sorter: (a, b) => a.value.localeCompare(b.value),
  },
  {
    title: "Author",
    dataIndex: "author",
    key: "author",
    render: (text) => <p className="para text-[#666666]">{text}</p>,
    sorter: (a, b) => a.author.localeCompare(b.author),
  },
  {
    title: "Admin",
    dataIndex: "admin",
    key: "admin",
    render: (text) => <p className="para text-[#666666]">{text}</p>,
    sorter: (a, b) => a.admin.localeCompare(b.admin),
  },
  {
    title: "Labels",
    dataIndex: "labels",
    key: "labels",
    render: (text) => (
      <div className="flex flex-wrap gap-[4px]">
        {text.map((label, index) => {
          const styles = getLabelStyles(label);
          return (
            <Tag
              key={index}
              style={{
                background: styles.background,
                color: styles.color,
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="para px-[5px] py-[2.5px]"
            >
              {label}
            </Tag>
          );
        })}
      </div>
    ),
  },
  {
    title: "First Seen",
    dataIndex: "firstSeen",
    key: "firstSeen",
    render: (text) => <p className="para text-[#666666]">{text}</p>,
    sorter: (a, b) => new Date(a.firstSeen) - new Date(b.firstSeen),
  },
  {
    title: "Analyses",
    dataIndex: "analyses",
    key: "analyses",
    render: (text) => (
      <Tag
        style={{
          background: text === 0 ? "#4778E3" : "#EE404C",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
        className="para px-[5px] py-[2.5px]"
      >
        {text}
      </Tag>
    ),
    sorter: (a, b) => a.analyses - b.analyses,
  },
  {
    title: "Marking",
    dataIndex: "marking",
    key: "marking",
    render: (text) => (
      <Tag
        style={{
          background: text === "TLP:CLEAR" ? "#FFEFE1" : "#E0EAFF",
          color: text === "TLP:CLEAR" ? "#EF8629" : "#4778E3",
          border: "none",
        }}
        className="para px-[5px] py-[2.5px]"
      >
        {text}
      </Tag>
    ),
    sorter: (a, b) => a.marking.localeCompare(b.marking),
  },
];

// Sample data
const data = [
  {
    key: "1",
    type: "Indicator",
    value: "Home",
    author: "John Doe",
    admin: "admin",
    labels: ["rat", "mykloadclient", "plugx"],
    firstSeen: "28/01/2025",
    analyses: 0,
    marking: "TLP:CLEAR",
  },
  {
    key: "2",
    type: "Data Source",
    value: "About",
    author: "Jane Smith",
    admin: "admin",
    labels: ["dropper", "cve-2021-21551"],
    firstSeen: "2023-02-15",
    analyses: 1,
    marking: "NONE",
  },
  {
    key: "3",
    type: "Report",
    value: "Contact",
    author: "Alice Johnson",
    admin: "admin",
    labels: ["no label"],
    firstSeen: "2023-03-20",
    analyses: 0,
    marking: "TLP:CLEAR",
  },
  {
    key: "4",
    type: "Report",
    value: "Contact",
    author: "Alice Johnson",
    admin: "admin",
    labels: ["no label"],
    firstSeen: "2023-03-20",
    analyses: 0,
    marking: "TLP:CLEAR",
  },
  {
    key: "5",
    type: "Report",
    value: "Contact",
    author: "Alice Johnson",
    admin: "admin",
    labels: ["no label"],
    firstSeen: "2023-03-20",
    analyses: 0,
    marking: "TLP:CLEAR",
  },
  {
    key: "6",
    type: "Report",
    value: "Contact",
    author: "Alice Johnson",
    admin: "admin",
    labels: ["no label"],
    firstSeen: "2023-03-20",
    analyses: 0,
    marking: "TLP:CLEAR",
  },
  {
    key: "7",
    type: "Report",
    value: "Contact",
    author: "Alice Johnson",
    admin: "admin",
    labels: ["no label"],
    firstSeen: "2023-03-20",
    analyses: 0,
    marking: "TLP:CLEAR",
  },
  {
    key: "8",
    type: "Report",
    value: "Contact",
    author: "Alice Johnson",
    admin: "admin",
    labels: ["no label"],
    firstSeen: "2023-03-20",
    analyses: 0,
    marking: "TLP:CLEAR",
  },
  {
    key: "9",
    type: "Report",
    value: "amazom-corp.wikaba.com",
    author: "AlienVault",
    admin: "admin",
    labels: ["online shopping", "chromous"],
    firstSeen: "28/01/2025",
    analyses: 1,
    marking: "NONE",
  },
  {
    key: "10",
    type: "Indicator",
    value: "Group",
    author: "AlienVault",
    admin: "admin",
    labels: ["xmrig", "aws", "chromous"],
    firstSeen: "28/01/2025",
    analyses: 0,
    marking: "TLP:CLEAR",
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
                placeholder="Search"
                required
              />
            </div>
            <div className="Export and Calendar flex flex-row">sdf</div>
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
