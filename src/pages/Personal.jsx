import React from 'react'

import { ConCard } from '../components/ConCard'
import { FaCha, RTS } from '../components/extras'
import ourpers from "../assets/Images/ourpers.jpeg"

import { useTitle } from '../hooks/useTitle'

export const Personal = () => {

    useTitle("Personal Injury")

  return (
    <div>
        <div
        className={`w-full bg-center bg-scroll bg-cover pl-[10%] lg:pl-[10%] other:pl-0 p-6 bg-blend-multiply bg-neutral-300 bg-personal`}
      >
        <div className="flex flex-col  w-[30rem]  other:items-center other:w-full">
          <div className="flex p5">
            
          </div>
          <div className="other:p-4">
            <h1 className=" font-serif text-[2.6rem] text-white font-semibol">
            Personal Injury </h1>
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

      <FaCha 
      h1="Securing the Compensation You Deserve"
      h2="Have you been injured due to someone else's negligence?"
      p="Don’t let the responsible party avoid accountability. At Hendrick, Casey & Hutter Attorneys At Law, we specialize in personal injury law and are committed to fighting for the compensation you deserve. From medical benefits to punitive damages, our skilled attorneys will work diligently to ensure you receive the full benefits you are entitled to."
      stg="Our services operate on a contingency basis – you don’t pay unless we win. Let us handle the legal complexities while you focus on recovery."
      />

<div className="flex justify-center items-center bg-white dark:bg-neutral-800 other:">
                <div className="flex lg:max-h-[40rem] text-black other:flex-col w-full tab:flex-col dark:text-white">
                <img src={ourpers} className="object-cover w-1/2 tab:w-full other:w-full" alt="" />
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
            <p className="mt-5 font-serif text-3xl text-black other:text-3xl">
            "Would recommend Seth to anyone! He was great and got the job done!"</p>
            <span className='text-2xl font-extralight'>- Nicole Miller, Google Review</span>
            </div>
            <RTS/>

            

    </div>
  )
}