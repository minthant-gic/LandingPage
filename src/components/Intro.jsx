import React from "react";
import image from "../assets/illustration-intro.svg";

export default function Intro({ isMenuOpen }) {
  return (
    <>
      <div className="sm:flex-row sm:flex flex-col sm:px-36">
        <div className="mt-8 sm:w-1/2 sm:order-last">
          <img src={image} className="sm:w-80"/>
        </div>
        <div className="mt-8 sm:w-1/2 sm:order-first sm:flex sm:flex-col sm:justify-center">
          <div className="text-4xl text-center font-extrabold px-3 text-black sm:w-80 sm:text-left">
            Bring everyone together to build better products
          </div>
          <div className="text-sm text-gray-400 text-center px-12 py-3 sm:w-80 sm:text-left sm:px-3">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </div>
          <div className="justify-center items-center flex mt-3 sm:w-80 sm:justify-start sm:px-3 ">
            <button className="bg-orange-500 rounded-full text-white font-bold hover:bg-orange-700 hover:shadow-lg">
              Get Started
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="absolute top-20 left-10 bg-white w-full h-fit shadow-xl rounded-lg flex flex-col">
          <div className="text-black flex justify-center items-center text-xl pt-5 font-bold">Pricing</div>
          <div className="text-black flex justify-center items-center text-xl pt-5 font-bold">Product</div>
          <div className="text-black flex justify-center items-center text-xl pt-5 font-bold">About Us</div>
          <div className="text-black flex justify-center items-center text-xl pt-5 font-bold">Careers</div>
          <div className="text-black flex justify-center items-center text-xl pt-5 pb-5 font-bold">Community</div>
          </div>
        )}
      </div>
    </>
  );
}
