import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col p-[30px]">
      <div className="box1 bg-white p-[20px] mb-[10px] flex flex-col rounded-[8px]">
        <p className="para font-bold text-[#41479B] lh-140 text-16 mb-[12px]">
          CVE-2025-26495
        </p>
        <p className="para text-ellipsis text-[#666666]">
          The firmware of all Wattsense Bridge devices contain the same
          hard-coded user and root credentials. The user password can be easily
          recovered via password cracking attempts. The recovered credentials
          can be used to log into the device via the login shell that is exposed
          by the serial interface. The backdoor user has been removed in
          firmware BSP &gt;= 6.4.1.
        </p>
      </div>
      <div className="box2 bg-white p-[20px] mb-[10px]  flex flex-col gap-[12px] rounded-[8px]">
        <p className="para font-bold text-[13px]">
          CVSS scores for CVE-2025-26410
        </p>
        <div className="txtNBtn flex flex-row gap-[8px]">
          <p className="para font-medium">Base Score:</p>
          <div className="bg-[#EE404C] para  rounded-[4px] text-white px-[5px] py-[2.5px] ">
            9.8
          </div>
        </div>
        <div className="textNDiff">
          <span className="para font-medium">CVSS Vector:</span>
          <span className="para font-medium text-[#41479B]">
            {" "}
            CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
          </span>
        </div>
        <div className="txtNBtn flex flex-row">
          <p className="para font-medium">Exploitability Score: :</p>
          <div className="bg-[#37BF33] para  rounded-[4px] text-white px-[5] py-[2.5px] ">
            9.8
          </div>
        </div>
        <div className="txtNBtn flex flex-row">
          <p className="para font-medium">Impact Score: :</p>
          <div className="bg-[#FFA507] para  rounded-[4px] text-white px-[5] py-[2.5px] ">
            9.8
          </div>
        </div>
        <div className="textNDiff flex flex-row gap-[8px] items-center">
          <span className="para font-medium">Score Source:</span>
          <span className="para font-medium">
            {" "}
            134c704f-9b21-4f2e-91b3-4a467353bcc0
          </span>
          <Image
            src="/icons/green-tick.svg"
            alt="Calendar Icon"
            width={16}
            height={16}
          />
        </div>
        <div className="textNDiff">
          <span className="para font-medium">First Seen:</span>
          <span className="para font-medium text-[#41479B]"> 2025-02-11</span>
        </div>
      </div>
      <div className="box3 bg-white p-[20px] mb-[10px] flex flex-col rounded-[8px] gap-[6px]">
        <p className="para font-bold lh-100 text-13 mb-[12px]">
          CWE ids for CVE-2025-26410
        </p>
        <p className="para text-[#41479B] text-ellipsis">
          CWE-798 Use of Hard-coded Credentials
        </p>
        <p className="para font-medium text-ellipsis">
          The product contains hard-coded credentials, such as a password or
          cryptographic key.
        </p>
        <div>
          <p className="para ">Assigned by:</p>
          <p className="para">
            &bull; 134c704f-9b21-4f2e-91b3-4a467353bcc0 (Secondary)
          </p>
          <p className="para">
            &bull; 551230f0-3615-47bd-b7cc-93e92e730bbf (Secondary)
          </p>
        </div>
      </div>

      <div className="box4 bg-white p-[20px] mb-[10px] flex flex-col rounded-[8px] gap-[6px]">
        <p className="para font-bold lh-100 text-13 mb-[12px]">
          References for CVE-2025-26410
        </p>

        <div className="flex flex-col gap-[20px]">
          <div>
            <div className="flex flex-row justify-between mb-[6px]">
              <p className="para text-[#41479B] text-ellipsis">
                htps://r.sec-consult.com/wattsense
              </p>
              <p className="para text-[#41479B] text-ellipsis">
                CVEs referencing this url
              </p>
            </div>
            <p className="para font-medium text-ellipsis">
              Multiple vulnerabilities in Wattsense Bridge - SEC Consult
            </p>
          </div>

          {/* end  */}
          <div>
            <div className="flex flex-row justify-between mb-[6px]">
              <p className="para text-[#41479B] text-ellipsis">
                htps://support.wattsense.com/hc/en-150/ar
                ticles/13366066529437-Release-Notes
              </p>
              <p className="para text-[#41479B] text-ellipsis">
                CVEs referencing this url
              </p>
            </div>

            <p className="para font-medium text-ellipsis">
              Multiple vulnerabilities in Wattsense Bridge - SEC Consult
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
