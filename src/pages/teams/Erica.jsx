import React from 'react'
import { TeamComp } from '.'

import { eric } from '../../assets/Images/team'

import {useTitle} from '../../hooks/useTitle'

export const Erica = () => {
  const h2="Meet Erica"
  const title = "Erika Diaz"

  const span = <span>
    Bilingual legal assistant, born in Mexico, moved to the US at 14 years old. Her desire to help the Hispanic community has led her to work in the legal field, answering questions and providing clients with the information they need. 
      <br /> <br />
      Her amazing skills such as organization, computer skills, and being bilingual have given her the knowledge to do more for her community. Her favorite part of the job is helping people turn their lives around. 
      <br /> <br />
      Outside of work, Erika loves to read books and cook new recipes. On the weekends, she loves to try out new coffee shops around Oklahoma City. 
  </span>

  useTitle(title)
  const ans1 = (
    <div className='flex flex-col p-0 space-y-3'>
      <div className='flex'><b className='mr-2'>Phone:</b><p className='font-extralight'>405-825-0490</p></div>
      <div className='flex'><b className='mr-2'>Email:</b><p className='font-extralight'>diaz@hchokc.org

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
    imge={eric}
    h2={h2} 
    title={title}
    className="col-span-2 -mt-36"
    />
  )
}