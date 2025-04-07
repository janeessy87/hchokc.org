import React from "react";
// import {  FaFacebookF,  FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

import logoo from "../assets/logoo.png";

const Footer = () => {

  return (
    <footer className="text-black bg-white dark:bg-black dark:text-white">
      <div data-testid="footer-container" className="flex justify-between other:flex-col">
        <div data-testid="logo-container" className="flex flex-col justify-between px-10 w-[30%] other:justify-center other:items-center other:w-full">

          <img src={logoo} className="py-24 w-40 text-white dark:invert other:pt-8 other:py-4 other:w-80"  alt="" />
          <br />
          <a href="tel:+1405-825-0490" className="px-10 py-2 text-white bg-black rounded-md max-w-[26rem] w-4/5 tab:px-3 dark:text-black other:w-full other:p-3 my-16 other:text-2xl dark:bg-white">405-825-0490</a>
          {/* <Link to='/contact#contact' className="px-10 py-2 text-white bg-black rounded-md max-w-[26rem] w-4/5 tab:px-3 dark:text-black other:w-full other:p-3 my-16 other:text-2xl dark:bg-white">Contact Us</Link> */}
        </div>
        <div className="flex justify-between p-6 space-x-6 w-[30%] other:space-x-10 other:w-full">
          <div className="w-1/2">
            <h1 className="pb-12 font-serif text-xl text-yellow-400">Location</h1>
            <p className="font-thin">428 Dean A McGee Ave
            Oklahoma City , OK 73102</p>
            <a className="font-thin underline" href="https://www.google.com/maps?daddr=428+Dean+A+McGee+Ave++Oklahoma+City+OK+73102+US">Get Directions</a>
            </div>
          <div className="flex flex-col w-1/2">
            <h1 className="pb-12 font-serif text-xl text-yellow-400">Hours</h1>
            <strong className="">Mon - Fri</strong>
            <p className="font-thin text-wrap">8:00 am - 7:00 pm</p>
            <strong className="">Sat - Sun</strong>
            <p className="font-thin text-wrap">Phones will be answered</p> <br />

            <p className="font-thin text-wrap">Phones are answered 24/7</p>

            {/* <ul className="flex items-center pr-8 mt-8 space-x-6 other:py-8 dark:text-white">
          <li><Link to=""><FaTiktok /></Link></li>
          <li><Link to=""><FaInstagram /></Link></li>
          <li><Link to=""><FaFacebookF/></Link></li>
        </ul> */}
            
            </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-16">
        <p className="space-x-2 w-1/4 text-sm font-extralight text-center dark:text-neutral-50 text-neutral-500">Powered by <a href="https://www.highfivemedia.com/" target="blank" className="underline">High Five Media</a><span>|</span><Link to="/privacy-policy"  className="underline">Privacy Policy</Link></p>
      <p className="px-24 pt-3 pb-10 text-sm font-light text-center">© {new Date().getFullYear()} he contents of this website are owned or licensed by High Five Media Group LLC. It is unlawful to copy this website or any of its content without High Five Media's consent.</p>
    </div>
    
    </footer>
  );
};

export default Footer;