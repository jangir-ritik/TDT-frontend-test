import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import logo from "../graphics/logo.png"
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";


const Footer = () => {

  return (
    <footer style={{ zIndex: 100 }} id="footer" className='bg-white'>
      <div className="bottom-0 w-full py-8 bg-white text-black grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col justify-between px-10">
          <div className='justify-top'>
            <img src={logo} alt="Logo" />
          </div>
          <div className='flex flex-row items-end space-x-8'>
            <FaLinkedin className='h-14' />
            <FaInstagramSquare className='h-14' />
            <FaFacebook className='h-14' />
            <FaThreads className='h-14' />
            <FaXTwitter className='h-14' />
          </div>
        </div>
        <div className="flex justify-center flex-col">
          <a href="#" className="hover:text-blue-500 py-5">About</a>
          <a href="#" className="hover:text-blue-400 py-5">Logistics</a>
          <a href="#" className="hover:text-blue-500 py-5">Infomatics</a>
          <a href="#" className="hover:text-blue-500 py-5">ChargeGrid</a>
          <a href="#" className="hover:text-blue-500 py-5">Careers</a>
          <a href="#" className="hover:text-blue-500 py-5">Stories</a>
        </div>
        <div className="justify-center px-10">
          <p className='flex text-left justify-start text-lg leading-10'>
            Want to Connect and Partner for Success?
          </p>
          <button className="flex justify-center px-6 py-2 bg-green-600 text-white rounded-full">Enquire Now</button>
        </div>
        
      </div>
      
      <div className='border-t-2 border-gray-500 bottom-0 w-full py-2 bg-white text-black grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='text-zinc-950 justify-start'>
          ©2024 Altron Logistics Solutions Pvt. Ltd.
        </div>
        <div className='text-zinc-950'>
          {/* Empty div for spacing or future content */}
        </div>
        <div className='text-gray-400 justify-end'>
          
          Privacy 
          Disclaimer 
          Legal Information 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
