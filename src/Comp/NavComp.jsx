import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
 
export default function NavComp() {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className=" flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 mx-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <p onClick={() => navigate("/")} className="flex items-center text-black text-[22px] cursor-pointer lg:font-bold xl:font-bold 2xl:font-bold">
          Home
        </p>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <p onClick={() => navigate("/locations")} className="flex items-center text-black text-[22px] cursor-pointer lg:font-bold xl:font-bold 2xl:font-bold">
          Locations
        </p>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <p onClick={() => navigate("/internet")} className="flex items-center text-black text-[22px] cursor-pointer 2xl:font-bold xl:font-bold lg:font-bold">
          Internet
        </p>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <p onClick={() => navigate("/careers")} className="flex items-center text-black text-[22px] cursor-pointer lg:font-bold xl:font-bold 2xl:font-bold">
          Careers
        </p>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <p onClick={() => navigate("/contact-boost-mobile")} className="flex items-center text-black text-[22px] cursor-pointer lg:font-bold xl:font-bold 2xl:font-bold">
          Contact Us
        </p>
      </Typography>
    </ul>
  );
 
  return (
    <>
      <div className="call_header lg:hidden bg-orange-500 flex justify-center">
        <p className=" text-white font-bold text-[23px] inline ">
          +91 7989569918
        </p>
      </div>
      <Navbar className="">
            <div className="container h-24 w-8/10">
              <div className=" flex items-center justify-between text-blue-gray-900 px-25px">
                  <img src="./boost-fiji.webp" width="400" height="126" alt='some image'/>
                  <div className="hidden lg:block">{navList}</div>
                  <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                  >
                    {openNav ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6" 
                        viewBox="0 0 24 24"
                        stroke="#ea580c"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="#ea580c"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </IconButton>
                </div>
                <MobileNav open={openNav}>
                  <div className="container w-9/10 absolute bg-white">
                    {navList}
                    
                  </div>
                </MobileNav>
            </div>
      </Navbar>
    </>
  );
}