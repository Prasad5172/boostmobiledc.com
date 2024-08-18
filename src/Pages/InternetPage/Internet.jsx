import React from "react";
import BreadCrumb from "../../Comp/BreadCrumb";
import CellCompanyContent from "../CellPhoneCompany/CellCompanyContent";
import FormAboutTime from "../../Comp/FormAbout";

function Internet() {
  var width = window.innerWidth;
  return (
    <div>
      <div className="relative">
        <div
          style={{
            backgroundImage: "url(./InternetPage/iStock-1317277259.webp)",
            backgroundPosition: "center center",
            height: `${width < 700 ? "250px" : "500px"}`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="absolute top-0 w-full"
        ></div>
        <div
          className="flex justify-center items-center z-99 relative"
          style={{
            height: `${width < 700 ? "250px" : "500px"}`,
            background: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="container  sm:p-20 md:p-40 lg:p-40 xl:p-40  2xl:p-40">
            <h1 className="font-bold text-[25px] md:text-[50px] lg:text-[50px] xl:text-[50px] 2xl:text-[50px] text-white p-0 sm:p-0 md:p-0  lg:p-12 xl:p-12 2xl:p-12 text-center">
              Internet
            </h1>
          </div>
        </div>
      </div>
      <BreadCrumb data={["Internet"]} length={1} />
      <div className="container mx-auto  md:my-5 lg:my-10 xl:my-10 2xl:my-10">
                <p className="text-center font-bold text-4xl  lg:mx-40 xl:mx-40 2xl:mx-40 mb-10 ">XFINITY PREPAID</p>
                <div className="flex justify-center lg:flex-row xl:flex-row 2xl:flex-row  lg:px-30 xl:px-40 2xl:px-40  ">
                    <div className="lg:basis-1/2 xl:basis-1/2 2xl:basis-1/2 flex items-center justify-end w-4/5 ">
                        <div className="container lg:pr-20 md:pr-15">
                        <p className="text-center  xl:text-right 2xl:text-right font-semibold text-[22px] mb-3">Xfinity Prepaid Internet</p>
                        <p className="text-center  xl:text-right 2xl:text-right">No annual contract. No monthly bills.</p>
                        <p className="text-center  xl:text-right 2xl:text-right">No long-term commitments.</p>
                        <p className="text-center  xl:text-right 2xl:text-right text-[18px] font-semibold">get fast and reliable prepaid home Internet plud</p>
                        <p className="text-center  xl:text-right 2xl:text-right text-[18px] font-semibold">WiFi.*</p>
                        </div>
                    </div>
                    <div className="hidden   my-10 lg:basis-1/2 xl:basis-1/2 2xl:basis-1/2 lg:flex xl:flex 2xl:flex justify-center flex-col">
                        <img src="./InternetPage/2.webp" alt="internet" />
                    </div>
                </div>
                <div className="mt-10 ">
                    <div className="flex justify-center">
                        <div className="mb-10 w-4/5">
                            <p className="text-center font-bold text-[22px] mb-3">Prepaid Internet Starter Kit</p>
                            <p className="text-center">With the Xfinity Prepaid Internet Starter Kit you can start surfing, streaming, shopping and sharing to your favorite devices for your first 30 days.</p>
                        </div>
                    </div>
                    <div className="flex justify-center">

                        <div className="flex justify-center items-center flex-col mb-10 w-4/5">
                            <p className="text-center mb-2 text-[18px] font-semibold">The Starter Kit includes:</p>
                            <ul className="list-disc m-auto inline-block text-left">
                                <li >1 Month of Internet refills. That’s 30 days of Prepaid service!</li>
                                <li >WiFi Modem hardware</li>
                                <li >Coax, Ethernet, Cable and Power Cord</li>
                                <li >Getting Started Guide</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <p className="text-center font-bold text-[20px]">Boost Mobile Customer Special Offer</p>
                    <p className="text-center text-[30px] font-extrabold">$40.00</p>
                    <p className="text-center">Save $5</p>
                    <p className="text-center">Per 30 Days Refill</p>
                </div>
      </div>
    </div>
  );
}

export default Internet;
