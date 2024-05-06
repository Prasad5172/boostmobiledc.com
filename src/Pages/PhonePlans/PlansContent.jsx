import React from "react";
import { useNavigate } from "react-router-dom";

function PlansContent({place,city}) {
  const navigate = useNavigate();
  var towns = [["Martinsburg","WV"],["Charles Town","WV"],["Frederick","MD"],["District Heights","MD"],["Edgewood","PA"],["Hagerstown","MD"]];
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
      <h1 className="font-semibold text-[25px] mb-5">
        Our phone plans are backed by Boost Mobile’s powerful network with
        extensive coverage across the nation.
      </h1>
      <p className="text-[16px] mb-5">
        Comparing the <span className="font-bold">Phone plans</span> offered by
        some of the major cell phone service providers can be overwhelming,
        especially when finances are tight. Many people simply can’t afford to
        pay upwards of $100 per month for service. If you’re in this satiation,
        we invite you to check out the phone plans offered by Boost Mobile. This
        company takes a different approach to cell phone service, offering
        pay-as-you-go options that are more affordable than the plans offered by
        other providers. You can get your own line or mix and match plans to
        create a family plan that meets the needs of every participant.
      </p>
      <img
        src="./Plans/iStock-1310617172res.jpg"
        alt="image"
        className="w-full mb-5"
      />
      <p className="text-[16px] mb-5">
        Here in <span className="font-bold">{place}, {city == "WV" ? "West Virginia": city == "MD" ? "Maryland" : "Pennsylvania"}</span>
        and the surrounding area, cell phone shoppers can visit one of our
        stores to explore the available plans and devices. The most affordable
        option we offer is just $15 per month and includes unlimited talk and
        text, plus mobile hotspot coverage and up to 2 GB of data. You can also
        choose the mid-level plan that costs $25 per month and includes 5 GB of
        data each month. If that’s not quite enough, check out the third plan,
        which includes 10 GB of data and costs $35 per month. Some of these
        phone plans are only available to new customers, so stop by one of our
        locations to <span className='text-orange-600 hover:underline cursor-pointer' onClick={() => navigate("/contact-boost-mobile")}>discuss options and figure out what works for you</span>.
      </p>
      <p className="text-[16px] mb-5">
        Our phone plans are backed by Boost Mobile’s powerful network with
        extensive coverage across the nation. Don’t let expensive prices fool
        you into thinking you can’t afford a cell phone. Shop our selection of
        high-end devices and flexible{" "}
        phone plans to get what you need.
      </p>
      <hr className="border border-black" />
      <ul className="mt-5">
      {
            towns.map((ele,ind) => {
              if(place != ele[0]){
                return (
                  <li key={ind}><p onClick={() => {
                  navigate(`/phone-plans-${replaceSpacesWithHyphens(ele[0]).toLowerCase()}-${ele[1].toLowerCase()}`)
                  scrollToTop()
                  }} className='text-orange-500 hover:underline cursor-pointer'>Phone Plans in {ele[0]}, {ele[1]}</p></li>
                )
              }
            })
          }
      </ul>
    </div>
  );
}

export default PlansContent;
