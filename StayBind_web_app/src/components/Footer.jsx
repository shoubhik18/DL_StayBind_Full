import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { FaAngleRight } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-full mx-auto px-10 sm:px-6 lg:px-24">
        <div className="flex flex-wrap justify-between text-center sm:text-left">
          <div className="w-full sm:w-1/4 mb-8 sm:mb-06 pe-8">
            <h2 className="text-lg font-semibold mb-4">Logo</h2>
            <p className=" mb-4">The proper Footer on proper time can preserve you protection. We assist you make sure everybody forward.</p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className=" bg-black rounded-full p-2 text-xs text-blue-600 "><FaFacebookF size="1.5em" /></a>
              <a href="#" className=" bg-black rounded-full p-2 text-xs text-blue-600"><FaTwitter size="1.5em" /></a>
              <a href="#" className=" bg-black rounded-full p-2 text-xs text-blue-600"><FaInstagram size="1.5em" /></a>
              <a href="#" className=" bg-black rounded-full p-2 text-xs text-blue-600"><FaYoutube size="1.5em" /></a>
            </div>
          </div>
          <div className="w-full ms-52 sm:w-1/4 mb-8 sm:mb-0">
            <h2 className="text-lg font-semibold mb-4">Quick Link</h2>
            <ul className=" space-y-2">
              <li><a href="#" className="hover:text-blue-600 flex items-center"><FaAngleRight className='text-blue-700 text-lg'/>Home</a></li>
              <li><a href="#" className="hover:text-blue-600 flex items-center"><FaAngleRight className='text-blue-700 text-lg'/>About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 flex items-center"><FaAngleRight className='text-blue-700 text-lg'/>Services</a></li>
              <li><a href="#" className="hover:text-blue-600 flex items-center"><FaAngleRight className='text-blue-700 text-lg'/>Product</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4">
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <ul className=" space-y-4">
              <li className="flex items-center"><ImLocation2 className="mr-2 text-blue-600 text-2xl  " /><span>44 Danwers, NY City, USA, 70-102</span></li>
              <li className="flex items-center"><IoIosMail className="mr-2 text-blue-600 text-2xl" /><span>Lamaroy@Lamaroyc.Us</span></li>
              <li className="flex items-center"><BiSolidPhoneCall className="mr-2 text-blue-600 text-2xl" /><span>91+585-656-658</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="">&copy; 2023 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;