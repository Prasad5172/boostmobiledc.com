import React from 'react'
import FormAboutTime from '../../Comp/FormAbout'
import {APIProvider, Map} from '@vis.gl/react-google-maps';

function Location() {
  const apiKey = "AIzaSyC0bIlCK2YYRVJLN-rzS7v2CPd9F6-SR1U";
  return (
    <APIProvider apiKey={apiKey}>
        <div className='flex justify-center my-20'>
            <div className="container 2xl:mx-20">
                <p className='font-bold text-5xl text-center'>FIND A NEAR STORE</p>
                <div className="container   md:my-5 lg:my-10 xl:my-10 2xl:my-10">
                  <div className="flex lg:flex-row xl:flex-row 2xl:flex-row md:flex-row flex-col ">
                    <div className="my-10 md:basis-1/3 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/3 flex justify-center flex-col">
                      <FormAboutTime/>
                    </div>
                    <div className="md:basis-2/3 lg:basis-2/3 xl:basis-2/3 2xl:basis-2/3">
                      <div className="container " id='map'>
                                          <Map
                          style={{width: '100%', height: '100%'}}
                          defaultCenter={{lat: 40.7128, lng: 74.0060}}
                          defaultZoom={3}
                          gestureHandling={'greedy'}
                          disableDefaultUI={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
       </APIProvider>
  )
}

export default Location