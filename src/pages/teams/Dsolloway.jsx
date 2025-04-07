import React from 'react'
import { TeamComp } from '.'

import { dan } from '../../assets/Images/team'

import { useTitle } from '../../hooks/useTitle'

export const Dsolloway = () => {
  const h2="Meet Daniel"
  const title = "Daniel Solloway"

  const span = <span>
     Daniel brings a uniquely diverse background to HCH, combining financial expertise with practical legal advisory experience. Born and raised in Oklahoma, he began his career in radio broadcasting and the arts, where he developed strong communication skills and a creative, detail-oriented mindset that continues to inform his work today.

With years of experience in finance and a deep understanding of non-litigious legal matters, Daniel plays a vital role in supporting both our internal operations and client services. As Finance Manager at HCH, he oversees the firm’s financial strategy, budgeting, and compliance, ensuring smooth day-to-day operations. In addition, he provides guidance to clients in straightforward legal matters that do not require courtroom representation, such as estate documentation, inheritance claims, and property transfers.

While Daniel does not hold a law license, his knowledge and experience have earned him the trust of clients and colleagues alike. His ability to navigate complex financial and legal processes with clarity and professionalism makes him a valued member of the HCH team.

Outside the office, Daniel continues to pursue his passion for the arts and enjoys exploring Oklahoma’s vibrant local scene.
           
  </span>

  useTitle()
  const ans1 = (
    <div className='flex flex-col p-0 space-y-3'>
      <div className='flex'><b className='mr-2'>Phone:</b><p className='font-extralight dark:font-semibold'>405-825-0490</p></div>
      <div className='flex'><b className='mr-2'>Email:</b><p className='font-extralight dark:font-semibold'>solloway@hchoklahoma.com</p></div>
      <div className='flex'><b className='mr-2'>Email:</b><p className='font-extralight dark:font-semibold'>account.officer@hchoklahoma.com</p></div>
    </div>
  )
  const faqs = [
    {
      question: "Contact Info",
      answer: ans1,
    },]
  return (
    <TeamComp 
    faqs={faqs}
    span={span}
    imge={dan}
    h2={h2} 
    title={title}
     className="col-span-2  -mt-56"
    />
  )
}