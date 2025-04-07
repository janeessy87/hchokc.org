import { ConCompo } from "..";

import { ConCard } from "../../components/ConCard";
import { FAQ, RTS } from "../../components/extras";

export { AndEd } from "./AndEd";
export { Erica } from "./Erica";
export { RyanLe } from "./RyanLe";
export { SethHend } from "./SethHend";
export { AndCase } from "./AndCase";

export { OurTeam } from "./OurTeam";

export const TeamTop =({h1, title}) =>{
    return(
        <div
        className={`w-full bg-center bg-scroll bg-no-repeat pl-[10%] lg:pl-[10%] other:pl-0 py-10 bg-blend-multiply bg-cover bg-neutral-300 bg-ourTeam`}
      >
        <div className="flex flex-col  w-[30rem]  other:items-center other:w-full">
          <div className="flex">
          </div>
          <div className="other:p-4">
            <h1 className=" font-serif text-[2.6rem] text-white font-semibol">
            {h1}</h1>
            <ConCard
            className="pt-0 -mt-5"
              b2="text-white border-white"
              b1="text-black bg-orange-300 "
              title={title}
            />    
          </div>
        </div>
      </div>
    )
}

export const TeamComp = ({title,span,faqs,imge,h2,span2, className}) => {
 
  return (
    <div>
      <TeamTop h1={title}/>

      <div data-testid="team-comp-container" className="flex justify-center items-center p-2 bg-white dark:bg-black other:">
                <div className="grid grid-cols-5 gap-14 other:gap-8 py-10 max-w-screen-lg text-black other:grid-cols-1  dark:text-white">
                    <div className="flex-col col-span-2  other:w-full items-center m-4 other:flex">
                    <img src={imge} className="flex object-cover max-h-[400px]" alt="" />
                    <p className="font-sans text-lg font-extralight text-justify dark:text-white text-wrap">
                      {span2}
                   </p>
                    </div>
                
                <div className="flex flex-col col-span-3 pr-4 tab:w-full other:px-5 other:w-full">
                    <h2 className="font-serif text-4xl text-yellow-500 other:text-3xl">{h2}</h2><br /><br />
                    <p className="font-sans text-lg font-extralight text-justify dark:text-white text-wrap">
                      {span}
                   </p>

                </div>
                <div className={`w-full other:mt-0 ${className}`}>
                    <FAQ faqs={faqs} hide="hidden" /></div>
                </div>
            </div>
            <ConCompo
            title={title}
            h1={`Get in Touch with ${title}`}
            />
            <RTS />
    </div>
  )
}