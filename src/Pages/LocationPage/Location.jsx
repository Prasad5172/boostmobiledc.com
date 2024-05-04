import React from 'react'
import MobilePlansContent from '../BoostMobilePhonePlansPage/MobilePlansContent'
import FormAboutTime from '../../Comp/FormAbout'

function Location() {
  return (
    <div className='flex justify-center my-20'>
        <div className="container 2xl:mx-20">
            <p className='font-bold text-5xl text-center'>FIND A NEAR STORE</p>
            <div className="container   md:my-5 lg:my-10 xl:my-10 2xl:my-10">
              <div className="flex lg:flex-row xl:flex-row 2xl:flex-row md:flex-row flex-col ">
                <div className="my-10 md:basis-1/3 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/3 flex justify-center flex-col">
                  <FormAboutTime/>
                </div>
                <div className="md:basis-2/3 lg:basis-2/3 xl:basis-2/3 2xl:basis-2/3">
                  <div className="container ">
                    <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.844424683399!2d83.18880577508978!3d18.17221148285507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bc3a42eccd367%3A0xb53a89724cfdcbee!2sThatipudi%20Reservoir!5e1!3m2!1sen!2sus!4v1714822236669!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Location