import React from 'react'

import { ConCard } from '../components/ConCard'
import { FaCha, FAQ, RTS } from '../components/extras'
import exserv from '../assets/Images/exserv.jpeg'

import { useTitle } from '../hooks/useTitle'

export const Expungments = () => {
    useTitle("Expungments")

    const ans1=(
        <div className="p-4 py-12 space-y-6 text-xl text-black bg-white dark:bg-black dark:text-white">
                  <p className="font-extralight">If you've been arrested, charged, or convicted, you might be eligible for an expungement. Recent changes in state law have expanded these opportunities. Contact us to see if you qualify.</p>
        </div>
    )
    const ans2=(
        <div className="p-4 py-12 space-y-6 text-xl text-black bg-white dark:bg-black dark:text-white">
                  <p className="font-extralight">
                  A pardon acknowledges rehabilitation but doesn't erase your record. An expungement removes the record from public access, enhancing job prospects and privacy.
                  </p>
        </div>
    )
    const ans3=(
        <div className="p-4 py-12 space-y-6 text-xl text-black bg-white dark:bg-black dark:text-white">
                  <p className="font-extralight">
                    Typically, it takes between 45-60 days to complete an expungement.
                  </p>
        </div>
    )
    const ans4=(
        <div className="p-4 py-12 space-y-6 text-xl text-black bg-white dark:bg-black dark:text-white">
                  <p className="font-extralight">
                  An expungement does not restore gun rights after a felony. You would need a pardon for that.
                  </p>
        </div>
    )

    const faqs = [
        {
          question: "Q: Do I qualify for an expungement?",
          answer: ans1,
        },
        {
          question: "Q What is the difference between a pardon and an expungement?",
          answer: ans2,
        },
        {
          question: "How long does the expungement process take?",
          answer: ans3,
        },
        {
          question: "Can I own a gun after an expungment",
          answer: ans4,
        },
      ];

  return (
    <div>
         <div
        className={`w-full bg-center bg-scroll bg-cover pl-[10%] lg:pl-[10%] other:pl-0 p-6 bg-blend-multiply bg-neutral-300 bg-Expung`}
      >
        <div className="flex flex-col  w-[30rem]  other:items-center other:w-full">
          <div className="flex p5">
            
          </div>
          <div className="other:p-4">
            <h1 className=" font-serif text-[2.6rem] text-white font-semibol">
            Expungments</h1>
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
      p="The experienced attorneys at Hendrick, Casey & Hutter specialize in expungements, helping you achieve a clean slate. We provide clear answers to your questions and offer efficient, affordable services to erase your criminal record. Reach out now for your FREE consultation and take the first step towards a brighter future!"
      h2="Are past mistakes affecting your future?"
      h1="Clear Your Criminal Record with Our Team" />

<div className="flex justify-center items-center bg-white dark:bg-neutral-800 other:">
                <div className="flex lg:max-h-[40rem] text-black other:flex-col w-full tab:flex-col dark:text-white">
                <img src={exserv} className="object-cover w-1/2 tab:w-full other:w-full" alt="" />
                <div className="flex flex-col justify-center items-center py-8 my-10 w-1/2 tab:w-full other:px-5 other:w-full">
                    <h1 className="w-2/3 font-serif text-4xl text-yellow-500 other:text-3xl">Expungement Services:</h1><br />
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
            "He gave me a call back very quickly. Affordable and honest. I like that."
                </p>
            <span className='text-2xl font-extralight'>- Tia Guevara, Google Review</span>
            </div>

            <div className="w-full bg-white dark:bg-black">
              <FAQ faqs={faqs}/>
              
            </div>
            <RTS />
    </div>
  )
}