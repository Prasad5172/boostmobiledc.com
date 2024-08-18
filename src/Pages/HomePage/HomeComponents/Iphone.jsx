import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


function Iphone() {
  const navigate = useNavigate();
  const freePhoneRef = useRef(null);
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const containerTop = wrapperRef.current.offsetTop;
      const containerHeight = wrapperRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate opacity based on scroll position relative to container
      const opacity = Math.min(1, (scrollTop - containerTop + viewportHeight) / containerHeight);
      
      // Calculate translation value for free phone text (X-direction)
      const freePhoneTranslation = Math.min(100, 100 - 100 * opacity);

      // Calculate translation value for the image (Y-direction)
      const imageTranslation = Math.min(200, 200 - 200 * opacity);

      // Apply opacity and translation to the free phone text
      freePhoneRef.current.style.opacity = opacity;
      freePhoneRef.current.style.transform = `translateX(-${freePhoneTranslation}px)`;

      // Apply opacity and translation to the image
      imageRef.current.style.opacity = opacity;
      imageWrapperRef.current.style.transform = `translateY(${imageTranslation}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    // Call handleScroll initially to handle pre-scrolled content
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className="step" style={{ backgroundImage: "url('./HomePage/iphone-se-bg_d.webp')", backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
          <div ref={wrapperRef} className='w-full h-auto p-10 lg:p-20 xl:p-20 2xl:p-20'>
              <div className='grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 text-white'>
                  <div className='free-phone-div' ref={freePhoneRef}>
                      <h2 className='font-bold text-4xl my-5 lg:p-10 xl:p-10 2xl:p-10 text-center'>FREE PHONE</h2>
                      <h2 className='font-extrabold text-[20px] text-center'>When you Switch</h2>
                      <div class="p-5 text-center">
                          <a class="bg-black hover:bg-gray-400 text-white font-bold py-3 px-7 rounded-full" onClick={() => {
                            navigate("/locations")
                          }}>Call For Details</a>
                      </div>
                  </div>
                  <div className='flex justify-center free-phone-img' ref={imageWrapperRef}>
                      <img ref={imageRef} src='./HomePage/amazing-deals_d.webp' alt='mobiles' />
                  </div>
              </div>
          </div>
        </div>
    </>
  );
}

export default Iphone;
