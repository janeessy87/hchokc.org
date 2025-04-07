import React from 'react'
import { TeamComp } from '.'

import { ryan } from '../../assets/Images/team'

import {useTitle} from '../../hooks/useTitle'

export const RyanLe = () => {
  const h2="Meet Ryan"
  const title = "Ryan Loewenstren"

  const span = <span>
     Ryan Loewenstern was born and raised in Amarillo, Texas. Upon obtaining his bachelor’s degree in Business Administration from West Texas A&M, he joined a civil law firm as a litigation paralegal in Amarillo, Texas. He moved to Oklahoma City in the summer of 2017 to attend Oklahoma City University School of Law.
      <br /> <br />
      While attending law school, he interned with several law firms specializing in civil litigation, including personal injury, business, and civil rights law, and for the Oklahoma County District Attorney’s Office until graduating.
      <br /> <br />
      After law school, Ryan spent the first two years of his legal career with the Oklahoma County Public Defender’s Office. While there, he obtained numerous pretrial dismissals, advocated for clients at trial, and represented a wide variety of criminal cases, ranging from misdemeanors to murders.
  </span>

  useTitle(title)
  const ans1 = (
    <div className='flex flex-col p-0 space-y-3'>
      <div className='flex'><b className='mr-2'>Phone:</b><p className='font-light'>405-825-0490</p></div>
      <div className='flex'><b className='mr-2'>Email:</b><p className='font-light'>Ryan@hchoklahoma.com

</p></div>
    </div>
  )

  const faqs = [
    {
      question: "Contact Info",
      answer: ans1,
    },
    
  ]
  return (
    <TeamComp
    faqs={faqs}
    span={span}
    imge={ryan}
    h2={h2} 
    title={title}
    className="col-span-2 -mt-36"
    />
  )
}