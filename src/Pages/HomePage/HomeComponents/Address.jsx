import React from "react";
import { useNavigate } from "react-router-dom";

function Address() {
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <div className="p-30 mx-auto bg-[#222222] text-white ">
          <div className="container mx-auto py-10 md:py-15 lg:py-15 xl:py-20 2xl:py-20 ">
            <div className="gap-10 md:gap-5 lg:gap-20 xl:gap-20 2xl:gap-20 grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
                <div className=" flex justify-center">
                    <div className="contact_address  w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-2/3 shrink-1">
                        <h1 className="text-orange-500 font-bold lg:text-start md:text-start sm:text-center xl:text-start 2xl:text-center text-center mb-4">CONTACT US</h1>
                        <p className="lg:text-start md:text-start sm:text-center xl:text-start 2xl:text-center text-center"> Boost Mobilev</p>
                        <p className="lg:text-start md:text-start sm:text-center xl:text-start 2xl:text-center text-center">76 Eagle School Rd</p>
                        <p className="lg:text-start md:text-start sm:text-center xl:text-start 2xl:text-center text-center">Martinsburg, WV 25404</p>
                        <p className="lg:text-start md:text-start sm:text-center xl:text-start 2xl:text-center text-center">Telephone: (304) 267-6779</p>
                        <p className="lg:text-start md:text-start sm:text-center xl:text-start 2xl:text-center text-center">Email: <a href="mailto:boostmobile@fijiwireless.com">boostmobile@fijiwireless.com</a> </p>
                        <p onClick={() => navigate("/locations")} className="mt-3 text-orange-500 font-bold lg:text-start md:text-start sm:text-center xl:text-start 2xl:text-center text-center">
                            FIND A STORE NEAR YOU
                        </p>
                    </div>
                </div>
                <div className=" flex justify-center">
                    <div className="service_area w-full lg:w-1/2 md:w-1/2 xl:w-1/2 2xl:w-1/2 shrink-0">
                        <h1 className="mb-3 text-orange-500 font-bold lg:text-start md:text-start sm:text-center xl:text-start 2xl:text-center text-center">SERVICE AREA</h1>
                        <p className="lg:text-start md:text-start sm:text-center xl:text-start 2xl:text-center text-center">Southern Virginia</p>
                        <p className="lg:text-start md:text-start sm:text-center xl:text-start 2xl:text-center text-center">West Virginia</p>
                        <p className="lg:text-start md:text-start sm:text-center xl:text-start 2xl:text-center text-center">Western Pennsylvania</p>
                        <p className="lg:text-start md:text-start sm:text-center xl:text-start 2xl:text-center text-center">Washington DC</p>
                        <p className="lg:text-start md:text-start sm:text-center xl:text-start 2xl:text-center text-center">Baltimore</p>
                    </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;
