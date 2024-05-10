import React, { useEffect, useRef } from "react";

function BoostPlans() {
  const imageContainerRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const containerTop = imageContainerRef.current.offsetTop;
      const containerHeight = imageContainerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate opacity based on scroll position relative to container
      const opacity = Math.min(1, (scrollTop - containerTop + viewportHeight) / containerHeight);
      
      // Calculate translation value based on scroll position
      const translation = Math.min(400,400-400*opacity);

      // Apply opacity and translation to the image container
      imageContainerRef.current.style.opacity = opacity;
      imageContainerRef.current.style.transform = `translateX(${translation}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    // Call handleScroll initially to handle pre-scrolled content
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const containerTop = paraRef.current.offsetTop;
      const containerHeight = paraRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate opacity based on scroll position relative to container
      const opacity = Math.min(1, (scrollTop - containerTop - 100 + viewportHeight) / containerHeight);
      
      // Calculate translation value based on scroll position

      // Apply opacity and translation to the image container
      paraRef.current.style.opacity = opacity;
    };

    window.addEventListener('scroll', handleScroll);

    // Call handleScroll initially to handle pre-scrolled content
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="container md:my-10 lg:my-20 xl:my-20 2xl:mt-20">
          <div className="flex lg:flex-row xl:flex-row 2xl:flex-row flex-col xl:mx-20 2xl:mx-20">
            <div className="lg:basis-2/3 xl:basis-2/3 2xl:basis-2/3">
              <div>
                <div ref={paraRef} className="pb-20">
                  <p  className="ml-20 mr-20 text-3xl md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-7xl font-extrabold text-[#0d3454]  text-center boost-plans-opacity">
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
            <div className="flex my-10 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/3  justify-center overflow-hidden ">
              <div
                id="image-container"
                ref={imageContainerRef}
                className="image_container w-full  et_pb_text_4 et_had_animation et_pb_module"
              > 
                
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoostPlans;
