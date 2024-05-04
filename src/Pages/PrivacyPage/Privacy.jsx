import React from "react";
import BreadCrumb from "../../Comp/BreadCrumb";
import PrivacyContent from "./PrivacyContent";
import ContactForm from "../../Comp/ContactForm";
import FormAboutTime from "../../Comp/FormAbout";

function Privacy() {
  return (
    <>
      <div>
        <BreadCrumb data={["Privacy"]} length={1} />
        <div className="container mx-auto  md:my-5 lg:my-10 xl:my-10 2xl:my-10">
          <div className="flex lg:flex-row xl:flex-row 2xl:flex-row flex-col ">
            <div className="lg:basis-2/3 xl:basis-2/3 2xl:basis-2/3">
              <div className="container lg:pl-20 md:pl-15">
                <PrivacyContent />
              </div>
            </div>
            <div className="my-10 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/3 flex justify-center flex-col">
                    <FormAboutTime/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Privacy;
