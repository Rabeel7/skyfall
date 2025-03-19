import Card from "@/components/reuseablleUI/Card";
import React from "react";

const page = () => {
  return (
    <Card className="bg-white flex flex-col">
      <div className="font-bold text-12 text-black leading-[140%]">Title</div>
      <div className="font-normal text-11 text-purple leading-[100%]">
        Category
      </div>
      <div className="texting-grey">
        The North Korean threat actor known as the Lazarus Group has been
        observed leveraging a "web-based administrative platform" to oversee its
        command-and-control (C2) infrastructure.
      </div>
    </Card>
  );
};

export default page;
