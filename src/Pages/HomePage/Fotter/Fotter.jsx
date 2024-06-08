import React from "react";
import { useNavigate } from "react-router-dom";

function Fotter() {
  const navigate = useNavigate()
  return (
    
    <div className="bg-[#171717] flex justify-center align-center p-10">
      <div className="container flex justify-between flex-col lg:flex-row xl:flex-row 2xl:flex-row">
        <div className=" w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3 text-center">
            <span className=" text-white font-bold">© 2024</span>
            <p className=" text-white font-bold hover:text-stone-400 cursor-pointer" onClick={() => {
              navigate("/")
              window.scrollTo({
                  top: 0,
                  behavior: 'smooth' // Smooth scrolling animation
                });
              }}> Fiji wireless District Heights Inc.</p>
        </div>
        <div className="flex justify-center lg:w-1/3 xl:w-1/3 2xl:w-1/3 w-full items-center">
        <p onClick={() =>{
          navigate("/privacy-policy")
          window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scrolling animation
              });
        }} className="  text-white font-bold hover:text-stone-400 cursor-pointer text-nowrap text-center ">Privacy Policy</p>
        </div>
       
      </div>
    </div>
  );
}

export default Fotter;
