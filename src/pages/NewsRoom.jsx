import React from 'react'
import { TopCover } from '.'

import { FaCha, RTS } from '../components/extras'
import accused from "../assets/Images/accused.jpg"

export const NewsRoom = () => {

  const p=<span>Stay updated with the latest news, high-profile cases, and media appearances of our legal team at Hendrick, Casey & Hutter. <br /><br />
              <span>High-Profile Trials and Media Coverage</span>

  </span>
  return (
    <div>
       <TopCover
      bg="squaree"
      p="Free Initial Consultation | Available 7 Days a Week"
      h1="Newsroom"
      />

      <FaCha
      h1="Welcome to Our Newsroom" 
      p={p}
       />

<div className="flex justify-center items-center bg-white dark:bg-neutral-800 other:">
                <div className="flex p-10 text-black other:flex-col max-w-screen-xl tab:flex-col dark:text-white">
                  <div className='w-1/2 other:w-full tab:w-full flx items-center content-center justify-center'>
                <img src={accused} className="object-cover p-6  tab:w-full other:w-full" alt="" />
                  </div>
                <div className="flex flex-col justify-center items-center  p-5 w-1/2 tab:w-full other:px-5 other:w-full">
                    <h1 className="mt-5 font-serif text-4xl text-yellow-500 other:text-3xl"> Defending High-Stakes Cases</h1><br /><br />
                    <p className="py-10  -mt-10  font-sans text-xl font-thin  text-justify dark:text-white text-wrap">
                    The tragic and highly publicized case of Rebecca Hogue gained national and international attention. Hogue was charged with first-degree murder under Oklahoma's "failure to protect" law after her son was killed by her boyfriend. Despite a jury recommending a life sentence, our own Andrew Casey successfully secured a 16-month sentence, allowing Hogue to avoid an unjust life sentence. This case was featured on A&E's "Accused: Guilty or Innocent"​ (Heavy.com)​​ (Breaking News in Tulsa, Oklahoma)​​ (DUI Attorney Oklahoma City, OK)
                    </p>
                    
                </div>
                </div>
            </div>
            <RTS/>
    </div>
  )
}