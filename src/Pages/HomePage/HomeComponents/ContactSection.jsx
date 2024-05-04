import React from "react";
import ContactForm from "../../../Comp/ContactForm";

function ContactSection() {
  return (
    <>
      <div className="dark:bg-[#111920]">
        <div
          style={{
            background: "url('/HomePage/position-1-bg-d.webp')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
          className="w-full h-screen "
        >
          <div className="w-full h-full flex justify-center align-center">
            <div className="container">
              <div className="lg:px-10 xl:px-10 2xl:px-10  w-9/10 lg:w-auto md:w-auto  grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 text-white">
                <div className="hidden lg:block md:block"></div>
                  <ContactForm flag={false}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
