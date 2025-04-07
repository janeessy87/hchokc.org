import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { MdCancel, MdVerified } from "react-icons/md";

import { ConCard } from "../components/ConCard";
import { ChooseWhy, FaCha, ReviewCard, RTS, WeLaW } from "../components/extras";
import { YourDef } from "../components/extras/YourDef";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { htgs } from "../assets/Images";
import gicon from "../assets/Images//logos/giconn.png";
import glogo from "../assets/Images/logos/google-logo-transparent.png";
import meetLegal from "../assets/Images/meetLegal.jpg"
import { reviews } from "../assets/reviews";

export const Home = () => {

  const [readMore, setReadMore] = useState(false);
  const [moreDetail, setMoreDetail] = useState({name: '', text: '', stars: 0});
  const getFirstTwo = (str) => (typeof str === "string" ? str.slice(0, 2) : "");
    
  
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

  const wnnBe = [
    {
      h1: "DUI & DWI",
      p:
        "If you need a reliable DUI or DWI attorney in Oklahoma City, look no further. We have the experience to help you navigate these charges."
    },
    {
      h1: "Criminal Law",
      p:
        "Need help clearing your record? Let us simplify the expungement process, so you can move forward with confidence and a clean slate."
    },
    {
      h1: "Expungements",
      p:
        "Need help clearing your record? Let us simplify the expungement process, so you can move forward with confidence and a clean slate."
    },
    {
      h1: "Personal Injury",
      p:
        "Injured in an accident? We are here to fight for the compensation you deserve. We've secured millions for our clients and will work tirelessly for you."
    },
    {
      h1: "Family Law",
      p:
        "Whether it's custody, divorce, or other family matters, we provide caring and effective legal assistance for your family's best interests."
    }
  ];

  return (
    <div className="bg-white dark:bg-black">
    <YourDef />
      <div className="flex flex-col justify-center items-center p-10 py-20 text-black flex-cl bg-neutral-200 dark:bg-neutral-900 dark:text-white">
        <div className="max-w-screen-2xl">
          <h1 className="font-serif text-3xl text-center">
            We want to be your lawyer!
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {wnnBe.map((x, index) =>
            <WeLaW key={index} index={index} x={x} />)}
          </div>
          <div className="flex justify-center items-center">
            <ConCard
              b1="text-white  bg-orange-400"
              b2="border-black dark:border-white dark:text-white text-black"
              className="lg:w-[30rem]"
            />
          </div>
        </div>
      </div>

      <div id="reviews" 
      className="flex w-full flex-col justify-center items-center  text-black dark:text-white bg-white dark:bg-black">
        <div className=" max-w-screen-2xl w-[90%]">
          <div className="p-6">
            <h1 className="p-5 font-serif text-4xl text-center">
              Real Stories, Real Results
            </h1>
            <p className="font-thin text-center text-wrap">
              Discover how we've made a difference in the lives of our clients.
              Their experiences and outcomes are at the heart of what we do.
              Here are some of their journeys with Hendrick, Casey & Hutter.
            </p>
          </div>
          <div>
            <div id="reviews" className="flex justify-between items-center px-6 py-8 w-full rounded-md other:flex-col other:space-y-3 dark:bg-neutral-800 other:justify-center bg-neutral-200">
              <div className="flex flex-col justify-center">
                <div className="flex items-center">
                  <img className="-ml-1 w-20" src={glogo} alt="" />{" "}
                  <span className="text-xl font-bold dark:text-white">Reviews</span>
                </div>
                <div className="flex justify-center items-center -mb-1 space-x-2">
                  <span className="text-xl font-bold text-black dark:text-white">4.9</span>
                  <div className="flex text-[1.3rem] text-yellow-400">
                    {[...Array(5)].map((_,i)=>
                    <FaStar key={i} />
                    )}
                   
                  </div>
                  <p className="text-sm text-neutral-400">(179)</p>
                </div>
              </div>
              <a
                target="blank"
                href="https://www.google.com/search?hl=en-US&gl=us&q=Hendrick,+Casey,+%26+Hutter,+Attorneys+At+Law,+428+Dean+A+McGee+Ave,+Oklahoma+City,+OK+73102&ludocid=6297112191495674460&lsig=AB86z5XsYIn-3J4M_q_skS5EDJJS#lrd=0x87b213272d035d41:0x5763d62cb4e19a5c,3"
                className="p-2 px-6 font-semibold text-center text-white bg-blue-500 rounded-md"
              >
                Review us on Google
              </a>
            </div>

            <Splide
            className="flex justify-center items-cente w-full"
            options={{
              type: 'slide',
              perMove: 1,
              autoWidth: true,
              autoHeight: true,
              rewind:true,
              autoplay     : true,
              pauseOnHover : false,
              focus: 'center',
              pagination: false,
              gap: '1rem',
              arrows: true,
            }}
            >
              {reviews.map((review, index) => (
                <SplideSlide key={index}>
                  <ReviewCard  setMoreDetail={setMoreDetail} readMore ={readMore} setReadMore={setReadMore} review={review} />
                </SplideSlide>
              ))}
            </Splide>
            <div onClick={() => setReadMore(false)} className={`${!readMore ? 'hidden' : 'fixed'} flex justify-center  items-center w-full z-40 h-screen bg-black/50 top-0 left-0`}>
              <div className=" w-[40rem] p-6 rounded-md  min-h-[20rem]  py-10 bg-white">
              <MdCancel onClick={() => setReadMore(false)}  className=" float-right -mt-8 -mr-4 text-black text-2xl" />
              <div className="flex r">
                  <div>
                    <div className="flex justify-center items-center rounded-full size-12 bg-slate-500">
                    {getFirstTwo(moreDetail.name)}
                    </div>
                    <img
                      className="p-0.5 -mt-5 ml-7 w-6 bg-white rounded-full relatives"
                      src={gicon}
                      alt=""
                    />
                  </div>
                  <p className="flex items-center font-bold">
                    {moreDetail.name} <MdVerified className="mx-1 text-blue-600" />
                  </p>
                </div>
                <div className="flex text-[1.3rem] py-2 text-yellow-400">
                {[...Array(moreDetail.stars)].map((_,i)=>
                    <FaStar key={i} />
                    )}
                   
                </div>
                <p>{moreDetail.text}</p>
              </div>
            </div>

            <div className="flex justify-center items-center p-4">
              <button className="px-10 py-4 text-center text-white bg-black rounded-sm dark:border-white dark:border-2">Learn More</button>
            </div>
          </div>
          
        </div>
        </div>

        <FaCha h1="Facing Legal Challenges? We're Here to Help." p = "Legal issues can be overwhelming and stressful. Our team understands the stakes and is dedicated to achieving the best possible outcomes. " 
            stg="Don't face this alone;" cont="let our experienced attorneys guide you through the process."
        />
      
      <ChooseWhy h1="Why Choose Hendrick, Casey, & Hutter?" />
       
            <div className="flex justify-center items-center p-2 bg-white dark:bg-black other:">
                <div className="flex items-center max-w-screen-2xl text-black other:flex-col tab:flex-col dark:text-white">
                <img src={meetLegal} className="object-cover p-4 w-1/2 tab:w-full other:w-full" alt="" />
                <div className="flex flex-col justify-center items-center p-4 w-1/2 tab:w-full other:px-5 other:w-full">
                    <h1 className="mt-5 font-serif text-4xl text-yellow-500 other:text-3xl">Meet Your Legal Team</h1><br /><br />
                    <strong className="font-serif text-xl font-light text-justify dark:text-white text-wrap">Our attorneys, Hendrick, Casey, and Hutter, are committed to providing top-notch legal services with a personal touch. </strong><br />
                    <p className="py-10 font-sans text-xl font-extralight text-justify dark:text-white text-wrap">With over 18 years of experience, Seth Hendrick has a track record of less than 1% of his criminal cases leading to incarceration. Andrew Casey excels in complex cases, facing every challenge head-on. Andrew Hutter ensures honest and clear guidance through his continual learning. This dedicated team is passionate about helping you navigate your legal troubles.</p>
                    <ConCard className="w-full" b2="border-black text-black dark:text-white dark:border-white" b1="bg-black dark:bg-white dark:text-black text-white "/>
                </div>
                </div>
            </div>

            <div>
                <div className="bg-center bg-cover p-2 bg-local bg-no-repeat bg-squaree w-full h-[20rem]">
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center p-6 max-w-screen-2xl">
                <h1 className="my-6 font-serif text-4xl text-center text-black dark:text-white text black">How to Get Started</h1>
                <div className="flex other:flex-col">
                    {
                        htgs.map((x,index)=> 
                            <div className="flex-1 max-w-[70rem] mx-2 flex-grow space-y-4" key={index}>
                                <img src={x.img} className="object-cover h-[60%] w-full" alt={x.h1} />
                                <div className="flex flex-col justify-center items-center py-16 px-4 space-y-6 bg-orange-200 h-[60%] ">
                                    <h1 className="font-serif text-xl text-black">{x.h1}</h1>
                                    <p className="font-sans text-xl font-thin text-center text-black">{x.p}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <ConCard className="mt-32 w-2/5 lg:min-w-[30rem] other:w-full" b1="bg-black text-white dark:text-black dark:bg-white" b2="border-black dark:text-white text-black dark:border-white" />
            </div>
        </div>
        <div>
        <RTS/>
        </div>
        

    </div>
  );
};