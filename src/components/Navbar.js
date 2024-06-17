import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from "../graphics/logo.png"

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)
  useEffect(() => {
    if (window.innerWidth < window.innerHeight) {
      setIsVisible(false)
    }
    else {
      setIsVisible(true)

    }
  }, [])
  return (
    <>
    { isVisible === false ? <></>
      :
      <nav className="fixed top-5 left-5 right-10 rounded-full w-auto bg-transparent backdrop-blur-lg text-black z-50 flex flex-row ">
        <div className=' justify-self-start space-x-6'>
          <img src={logo} />

        </div>
        <div className="flex justify-end space-x-6 w-svw">

          <button className="px-6 py-2 bg-transparent text-black rounded-full">Home</button>
          <button className="px-6 py-2 bg-transparent text-black rounded-full">About</button>
          <button className="px-6 py-2 bg-transparent text-black rounded-full">Logistics</button>
          <button className="px-6 py-2 bg-transparent text-black rounded-full">Infomatics</button>
          <button className="px-6 py-2 bg-transparent text-black rounded-full">ChargeGrid</button>
          <button className="px-6 py-2 bg-transparent text-black rounded-full">Careers</button>
          <button className="px-6 py-2 bg-transparent border border-green-600 text-black rounded-full">Our Stories</button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-full">Get in Touch</button>
        </div>

      </nav>
 }
</>
  );
};

export default Navbar;
