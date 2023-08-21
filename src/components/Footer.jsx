import React from "react";
import Facebook from "../assets/icon-facebook.svg";
import Youtube from "../assets/icon-youtube.svg";
import Twitter from "../assets/icon-twitter.svg";
import Pinterest from "../assets/icon-pinterest.svg";
import Instagram from "../assets/icon-instagram.svg";
import Logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <div className="bg-black w-full h-fit sm:py-12">
      <div className="sm:px-36 sm:flex-row sm:flex">
        <div className="flex sm:-order-1">
          <input
            type="text"
            className="rounded-full
                py-2 px-10 mt-10 ml-6 sm:h-10"
            placeholder="Updates in Your inbox"
          />
          <div>
            <button className="bg-orange-500 rounded-full px-10 mt-10 ml-3 text-white sm:mt-9">
              GO
            </button>
          </div>
        </div>
        <div className="flex px-14 sm:-order-2 sm:flex">
          <div className="text-white flex ml-12 mt-12">
            <div className="sm:px-24">
              <div className="p-2">Home</div>
              <div className="p-2">Pricing</div>
              <div className="p-2">Products</div>
              <div className="p-2 ">About Us</div>
            </div>
            <div className="ml-5 sm:pl-20">
              <div className="p-2">Careers</div>
              <div className="p-2">Community</div>
              <div className="p-2">Privacy Policy</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:-order-3 sm:flex-col sm:flex sm:justify-center">
          <div className="flex mt-6 sm:order-last sm:mt-12">
            <img
              src={Facebook}
              className="w-10 h-10 ml-5 sm:w-6 sm:h-5 sm:ml-5"
            />
            <img
              src={Youtube}
              className="w-10 h-10 ml-10 sm:w-6 sm:h-5 sm:ml-5"
            />
            <img
              src={Twitter}
              className="w-10 h-10 ml-10 sm:w-6 sm:h-5 sm:ml-5"
            />
            <img
              src={Pinterest}
              className="w-10 h-10 ml-10 sm:w-6 sm:h-5 sm:ml-5"
            />
            <img
              src={Instagram}
              className="w-10 h-10 ml-10 sm:w-6 sm:h-5 sm:ml-5"
            />
          </div>
          <div className="flex justify-center items-center mt-8 sm:order-first sm:mt-0 sm:-mr-16">
            <img src={Logo} className="mb-8" />
          </div>
        </div>
      </div>
      <div
          className="flex justify-center items-center text-white
            pb-6 text-sm sm:pl-96"
        ><div className="sm:pl-80 sm:-mt-10">
          Copyright 2020 All Rights Reserved
          </div>
        </div>
    </div>
  );
}
