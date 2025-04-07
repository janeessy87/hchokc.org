import React from "react";
import { TopCover } from ".";

import { ChooseWhy, FaCha, FAQ, RTS } from "../components/extras";
import rememb from "../assets/Images/rememb.jpg"

import { useTitle } from "../hooks/useTitle";

export const DUI = () => {

  useTitle("DUI & DWI")

  const ans1 = (
    <div className="p-4 py-12 space-y-6 text-xl text-black bg-white dark:bg-black dark:text-white">
                  <p className="font-extralight">
                    <b className="font-bold">Stay Calm:</b> While a DUI is serious, it can be managed without major disruption to your life if handled correctly.
                  </p><br />
                  <span className="font-extralight">Address Your Driver’s License: You have 30 days to take action and three options to consider:</span>
                  <ul className="ml-10 space-y-4 font-extralight list-disc">
                    <li>
                    <b className="font-bold">IDAP Program:</b> Install an Interlock device in your vehicle, complete an ADSAC evaluation, DUI school, and victim impact panel.
                    </li>
                    <li>
                      <b className="font-bold">Challenge the Suspension: </b>File a petition questioning the validity of the license suspension, including the officer’s probable cause and the administration of sobriety tests.
                    </li>
                    <li>
                      <b className="font-bold">Accept Suspension: </b>Allow your license to be suspended (6 months for the first offense, 1 year for the second). To reinstate, complete another ADSAC evaluation and follow its recommendations.
                    </li>
                  </ul>
                  <p className="font-extralight">Remember, this affects your case with the Department of Public Safety, not the criminal prosecution.</p><br />
                  <p className="font-extralight"> <b className="font-bold">Handle the Criminal Case: </b>The prosecutor will try to impose penalties for the DUI. Most cases end in plea agreements negotiated by your attorney, but some may go to trial.</p>
                  <p className="font-extralight">At HCH, many DUI cases result in dismissals or deferred sentences, making them eligible for expungement—like it never happened.</p>

              </div>
              
  )

  const ans2 = (
    <div className="p-4 py-12 space-y-6 text-xl font-extralight text-black bg-white dark:bg-black dark:text-white">
      <p>Your first DUI is typically a misdemeanor unless it involves an accident with injuries. A DUI becomes a felony if:</p>
      <ul className="ml-10 space-y-4 font-extralight list-disc"></ul>
      <li>You’re involved in an accident causing injury.</li>
      <li>You have a prior DUI conviction within the past 10 years, starting from the end of your probation.</li>
      <p>For example, if you received a DUI in 2021 with a 1-year deferred sentence, a subsequent DUI would be considered a felony until 2032.</p>
    </div>
  )
  const ans3 = (
    <div className="p-4 py-12 space-y-6 text-xl font-extralight text-black bg-white dark:bg-black dark:text-white">
      <p>In Oklahoma, police can request a breathalyzer or blood test if they have probable cause to believe you’ve been drinking and driving. If you refuse:</p>
      <ul className="ml-10 space-y-4 font-extralight list-disc"></ul>
      <li>
        <b className="font-bold">License Suspension: </b>Your license will be suspended—6 months for the first offense, 1 year for the second. </li>
      <li>
        <b className="font-bold">Arrest: </b>Refusal often leads to immediate arrest. </li>
      <p>Blowing over a .08 results in a DUI charge and arrest.</p>
    </div>
  )

  const faqs = [
    {
      question: "What to Do after DUI Arrest?",
      answer: ans1,
    },
    {
      question: "Understanding Felony vs, Misdemeanor DUI",
      answer: ans2,
    },
    {
      question: "What Happens if you refuse a Breathalyzer or Blood Test",
      answer: ans3,
    },
  ];
  
  return (
    <div>
      <TopCover 
      bg="dui"
      p="Free Initial Consultation | Available 7 Days a Week"
      h1="DUI & DWI"
      />
      <FaCha h1="Defend Your DUI and DWI Case with Confidence" 
      p="Even a small mistake can lead to serious consequences, but you don't have to face it alone. Our experienced DUI lawyers in Oklahoma City, OK, provide approachable, positive, and effective legal representation.

Our goal is to get you back to your daily life as soon as possible. With over 50 years of combined experience, we know what it takes to defend your rights and achieve the best possible outcome."
      h2="If you've been charged with a DUI or DWI, Hendrick, Casey & Hutter Attorneys At Law are here to help." />
      <ChooseWhy h1="Why Trust Us with Your DUI Defense?"/>
      <div className="flex justify-center items-center bg-neutral-200 dark:bg-neutral-800 other:">
                <div className="flex lg:h-[25rem] text-black other:flex-col w-full tab:flex-col dark:text-white">
                <img src={rememb} className="object-cover w-1/2 tab:w-full other:w-full" alt="" />
                <div className="flex flex-col justify-center items-center p-10 px-20 w-1/2 tab:w-full other:px-5 other:w-full">
                    <h1 className="mt-5 font-serif text-4xl text-yellow-500 other:text-3xl">Expungement Services</h1><br /><br />
                    <ul className="py-10 pl-10 -mt-10 space-y-5 font-sans text-xl font-thin list-disc text-justify dark:text-white text-wrap">
                      <li>If your breathalyzer or blood test result is over a 0.15 alcohol level, the state of Oklahoma will consider it an Aggravated DUI.</li>
                      <li>All documents related to your arrest are crucial for the evaluation of your case.</li>
                    </ul>
                    
                </div>
                </div>
            </div>

            
            <div className="w-full bg-white dark:bg-black">
              <FAQ faqs={faqs}/>
              
            </div>
            <RTS />
    </div>
  );
};