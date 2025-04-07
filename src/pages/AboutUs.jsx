import React from 'react'

import { ConCard } from '../components/ConCard'
import { whyChoose } from '../assets/Images'
import meetLegal from "../assets/Images/meetLegal.jpg"

import { useTitle } from '../hooks/useTitle'

export const AboutUs = () => {
    useTitle("About Us")
  return (
    <div>
        <div
        className={`w-full bg-center bg-scroll bg-no-repeat pl-[10%] lg:pl-[10%] other:pl-0 py-10 bg-blend-multiply bg-cover bg-neutral-300 bg-meetlegal`}
      >
        <div className="flex flex-col  w-[30rem]  other:items-center other:w-full">
          <div className="flex">
          </div>
          <div className="other:p-4">
            <h1 className=" font-serif text-[2.6rem] text-white font-semibol">About Us
            </h1>
            <ConCard
            className="pt-0 -mt-5"
              b2="text-white border-white"
              b1="text-black bg-orange-300 "
            />    
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-2 bg-neutral-200 dark:bg-neutral-800 other:">
                <div className="flex items-center justify-center max-w-screen-2xl text-black other:flex-col tab:flex-col dark:text-white">
                <img src={meetLegal} className="object-cover p-4 w-1/3 tab:w-full other:w-full" alt="" />
                <div className="flex flex-col justify-center  p-4 w-2/5 tab:w-full other:px-5 other:w-full">
                    <h1 className="mt-5 font-serif text-4xl text-black other:text-3xl">Hendrick, Casey, & Hutter, Attorneys At Law</h1><br /><br />
                    <strong className="font-serif text-xl font-light text-justify dark:text-white text-wrap">Experienced. Compassionate. On Your Side. </strong><br />
                    <p className="my-3 font-sans text-xl font-extralight  opacity-90 text-justify dark:text-white text-nowrap"><span className='bg-orange-200 py-0 p-0.5'>Your Trusted Legal Team in Oklahoma</span></p>
                    <p className="my-2 font-sans text-xl font-extralight text-justify dark:text-white text-wrap">We offer legal expertise in criminal law, DUIs, expungements, and personal injury. With over 50 years of combined experience, our attorneys provide effective representation without trying to scare you. We stand out with our commitment to honest communication, personalized attention, and affordable services, available seven days a week.</p>
                    <ConCard className="w-full" b2="border-black text-black dark:text-white dark:border-white" b1="bg-orange-300 text-white "/>
                </div>
                </div>
            </div><div className="flex flex-col justify-center items-center p-20 bg-white dark:bg-black">
        <h1 className="pb-4 font-serif text-4xl text-center text-yellow-500">Why Choose Us?</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {whyChoose.map((x, index) =>
              <div key={index} className="p-5 flex flex-col items-center max-w-[30rem]">
                <img src={x.ico} className="w-20" alt="" />
                <h1 className="p-5 font-serif text-xl text-center text-black dark:text-white">
                  {x.h1}
                </h1>
                <p className="font-extralight text-center text-black dark:text-white">
                  {x.p}
                </p>
              </div>
            )}
          </div>
       </div>
       <div
        className={`w-full bg-center bg-scroll bg-cover pl-[10%] lg:pl-[20%] other:pl-0 p-6 bg-blend-multiply bg-neutral-300 bg-readyToStart`}
      >
        <div className="flex flex-col  w-[35rem]  other:items-center other:w-full">
          <div className="flex p-5">
            
          </div>
          <div className="p- other:p-4">
            <h1 className=" font-serif  text-[2.5rem]/[2.5rem] text-white font-semibol">
            For a free initial consultation, call or contact us.          </h1>
            <p className=" font-serif pt-5 -mb-2 text-[1.2rem] text-white font-semibol">
            We’re here to provide the legal support you need. Reach out to Hendrick, Casey & Hutter today.
            </p>
            <ConCard
              b2="text-white border-white"
              b1="text-black bg-orange-300 "
            />
          </div>
        </div>
      </div>
    </div>
  )
}