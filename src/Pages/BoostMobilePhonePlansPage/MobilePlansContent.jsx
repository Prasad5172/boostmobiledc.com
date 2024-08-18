import React from 'react'
import FAQs from '../../Comp/FAQs'
import { useNavigate } from 'react-router-dom';

function MobilePlansContent({place,city}) {
  const navigate = useNavigate();
  var towns = [["District heights ","MD"]];
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
        <h1 className='font-semibold text-[25px] mb-5'>Our Boost Mobile phone plans offer the flexibility you need to get great service at an affordable price.</h1>
        <p className='text-[16px] mb-5'>When cell phones first appeared on the market, they were very expensive, so they were used by relatively few people. Today, however, cell phones have become much more common, and they are now seen as a necessary—or at least unavoidable–part of everyday life. Unfortunately, the expense of a cell phone is still a concern for many people, as is the cost of the phone plan that comes with it.</p>
        <img src="./FreePhone/iStock-1313325630_res1.webp" alt="free phone image" className='w-full mb-5' />
        <p className='text-[16px] mb-5'>If you are looking for a phone plan that provides the services you need for a price that fits comfortably into your budget, we encourage you to turn to our team at Boost Mobile. Our selection of <span className="font-bold">Boost Mobile phone plans</span>  includes a wide range of options to help you get the coverage you need for a price you can afford.</p>
        <p className='text-[16px] mb-5'> <span className="font-bold"> Boost Mobile phone plans</span> start at just $15 a month for unlimited talk and text, mobile hotspot services, and 2 GB of 4G/5G data. This plan is one of the options in our You Choose, You Save line, and you can mix and match it with higher data plans to create your own custom family plan. Alternatively, you can choose one of our unlimited data plans, which start at just $50 a month.</p>
        <p className='text-[16px] mb-5'> Our team is proud to serve the community here in  <span className="font-bold">District heights MD</span>, and we want to help you find the best phone and phone plan for your needs. We encourage you to take a look on our website to learn more about our  Boost Mobile phone plans or <span className='text-orange-600 hover:underline cursor-pointer'> give us a call</span> to consult our team directly.</p>
        <hr className='border border-black' />
        <ul className='mt-5'>
        {
            towns.map((ele,ind) => {
                return (
                  <li key={ind}><p onClick={() => {
                    navigate(`/locations`)
                    scrollToTop()
                    }} className='text-orange-500 hover:underline cursor-pointer'>Boost Mobile Phone Plans in {ele[0]} Full Address</p></li>
                )
            })
          }
        </ul>
        {/* <h1 className='font-bold my-4'>Similar Services We Offer:</h1> */}
        {/* <FAQs data={[{question:"Boost Cell Phone Deals",answer:"some answer",image:"BoostPlans/iStock-853324096_feat1-150x150.webp"}]}/> */}
    </div>
  )
}

export default MobilePlansContent