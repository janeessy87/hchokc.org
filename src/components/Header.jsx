import React, { useEffect, useState } from "react";
import {  
  // FaFacebookF,  FaInstagram, FaTiktok ,
  FaMoon, 
} from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdClose, MdLightMode} from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

import darklogo from "../assets/logodark.png"
import logoo from "../assets/logoo.png";

const Header = () => {

  const [sideBar, setSideBar] = useState(false);
  const [pracBar, setPracBar] = useState(false)
  const [actPrac, setactPrac] = useState(false)
  const [actAbout, setActAbout] = useState(false)
  const [aboutBar, setAboutBar] = useState(false)
  const [ourTeam, setourTeam] = useState(false);
  const [actTeam, setactTeam] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setIsMobile(newWidth <= 768);
      
      if (newWidth > 768) {
        setSideBar(false);
        setPracBar(false);
        setAboutBar(false);
        setourTeam(false);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && (sideBar || pracBar || aboutBar || ourTeam)) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = 'auto';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isMobile, sideBar, pracBar, aboutBar, ourTeam]);

  const handleMobileMenu = (action) => {
    if (action === 'close') {
      setSideBar(false);
      setPracBar(false);
      setAboutBar(false);
      setourTeam(false);
      setactPrac(false);
      setActAbout(false);
      setactTeam(false);
    }
  };

  const handleMouseEvents = (event, setStateFunction) => {
    if (!isMobile) {
      setStateFunction(event.type === 'mouseenter');
    }
  };

  const activeClass =
    "text-base tab:text-sm block tab:text-xs other:text-3xl  border-b-black border-spacing-2 rounded-none border-b-2  py-2 pl-3 pr-4 text-white  bg-gray-800 rounded md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-neutral-400";

  const inActiveClass =
    "text-base block py-2 pl-5 tab:text-xs other:text-4xl pr text-gray-900 rounded hover:bg-gray-100 hover:underline hover:underline-offset-4 hover:decoration-blue-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <header className={`flex justify-between items-center p-4 text-black bg-white h-[8rem] dark:bg-neutral-900`}>
      <Link className=" other:w-[6rem] tab:w-[7rem] flex items-center w-[10rem] " to="/"><img src={ !darkMode ? logoo : darklogo } alt="" /></Link>
      
      <div className="hidden items-center dark:text-white other:flex">
        <button data-testid="dark-mode-button" className="hidden pr-5 other:flex dark:text-white">
          {darkMode? <MdLightMode
          onClick={()=>setDarkMode(!darkMode)}
          /> : <FaMoon onClick={()=>setDarkMode(!darkMode)}/>}
        </button>
        <button data-testid="menu-button" onClick={()=>{setSideBar(!sideBar)
          handleMobileMenu(sideBar ? 'close' : 'open');
        }}>
         { !sideBar ? <RxHamburgerMenu /> : <MdClose/> } 
        </button>
      </div>
      
      <nav data-testid="navigation" className={`
        ${sideBar ? 'other:opacity-100 other:translate-y-0' : 'other:opacity-0 other:translate-y-full'}
        transform transition-transform duration-300 ease-out
       other:justify-around flex other:flex-col other:fixed  other:dark:bg-neutral-900 z-20 other:bg-white other:w-full other:h-screen other:left-0 other:bottom-0  other:top-[8rem]  px-8 `}>
        <ul className="flex justify-center  space-x-5 font-sans text-base font-thin text-black  other:items-start other:space-y-2 other:flex-col dark:text-white">
          <button data-testid="mobile-dark-mode-button" className="pr-5 other:hidden dark:text-white">
            {darkMode? <MdLightMode
            onClick={()=>setDarkMode(!darkMode)}
            /> : <FaMoon onClick={()=>setDarkMode(!darkMode)}/>}
          </button>
          <li 
          onMouseEnter={(e) => handleMouseEvents(e, setPracBar)}
          onMouseLeave={(e) => handleMouseEvents(e, setPracBar)}
          >
           <NavLink
            className={({ isActive }) =>
              isActive ? activeClass : inActiveClass
            }
            onClick={()=> {
              if (isMobile) {
                setactPrac(true);
                setPracBar(true);
              }
            }}
            to="/dui">Practice Areas</NavLink>
            <ul data-testid="practice-areas-menu" className={`${!pracBar  && 'hidden'} ${actPrac ? "other:translate-x-0 other:opacity-100" : "other:translate-x-full other:opacity-0" } 
            absolute other:w-full other:space-y-3 other:justify-center dark:bg-neutral-900
               other:bg-white other:h-full other:pb-[20rem] other:z-10 other:left-0 other:top-0
               other:text-3xl px-10 other:mr-0 other:transition-all other:duration-500 
                other:ease-in-out flex bg-neutral-300 text-sm space-y-2 p-3 w-[9rem] flex-col `}>
              <button 
                onClick={() => {
                  setactPrac(false);
                  setPracBar(false);
                }} 
                className="hidden items-center mb-4 dark:text-white text-lg font-medium text-black other:flex hover:text-blue-700"
              > 
                <IoIosArrowBack className="mr-2" /> Back
              </button>
              <li><NavLink onClick={()=>handleMobileMenu('close')} className="hover:underline" to="/dui">DUI & DWI</NavLink></li>
              <li><NavLink onClick={()=>handleMobileMenu('close')} className="hover:underline" to="/criminal">Criminal Law</NavLink></li>
              <li><NavLink onClick={()=>handleMobileMenu('close')} className="hover:underline" to="/expungments">Expungements</NavLink></li>
              <li><NavLink onClick={()=>handleMobileMenu('close')} className="hover:underline" to="/personal">Personal Injury</NavLink></li>
              <li><NavLink onClick={()=>handleMobileMenu('close')} className="hover:underline" to="/family">Family Law</NavLink></li>
            </ul>
          </li>
          <li 
          onMouseEnter={(e) => handleMouseEvents(e, setAboutBar)}
          onMouseLeave={(e) => handleMouseEvents(e, setAboutBar)}
          >
            <NavLink
            className={({ isActive }) =>
              isActive ? activeClass : inActiveClass
            }
            onClick={() => {
              if (isMobile) {
                setActAbout(true);
                setAboutBar(true);
              }
            }} 
            to="/about-us">About Us</NavLink>
            <ul data-testid="about-menu" className={`${!aboutBar && 'hidden'} ${actAbout ? "other:translate-x-0 other:opacity-100" : "other:translate-x-full other:opacity-0" }
               absolute other:w-full other:space-y-3 other:justify-center other:bg-white other:h-full other:pb-[20rem] other:z-10 other:left-0 other:top-0
               other:text-3xl px-10 dark:bg-neutral-900
                other:mr-0 other:transition-all other:duration-500 t other:ease-in-out flex bg-neutral-300 space-y-2 text-sm p-2 w-[7rem] flex-col  `}>
              <button 
                onClick={() => {
                  setActAbout(false);
                  setAboutBar(false);
                  setSideBar(true);
                }} 
                className="hidden items-center mb-4 dark:text-white text-lg font-medium text-black other:flex hover:text-blue-700"
              > 
                <IoIosArrowBack className="mr-2" /> Back
              </button>
              <li><NavLink onClick={()=>handleMobileMenu('close')} className="hover:underline" to="/#reviews">Reviews</NavLink></li>
            </ul>
          </li>
          <li
           onMouseEnter={(e) => handleMouseEvents(e, setourTeam)}
           onMouseLeave={(e) => handleMouseEvents(e, setourTeam)}
          >
            <NavLink
            className={({ isActive }) =>
              isActive ? activeClass : inActiveClass
            }
            onClick={() => {
              if (isMobile) {
                setactTeam(true);
                setourTeam(true);
              }
            }} 
            to="/our-team">Our Team</NavLink>
            <ul data-testid="team-menu" className={`${!ourTeam  && 'hidden'} ${actTeam ? "other:translate-x-0 other:opacity-100" : "other:translate-x-full other:opacity-0" } absolute other:w-full other:space-y-3 other:justify-center other:bg-white other:h-full other:pb-[20rem] other:z-10 other:left-0 
              other:top-0  dark:bg-neutral-900 other:mr-0 other:transition-all other:duration-500 other:ease-in-out text-sm other:text-3xl px-10 flex bg-neutral-300 space-y-2 p-3  w-[12rem] flex-col `}>
              <button 
                onClick={() => {
                  setactTeam(false);
                  setourTeam(false);
                  setSideBar(true);
                }} 
                className="hidden items-center dark:text-white mb-4 font-medium text-black other:flex hover:text-blue-700"
              > 
                <IoIosArrowBack className="mr-2" /> Back
              </button>
              <li><NavLink onClick={()=>handleMobileMenu('close')} className="hover:underline" to="/e-seth-hendrick">E.Seth hendrick</NavLink></li>
              <li><NavLink onClick={()=>handleMobileMenu('close')} className="hover:underline" to="/andrew-m-casey">Andrew M. Casey</NavLink></li>
              <li><NavLink onClick={()=>handleMobileMenu('close')} className="hover:underline" to="/andrew-edward-hutter">Andrew Edward Hutter</NavLink></li>
              <li><NavLink onClick={()=>handleMobileMenu('close')} className="hover:underline" to="/ryan-loewenstern">Ryan Loewenstern</NavLink></li>
              <li><NavLink onClick={()=>handleMobileMenu('close')} className="hover:underline" to="/dan-solloway">Daniel Solloway</NavLink></li>
              <li><NavLink onClick={()=>handleMobileMenu('close')} className="hover:underline" to="/erika-diaz">Erika Diaz</NavLink></li>
            </ul>
          </li>
          <li><NavLink
          onClick={()=>handleMobileMenu('close')}
          className={({ isActive }) =>
            isActive ? activeClass : inActiveClass
          }
          to="/#reviews">Reviews</NavLink></li>
          <li><NavLink
          onClick={()=>handleMobileMenu('close')}
          className={({ isActive }) =>
            isActive ? activeClass : inActiveClass
          }
          to="/contact">Contact Us</NavLink></li>
          <li><NavLink
          onClick={()=>handleMobileMenu('close')}
          className={({ isActive }) =>
            isActive ? activeClass : inActiveClass
          }
          to="/newsroom">Newsroom</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;