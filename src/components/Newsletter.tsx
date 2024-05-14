import React from "react";

function Newsletter() {
  return (
    <div className="bg-black">
      <div className=" md:flex justify-between text-white px-4  text-center max-w-[1240px] mx-auto">
        <div className="py-5">
          <h1 className="text-md md:text-xl lg:text-2xl font-bold">
            Want tips & tricks to optimize you flow?
          </h1>
          <p className="lg:text-[14px] md:text-[13px] text-[12px]">
            Galley of type and scrambled it to make .
          </p>
        </div>
        <div className="py-5">
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              className="rounded-sm p-1 text-black"
            />
            <button
              className="bg-[#00df9a] text-black px-4 py-1 mt-0 ml-2 
          rounded-md text-[12px] font-bold"
            >
              Notify me
            </button>
          </div>
          <p className="pt-2 text-[12px] md:text-[13px] lg:text-[14px]">
            We care including versions of Lorem Ipsum.
          </p>
          <p className="text-[12px] underline text-[#3c9f7f]">
            Privacy policy?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
