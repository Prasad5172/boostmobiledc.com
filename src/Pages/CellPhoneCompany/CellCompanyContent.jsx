import React from 'react'
import { useNavigate } from 'react-router-dom';

function CellCompanyContent({place,city}) {
  const navigate = useNavigate();
  var towns = [["Martinsburg","WV"],["Charles Town","WV"],["Frederick","MD"],["District Heights","MD"],["Edgewood","PA"],["Hagerstown","MD"],["Parkersburg","WV"],["Winchester","WV"]];
  console.log(place.toLowerCase())
  function replaceSpacesWithHyphens(str) {
    return str.replace(/\s+/g, '-');
  }
  return (
    <div className="p-5 pt-0">
        <h1 className='font-semibold text-[25px] mb-5'>If you are looking for a cell phone company that offers the flexibility you need, you can turn to our team.</h1>
        <p className='text-[16px] mb-5'>These days, just about everyone needs a cell phone to go about their everyday life, and that means everyone needs a cell phone company to provide the service that allows their phone to work. Of course, not all cell phone companies are created equal, and many people are frustrated by their experiences with their phone providers.</p>
        <img src="./CellPhoneCompany/iStock-853324096_res1-1.webp" alt="image" className='w-full mb-5' />
        <p className='text-[16px] mb-5'>For example, many phone companies require their customers to sign long-term service contracts, offer rigid plans that force people to pay for services they don’t actually need, and fail to offer pay-as-you-go options for those who might prefer that approach. Our team at Boost Mobile strives to set ourselves apart from other cell phone companies by addressing these common complaints, and by providing top-notch phones to boot.</p>
        <p className='text-[16px] mb-5'>You can turn to our <span className="font-bold">cell phone company</span>  to get the high-quality new phones you need, as well as the flexible, affordable services you are looking for. We offer a mix-and-match line of phone plans that you can combine in any way you like to create a custom family plan—for example, you can get unlimited talk and text plus 10 GB of data for yourself for just $35 a month and then add lines for your kids with 2 GB of data for only $15 more.</p>
        <p className='text-[16px] mb-5'>Our team is dedicated to providing the top-notch service you deserve, and we want to help you find the right phone and phone plan for your needs. If you are in the  {city == "WV" ? "West Virginia": city == "MD" ? "Maryland" : "Pennsylvania"}  area and looking for a <span className="font-bold">cell phone company</span>  you can trust to take care of you, we encourage you to <span className='text-orange-600 hover:underline cursor-pointer' onClick={() => navigate("/contact-boost-mobile")}>give us a call.</span></p>
        <hr className='border border-black' />
        <ul className='mt-5'>
          {
            towns.map((ele,ind) => {
              if(place != ele[0]){
                return (
                  <li key={ind}><p onClick={() => {
                  navigate(`/cell-phone-company-${replaceSpacesWithHyphens(ele[0]).toLowerCase()}-${ele[1].toLowerCase()}`)
                  window.scrollTo(0, 0)
                  }} className='text-orange-500 hover:underline cursor-pointer'>Cell Phone Company in {ele[0]}, {ele[1]}</p></li>
                )
              }
            })
          }
        
        </ul>
    </div>
  )
}

export default CellCompanyContent