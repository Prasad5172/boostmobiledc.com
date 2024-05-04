import React from 'react'
import ContactForm from './ContactForm'
import Timings from './Timings'
function FormAboutTime() {
  return (
        <>
            <ContactForm flag={false}/>
            <div className="p-10">
                <h4 className="font-bold mb-2">About Us</h4>
                <p className="mb-5">Boost Mobile® offers no annual wireless service contract. All Boost Mobile plans include unlimited talk and text, and we offer the latest phones from top brands at affordable prices. Service plans include mobile hotspot, unlimited music streaming and 99% nationwide coverage on America’s largest & fastest 5G network. Whether you’re shopping for a new service or just have questions about a phone, we’re happy to help.</p>
                <h4 className="font-bold mb-2">Hours of Operation</h4>
                <Timings/>
            </div>
        </>
  )
}

export default FormAboutTime