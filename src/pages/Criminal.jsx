import React from 'react'

import { ConCard } from '../components/ConCard'
import { FaCha, RTS } from '../components/extras'
import defend from "../assets/Images/defend.jpg"

import { useTitle } from '../hooks/useTitle'

export const Criminal = () => {
    useTitle("Criminal Law")
  return (
    <div>
         <div
        className={`w-full bg-center bg-scroll bg-cover pl-[10%] lg:pl-[10%] other:pl-0 p-6 bg-blend-multiply bg-neutral-300 bg-squaree`}
      >
        <div className="flex flex-col  w-[30rem]  other:items-center other:w-full">
          <div className="flex p5">
            
          </div>
          <div className="other:p-4">
            <h1 className=" font-serif text-[2.6rem] text-white font-semibol">
            Criminal Law</h1>
            <ConCard
            className="pt-0"
              b2="text-white border-white"
              b1="text-black bg-orange-300 "
            />
            <p className=" font-serif pb-5 text-[1.4rem] text-white font-semibol">
            Free Initial Consultation | Available 7 Days a Week</p>
          </div>
        </div>
      </div>
<FaCha h1="Trust Our Legal Team to Defend Your Rights" 
      p="Whether you are guilty or innocent, you will get aggressive legal help from Hendrick, Casey & Hutter Attorneys At Law. We provide customized defense strategies and assist in reducing charges. For a FREE initial consultation, call (405) 265-9704."
      h2="Have you been charged with a criminal offense?" />
      {/* <ChooseWhy h1="Why Trust Us with Your DUI Defense?"/> */}
      <div className="flex justify-center items-center bg-white dark:bg-neutral-800 other:">
                <div className="flex lg:max-h-[40rem] text-black other:flex-col w-full tab:flex-col dark:text-white">
                <img src={defend} className="object-cover w-1/2 tab:w-full other:w-full" alt="" />
                <div className="flex flex-col justify-center items-center py-8 my-10 w-1/2 tab:w-full other:px-5 other:w-full">
                    <h1 className="w-2/3 font-serif text-4xl text-yellow-500 other:text-3xl">Defending All Types of Criminal Law Charges:</h1><br />
                    <ul className="-ml-[12rem] my-5 space-y-5 font-sans text-xl font-thin list-disc text-justify dark:text-white text-wrap">
                      <li>Felonies</li>
                      <li>Misdemeanors</li>
                      <li>Juvenile matters</li>
                      <li>Probation violation</li>
                      <li>Pardon hearings</li>
                      <li>Drug-related charges</li>
                    </ul>
                    
                </div>
                </div>
            </div>
            <div className="flex flex-col space-y-12 lg:max-h-[25rem] p-6 lg:py-16 bg-neutral-200 dark:bg-neutral-800 text-black other:flex-col w-full tab:flex-col dark:text-white">
            <p className="mt-5 font-serif text-3xl text-black other:text-3xl">“An amazing firm that treats you like family...not only stands up for your needs and your rights, but goes above and beyond no matter the scenario. I am truly pleased at the the outcome and beyond blessed!”</p>
            <span className='text-2xl font-extralight'>- Andrea W, Google Review</span>
            </div>
            <RTS/>

    </div>
  )
}