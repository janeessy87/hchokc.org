import React, { useState } from 'react'
import { TopCover } from '.'
import toast from 'react-hot-toast'

import meetLegal from "../assets/Images/meetLegal.jpg"

import { useTitle } from '../hooks/useTitle'

export const Contact = () => {
  const title = "Contact"
  useTitle(title)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    intrests: '',
    other: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loadingToast = toast.loading('Sending message...');

    try {
      const info = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        intrests: formData.intrests,
        other: formData.other,
      };

      const res = await fetch("/.netlify/functions/sendMail", {
        method: "POST",
        body: JSON.stringify(info),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Message sent successfully!', {
          id: loadingToast
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          intrests: '',
          other: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to send message. Please try again.', {
        id: loadingToast
      });
    }
  };

  return (
    <div>
      <TopCover 
        title={title}
        bg="dui"
        p="Free Initial Consultation | Available 7 Days a Week"
        h1="Contact us"
      />

      <div className='flex bg-white justify-center'>
        <div className='flex other:flex-col max-w-screen-2xl w-full justify-center space-x-20 tab:p-4 tab:space-x-5 p-10 other:space-x-0 bg-white text-black dark:bg-black dark:text-white'>
          <div className='space-y-6 other:w-full w-1/2'>
            <h1 className='font-serif text-2xl'>We're here to help with your legal needs.</h1>
            <p className='text-lg font-extralight'>Fill out our contact form or give us a call to schedule a free consultation.</p>
            <img src={meetLegal} alt="" className='h-[18rem] object-cover w-full' />
            <div className='space-y-8 dark:bg-neutral-800 text-lg bg-neutral-200 flex flex-col px-4 py-10 my-0'>
              <h2 className='font-serif text-xl'>Address:</h2>
              <a className='underline font-extralight' href="https://maps.app.goo.gl/jZRaP2mGzPA9E3258">
                428 Dean A McGee Ave, Oklahoma City, OK 73102</a>
              <h2 className='font-serif text-xl'>Hours of Operation:</h2>
              <p className='font-extralight'>Monday to Friday: 8:00 am - 7:00 pm <br />
                Saturday and Sunday: Phones will be answered <br />
                <br /> Phones are answered 24/7.</p>
              <h2 className='font-serif text-xl'>Parking:</h2>
              <p className='font-extralight'>Free parking available in our lot</p>
            </div>
          </div>
          <div id='contact' className='flex-col other:w-full w-1/2 items-center'>
            <form className='flex rounded-md flex-col p-5 py-10 text-black dark:bg-black bg-white border-[1px] dark:border-white border-black items-center dark:text-white' onSubmit={handleSubmit}>
              <div className='w-full'>
                <label className='py-3 self-baseline'>Name*</label>
                <div className='flex items-center my-4 space-x-2'>       
                  <label className='flex w-1/2 flex-col' htmlFor="firstName">
                    <input 
                      className='p-2 rounded-sm text-black bg-transparent border-black border-[1px] dark:border-white dark:text-white' 
                      type="text" 
                      id='firstName' 
                      name='firstName'
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    First Name
                  </label>
                  <label className='flex w-1/2 flex-col' htmlFor="lastName">
                    <input 
                      className='p-2 rounded-sm text-black bg-transparent border-[1px] border-black dark:border-white dark:text-white' 
                      type="text" 
                      id='lastName' 
                      name='lastName'
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                    Last Name
                  </label>
                </div>
              </div>

              <label className='flex flex-col w-full' htmlFor="email">
                Email*
                <input 
                  className='p-2 my-4 text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white' 
                  type="email" 
                  id='email' 
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              
              <label className='flex flex-col w-full' htmlFor="phone">
                Phone*
                <input 
                  className='p-2 my-4 text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white' 
                  type="tel" 
                  name="phone" 
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </label>
              
              <label className='flex flex-col w-full' htmlFor="message">
                Message*
                <textarea 
                  cols="30" 
                  rows="7" 
                  className='p-2 my-4 text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white' 
                  id='message' 
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className='flex flex-col w-full' htmlFor="intrests">
                What services are you interested in?
                <input 
                  className='p-2 my-4 text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white' 
                  type="text" 
                  id='intrests' 
                  name='intrests'
                  value={formData.intrests}
                  onChange={handleChange}
                />
              </label>
              
              <label className='flex flex-col w-full' htmlFor="other">
                Other: case information
                <input 
                  className='p-2 my-4 text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white' 
                  type="text" 
                  id='other' 
                  name='other'
                  value={formData.other}
                  onChange={handleChange}
                />
              </label>

              <input 
                className='items-center px-6 py-2 my-10 text-2xl font-semibold text-white bg-orange-300 rounded hover:bg-orange-500 max-w-48' 
                type="submit" 
                value="Submit Form" 
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}