import React from "react";

const Signupform = () => {
  return (
    <div className="border-2 border-y-rose-50 rounded-md m-10 w-[500px] p-5">
      <h1 className="pt-3 pl-3 relative inline-block">
        Hurry 35% Off On New Tata Play Connection
        <span className=" ml-3 absolute bottom-0 left-0 w-1/2 border-b-2"></span>
      </h1>
      <h3 className="pt-3 pl-3">Enter Contact Details *</h3>
      <form className="flex flex-wrap">
        <div className="flex flex-col md:flex-row md:space-x-2  w-1/2 md:w-auto gap-3">
          <input
            className="border-2 rounded-full m-2 px-2 py-2"
            placeholder="Full Name"
          />
          <input
            className="border-2 rounded-full m-2 px-2 py-2"
            placeholder="Mobile Number"
          />
        </div>
        <input
          className="w-full border-2 md:auto rounded-full m-2 px-2 py-2"
          placeholder="Please Share Your Pin Code"
        />
        <button className=" bg-orange-200 w-1/2 rounded-md m-2 px-2 py-2">Send</button>
      </form>
    </div>
  );
};

export default Signupform;
