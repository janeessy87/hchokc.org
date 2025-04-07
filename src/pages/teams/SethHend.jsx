import React from 'react'
import { TeamComp } from '.'

import { seth } from '../../assets/Images/team'

import { useTitle } from '../../hooks/useTitle';

export const SethHend = () => {
  const h2="Meet Seth"
  const title = "E. Seth Hendrick"

  const span = <span>
     E. Seth Hendrick has been a practicing attorney for over 18 years in Oklahoma. He grew up in Choctaw, Oklahoma, and has called Oklahoma 
     home his entire life. He graduated from the University of Oklahoma with both
      Undergraduate and Law degrees. He was a member of the OU football team back in the day! He played for both John Blake and Howard Schnellenberger. <br /> <br />
      Over the last 18 years, Seth has fought for his clients and the people of Oklahoma. His practice has covered a wide variety of cases, from murder, 
      to multi-million-dollar lawsuits and has found a way to win and make his clients happy. Less than 1% of his criminal cases have resulted in any type 
      of incarceration and Seth promises that he will take each case as personally as you do. <br /> <br />
      Seth offers aggressive representation that won't cost an arm and a leg. He understands that if you are calling an attorney, it is for something serious and 
      something that could greatly affect your life. His agency, Hendrick, Casey & Hutter Attorneys At Law, does not hide behind its secretaries and we promise that 
      you will have an open dialogue with Seth directly, including providing his personal cell number.
  </span>

  useTitle(title)
  const ans1 = (
    <div className='flex flex-col p-0 space-y-3'>
      <div className='flex'><b className='mr-2'>Phone:</b><p className='font-extralight'>405-825-0490</p></div>
      <div className='flex'><b className='mr-2'>Email:</b><p className='font-extralight'>hendrick@hchoklahoma.com</p></div>
    </div>
  )
  const ans2 = (
    <div className='flex flex-col p-0 space-y-3'>
      <p className='font-extralight'>University of Oklahoma College of Law University of Oklahoma Bachelor of Arts</p>
      <div className='flex'><b className='mr-2'>Majors:</b><p className='font-extralight'>Political Science and History</p></div>
    </div>
  )
  const ans3 = (
    <div className='flex flex-col p-0 space-y-3'>
      <p className='font-extralight'>Oklahoma Bar Association <br /> <br />Western District of Oklahoma</p>
    </div>
  )
  const faqs = [
    {
      question: "Contact Info",
      answer: ans1,
    },
    {
      question: "Education",
      answer: ans2,
    },
    {
      question: "Professional Associations",
      answer: ans3,
    },
  ]
  return (
    <TeamComp
    faqs={faqs}
    span={span}
    imge={seth}
    h2={h2} 
    title={title}
    className="col-span-2 -mt-72"
    />
  )
}