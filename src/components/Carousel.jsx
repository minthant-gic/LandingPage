import React from "react";
import AvaterShan from "../assets/avatar-shanai.png";

export default function Carousel() {
  return (
    <>
      <div className="text-2xl text-center font-extrabold text-black mt-10">
        What they've said
      </div>
      <div className="bg-gray-100 w-screen h-fit mx-5 mt-24 flex flex-col justify-center items-center text-center relative">
        <div className="flex absolute -mt-44">
          <img src={AvaterShan} className="w-20 h-20 " />
        </div>
        <div className="text-black font-extrabold text-base mt-16">
          Ali Bravo
        </div>
        <div className="text-gray-400 text-sm text-center px-12 py-3">
          "We have been able to cancel so many other subscriptions since using
          Manage.There is no more cross-channel confusion and everyone is much
          more focused."
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <input
          type="radio"
          class="checked:bg-orange-500 checked:hover:bg-red-500 checked:active:bg-orange-500  focus:ring-transparent"
          name="radio"
        />
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
      </div>
      <div className="flex justify-center items-center">
        <button className="text-white font-extrabold bg-orange-500 rounded-full mt-5">
          Get Started
        </button>
      </div>
    </>
  );
}
