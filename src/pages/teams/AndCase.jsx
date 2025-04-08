import React from 'react'
import { TeamComp } from '.'

import { And } from '../../assets/Images/team'

import {useTitle} from '../../hooks/useTitle'

export const AndCase = () => {
  const h2="Meet Andrew"
  const title = "Andrew M. Casey"
  

  const span = <span>
     Andy Casey is a founding partner of Hendrick, Casey, & Hutter. Andy first teamed up with Seth Hendrick in late 2019 and cemented their place as one of the
      top criminal defense teams in the state. Starting in February of 2022, the duo added Andrew Hutter to round out the group with Hutter’s lengthy experience and calm cool demeanor.<br /> <br />
      Andy Casey’s role revolves around cases that are complex or have stiff resistance. In one single twelve month period from June 2021 through June 2022, Andy led the fight as
       first-chair in six separate jury trials leading to several favorable outcomes for his clients. In his career, Andy prevailed at jury trials in federal, state, and tribal 
      courts across the State of Oklahoma. If push comes to shove, HCH always has Andy Casey available to effectively pursue a trial for your rights. <br /> <br />
      Below are two oral arguments that were completed by Andrew Casey. In Burke v. Holdman, Andy convinced the appellate panel to reverse a district court's dismissal of his client's claim against a doctor for medical malpractice. In Reavis v. Frost, the appellate court published an opinion in Andy's client's favor that ultimately led to a favorable settlement for our client.
      In addition to trial practice, Andy began his career as a distinguished appeal attorney who prevailed in appeals at the Supreme Court of Oklahoma, the Oklahoma Court of Civil Appeals, 
      the Oklahoma Court of Criminal Appeals, and the Tenth Circuit Federal Court of Appeals in Denver, CO. <br /> <br />
    <div className='flex pt-5 space-x-5 w-full'>
      <a 
       target='blank'
      className='px-10 py-4 font-normal text-white bg-black rounded dark:bg-white dark:text-black'
      href="https://soundcloud.com/user-191889704/reavis-v-frost?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fuser-191889704%252Freavis-v-frost">
        Reavis v. Frost
      </a>
      <a
       className='px-10 py-4 font-normal text-white bg-black rounded dark:bg-white dark:text-black'
        target='blank'
       href="https://soundcloud.com/user-191889704/burke-v-holdman?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fuser-191889704%252Fburke-v-holdman"
      >Burke v. Holdman</a>
    </div>

    <br /> <br />One final practice area involves Andy’s judicial service. In 2022, the Quapaw Nation of Oklahoma formally appointed Andrew M. Casey as a District Court judge for the tribe’s reservation in Miami, OK. <br /> <br />
    Andrew grew up in the Sand Springs, OK area before graduating from Jenks High School and obtained a Bachelor's Degree from the University of Central Oklahoma as well as attending graduate school at the University of Oklahoma. <br /><br />

  
  
  </span>

  const span2= <span> <br />
  During undergraduate school, Andrew excelled at College Policy Debate qualifying for elimination rounds at the most prestigious debate tournaments in the nation. After graduating, Andrew began his first career in teaching and coaching within the Policy Debate program at the University of North Texas in Denton, TX as well as Heritage Hall in Oklahoma City, OK. <br /> <br />
    Eventually, Andrew enrolled at the University of Oklahoma College of Law becoming an Editor for the American Indian Law Review, competing at the National NALSA Moot Court Competition, and working at numerous internships ranging from the Department of Justice in Washington D.C. to a non-profit legal service representing low-income Native American clients. <br /><br />
    After graduating law school, Andrew started his legal career the Tulsa area before moving to Oklahoma City to continue his career and finally found Hendrick, Casey, & Hutter.
  </span>

  useTitle(title)
  const ans1 = (
    <div className='flex flex-col p-0 space-y-3'>
      <div className='flex'><b className='mr-2'>Phone:</b><p className='font-extralight'>405-825-0490</p></div>
      <div className='flex'><b className='mr-2'>Email:</b><p className='font-extralight'>casey@hchokc.org</p></div>
    </div>
  )
  const ans2 = (
    <div className='flex flex-col p-0 space-y-3'>
      <ul className='flex flex-col space-y-3'>
        <li className='font-extralight'>Federal Criminal Defense</li>
        <li className='font-extralight'>State Criminal Defense</li>
        <li className='font-extralight'>Appeals</li>
        <li className='font-extralight'> Post-Conviction Relief</li>
        <li className='font-extralight'> Civil Rights and Employment law</li>
        <li className='font-extralight'> Tribal Representation</li>
      </ul>
    </div>
  )
  const ans3 = (
    <div className='flex flex-col p-0 space-y-3'>
      <ul className='flex flex-col space-y-3'>
        <li className='font-extralight'>U.S. District Court Eastern District of Oklahoma</li>
        <li className='font-extralight'>U.S. District Court Northern District of Oklahoma</li>
        <li className='font-extralight'>U.S. District Court Western District of Oklahoma</li>
        <li className='font-extralight'> U.S. Court of Appeals for the Tenth Circuit</li>
        <li className='font-extralight'>Supreme Court of Oklahoma, All Oklahoma County Courts</li>
        <li className='font-extralight'>Supreme Court of Cherokee Nation  </li>
        <li className='font-extralight'> Supreme Court of Chickasaw Nation</li>
        <li className='font-extralight'>  Supreme Court of Muscogee (Creek) Nation</li>
        <li className='font-extralight'> Supreme Court of Quapaw Nation﻿ </li>
      </ul>
    </div>
  )
  const ans4 = (
    <div className='flex flex-col p-0 space-y-3'>
      
      <ul className='flex flex-col space-y-3'>
        <li className='font-extralight'>University of Oklahoma College of Law, Norman, Oklahoma</li>
        <li className='font-extralight'>University of Central Oklahoma, B.A. Bachelor of Arts, Major: Political Science</li>
        <li className='font-extralightflex'><b className='mr-2'>Honors:</b>  National NALSA Moot Court Team, 2014 and 2015</li>
        <li className='font-extralightflex'><b className='mr-2'>Honors:</b>Top Speaker/Best Oralist, 2014 National NALSA Moot Court Championship </li>
        <li className='font-extralightflex'><b className='mr-2'>Honors:</b>Elite Eight, 2015 National NALSA Moot Court Championship </li>
        <li className='font-extralightflex'><b className='mr-2'>Honors:</b> Board of Advocates</li>
        <li className='font-extralightflex'><b className='mr-2'>Law Review:</b> American Indian Law Review, Articles Development Editor</li>
      </ul>
    </div>
  )
  const ans5 = (
    <div className='flex flex-col p-0 space-y-3'>
      <ul className='flex flex-col space-y-3'>
        <li className='font-extralight'>Oklahoma Bar Association, Member</li>
        <li className='font-extralight'> Oklahoma Bar Association Mock Trial Committee, Committee Member</li>
        <li className='font-extralight'> Oklahoma Bar Association, Leadership Class of 2018</li>
        <li className='font-extralight'>Oklahoma Bar Association, Rules, and Professional Conduct Committee</li>
        <li className='font-extralight'>Oklahoma Bar Association, Law Day Committee </li>
      </ul>
    </div>
  )
  const ans6 = (
    <div className='flex flex-col p-0 space-y-3'>
      <ul className='flex flex-col space-y-3'>
        <li className='font-extralight'>United States Department of Justice in Washington, D.C., Intern </li>
        <li className='font-extralight'>Honorable Judge Daman Cantrell in Tulsa County, OK, Intern </li>
        <li className='font-extralight'> Tulsa County District Attorney's Office, Intern</li>
        <li className='font-extralight'> Hobbs, Straus, Dean & Walker in Downtown Oklahoma City, Intern</li>
        <li className='font-extralight'>Foshee & Yaffe, in Oklahoma City, Intern</li>
        <li className='font-extralight'>Law Office of Gary S. Pitchlynn in Norman, OK, Intern</li>
        <li className='font-extralight'>Price & Sears, P.C. Claremore, OK, Associate Attorney</li>
        <li className='font-extralight'>Stinnett Law, Sapulpa, OK, Associate Attorney</li>
        <li className='font-extralight'>Foshee & Yaffe, Associate Attorney</li>
        </ul>
    </div>
  )
  const ans7 = (
    <div className='flex flex-col p-0 space-y-3'>
      <p className='font-extralight'> Former Member, Board of Directors, Show, Inc. in Sapulpa, OK</p>
      <p className='font-extralight'>Andy has litigated a number of cases for free as pro bono service to the Oklahoma community</p>
    </div>
  )
  const faqs = [
    {
      question: "Contact Info",
      answer: ans1,
    },
    {
      question: " Area of Practice",
      answer: ans2,
    },
    {
      question: "Bar Admissions",
      answer: ans3,
    },
    {
      question: "Education",
      answer: ans4,
    },
    {
      question: "Professional Associations and Memberships",
      answer: ans5,
    },
    {
      question: "Past Employment Positions",
      answer: ans6,
    },
    {
      question: "Pro Bono Activities",
      answer: ans7,
    },
  ]
  return (
    <TeamComp 
    faqs={faqs}
    span={span}
    imge={And}
    h2={h2} 
    title={title}
    span2={span2}
    className="col-span-5 other:col-span-1"
    />
  )
}