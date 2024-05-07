import React, { useEffect,useRef,useState } from "react";

function BoostPlans() {
  const imageContainer = document.querySelectorAll('.image_container');
  imageContainer.forEach((ele,ind) => {
    let section = document.querySelector(ele.getAttribute("id"));
        if (!section) return;
        console.log(section.offsetTop,section.offsetHeight);
  })
  console.log(imageContainer)

  return (
    <>
    <div className="flex justify-center items-center">

        <div className=" container md:my-10 lg:my-20 xl:my-20 2xl:mt-20">
          <div className="flex lg:flex-row xl:flex-row 2xl:flex-row flex-col xl:mx-20 2xl:mx-20">
            <div className="lg:basis-2/3 xl:basis-2/3 2xl:basis-2/3">
              <div>
                <div>
                  <p className="text-3xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-extrabold text-[#0d3454] p-10 text-center">
                    ALL BOOST PLANS FEATURE
                  </p>
                </div>
                <div className="my-6 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 grid-2-cols">
                  <div className="mb-6">
                    <div className="flex justify-center pb-6">
                      <img
                        src="./HomePage/NoContract_d.webp"
                        alt="some image"
                      ></img>
                    </div>
                    <div className="text-[20px] font-bold text-center">
                      <h4>
                        <span>No service contacts</span>
                      </h4>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-center pb-6 ">
                      <img
                        src="./HomePage/HotSpot_d.webp"
                        alt="some image"
                      ></img>
                    </div>
                    <div className="text-[20px] font-bold text-center">
                      <h4>
                        <span>Mobile hotspot</span>
                      </h4>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-center pb-6">
                      <img
                        src="./HomePage/Unlimited_d.webp"
                        alt="some image"
                      ></img>
                    </div>
                    <div className="text-[20px] font-bold text-center">
                      <h4>
                        <span>Unlimited talk & text</span>
                      </h4>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-center pb-6">
                      <img
                        src="./HomePage/Nationwide_d.webp"
                        alt="some image"
                      ></img>
                    </div>
                    <div className="text-[20px] font-bold text-center">
                      <h4>
                        <span>99% nationwide coverage</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <div class="p-4 flex justify-center">
                    <a
                      class="bg-black hover:bg-gray-400 text-white font-bold py-3 px-7 rounded-full"
                      href="/plans/"
                    >
                      Plan Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="image_container slide-animation my-10 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/3 flex justify-center"
            > 
              <div id="image_ontainer" className=" min-h-80 w-full et_pb_text_4 et_had_animation et_pb_module">
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default BoostPlans;
