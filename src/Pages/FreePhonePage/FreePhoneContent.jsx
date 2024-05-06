import React from 'react'
import FAQs from '../../Comp/FAQs'
import { useNavigate } from 'react-router-dom';
function FreePhoneContent({place,city}) {
  const navigate = useNavigate();
  var towns = [["Martinsburg","WV"],["Frederick","MD"],["District Heights","MD"],["Charles Town","WV"],["Parkersburg","WV"]];
  console.log(place.toLowerCase())
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
        <h1 className='font-semibold text-[25px] mb-5'>We can help you get a free phone on a service plan that fits into your budget.</h1>
        <p className='text-[16px] mb-5'>Having a phone is crucial to being part of modern society, as cell phones have essentially replaced landlines and other methods of communication. But when your budget can’t accommodate a pricy device, you may wonder if a cell phone is within reach for you. Boost Mobile offers <span className="font-bold">free phone</span>  options for new customers, putting cell phone service within reach for anyone.</p>
        <img src="./BillsPage/iStock-1316196030-res.webp" alt="image" className='w-full mb-5' />
        <p className='text-[16px] mb-5'>We can help you get a free phone on a service plan that fits into your budget. Something that sets Boost Mobile apart from other carriers is pay-as-you-go service with no contract required. You can get the phone you want with unlimited talk and text, mobile hotspot service, and as much data as you need, all for a low monthly price.</p>
        <p className='text-[16px] mb-5'>Whether you’re shopping for a phone for yourself or a family member, you can get a quality device at a great price. The free and discounted phones we offer come with the features you want, helping you stay connected to your loved ones.</p>
        <p className='text-[16px] mb-5'>If you don’t want to be locked into an expensive service contract or pay for services on your phone that you don’t need or use, you can <span className="text-orange-600 hover:underline cursor-pointer">count on us</span>  to provide affordable options. A pay-as-you-go phone can always fit into your budget, and you can use it to call and text friends and family, manage your finances, use social media, and even apply for jobs. If you’re in or around <span className="font-bold">{place}, {city == "WV" ? "West Virginia": city == "MD" ? "Maryland" : "Pennsylvania"}</span> , stop by our store to explore our <span className="font-bold">free phone</span>  options and figure out if you qualify for one.</p>
        <hr className='border border-black' />
        <ul className='mt-5'>
        {
            towns.map((ele,ind) => {
              if(place != ele[0]){
                return (
                  <li key={ind}><p onClick={() => {
                  navigate(`/free-phone-${replaceSpacesWithHyphens(ele[0]).toLowerCase()}-${ele[1].toLowerCase()}`)
                  scrollToTop()
                  }} className='text-orange-500 hover:underline cursor-pointer'>Free Phone in {ele[0]}, {ele[1]}</p></li>
                )
              }
            })
          }
        </ul>
    </div>
  )
}

export default FreePhoneContent