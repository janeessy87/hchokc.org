import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { MdVerified } from 'react-icons/md';

import { whyChoose } from '../../assets/Images'
import gicon from "../../assets/Images//logos/giconn.png";
import { ConCard } from '../ConCard'




export const WeLaW = ({index, x}) => {
  return (
    <div key={index} className="p-5 max-w-[30rem]">
                <h1 className="p-5 font-serif text-xl text-center">
                  {x.h1}
                </h1>
                <p className="font-extralight text-center">
                  {x.p}
                </p>
              </div>
  )
}



export const FaCha = ({h1,h2, p,stg, cont})=>{

  return(
 <div className="flex flex-col justify-center items-center p-10 text-center text-black w-ful dark:bg-neutral-800 dark:text-white bg-neutral-300">
            <div className="flex flex-col justify-center items-center w-3/4 other:w-full">
                <h1 className="font-serif text-3xl">{h1}</h1><br />
                <h2  className="font-serif text-xl font-extralight text-justify dark:text-white text-wrap">{h2}</h2>
                <p className="font-extralight text-center other:w-full text-wrap">{p} <strong>{stg}</strong> {cont}</p>
            </div>
            <ConCard className="w-2/5 lg:min-w-[30rem] other:w-full" b2="border-black dark:border-white" b1="bg-orange-400 text-white "/>
        </div>
  )
}





export const ChooseWhy = ({h1}) =>{
  return(
    <div className="flex flex-col justify-center items-center p-20 bg-white dark:bg-black">
        <h1 className="pb-4 font-serif text-4xl text-center text-yellow-500">{h1}</h1>
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
          <ConCard className="w-2/5 lg:min-w-[30rem] other:w-full" b2="border-black text-black dark:text-white dark:border-white" b1="bg-black dark:bg-white dark:text-black text-white "/>
       </div>
  )
}



export const RTS = () => {
  return (
    <div
        className={`w-full bg-center bg-scroll bg-cover pl-[10%] lg:pl-[20%] other:pl-0 p-6 bg-blend-multiply bg-neutral-300 bg-readyToStart`}
      >
        <div className="flex flex-col  w-[35rem]  other:items-center other:w-full">
          <div className="flex p-5">
            
          </div>
          <div className="p- other:p-4">
            <h1 className=" font-serif text-[2.6rem] text-white font-semibol">
            Ready to Start Building Your Defense?            </h1>
            <p className=" font-serif pt-5 text-[1.4rem] text-white font-semibol">
            We’re here to provide the legal support you need. Reach out to Hendrick, Casey & Hutter today.
            </p>
            <ConCard
              b2="text-white border-white"
              b1="text-black bg-orange-300 "
            />
          </div>
        </div>
      </div>
  )
}



export const FAQ = ({faqs, hide}) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4 py-10 mx-auto max-w-3xl text-black bg-white dark:text-white dark:bg-black">
      <h2 className={`mb-4 font-serif text-2xl font-bold text-center text-yellow-400 ${hide}`}>Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs && faqs.map((faq, index) => (
          <div key={index} className="px-0 py-6 border-b border-black">
            <button
              className="flex justify-between items-center py-3 w-full  text-black bg-white dark:text-white dark:bg-black text-xl font-extralight text-left hover:bg-gray-100"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-lg">
                {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-3  bg-white  dark:text-white dark:bg-black text-neutral-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};






export const ReviewCard = ({ setMoreDetail, readMore, setReadMore, review}) => {

    const shorten = (text) => {
      if (typeof text !== "string") return "";
      return text.length > 150 ? text.slice(0, 150) + "..." : text;
    };
  
    const getFirstTwo = (str) => (typeof str === "string" ? str.slice(0, 2) : "");
    
  return(
      <div className="flex justify-center flex-col  items-center p-5 my-6 rounded-md dark:bg-neutral-800 bg-neutral-200 w-[20rem]">
                <div className="flex text-[1.3rem] py-2 text-yellow-400">
                {[...Array(review.stars)].map((_,i)=>
                    <FaStar key={i} />
                    )}
                   
                </div>
                <p className="text-center">
                  {shorten(review.text)}
                </p>
                {!(review.text == null ||review.text.length < 150) &&
                 <button 
                  onClick={() => {setReadMore(!readMore); 
                  setMoreDetail({"name": review.name, text: review.text, stars: review.stars})}
                } 
                 className="text-neutral-400" href="/" target="blank">Read more</button>}
                
                <div className="flex flex-col py-4 justify-center items-center">
                  <div>
                    <div className="flex justify-center items-center rounded-full size-12 bg-slate-500">
                    {getFirstTwo(review.name)}
                    </div>
                    <img
                      className="p-0.5 -mt-5 ml-7 w-6 bg-white rounded-full relatives"
                      src={gicon}
                      alt=""
                    />
                  </div>
                  <p className="flex items-center font-bold">
                    {review.name} <MdVerified className="mx-1 text-blue-600" />
                  </p>
                </div>
              </div> 
  )
}





export const CardRev = ({review}) => {

    const shorten = (text) => {
      if (typeof text !== "string") return "";
      return text.length > 150 ? text.slice(0, 150) + "..." : text;
    };
 const [isExpanded, setIsExpanded] = useState(false);
 const handleReadMore = () => {
  setIsExpanded(!isExpanded);
};
    
  return(
    <div className="  p-4  text-black rounded-md dark:text-white text-xs  dark:bg-neutral-800 my-2  py-3 bg-neutral-100">
    <div className="flex ">
        <div>
          <div className="flex justify-center items-center rounded-md size-8 bg-neutral-200">
          <img
            className=" w-5  rounded-full relatives"
            src={gicon}
            alt=""
          />
          </div>
          
        </div>
        <p className="flex items-center ml-2 font-bold">
         {review.name} <MdVerified className="mx-1 text-blue-600" />
        </p>
      </div>
      <div className="flex text-[1rem] py-2 text-yellow-400">
      {[...Array(review.stars)].map((_,i)=>
          <FaStar key={i} />
          )}
         
      </div>
      <p className="text-center pb-3">
      {isExpanded ? review.text : shorten(review.text)}
      </p>
      {!(review.text == null ||review.text.length < 150) &&<p
        className="text-neutral-400 text-center cursor-pointer"
        onClick={handleReadMore}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </p>}
    </div>
  )
}