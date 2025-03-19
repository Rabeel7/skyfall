import Image from "next/image";
import React from "react";

const IconBox = () => {
  return (
    <div className="box4 IconBox flex flex-row gap-[9px]">
      <Image
        src={"/icons/home.svg"}
        alt="Icon"
        width={12}
        height={12}
        className="box1"
      />
      <Image
        src={"/icons/camera.svg"}
        alt="Icon"
        width={12}
        height={12}
        className="box2"
      />
      <Image
        src={"/icons/hat.svg"}
        alt="Icon"
        width={12}
        height={12}
        className="box3"
      />
    </div>
  );
};

export default IconBox;
