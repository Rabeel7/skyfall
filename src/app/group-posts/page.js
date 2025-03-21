"use client";
import AntTable from "@/components/reuseablleUI/AntTable";
import BackBtn from "@/components/reuseablleUI/BackBtn";
import { Tag } from "antd";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    key: "1",
    date: "2025-02-12",
    title: "The University of Notre Dame Australia (nd.edu.au)",
    group: "monti",
  },
  {
    key: "2",
    date: "2025-02-12",
    title: "Kensington Glass Arts",
    group: "ransomblog_noname",
  },
  {
    key: "3",
    date: "2025-02-12",
    title: "Shinn Fu Company of America",
    group: "monti",
  },
  {
    key: "4",
    date: "2025-02-12",
    title: "The University of Notre Dame Australia (nd.edu.au)",
    group: "ransomblog_noname",
  },
  {
    key: "5",
    date: "2025-02-12",
    title: "Shinn Fu Company of America",
    group: "ransomblog_noname",
  },
  {
    key: "6",
    date: "2025-02-12",
    title: "Kensington Glass Arts",
    group: "monti",
  },
  {
    key: "7",
    date: "2025-02-12",
    title: "The University of Notre Dame Australia (nd.edu.au)",
    group: "ransomblog_noname",
  },
  {
    key: "8",
    date: "2025-02-12",
    title: "Kensington Glass Arts",
    group: "monti",
  },
  {
    key: "9",
    date: "2025-02-12",
    title: "The University of Notre Dame Australia (nd.edu.au)",
    group: "ransomblog_noname",
  },
  {
    key: "10",
    date: "2025-02-12",
    title: "The University of Notre Dame Australia (nd.edu.au)",
    group: "monti",
  },
];

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (text) => <p className="para text-[#666666]">{text}</p>,
    sorter: (a, b) => a.age - b.age,
  },
  ,
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <p className="para text-[#595EDF]">{text}</p>,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Group",
    dataIndex: "group",
    key: "group",
    render: (text) => <p className="para text-[#333333]">{text}</p>,
    sorter: (a, b) => a.age - b.age,
  },
];

const page = () => {
  return (
    <div className="main flex flex-col">
      <Link href="/">
        <BackBtn />
      </Link>

      <div className="tabel relative flex flex-col bg-white rounded-[8px]">
        <AntTable rowSelectionIsOn={false} data={data} columns={columns} />

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
