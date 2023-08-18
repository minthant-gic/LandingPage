import React from "react";
import Logo from "../assets/logo.svg"
import Hamburger from "../assets/hamburger.svg"

export default function Nav(){
    return( 
        <div className="flex w-screen justify-between sm:px-36" >
            <img src={Logo} className="mt-7 ml-3"/>
            <img src={Hamburger} className="w-6 h-6 mt-6"/>
        </div>
    )
}