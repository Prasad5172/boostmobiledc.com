import React from 'react'
import BreadCrumb from '../../Comp/BreadCrumb';
import CareersPageForm from "./CareersPageForm";
function CareersPage() {
  var width = window.innerWidth;
  return (
    <div>
      <div className="relative">
        <div
          style={{
            backgroundImage: "url(./CareersPage/10plan_Legacy_desktop1280.webp)",
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
              Careers
            </h1>
          </div>
        </div>
      </div>
        <BreadCrumb data={["Careers"]} length={1} />
        <div className="container mx-auto  md:my-5 lg:my-10 xl:my-10 2xl:my-10 w-4/5 md:px-30 lg:px-30 xl:px-40 2xl:px-40 ">
            <div className='mb-5 text-[25px] sm:text-[30px] md:text-[40px] xl:text-[50px] 2xl:text-[50px] lg:text-[50px]'>
                <p className='text-center  leading-10  text-[#f56b23] font-bold'>Welcome, Boost.<br/> Welcome, opportunity.</p>
            </div>
            <div>
              <p className='mb-5'>We know our customers work hard for their money. Boost Mobile challenges our employees to work just as hard. And we like it that way. We’re always busy making our brand even better.</p>
              <p className='mb-5'>We listened to what people want in a prepaid wireless carrier, and we offer premium products and services a cut above the others. With the nationwide Sprint® 5G LTE network, * no annual contracts and unlimited plans starting at just $35 a month are among the values that make Boost stand out.</p>
              <p className='mb-5'>Our employees are collaborative, creative and energetic. And even though we take our jobs seriously, we don’t take ourselves too seriously. If you work here, that means you know when to laugh at yourself – and laugh with us.</p>
              <p className='mb-5'>All that hard work pays off. Boost employees are paid a competitive salary and also have the opportunity to receive a performance bonus, plus opportunities to move around in the company.</p>
            </div>
        </div>
        <div style={{
          background:"url(./CareersPage/bg_d-1-1.webp)",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
          backgroundPosition:"center center"
        }}>
            <div className='flex justify-center items-center'>
              <div className='w-11/12 sm:w-3/5 md:w-3/5 lg:w-3/5 xl:w-3/5 2xl:w-3/5'>
                <div className='p-10 md:p-10 lg:p-10 xl:p-10 2xl:p-10 sm:mb-10 md:mb-10 lg:mb-10 xl:mb-10 2xl:mb-10 '>
                    <p className='text-[25px] sm:text-[30px] md:text-[30px] lg:text-[58px] xl:text-[58px] 2xl:text-[58px] font-bold text-center'>Are You Up For The Challenge?</p>
                    <p className='font-bold'>Requirements:</p>
                    <div>
                      <ul className='list-disc mx-auto inline-block text-left '>
                        <li>A strong work ethic and time management skills</li>
                        <li>A commitment to customer service</li>
                        <li>Ability to work closely with others and adapt in fast-paced environment</li>
                        <li>Ability to maintain working knowledge of current devices and competitive offers</li>
                        <li>Strong attention to detail</li>
                        <li>A positive, can-do attitude</li>
                        <li>Bilingual preferred but not required*</li>
                      </ul>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <div className='container mx-auto  md:my-5 lg:my-10 xl:my-10 2xl:my-10 w-4/5 md:px-30 lg:px-30 xl:px-40 2xl:px-40'>
          <div>
            <div>
              <div className='mb-5 text-[25px] sm:text-[30px] md:text-[40px] xl:text-[50px] 2xl:text-[50px] lg:text-[50px]'>
                  <p className='text-center font-bold'>APPLY TODAY!</p>
                  <p className='text-center  leading-10  text-[#f56b23] font-bold'>We Will Take Great Care of You!</p>
              </div>
              <div>
                <CareersPageForm/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CareersPage