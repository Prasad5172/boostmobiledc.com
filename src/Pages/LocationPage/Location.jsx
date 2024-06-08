import React from 'react'
import FormAboutTime from '../../Comp/FormAbout'
import {APIProvider, Map} from '@vis.gl/react-google-maps';

function Location() {
  return (
        <div className='flex justify-center my-20'>
            <div className="container 2xl:mx-20">
                <p className='font-bold text-5xl text-center'>FIND A NEAR STORE</p>
                <div className="container   md:my-5 lg:my-10 xl:my-10 2xl:my-10">
                  <div className="flex lg:flex-row xl:flex-row 2xl:flex-row md:flex-row flex-col justify-center ">
                    
                    <div className="my-10 md:basis-2/3 lg:basis-2/3 xl:basis-2/3 2xl:basis-2/3">
                      <div className="container flex " id='map'>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.0211718580163!2d-76.9125375241419!3d38.85487237173314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7bf3001a718e9%3A0xf0e5ce2239832d51!2sBoost%20Mobile!5e0!3m2!1sen!2sin!4v1716746559504!5m2!1sen!2sin" className='w-full' style={{border:"0",height:"80vh"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.0211718580163!2d-76.9125375241419!3d38.85487237173314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7bf3001a718e9%3A0xf0e5ce2239832d51!2sBoost%20Mobile!5e0!3m2!1sen!2sin!4v1716746559504!5m2!1sen!2sin" className='w-full' style={{border:"0",height:"80vh"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
  )
}

export default Location