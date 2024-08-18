import React from 'react'
import {useNavigate} from "react-router-dom";
import FAQs from '../../Comp/FAQs'

function PayAsYouGoContent({place,city}) {

  const navigate = useNavigate();
  var towns = [["District heights","MD"]];
  function replaceSpacesWithHyphens(str) {
    return str.replace(/\s+/g, '-');
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  }
  return (
    <div className="p-5 pt-0">
        <h1 className='font-semibold text-[25px] mb-5'>If you are looking for a high-quality pay-as-you-go-phone, you can turn to us.</h1>
        <p className='text-[16px] mb-5'>In today’s world, a cell phone is no longer a luxury item, but a virtual necessity. And while cell phones have become cheaper to produce than ever, many people still struggle to afford them—or at least, to afford the necessary phone plans to be able to use them.</p>
        <img src="./PayAsYouGo/iStock-1331910730_res1.jpg" alt="pay as you go" className='w-full mb-5' />
        <p className='text-[16px] mb-5'>Whether you can’t afford an expensive long-term phone plan or you simply don’t want to be locked into a contract that forces you to pay for services you don’t need or use, you can turn to our team at Boost Mobile to get an affordable <span className="font-bold">pay-as-you-go phone</span>  that will give you the financial flexibility you are looking for.</p>
        <p className='text-[16px] mb-5'>As the name says, a <span className="font-bold">pay-as-you-go phone</span>  requires no long-term contract and simply allows you to pay for the data and services you have used every month. This option is great for anyone who hates paying for services they don’t need, and it’s also great for anyone whose financial situation is in flux.</p>
        <p className='text-[16px] mb-5'>Our pay-as-you-go phones will allow you to do all the things you need a cell phone for—call loved ones, apply for jobs, log into bank accounts, etc. Then, once your financial situation changes for the better, you can upgrade to a better plan right away without having to wait for any contract requirements.</p>
        <p className='text-[16px] mb-5'>We are proud to serve the <span className="font-bold">{place}, {city}</span>  community, and we want to help you find the right phone and payment plan for your needs. If you are looking for a pay-as-you-go phone, just <span className='text-orange-600 cursor-pointer hover:underline' onClick={() => navigate("/contact-boost-mobile")}>give us a call</span>.</p>
        <hr className='border border-black' />
        <ul className='mt-5'>
        {
            towns.map((ele,ind) => {
                return (
                  <li key={ind}><p onClick={() => {
                    navigate(`/locations`)
                    scrollToTop()
                    }} className='text-orange-500 hover:underline cursor-pointer'>Boost Mobile Phone Plans in {ele[0]}Full Address</p></li>
                )
            })
          }
        </ul>
        <h1 className='font-bold my-4'>Similar Services We Offer:</h1>
        <FAQs data={[{question:"Boost Mobile Top Up",answer:"Boost Mobile top-up is easy, convenient, and accessible from anywhere. One of the reasons customers love Boost Mobile is the...",image:"PayAsYouGo/iStock-1326419622feat-150x150.webp", heading1:"Boost Mobile Top Up",navigationLink:"/"}]}/>
    </div>
  )
}

export default PayAsYouGoContent