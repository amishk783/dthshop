import React from "react";
import Image from "next/image";

const CardDth = ({ price, img, plan }) => {
  return (
    <div className="flex-1 justify-between flex-col w-full max-sm:w-full border-2 rounded-lg p-6 m-2">
      <Image
        src={img}
        alt="dis-play"
        width={250}
        height={150}
        className=" rounded-md h-[150px]"
      />
      <div className="mt-3 ml-2">
        <h1 className=" font-montserrat text-lg font-semibold leading-normal mr-3 text-slate-gray">
          ₹{price}
        </h1>
        <p className="mt-2 text-lg leading-normal font-normal font-palanquin">
          {plan}
        </p>

        <button className="bg-orange-200 rounded-md w-full px-2 py-2 my-2 text-base leading-normal font-semibold font-palanquin">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CardDth;
