import React from 'react'
import { TeamComp } from '.'

import { AndH } from '../../assets/Images/team'

import { useTitle } from '../../hooks/useTitle'

export const AndEd = () => {
  const h2="Meet Andrew"
  const title = "Andrew Edward Hutter"

  const span = <span>
     Andrew was raised in Broken Arrow, Oklahoma and is a graduate of Broken Arrow High School. He holds an undergraduate degree in Business Administration from the University of Oklahoma and a Juris Doctorate from Oklahoma City University School of Law. While in law school, he was a member of legal fraternity Phi Alpha Delta. He also interned at the Worker’s Compensation firm of Paul Scott, PC and the insurance defense firm of Noland, Mills, and Upton. <br /> <br />
Upon law school graduation, Andrew worked as an associate for Carpenter and Laquer, a highly successful criminal defense firm. The Hutter Law Office was formed in 2008, after the passing of Andrew’s esteemed partner, Bob Carpenter. Mr. Hutter has attended several trial advocacy and technique courses throughout the state of Oklahoma. Mr. Hutter is an experienced trial lawyer who is also a member of the National Association of Criminal Defense Lawyers, the American Bar Association, the Oklahoma County Bar Association, the Oklahoma County Criminal Defense Association, and the Cleveland County Bar Association. Andrew was elected to serve on Oklahoma Bar Association’s Board of Governors from 2019-2021 and he is also active on several committees within the Oklahoma Bar Association such as the Bench and Bar Committee, and the Solo and Small Firm Committee, etc. Andrew enjoys volunteering for Lawyers for Heroes and Legal Aid. Andrew is licensed to practice throughout Oklahoma including the Western and Eastern District of the United States District Court.
                    
  </span>

  useTitle()
  const ans1 = (
    <div className='flex flex-col p-0 space-y-3'>
      <div className='flex'><b className='mr-2'>Phone:</b><p className='font-extralight dark:font-semibold'>405-825-0490</p></div>
      <div className='flex'><b className='mr-2'>Email:</b><p className='font-extralight dark:font-semibold'>edward@hchokc.org</p></div>
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
    imge={AndH}
    h2={h2} 
    title={title}
     className="col-span-2 -mt-56"
    />
  )
}