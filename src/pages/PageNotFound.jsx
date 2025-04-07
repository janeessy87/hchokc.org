import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import { useTitle } from '../hooks/useTitle'

export const PageNotFound = () => {
  useTitle("Page Not Found")
  return (
    <div className='flex justify-center flex-col items-center h-svh   bg-white text-black dark:text-white dark:bg-black'>
      <h1 className='text-7xl py-5'>OOPS!</h1>
      <div className=' max-w-screen-xl p-32 text-2xl font-extralight bg-white text-black dark:text-white dark:bg-black'>
        <p>We couldn't find the page you were looking for. This is either because:</p>
        <ul className='ml-10 list-disc py-10 '>
          <li className='text-xl font-extralight text-black dark:text-white'>There is an error in the URL entered into your web browser. Please check the URL and try again.          </li>
          <li className='text-xl font-extralight text-black dark:text-white'>The page you are looking for has been moved or deleted.
          </li>
        </ul>
        <p>You can return to our homepage by clicking here, or you can try searching for the content you are seeking by clicking here.</p>
      </div>
      <Link to='/' className='flex items-center justify-center  bg-black text-white  dark:border-white dark border-2 px-5 py-3 rounded-md'>Go Back Home<FaArrowRight /></Link>

    </div>

  )
}