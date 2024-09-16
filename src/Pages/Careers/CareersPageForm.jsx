import React from "react";

function CareersPageForm() {
  return (
    <form>
      <div className="space-y-12">
        <div className=" pb-6">
          <div className="mt-10 ">
            <label
              htmlFor="first-name"
              className="block  leading-6 text-gray-900 font-bold"
            >
              Email*
            </label>
            <div className=" mt-2 mb-6">
              <input
                type="email"
                name="email"
                id="email"
                autocomplete="given-name"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
              />
            </div>
            <label
              htmlFor="first-name"
              className="block font-bold leading-6 text-gray-900"
            >
              Full Name*
            </label>
            <div className="mt-2 mb-6">
              <p className="text-sm">First and Last Name</p>
              <input
                type="text"
                name="name"
                id="name"
                autocomplete="given-name"
                className="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
              />
            </div>
            <label
              htmlFor="first-name"
              className="block font-bold leading-6 text-gray-900"
            >
              Phone*
            </label>
            <div className="mt-2 mb-6">
              <p className="text-sm">Enter your primary phone number</p>
              <input
                type="text"
                name="name"
                id="name"
                autocomplete="given-name"
                className="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
            <label
              htmlFor="first-name"
              className="block font-bold leading-6 text-gray-900"
            >
              Address*
            </label>
            <div className="mt-2 mb-6">
              <p className="text-sm">
                Enter your full current address (Street, City/Township, State,
                Zip Code)
              </p>
              <input
                type="text"
                name="name"
                id="name"
                autocomplete="given-name"
                className="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>

            <p className="block font-bold leading-6 text-gray-900">
              Store Location Preference*
            </p>
            <div className="mt-2 mb-6">
              <p className="text-sm">
                Choose at least one store location in which you are applying for
              </p>
              <ul>
                <li className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 inline-block">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                    className="mt-2 "
                  />
                  <label htmlFor="vehicle1" className=" ml-2 text-sm font-bold">
                    5750 Silver Hill Rd, District Heights
                  </label>
                  <br />
                </li>
                <li className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 inline-block">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                    className="mt-2"
                  />
                  <label htmlFor="vehicle1" className=" ml-2 text-sm font-bold">
                    82 Somerset Blvd Ste 2, Charles To
                  </label>
                  <br />
                </li>
                <li className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 inline-block">
                  <input
                    type="checkbox"
                    id="vehicle2"
                    name="vehicle2"
                    value="Car"
                    className="mt-2"
                  />
                  <label htmlFor="vehicle2" className=" ml-2 text-sm font-bold">
                    9503 Lincoln Highway, Bedford
                  </label>
                  <br />
                </li>
                <li className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 inline-block">
                  <input
                    type="checkbox"
                    id="vehicle2"
                    name="vehicle2"
                    value="Car"
                    className="mt-2"
                  />
                  <label htmlFor="vehicle2" className=" ml-2 text-sm font-bold">
                    2736 Plank Rd, Altoona
                  </label>
                  <br />
                </li>
                <li className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 inline-block">
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat"
                    className="mt-2"
                  />
                  <label htmlFor="vehicle3" className=" ml-2 text-sm font-bold">
                    1821 Pulaski Hwy, Edgewood
                  </label>
                  <br />
                </li>
                <li className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 inline-block">
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat"
                    className="mt-2"
                  />
                  <label htmlFor="vehicle3" className=" ml-2 text-sm font-bold">
                    4980 Gerrardstown, Inwood
                  </label>
                  <br />
                </li>
                <li className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 inline-block">
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat"
                    className="mt-2"
                  />
                  <label htmlFor="vehicle3" className=" ml-2 text-sm font-bold">
                    2107 Pike St, Parkersburg
                  </label>
                  <br />
                </li>
                <li className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 inline-block">
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat"
                    className="mt-2"
                  />
                  <label htmlFor="vehicle3" className=" ml-2 text-sm font-bold">
                    1850 Apple Blossom Dr, Winchest
                  </label>
                  <br />
                </li>
                <li className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 inline-block">
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat"
                    className="mt-2"
                  />
                  <label htmlFor="vehicle3" className=" ml-2 text-sm font-bold">
                    1201 Dual Highway, Hagerstown
                  </label>
                  <br />
                </li>
                <li className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 inline-block">
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat"
                    className="mt-2"
                  />
                  <label htmlFor="vehicle3" className=" ml-2 text-sm font-bold">
                    76 Eagle School Road, Martinsburg
                  </label>
                  <br />
                </li>
                <li className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 inline-block">
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat"
                    className="mt-2"
                  />
                  <label htmlFor="vehicle3" className=" ml-2 text-sm font-bold">
                    261 Mercer Mall Rd, Bluefield
                  </label>
                  <br />
                </li>
                <li className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 inline-block">
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat"
                    className="mt-2"
                  />
                  <label htmlFor="vehicle3" className=" ml-2 text-sm font-bold">
                    1275 W Patrick St, Frederick
                  </label>
                  <br />
                </li>
                <li className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 inline-block">
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat"
                    className="mt-2"
                  />
                  <label htmlFor="vehicle3" className=" ml-2 text-sm font-bold">
                    {" "}
                    2399 Meadowbrook Mall Rd, Bridgeport
                  </label>
                  <br />
                </li>
                <li className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 inline-block">
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat"
                    className="mt-2"
                  />
                  <label htmlFor="vehicle3" className=" ml-2 text-sm font-bold">
                    {" "}
                    1013 Maryland Ave., Hagerstown
                  </label>
                  <br />
                </li>
                <li className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 inline-block">
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat"
                    className="mt-2"
                  />
                  <label htmlFor="vehicle3" className=" ml-2 text-sm font-bold">
                    {" "}
                    11 Aberdeen Shopping Plaza, Aberdeen
                  </label>
                  <br />
                </li>
              </ul>
            </div>

            <p className="block font-bold leading-6 text-gray-900">
              Which shift are you interested in?*
            </p>
            <div className="mt-2 mb-6">
              <p className="text-sm mb-2">
                Select one of the following shift options
              </p>
              <input
                type="radio"
                id="full-time"
                name="shift"
                value="HTML"
                className="cursor-pointer"
              />
              <label htmlFor="full-time" className="cursor-pointer ml-2">
                <span className="font-normal">Full-Time (32-40 Hours)</span>
              </label>

              <br />
              <input
                type="radio"
                id="part-time"
                name="shift"
                value="CSS"
                className="cursor-pointer"
              />
              <label htmlFor="part-time" className="cursor-pointer ml-2">
                <span className="font-normal">Part-Time (Under 32 Hours)</span>
              </label>
              <br />
            </div>

            <p className="block font-bold leading-6 text-gray-900">
              If you chose part-time, how many hours a week?
            </p>
            <div className="mt-2 mb-6">
              <p className="text-sm mb-2">
                Select one of the following options, if you have chosen a
                part-time position
              </p>
              <input
                type="radio"
                id="long"
                name="hours"
                value="HTML"
                className="cursor-pointer"
              />
              <label htmlFor="long" className="cursor-pointer ml-2 mb-2">
                <span className="font-normal"> 25 Hours - 31 Hours</span>
              </label>
              <br />
              <input
                type="radio"
                id="short"
                name="hours"
                value="CSS"
                className="cursor-pointer"
              />
              <label htmlFor="short" className="cursor-pointer ml-2">
                <span className="font-normal">18 Hours - 25 Hours</span>
              </label>
              <br />
            </div>

            <p className="block font-bold leading-6 text-gray-900">
              Position Applied for*
            </p>
            <div className="mt-2 mb-6">
              <p className="text-sm mb-2">
                Please select one of the following options
              </p>
              <input
                type="radio"
                id="sales_representative"
                name="role"
                value="HTML"
                className="cursor-pointer"
              />
              <label htmlFor="sales_representative">
                <span className="font-normal ml-2 cursor-pointer">
                  {" "}
                  Sales Representative
                </span>
              </label>
              <br />
              <input
                type="radio"
                id="store_manager"
                name="role"
                value="CSS"
                className="cursor-pointer"
              />
              <label htmlFor="store_manager">
                <span className="font-normal ml-2 cursor-pointer">
                  Store Manager
                </span>
              </label>
              <br />
              <input
                type="radio"
                id="district_manager"
                name="role"
                value="CSS"
                className="cursor-pointer"
              />
              <label htmlFor="district_manager">
                <span className="font-normal ml-2 cursor-pointer">
                  District Manager
                </span>
              </label>
              <br />
              <input
                type="radio"
                id="bank_office"
                name="role"
                value="CSS"
                className="cursor-pointer"
              />
              <label htmlFor="bank_office">
                <span className="font-normal ml-2 cursor-pointer">
                  Back Office
                </span>
              </label>
              <br />
              <input
                type="radio"
                id="warehouse"
                name="role"
                value="CSS"
                className="cursor-pointer"
              />
              <label htmlFor="warehouse">
                <span className="font-normal ml-2">Warehouse/Inventory</span>
              </label>
              <br />
            </div>

            <p className="block font-bold leading-6 text-gray-900">
              Have you ever been employed by this company?
            </p>
            <div className="mt-2 mb-6">
              <input
                type="radio"
                id="employee_yes"
                name="employee"
                value="yes"
                className="cursor-pointer"
              />
              <label htmlFor="employee_yes">
                <span className="font-normal cursor-pointer ml-2">Yes</span>{" "}
              </label>
              <br />
              <input
                type="radio"
                id="employee_no"
                name="employee"
                value="no"
                className="cursor-pointer"
              />
              <label htmlFor="employese_no">
                <span className="font-normal cursor-pointer ml-2">No</span>{" "}
              </label>
              <br />
            </div>

            <p className="block font-bold leading-6 text-gray-900">
              If yes, provide dates if employment, location, and reason for
              separation of employment
            </p>
            <div className="mt-2 mb-6">
              <p className="text-sm mb-2">
                If you have chosen yes from the follow question, provide
                description below
              </p>
              <input
                type="text"
                name="employee_worked"
                id="employee_worked"
                autocomplete="given-name"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>

            <p className="block font-bold leading-6 text-gray-900">
              Education Level*
            </p>
            <div className="mt-2 mb-6">
              <p className="mb-2 text-sm">
                Select one or more of the following options
              </p>
              <ul>
                <li className="w-full ">
                  <input
                    type="checkbox"
                    id="high_school"
                    name="degree"
                    value="Bike"
                    className="cursor-pointer"
                  />
                  <label htmlFor="high_school" className=" ml-2 cursor-pointer">
                    <span className="font-semibold">High School Diploma</span>{" "}
                  </label>
                  <br />
                </li>
                <li className="w-full ">
                  <input
                    type="checkbox"
                    id="college"
                    name="degree"
                    value="Bike"
                    className="cursor-pointer"
                  />
                  <label htmlFor="college" className=" ml-2 cursor-pointer">
                    <span className="font-semibold">College</span>
                  </label>
                  <br />
                </li>
                <li className="w-full">
                  <input
                    type="checkbox"
                    id="graduate_professional"
                    name="degree"
                    value="Car"
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor="graduate_professional"
                    className=" ml-2 cursor-pointer"
                  >
                    {" "}
                    <span className="font-semibold">Graduate/Professional</span>
                  </label>
                  <br />
                </li>
                <li className="w-full">
                  <input
                    type="checkbox"
                    id="trade_correspondence"
                    name="degree"
                    value="Car"
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor="trade_correspondence"
                    className=" ml-2 cursor-pointer"
                  >
                    {" "}
                    <span className="font-semibold">
                      Trade or Correspondence
                    </span>
                  </label>
                  <br />
                </li>
                <li className="w-full">
                  <input
                    type="checkbox"
                    id="other"
                    name="degree"
                    value="other"
                    className="cursor-pointer"
                  />
                  <label htmlFor="other" className=" ml-2 cursor-pointer">
                    <span className="font-semibold">Other</span>
                  </label>
                  <br />
                </li>
              </ul>
            </div>

            <label
              htmlFor="message"
              class="block mb-2 font-bold text-gray-900 dark:text-white"
            >
              Tell us about your degree - School Name
            </label>
            <div className="mt-2 mb-6">
              <p className="mb-2 text-sm">
                Enter your highest level of education information, if completed,
                and if any additional comments (such as still in school)
              </p>
              <textarea
                id="comment"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>

            <label
              htmlFor="message"
              class="block mb-2 font-bold text-gray-900 dark:text-white"
            >
              Work History*
            </label>
            <div className="mt-2 mb-6">
              <p className="mb-2 text-sm">
                Enter as much information you can about your previous employer
                (employer name, phone number, dates employed, etc.)
              </p>
              <textarea
                id="comment"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>

            <p className="block font-bold leading-6 text-gray-900">
              May We Contact?
            </p>
            <div className="mt-2 mb-6">
              <input
                type="radio"
                id="contact_yes"
                name="contact"
                value="HTML"
                className="cursor-pointer"
              />
              <label htmlFor="contact_yes" className="cursor-pointer ml-2">
                <span className="font-normal">Yes</span>{" "}
              </label>
              <br />
              <input
                type="radio"
                id="contact_no"
                name="contact"
                value="CSS"
                className="cursor-pointer"
              />
              <label htmlFor="contact_no" className="cursor-pointer ml-2">
                <span className="font-normal">No</span>{" "}
              </label>
              <br />
            </div>

            <div className="mt-2 mb-6">
              <label
                htmlFor="contact_reason"
                class="block mb-2 font-bold text-gray-900 dark:text-white"
              >
                {" "}
                If no, why not?
              </label>
              <input
                type="text"
                name="contact_reason"
                id="contact_reason"
                autocomplete="given-name"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>

            <p className="block font-bold leading-6 text-gray-900">
              Were you referred by one of our employees to apply?*
            </p>
            <div className="mt-2 mb-6">
              <p className="mb-2 text-sm">
                Select one of the following options
              </p>
              <input
                type="radio"
                id="referal_yes"
                name="referal"
                value="HTML"
                className="cursor-pointer"
              />
              <label htmlFor="referal_yes" className="ml-2 cursor-pointer">
                <span className="font-normal ">Yes</span>{" "}
              </label>
              <br />
              <input
                type="radio"
                id="referal_no"
                name="referal"
                value="CSS"
                className="cursor-pointer"
              />
              <label htmlFor="referal_no" className="ml-2 cursor-pointer">
                <span className="font-normal">No</span>{" "}
              </label>
              <br />
            </div>

            <label
              htmlFor="first-name"
              className="block font-bold leading-6 text-gray-900"
            >
              If yes, Provide name and position of employee.
            </label>
            <div className="mt-2 mb-6">
              <p className="mb-2 text-sm">If no, provide "N/A"</p>
              <input
                type="text"
                name="referal_name"
                id="referal_name"
                autocomplete="given-name"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>

            <label
              htmlFor="message"
              class="block mb-2 font-bold text-gray-900 dark:text-white"
            >
              Reference 1*
            </label>
            <div className="mt-2 mb-6">
              <p className="mb-2 text-sm">
                Enter your reference name, phone number, occupation, years known
              </p>
              <textarea
                id="reference_1"
                name="reference_1"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your referance details here..."
              ></textarea>
            </div>
            <label
              htmlFor="message"
              class="block mb-2 font-bold text-gray-900 dark:text-white"
            >
              Reference 2*
            </label>
            <div className="mt-2 mb-6">
              <p className="mb-2 text-sm">
                Enter your reference name, phone number, occupation, years known
              </p>
              <textarea
                id="reference_2"
                name="reference_2"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your referance details here..."
              ></textarea>
            </div>
            <label
              htmlFor="message"
              class="block mb-2 font-bold text-gray-900 dark:text-white"
            >
              Reference 3*
            </label>
            <div className="mt-2 mb-6">
              <p className="mb-2 text-sm">
                Enter your reference name, phone number, occupation, years known
              </p>
              <textarea
                id="reference_3"
                name="reference_3"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your referance details here..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <button className="hover:shadow-form rounded-full bg-[#000000] py-3 px-8 text-base font-semibold text-white outline-none">
          Submit
        </button>
      </div>
    </form>
  );
}

export default CareersPageForm;
