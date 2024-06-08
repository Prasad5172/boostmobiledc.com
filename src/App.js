
import React,{useState} from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark,faPhone } from "@fortawesome/free-solid-svg-icons";
import Address from "./Pages/HomePage/HomeComponents/Address";
import CompanyFotter from "./Pages/HomePage/Fotter/CompanyFotter";
import Fotter from "./Pages/HomePage/Fotter/Fotter";
import Privacy from "./Pages/PrivacyPage/Privacy";
import Plans from "./Pages/PhonePlans/Plans";
import PhoneBill from "./Pages/PayYourPhoneBillPage/PhoneBill";
import FreePhone from "./Pages/FreePhonePage/FreePhone";
import MobilePlans from "./Pages/BoostMobilePhonePlansPage/MobilePlans";
import PayAsYouGo from "./Pages/PayAsYouGoPage/PayAsYouGo";
import CellCompany from "./Pages/CellPhoneCompany/CellCompany";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Internet from "./Pages/InternetPage/Internet";
import CareersPage from "./Pages/Careers/CareersPage";
import Location from "./Pages/LocationPage/Location";
import HomePage from './Pages/HomePage/HomePage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import ContactForm from './Comp/ContactForm';
import Navbar from './Comp/Navbar';
import Timings from './Comp/Timings';




function App() {;
  const navigate = useNavigate()
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isHourOpen, setIsHourOpen] = useState(false);

  const handleContact = () => {
    setIsContactOpen(!isContactOpen);
  };
  const handleHours = () => {
    // document.getElementById("hours").classList.toggle("hidden")
    setIsHourOpen(!isHourOpen);
  }
  return (

    <>
      <div className="dark:bg-[#111920] relative">
        <div className="call_header lg:hidden bg-orange-500 flex justify-center sticky top-0 z-10 border-b-2 border-white border-solid">
          <a href='tel: 3012785974' className="text-white font-bold text-[23px]">
          <FontAwesomeIcon
              icon={faPhone}
              style={{ fontSize: "20px" }}
            />
             (301) 2785974
          </a>
        </div>
        <header>
          {/* <NavComp/> */}
          <Navbar/>
        </header>
        <Routes>
          <Route exact path='/' element={<HomePage />}/>
          <Route exact path='/contact-boost-mobile' element={ <ContactUs/>}/>
          {/* <Route exact path='/careers' element={ <CareersPage/> }/> */}
          <Route exact path='/internet' element={ <Internet/>}/>
          <Route exact path='/locations' element={ <Location/>}/>
          <Route exact path='/cell-phone-company-district-heights-md' element={ <CellCompany place={"District Heights "} city={"MD"} />}/>
         
          
          <Route exact path='/pay-as-you-go-phone-district-heights-md' element={ <PayAsYouGo place={"District Heights "} city={"MD"}/>}/>
          
         
          <Route exact path='/boost-mobile-phone-plans-district-heights-md' element={ <MobilePlans place={"District Heights "} city={"MD"}/>}/>
          
          <Route exact path='/free-phone-district-heights-md' element={<FreePhone place={"District Heights "} city={"MD"}/>}/>


          <Route exact path='/pay-your-phone-bill-district-heights-md' element={ <PhoneBill place={"District Heights "} city={"MD"}/>}/>

          <Route exact path='/phone-plans-district-heights-md' element={<Plans place={"District Heights "} city={"MD"}/>}/>
          

          <Route exact path='/privacy-policy/' element={ <Privacy/>}/>
          <Route exact path='*' element={<ErrorPage />} />
          <Route exact path='*/*' element={<ErrorPage />} />
          <Route exact path='*/*/*' element={<ErrorPage />} />
         </Routes>
        <Address/>
        <CompanyFotter/>
        <Fotter/>
        {/* <div className="fixed bottom-12 right-5 border-2 rounded-md border-white w-40 h-12 bg-orange-600 cursor-pointer flex items-center justify-center" onClick={handleContact}>
          <div className="text-white flex items-center justify-center gap-2">
            <FontAwesomeIcon
              icon={faCommentDots}
              style={{ fontSize: "30px" }}
            />
            <p>Contact Us</p>
          </div>
        </div> */}
        {/* <div id="home_contact" className={`home_contact fixed  right-5 border-2 rounded-md border-white w-80 bg-white flex items-center justify-center  ${isContactOpen ? 'moveup' : 'movedown'}`}>
          <div className="text-white flex items-center justify-center gap-2">
            <ContactForm flag={true} handleContact={handleContact}/>
          </div>
        </div> */}
       
        <div id='hours' className={`flex justify-center items-center  bg-[#000000b5] fixed top-0 bottom-0 left-0 right-0 z-50 ${isHourOpen ? "":"hidden"}`}>
          <div>
              <div className='bg-white p-4'>
                <div className='flex justify-end relative'>
                    <div className='inline-block px-2 hover:bg-gray-500 rounded-full border-2 border-orange-600  bg-black cursor-pointer absolute top-minus-25 right-minus-25' onClick={handleHours}>
                      <FontAwesomeIcon icon={faXmark} style={{color:"white"}} />
                    </div>
                </div>
                <p className='font-semibold text-center'>BUSINESS HOURS</p>
                <div className='px-4 text-[15px] mb-4'>
                  <Timings fontBold={true}/>
                </div>
                <div className='bg-orange-500  flex justify-center p-3'>
                  <a href='tel: 3012785974' className=' text-white items-center  text-center font-bold cursor-pointer'>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ fontSize: "15px" }}
                  />  
                  (301) 2785974
                  </a>
                </div>
                <p onClick={() => {
                  navigate("/contact-boost-mobile")
                 handleHours()
                 window.scrollTo({
                  top: 0,
                  behavior: 'smooth' // Smooth scrolling animation
                });
                 }} className='bg-orange-500 mt-4 text-white p-3 text-center font-bold cursor-pointer'>Contact Us</p>
              </div>
          </div>
        </div>
      </div>
      <div className="call_header lg:hidden bg-orange-500 flex justify-center sticky bottom-0 z-10 border-t-2 border-white border-solid">
          <table className="">
          <tbody>
            <tr>
              <td className='text-center p-1 text-shadow text-base cursor-pointer flex items-center' onClick={handleHours}><img src="./ck_mobile.webp" className='scale-50 ' alt="" /> Hours </td>
            </tr>
          </tbody>
            
          </table>
        </div>
    </>

   

  );
}

export default App;
