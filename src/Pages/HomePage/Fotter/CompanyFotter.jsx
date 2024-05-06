import React from 'react'
import { useNavigate } from 'react-router-dom'

function CompanyFotter() {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  }
  return (
    <>
            <div className="bg-[#2d2d2d] p-10 flex justify-center align-center">
                <div className=" container  flex lg:flex md:flex xl:flex 2xl:flex text-center justify-center align-center flex-wrap gap-10">
                    <p onClick={() => {
                      navigate('/cell-phone-company-martinsburg-wv')
                      scrollToTop()
                      }} className='text-stone-400 font-bold text-nowrap mb-2 cursor-pointer hover:text-white'>Cell Phone Company</p>
                    <p onClick={() => {
                        navigate( '/pay-as-you-go-phone-martinsburg-wv')
                        scrollToTop()
                    }} className='text-stone-400 font-bold text-nowrap mb-2 cursor-pointer hover:text-white'>  Pay-as-You-Go Phone</p>
                    <p onClick={() => {
                      navigate('/boost-mobile-phone-plans-martinsburg-wv')
                      scrollToTop()
                      }}  className='text-stone-400 font-bold text-nowrap mb-2 cursor-pointer hover:text-white'>Boost Mobile Phone Plans </p>
                    <p onClick={() => {
                      navigate('/free-phone-martinsburg-wv')
                      scrollToTop()
                      }}  className='text-stone-400 font-bold text-nowrap mb-2 cursor-pointer hover:text-white'> Free Phone</p>
                    <p onClick={() => {
                      navigate('/pay-your-phone-bill-martinsburg-wv')
                      scrollToTop()
                    }}  className='text-stone-400 font-bold text-nowrap mb-2 cursor-pointer hover:text-white'> Pay Your Phone Bill</p>
                    <p onClick={() => {
                      navigate('/phone-plans-martinsburg-wv')
                      scrollToTop()
                    }}  className='text-stone-400 font-bold text-nowrap mb-2 cursor-pointer hover:text-white'>  Phone Plans</p>
                </div>
            </div>
    </>
  )
}

export default CompanyFotter;