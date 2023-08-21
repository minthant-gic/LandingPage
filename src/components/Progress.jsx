import React from "react";

export default function Progress() {
  return (
    <>
      <div className="h-fit bg-orange-500 mt-10 sm:flex sm:flex-row flex-col">
        <div className="font-extrabold text-white text-xl text-center px-32 pt-16 sm:flex sm:justify-cente sm:py-12 sm:items-center sm:w-1/2 sm:px-60 sm:text-left">
          Simplify how your team works today.
        </div>
        <div className="flex justify-center items-center mt-5 pb-16 sm:w-1/2 sm:py-10 sm:justify-center sm:items-center ">
          <button className="text-orange-500 fond-bold rounded-full bg-white hover:bg-orange-700 hover:shadow-lg hover:text-white">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
