import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseLaptop } from '@fortawesome/free-solid-svg-icons';

function HomeSection() {
  return (
    <>
      <div className="bg-orange-500">
        <div className=' h-96 lg:h-80 xl:h-80 2xl:h-80  w-full' style={{
          background:"url('./HomePage/home.webp')",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
          backgroundPosition:"center"
        }}>
        </div>
        <div className='lg:h-1/2 md:h-1/2 h-1/2  flex justify-center'>
          <div className='container lg:w-4/5 md:w-4/5 w-full grid lg:grid-cols-2 md:grid-cols-2 gird-cols-1'>
            <div className='font-bold text-white text-4xl p-4 lg:p-5 xl:p-5 2xl:p-5 flex justify-center'>
              <div className="text-white lg:text-5xl xl:text-5xl 2xl:text-5xl w-80 flex justify-center align-center">
                <p className='flex align-center justify-center'>
                  <a href="/locations" className='flex justify-center items-center text-center '>Find A Store Near You!</a>
                </p>
              </div>
            </div>
            <div className='font-bold text-white text-4xl lg:p-5 xl:p-5 2xl:p-5 pb-5'>
              <div className='font-bold text-white text-4xl lg:p-5 xl:p-5 2xl:p-5'>
                <div className="text-white flex justify-center">
                  <a href="/locations" className='lg:text-9xl xl:text-9xl 2xl:text-9xl text-8xl '>
                    <FontAwesomeIcon icon={faHouseLaptop} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSection;
