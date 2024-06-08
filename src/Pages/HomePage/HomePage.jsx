import React,{useEffect} from 'react'
import BoostPlans from './HomeComponents/BoostPlans'
import Iphone from './HomeComponents/Iphone'
import Careers from './HomeComponents/Careers'
import ContactSection from './HomeComponents/ContactSection'
import HomeSection from './HomeComponents/Home'

function HomePage() {
  

  return (
    <>
        <HomeSection/>
        <BoostPlans />
        <Iphone/>
        {/* <Careers/> */}
        {/* <ContactSection/> */}
    </>
  )
}

export default HomePage