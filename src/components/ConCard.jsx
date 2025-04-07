import React from 'react'
import { Link } from 'react-router-dom'

export const ConCard = ({className, title,b1,h1, b2}) => {
  return (
    <div data-testid="con-card-container" className={`flex justify-center items-center pt-5 ${className} lgMobile:flex-col mdMobile:flex-col sMobile:flex-col`}>
    <a href="tel:+1405-825-0490"  className={`flex justify-center items-center px-10 py-4 w-full max-h-16 text-xl text-center rounded-sm hover:scale-95 hover:bg-opacity-90 ${b1}`}>
    405-825-0490
    </a>
    {title === "Contact"?  "" : <Link to={`/contact#contact`} className={`flex justify-center items-center px-10 py-4 m-5 w-full max-h-16 text-xl rounded-sm border-2 hover:scale-95 ${b2}`}>
      Contact Us
    </Link> }
  </div>
  )
}