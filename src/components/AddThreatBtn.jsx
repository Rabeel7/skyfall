"use client";
import React, { useState } from "react";
import ModalCard from "@/components/reuseablleUI/ModalCard";

const AddThreatBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        onClick={showModal}
        className="Layer1 cursor-pointer bg-white p-[16px] mb-[17px] flex items-center justify-start border-1 rounded-[10px] gap-[1rem] h-[50px] w-[250px]"
      >
        <div className="text-13 font-bold leading-[140%] text-black">
          + Add Threat Source
        </div>
        <div className="text-13 text-[#6B7280]">: google.com</div>
      </div>
      <ModalCard
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        className="custom-modal-1"
        title="Add Source"
        jsx={
          <div className="flex flex-col gap-[1rem]">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-[#E0E5EC] text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:outline-none"
              placeholder="Domain Name"
              required
            />
            <div className="or para text-center">OR</div>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-[#E0E5EC] text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
              placeholder="Organization Name"
              required
            />
            <button
              type="button"
              className="focus:outline-none text-white bg-red rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              style={{ background: "#6E3EA0" }}
            >
              Continue
            </button>
          </div>
        }
      />
    </>
  );
};

export default AddThreatBtn;
