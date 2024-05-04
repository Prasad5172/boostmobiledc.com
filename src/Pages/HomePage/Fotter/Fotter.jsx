import React from "react";

function Fotter() {
  return (
    
    <div className="bg-[#171717] flex justify-center align-center p-10">
      <div className="container flex justify-between flex-col lg:flex-row xl:flex-row 2xl:flex-row">
        <div className=" w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3 text-center">
            <span className=" text-white font-bold">© 2024</span>
            <a className=" text-white font-bold hover:text-stone-400 cursor-pointer" href="/"> Fiji Wireless LLC, Martinsburg, WV</a>
        </div>
        <div className="flex justify-center lg:w-1/3 xl:w-1/3 2xl:w-1/3 w-full items-center">
        <a href="privacy-policy" className="  text-white font-bold hover:text-stone-400 cursor-pointer text-nowrap text-center ">Privacy Policy</a>
        </div>
       
      </div>
    </div>
  );
}

export default Fotter;
