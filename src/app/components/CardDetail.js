import React from "react";
import Image from "next/image";

const CardDetail = ({ title, img}) => {
  return (
    <div className="flex-1 justify-between bg-slate-400 flex-col w-full max-sm:w-full border-2 rounded-lg p-6 m-2">
      <Image
        src={img}
        alt="dis-play"
        width={250}
        height={200}
        className="p-10 rounded-md h-[160px]"
      />
      <div className="mt-3 ml-2">
        <p className="mt-2 text-lg leading-normal font-normal font-palanquin">
          {title}
        </p>
      </div>
    </div>
  );
};

export default CardDetail;
