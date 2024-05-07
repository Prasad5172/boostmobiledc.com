import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
    const [active,setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    // document.getElementById("mobile_nav").classList.toggle("top-minus-100")
    // document.getElementById("mobile_nav").classList.toggle("top-12")
    setIsOpen(!isOpen);
  };

  return (
    <>

  
    <nav className="bg-white py-4 relative flex justify-center">
      <div className="container  flex justify-between items-center relative mx-2">
        {/* Logo */}
            <div className="flex items-center justify-between w-full  ">
              <div className="image">
                  <img
                      className="h-16 mr-4"
                      src="./boost-fiji.webp" // Replace with your logo path
                      alt="Logo"
                  />
              </div>
              <div className=" text-black hidden lg:block xl:block 2xl:block ">
                      <span className={`mr-6 font-bold text-[22px] ${active != 0 ? "hover:text-gray-500":"" }  cursor-pointer ${active == 0 ? "text-orange-600":"" } `} onClick={() => {
                        setActive(0)
                        navigate("/")
                      }}>Home</span>
                      <span className={`mr-6 font-bold text-[22px] ${active != 1 ? "hover:text-gray-500":"" }  cursor-pointer ${active == 1 ? "text-orange-600":"" } `} onClick={() => {
                        setActive(1)
                        navigate("/locations")
                      }}>Locations</span>
                      <span className={`mr-6 font-bold text-[22px] ${active != 2 ? "hover:text-gray-500":"" }  cursor-pointer ${active == 2 ? "text-orange-600":"" } `} onClick={() => {
                        setActive(2) 
                        navigate("/internet")
                      }}>Internet</span>
                      <span className={`mr-6 font-bold text-[22px] ${active != 3 ? "hover:text-gray-500":"" }  cursor-pointer ${active == 3 ? "text-orange-600":"" } `} onClick={() => {
                        setActive(3)
                        navigate("/careers")
                      }}>Careers</span>
                      <span className={`mr-6 font-bold text-[22px] ${active != 4 ? "hover:text-gray-500":"" }  cursor-pointer ${active == 4 ? "text-orange-600":"" } `} onClick={() => {
                        setActive(4)
                        navigate("/contact-boost-mobile")
                      }}>Contact Us</span>
              </div>
            </div>
        
        {/* Hamburger Menu */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
            
        </div>
        <ul
  id="mobile_nav"
  className={`lg:hidden bg-white absolute left-0 top-16 w-full nav-items ${isOpen ? 'open' : ''}`}
>
  <li className="hover:bg-gray-50 p-2">
    <a href="/" className="block text-black py-2 px-4 hover:text-orange-600">Home</a>
  </li>
  <li className="hover:bg-gray-50 p-2">
    <a href="/about" className="block text-black py-2 px-4 hover:text-orange-600">Locations</a>
  </li>
  <li className="hover:bg-gray-50 p-2">
    <a href="/services" className="block text-black py-2 px-4 hover:text-orange-600">Internet</a>
  </li>
  <li className="hover:bg-gray-50 p-2">
    <a href="/contact" className="block text-black py-2 px-4 hover:text-orange-600">Careers</a>
  </li>
  <li className="hover:bg-gray-50 p-2">
    <a href="/contact" className="block text-black py-2 px-4 hover:text-orange-600">Contact Us</a>
  </li>
</ul>

      </div>
      
      {/* Navigation Links */}
      
    </nav>
    </>
  );
}

export default Navbar;
