import React from 'react'

function Timings({fontBold}) {
  return (
    <>
        <p className={`flex ${fontBold ? "font-semibold":""}`}> <p className="w-14">Mon</p> <span>10:00 AM - 07:00 PM</span></p>
        <p className={`flex ${fontBold ? "font-semibold":""}`}> <p className="w-14">Tue</p> <span>10:00 AM - 07:00 PM</span></p>
        <p className={`flex ${fontBold ? "font-semibold":""}`}> <p className="w-14">Wed</p> <span>10:00 AM - 07:00 PM</span></p>
        <p className={`flex ${fontBold ? "font-semibold":""}`}> <p className="w-14">Thur</p> <span>10:00 AM - 07:00 PM</span></p>
        <p className={`flex ${fontBold ? "font-semibold":""}`}> <p className="w-14">Fri</p> <span>10:00 AM - 07:00 PM</span></p>
        <p className={`flex ${fontBold ? "font-semibold":""}`}> <p className="w-14">Sat</p> <span>12:00 PM - 05:00 PM</span></p>
    </>
  )
}

export default Timings