import React from "react";
import CellCompanyContent from "./CellCompanyContent";
import FormAboutTime from "../../Comp/FormAbout";
import BreadCrumb from "../../Comp/BreadCrumb";

function CellCompany({ place, city }) {
  var width = window.innerWidth;
  return (
    <>
      <div>
        <div className="relative">
          <div
            style={{
              backgroundImage:
                "url(./CellPhoneCompany/iStock-1183967715_cover.webp)",
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
            <div className="container  sm:p-20 md:p-20 lg:p-40 xl:p-40  2xl:p-40">
              <h1 className="font-bold text-[25px] md:text-[50px] lg:text-[50px] xl:text-[50px] 2xl:text-[50px] text-white p-0 sm:p-0 md:p-0  lg:p-12 xl:p-12 2xl:p-12 text-center">
                Cell Phone Company,{" "}
                <span className="font-bold">
                  {place}-{city}
                </span>
              </h1>
            </div>
          </div>
        </div>
        <BreadCrumb
          data={[`Cell Phone Company, ${place}, ${city}`]}
          length={1}
        />
        <div className="container mx-auto  md:my-5 lg:my-10 xl:my-10 2xl:my-10">
          <div className="flex lg:flex-row xl:flex-row 2xl:flex-row flex-col ">
            <div className="lg:basis-2/3 xl:basis-2/3 2xl:basis-2/3">
              <div className="container lg:pl-20 md:pl-15">
                <CellCompanyContent place={place} city={city} />
              </div>
            </div>
            <div className="my-10 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/3 flex flex-col">
              <FormAboutTime />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CellCompany;
