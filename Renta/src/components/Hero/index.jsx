import React from "react";
import Image from "next/image";
import img from "../../../public/img/img4.jpg";
import img2 from "../../../public/img/img2.jpg";


function Hero() {
  return (
    <div className=" flex flex-col-reverse lg:flex-row justify-between items-center px-6 mt-2">
        <div className="w-full mt-12 ">
           <div className="text-3xl uppercase text-[#222235] font-bold">
                Easy and fast way to share your Car
           </div>
           <div className="text-lg text-black  font-semibold font-mono ">
                Drivers and passengers who use our app will receive cryptocurrency as a reward.
           </div>
        </div>
        <div className="w-full">
            <Image src={img} className=" object-cover " alt="hero image"/>
        </div>
       
    </div>
  );
}

export default Hero;
