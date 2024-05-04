import React from 'react'
import CarouselWithContent from '../../../Comp/CarouselWithContent'
function Careers() {
  return (
    <div className='bg-white'>
        <div className="" >
            <div className=" text-black flex justify-center">
                <div className="container">
                    <div className="mt-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 ">
                                <div className="flex justify-center">
                                    <div className='flex align-center justify-center'>
                                        <h1 className='font-bold  text-[#0d3454] text-4xl lg:text-6xl xl:text-6xl 2xl:text-6xl '>CAREERS</h1>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="text-center">
                                        <p className='p-2'>We know our customers work hard for their money. Boost Mobile challenges our employees to work just as hard. And we like it that way. We’re always busy making our brand even better.</p>
                                        <div class="mt-5 mb-3 flex justify-center">
                                            <a class="bg-black hover:bg-gray-400 text-white font-bold py-3 px-7 rounded-full" href="/plans/">Plan Details</a>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
            {/* carousel  */}
            <div className=" text-black flex justify-center mb-20" style={{
            backgroundImage: "url('./HomePage/position-1-bg-d1.webp')",
            backgroundPosition:"50%",
            backgroundSize:"cover"
            }}>
                <div className="container">
                    <div className="mt-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 ">
                        <div className="container flex justify-center">
                            <div className=' container flex align-center justify-center'>
                                <CarouselWithContent/>
                            </div>
                        </div>
                        <div className=" hidden lg:block md:block xl:block">
                        </div>
                    </div>
                </div>
            </div>
           
        </div>

    </div>
  )
}

export default Careers