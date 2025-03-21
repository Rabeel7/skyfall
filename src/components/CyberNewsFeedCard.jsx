"use client";
import Image from "next/image";
import React, { useState } from "react";
import ModalCard from "./reuseablleUI/ModalCard";

const CyberNewsFeedCard = ({ iconSrc, category, title, date }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-row items-normal gap-[10px] bg-white rounded-[8px] py-[11px] px-[10px] leading-[140%] overflow-hidden text-ellipsis">
      <div className="b1-img min-h-[70px] min-w-[70px]">
        <Image src={iconSrc} alt="Icon" width={70} height={70} />
      </div>
      <div className="b2-content flex flex-col gap-[6px] flex-wrap">
        <div className="font-normal text-11 text-purple leading-[100%] overflow-hidden text-ellipsis">
          {category}
        </div>
        <div className="font-bold text-12 text-black leading-[140%] overflow-hidden text-ellipsis">
          {title}
        </div>
        <div className="CardFooter grid grid-cols-3 gap-[4px] w-full">
          <div className="d1 col-span-1 flex flex-row items-center gap-[6px] leading-[100%] mr-auto">
            <Image
              src="/icons/calendar-icon.png"
              alt="Calendar Icon"
              width={14}
              height={14}
            />
            <div className="date text-10 text-[#8C97B5] font-normal">
              {date}
            </div>
          </div>
          <div className="d2 col-span-1 justify-self-end flex flex-row items-center gap-[6px] cursor-pointer">
            <div className="date text-10 text-[#41479B] font-normal">Save</div>
            <Image
              src="/icons/save-icon.svg"
              alt="Save Icon"
              width={15}
              height={15}
            />
          </div>
          <div
            onClick={showModal}
            className="d3 cursor-pointer col-span-1 justify-self-end flex flex-row items-center gap-[6px] cursor-pointer"
          >
            <div className="date text-10 text-[#41479B] font-normal">Share</div>
            <Image
              src="/icons/share-icon.svg"
              alt="Share Icon"
              width={15}
              height={15}
            />
          </div>
        </div>
      </div>
      <ModalCard
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        className="custom-modal-2"
        title="Share"
        jsx={
          <div className="flex flex-col">
            <div className="para font-bold text-[#363636] mb-[16px]">
              As a post
            </div>
            <div className="FaceAndTwitter flex flex-row gap-[32px] ">
              <div className="Face flex flex-col">
                <Image
                  src="/icons/facebook1.svg"
                  alt="Calendar Icon"
                  width={64}
                  height={64}
                  className="mb-[1rem]"
                />
                <p className="para text-center">Facebook</p>
              </div>
              <div className="Twitter flex flex-col">
                <Image
                  src="/icons/twitter1.svg"
                  alt="Calendar Icon"
                  width={64}
                  height={64}
                  className="mb-[1rem]"
                />
                <p className="para text-center">Twitter</p>
              </div>
            </div>

            <p className="para mt-[32px] mb-[32px]">As a Message</p>

            <div className="icons flex flex-row gap-[32px]">
              <div className="A flex flex-col">
                <div className="image">
                  <Image
                    src="/icons/messenger1.svg"
                    alt="Calendar Icon"
                    width={64}
                    height={64}
                    className="mb-[1rem]"
                  />
                </div>
                <p className="para text-center">Messenger</p>
              </div>
              <div className="A flex flex-col">
                <div className="image">
                  <Image
                    src="/icons/whatsapp1.svg"
                    alt="Calendar Icon"
                    width={64}
                    height={64}
                    className="mb-[1rem]"
                  />
                </div>
                <p className="para text-center">Whatsapp</p>
              </div>
              <div className="A flex flex-col">
                <div className="image">
                  {" "}
                  <Image
                    src="/icons/telegram1.svg"
                    alt="Calendar Icon"
                    width={64}
                    height={64}
                    className="mb-[1rem]"
                  />
                </div>
                <p className="para text-center">Telegram</p>
              </div>
            </div>

            <p className="para mt-[32px] mb-[24px]">Or copy link</p>

            <div className="link flex flex-row justify-between items-center">
              <div
                className="linktext bg-[#F7F9FC] para"
                style={{
                  height: "31px",
                  width: "388px",
                  display: "flex",
                  alignItems: "center",
                  padding: "0.5rem",
                  borderRadius: "8px",
                }}
              >
                https://www.ikea.com/in/en/p/alex-desk-black-brown-90473556/
              </div>
              <div
                className="btn bg-[#F3D74C] para font-bold rounded-[8px] p-[8px]"
                style={{}}
              >
                Copy
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default CyberNewsFeedCard;
