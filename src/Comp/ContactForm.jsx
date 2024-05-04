import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ContactForm({flag,handleContact}) {
  return (
    <div className=" min-w-80 ">
                  <div className="outer mt-16 lg:m-6 flex items-center justify-center mx-4 my-auto lg:mx-0 p-5 rounded-md sm:p-10 lg:p-10 md:p-10 xl:p-10 2xl:p-10 bg-white">
                    <div className="inner mx-auto w-full max-w-[550px]">
                      <h1 className="text-sky-950 text-[30px] lg:text-[40px] md:text-[40px] xl:text-[40px] 2xl:text-[40px] font-bold flex justify-center">
                        Contact Us
                      </h1>
                      {
                        flag && <div className='flex justify-end'>
                          <div className='bg-orange-600 inline-block px-2 hover:bg-orange-400 cursor-pointer' onClick={handleContact}>
                          <FontAwesomeIcon icon={faXmark} />
                          </div>
                        </div>
                      }
                      <form
                        action="https://formbold.com/s/FORM_ID"
                        method="POST"
                      >
                        <div className="mb-5 form_field">
                          <label
                            for="name"
                            className="label mb-3 block text-base font-bold text-[#07074D]"
                          >
                            Full Name:
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="input_tag w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                        <div className="mb-5 form_field">
                          <label
                            for="email"
                            className="label mb-3 block text-base font-bold text-[#07074D]"
                          >
                            Email Address:
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@domain.com"
                            className="input_tag w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                        <div className="mb-5 form_field">
                          <label
                            for="subject"
                            className="label mb-3 block text-base font-bold text-[#07074D]"
                          >
                            Phone:
                          </label>
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Enter your subject"
                            className="input_tag w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                        <div className="mb-5 form_field">
                          <label
                            for="message"
                            className="label mb-3 block text-base font-bold text-[#07074D]"
                          >
                            Message
                          </label>
                          <textarea
                            rows="4"
                            name="message"
                            id="message"
                            placeholder="Type your message"
                            className="input_tag w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          ></textarea>
                        </div>
                        <p className="text-black">need to add recaptcha</p>

                        <div>
                          <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                    </div>
                </div>
  )
}

export default ContactForm