
import React,{useState} from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import NavComp from "./Comp/NavComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
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





function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContact = () => {
    setIsContactOpen(!isContactOpen);
  };
  return (

    <>
      <div className="dark:bg-[#111920] ">
        <header>
          <NavComp/>
        </header>
        <Routes>
          <Route exact path='/' element={<HomePage />}/>
          <Route exact path='/contact-boost-mobile' element={ <ContactUs/>}/>
          <Route exact path='/careers' element={ <CareersPage/> }/>
          <Route exact path='/internet' element={ <Internet/>}/>
          <Route exact path='/locations' element={ <Location/>}/>
          <Route exact path='/cell-phone-company-martinsburg-wv' element={ <CellCompany place={"Martinsburg"} city={"WV"} />}/>
          <Route exact path='/cell-phone-company-charles-town-wv' element={ <CellCompany place={"Charles Town"} city={"WV"} />}/>
          <Route exact path='/cell-phone-company-frederick-md' element={ <CellCompany place={"Frederick"} city={"MD"} />}/>
          <Route exact path='/cell-phone-company-district-heights-md' element={ <CellCompany place={"District Heights"} city={"MD"}/>}/>
          <Route exact path='/cell-phone-company-edgewood-pa' element={ <CellCompany place={"Edgewood"} city={"PA"} />}/>
          <Route exact path='/cell-phone-company-hagerstown-md' element={ <CellCompany place={"Hagerstown"} city={"MD"} />}/>
          <Route exact path='/cell-phone-company-parkersburg-wv' element={ <CellCompany place={"Parkersburg"} city={"WV"} />}/>
          <Route exact path='/cell-phone-company-winchester-wv' element={ <CellCompany place={"Winchester"} city={"WV"}/>}/>
          
          <Route exact path='/pay-as-you-go-phone-martinsburg-wv' element={ <PayAsYouGo place={"Martinsburg"} city={"WV"}/>}/>
          <Route exact path='/pay-as-you-go-phone-frederick-md' element={ <PayAsYouGo place={"Frederick"} city={"MD"}/>}/>
          <Route exact path='/pay-as-you-go-phone-district-heights-md' element={ <PayAsYouGo place={"District Heights"} city={"MD"}/>}/>
          <Route exact path='/pay-as-you-go-phone-edgewood-pa' element={ <PayAsYouGo place={"Edgewood"} city={"PA"}/>}/>
          <Route exact path='/pay-as-you-go-phone-charles-town-wv' element={ <PayAsYouGo place={"Charles Town"} city={"WV"}/>}/>
          <Route exact path='/pay-as-you-go-phone-hagerstown-md' element={ <PayAsYouGo place={"Hagerstown"} city={"MD"}/>}/>
         
          <Route exact path='/boost-mobile-phone-plans-martinsburg-wv' element={ <MobilePlans place={"Martinsburg"} city={"WV"}/>}/>
          <Route exact path='/boost-mobile-phone-plans-charles-town-wv' element={ <MobilePlans place={"Charles Town"} city={"WV"}/>}/>
          <Route exact path='/boost-mobile-phone-plans-frederick-md' element={ <MobilePlans place={"Frederick"} city={"MD"}/>}/>
          <Route exact path='/boost-mobile-phone-plans-district-heights-md' element={ <MobilePlans place={"District Heights"} city={"MD"}/>}/>
          <Route exact path='/boost-mobile-phone-plans-edgewood-pa' element={ <MobilePlans place={"Edgewood"} city={"PA"}/>}/>
          <Route exact path='/boost-mobile-phone-plans-hagerstown-md' element={ <MobilePlans place={"Hagerstown"} city={"MD"}/>}/>
          <Route exact path='/boost-mobile-phone-plans-parkersburg-wv' element={ <MobilePlans place={"Parkersburg"} city={"WV"}/>}/>
          <Route exact path='/boost-mobile-phone-plans-winchester-wv' element={ <MobilePlans place={"Winchester"} city={"WV"}/>}/>
          
          <Route exact path='/free-phone-martinsburg-wv' element={<FreePhone place={"Martinsburg"} city={"WV"}/>}/>
          <Route exact path='/free-phone-frederick-md' element={<FreePhone place={"Frederick"} city={"MD"}/>}/>
          <Route exact path='/free-phone-district-heights-md' element={<FreePhone place={"District Heights"} city={"MD"}/>}/>
          <Route exact path='/free-phone-charles-town-wv' element={<FreePhone place={"Charles Town"} city={"WV"}/>}/>
          <Route exact path='/free-phone-parkersburg-wv' element={<FreePhone place={"Parkersburg"} city={"WV"}/>}/>

          <Route exact path='/pay-your-phone-bill-martinsburg-wv' element={ <PhoneBill place={"Martinsburg"} city={"WV"}/>}/>
          <Route exact path='/pay-your-phone-bill-frederick-md' element={ <PhoneBill place={"Frederick"} city={"MD"}/>}/>
          <Route exact path='/pay-your-phone-bill-district-heights-md' element={ <PhoneBill place={"District Heights"} city={"MD"}/>}/>
          <Route exact path='/pay-your-phone-bill-edgewood-pa' element={ <PhoneBill place={"Edgewood"} city={"PA"}/>}/>
          <Route exact path='/pay-your-phone-bill-hagerstown-md' element={ <PhoneBill place={"Hagerstown"} city={"MD"}/>}/>

          <Route exact path='/phone-plans-martinsburg-wv' element={<Plans place={"Martinsburg"} city={"WV"}/>}/>
          <Route exact path='/phone-plans-frederick-md' element={<Plans place={"Frederick"} city={"MD"}/>}/>
          <Route exact path='/phone-plans-district-heights-md' element={<Plans place={"District Heights"} city={"MD"}/>}/>
          <Route exact path='/phone-plans-edgewood-pa' element={<Plans place={"Edgewood"} city={"PA"}/>}/>
          <Route exact path='/phone-plans-charles-town-wv' element={<Plans place={"Charles Town"} city={"WV"}/>}/>
          <Route exact path='/phone-plans-hagerstown-md' element={<Plans place={"Hagerstown"} city={"MD"}/>}/>

          <Route exact path='/privacy-policy/' element={ <Privacy/>}/>
          <Route exact path='*' element={<ErrorPage />} />
         </Routes>
        <Address/>
        <CompanyFotter/>
        <Fotter/>
        <div className="fixed bottom-5 right-5 border-2 rounded-md border-white w-40 h-12 bg-orange-600 cursor-pointer flex items-center justify-center" onClick={handleContact}>
          <div className="text-white flex items-center justify-center gap-2">
            <FontAwesomeIcon
              icon={faCommentDots}
              style={{ fontSize: "30px" }}
            />
            <p>Contact Us</p>
          </div>
        </div>
        <div id="home_contact" className={`home_contact fixed  right-5 border-2 rounded-md border-white w-80 bg-white flex items-center justify-center  ${isContactOpen ? 'moveup' : 'movedown'}`}>
          <div className="text-white flex items-center justify-center gap-2">
            <ContactForm flag={true} handleContact={handleContact}/>
          </div>
        </div>
      </div>
    </>

   

  );
}

export default App;
