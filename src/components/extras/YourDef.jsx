import React, { useEffect, useState } from 'react'
import { CardRev } from '.';
import { FaStar } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md';

import { reviews } from '../../assets/reviews';
import { ConCard } from '../ConCard'

export const YourDef = () => {
  const [readMore, setReadMore] = useState(false);
  useEffect(() => {
    if (readMore) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [readMore]);
  return (
    <div
        className={`w-full bg-center bg-cover pl-[10%] lg:pl-[20%] pb-20 other:pl-0 p-6 bg-blend-multiply bg-neutral-300 bg-homee`}
      >
        <div 
          className={`
            fixed top-0 left-0 w-full h-full bg-black/50 z-50
            transition-opacity duration-300 ease-in-out
            ${readMore ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
        >
          <div 
            className={`
              fixed overflow-auto flex-col z-50 top-0 h-full 
              dark:bg-neutral-900 bg-white left-0 w-[24rem] p-5
              transition-transform duration-300 ease-in-out
              ${readMore ? 'translate-x-0' : '-translate-x-full'}
            `}
          >
            <MdCancel 
              onClick={() => setReadMore(false)} 
              className='relative z-20 right-4 text-black dark:text-white text-2xl cursor-pointer hover:opacity-70 transition-opacity' 
            />
            
            {reviews.map((review, index) => (
              <CardRev key={index} review={review}/>
            ))}
          </div>
          
          <div 
            className='absolute top-0 left-0 w-full h-full bg-black/50 transition-opacity duration-300 ease-in-out'
            onClick={() => setReadMore(false)}
          >
            <MdCancel 
              onClick={() => setReadMore(false)} 
              className='fixed top-4 left-[25rem] text-black dark:text-white text-2xl cursor-pointer hover:opacity-70 transition-opacity' 
            />
          </div>
        </div>
        <div className="flex flex-col  w-[35rem]  other:items-center other:w-full">
          <div className="flex p-5">
            <div className="px-3 py-2 ml-3 bg-white rounded-md">
              <div className="flex justify-center items-center -mb-1 space-x-2">
                <span className="text-xl font-bold text-black">4.9</span>
                <div className="flex text-[1.3rem] text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <span onClick={() => setReadMore(true)} className="px-3 text-xs underline">
                Read our 183 reviews
              </span>
            </div>
          </div>
          <div className="p-6 pt-7 other:p-4">
            <h1 className=" font-serif text-[2.6rem] text-white font-semibol">
              Your Defence Starts Here
            </h1>
            <p className=" font-serif pt-8 text-[1.6rem] text-white font-semibol">
              Experienced Oklahoma City DUI, Criminal Law, and Personal Injury
              Attorneys
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