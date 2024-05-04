import React from 'react'

function Iphone() {
  return (
    <>
    <div className="" style={{ backgroundImage: "url('./HomePage/iphone-se-bg_d.webp')", backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
        <div className='w-full h-auto p-10 lg:p-20 xl:p-20 2xl:p-20'>
            <div className='grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2  text-white '>
                <div className=''>
                    <h2 className='font-bold text-4xl my-5 lg:p-10 xl:p-10 2xl:p-10 text-center'>FREE PHONE</h2>
                    <h2 className='font-extrabold text-[20px] text-center'>When you Switch</h2>
                    <div class="p-5 text-center">
                        <a class="bg-black hover:bg-gray-400 text-white font-bold py-3 px-7 rounded-full" href="/plans/">Call For Details</a>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src='./HomePage/amazing-deals_d.webp' alt='some image' />
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Iphone;
