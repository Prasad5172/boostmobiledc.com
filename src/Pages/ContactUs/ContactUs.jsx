import React from 'react'
import BreadCrumb from '../../Comp/BreadCrumb';
import ContactForm from '../../Comp/ContactForm';
import Timings from '../../Comp/Timings';

function ContactUs() {
    var width = window.innerWidth;
  return (
    <div>
    <div className="relative" >
    <div style={{
      backgroundImage:"url(./HomePage/position-1-bg-d.webp)",
      backgroundPosition:"center center",
      height:`${width< 700 ? "250px":"500px"}`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
    }}  className="absolute top-0 w-full"></div>
      <div className="flex justify-center items-center z-99 relative" style={{
        height:`${width< 700 ? "250px":"500px"}`,
      }}>
        <div className="container  sm:p-20 md:p-40 lg:p-40 xl:p-40  2xl:p-40">
          <h1 className="font-bold text-[25px] md:text-[50px] lg:text-[50px] xl:text-[50px] 2xl:text-[50px] text-white p-0 sm:p-0 md:p-0  lg:p-12 xl:p-12 2xl:p-12 text-center">Contact Us</h1>
        </div>
      </div>
      
    </div>
    <BreadCrumb data={["Contact Us"]} length={1} />
    <div className="container mx-auto  md:my-5 lg:my-10 xl:my-10 2xl:my-10 flex justify-center flex-col">
    <div className='p-5'>
        <div className='lg:pl-20 xl:pl-20 2xl:pl-20 md:pl-10 '>
            <p className='font-semibold text-[28px]'>Contact us for more information</p>
            <p>If you have any questions about our services, or if you would like to request an estimate, please don’t hesitate to contact us using the information below. We look forward to serving you!</p>
        </div>
    </div>
      <div className="flex lg:flex-row xl:flex-row 2xl:flex-row flex-col justify-center">
        
        <div className="my-10 lg:basis-2/3 xl:basis-2/3 2xl:basis-2/3 flex justify-center flex-col">
            <img src="./ContactUs/ExpandedMap_d.webp" alt="US Map" />
            <p className='font-bold text-center'>Boost Mobile</p>
            <p className=' text-center'>5750 Silver Hill Road</p>
            <p className=' text-center'>Distric heights,MD 2747</p>
            <a className=' text-center'>Telephone: (301) 2785974</a>
            <hr className='border border-black my-5' />
            <p className='font-bold mb-2  text-center'>Hours Of Operation</p>
            <Timings/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactUs