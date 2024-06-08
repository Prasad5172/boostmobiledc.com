import React from 'react'
import FormAboutTime from '../../Comp/FormAbout'
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDiamondTurnRight} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
function Location() {
  const navigate = useNavigate();
  console.log(window.innerWidth);

  return (
        <div className='flex justify-center my-10'>
            <div className="container 2xl:mx-20">
                <p className='font-bold text-5xl text-center'>FIND A NEAR STORE</p>
                <div className="container   ">
                  <div className="flex lg:flex-row xl:flex-row 2xl:flex-row md:flex-row flex-col justify-center ">
                    
                    <div className="my-10 md:basis-2/3 lg:basis-2/3 xl:basis-2/3 2xl:basis-2/3">
                      <div className='mb-5  items-center text-xl'>
                          <h1 className='text-[#f97316] font-bold text-center'>Store Address:</h1>
                          <p className='text-center'>5750 Silver Hill Road</p>
                          <p className='text-center'>District heights,MD 20747</p>
                        </div>
                        <div className=' hover:underline flex justify-center items-center text-lg ' >
                          <a href='https://www.google.com/maps/dir//5750+Silver+Hill+Rd,+District+Heights,+MD+20747/@38.8548724,-76.9125375,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89b7bec9222310c3:0xc4016546edec2623!2m2!1d-76.9099626!2d38.8548724?entry=ttu' target='_blank'  class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded inline-block h-[60px] pt-[16px] ">
                              Click here to get direction 
                              <FontAwesomeIcon
                                icon={faDiamondTurnRight}
                                style={{ fontSize: "20px", marginLeft:"10px" }}
                              />
                          </a>
                      </div>
                        
                      <div className="container flex " id='map'>
                        <iframe className="my-10 w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.0211718580163!2d-76.9125375241419!3d38.85487237173314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7bf3001a718e9%3A0xf0e5ce2239832d51!2sBoost%20Mobile!5e0!3m2!1sen!2sin!4v1716746559504!5m2!1sen!2sin" style={{border:"0",height:"80vh"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
  )
}

export default Location