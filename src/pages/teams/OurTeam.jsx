import React from 'react'
import { TeamTop } from '.'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { RTS } from '../../components/extras'
import { teamsLawyer } from '../../assets/Images/team'

import { useTitle } from '../../hooks/useTitle'

export const OurTeam = () => {
    useTitle("Our Team")

  return (
    <div className='bg-white dark:bg-black'>
        <TeamTop h1="Our Team" />
      <div className='flex flex-col items-center p-10 m-2'>
           <h1 className="pt-16 font-serif text-4xl text-yellow-500 other:text-3xl">Dedicated Legal Professionals at Your Service</h1>
           <h4 className='py-8 text-xl font-extralight text-black dark:text-white'>Meet the attorneys and staff at Hendrick, Casey, & Hutter:</h4>
            <div className='grid grid-cols-3 gap-48 py-4 tab:gap-14 other:grid-cols-1'>

                {
                    teamsLawyer.map((x, index) =>
                    <Link to={`/${x.link}`} key={index} className='flex flex-col max-w-[25rem] min-w-[13rem] items-center space-y-3'>
                    <img src={x.img} className='hover:scale-95' alt="" />
                    <h4 className='flex justify-center items-center font-serif text-black underline hover:scale-95 underline-offset-4 dark:text-white'>{x.lawyer}<FaArrowRight className='ml-4'/></h4> 
                </Link>
                    )
                }
                
            </div>
            </div> 
            <RTS/>

            
    </div>

  )
}