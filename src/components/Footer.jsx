import React from "react";
import Facebook from "../assets/icon-facebook.svg"
import Youtube from "../assets/icon-youtube.svg"
import Twitter from "../assets/icon-twitter.svg"
import Pinterest from "../assets/icon-pinterest.svg"
import Instagram from "../assets/icon-instagram.svg"
import Logo from "../assets/logo.svg"

export default function Footer(){
    return(
       
        <div className="bg-black w-full h-fit">
             <div className="sm:px-36">
            <div className="flex">
                <input type="text" className="rounded-full
                py-2 px-3 mt-10 ml-6" placeholder="Updates in Your inbox"/>
                <div>
                    <button className="bg-orange-500 rounded-full px-10 mt-10 ml-3 text-white">GO</button>
                </div>
            </div>
            <div className="text-white flex ml-12 mt-12">
                <div className="w-1/2">
                <div className="p-2">Home</div>
                <div className="p-2">Pricing</div>
                <div className="p-2">Products</div>
                <div className="p-2">About Us</div>
                </div>
                <div className="w-1/2 ml-5">
                <div className="p-2">Careers</div>
                <div className="p-2">Community</div>
                <div className="p-2">Privacy Policy</div>
                </div>
            </div>
            <div className="flex mt-6">
                <img src={Facebook} className="w-10 h-10 ml-5"/>
                <img src={Youtube} className="w-10 h-10 ml-10"/>
                <img src={Twitter} className="w-10 h-10 ml-10"/>
                <img src={Pinterest} className="w-10 h-10 ml-10"/>
                <img src={Instagram} className="w-10 h-10 ml-10"/>
            </div>
            <div className="flex justify-center items-center mt-8">
                <img src={Logo} className="mb-8"/>
            </div>
            <div className="flex justify-center items-center text-white
            pb-6 text-sm">
                Copyright 2020 All Rights Reserved
            </div>
        </div>
        </div>
    )
}