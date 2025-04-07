import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { ConCard } from '../components/ConCard';

export { NewsRoom } from './NewsRoom';

export { Family } from './Family';

export { Personal } from './Personal';

export { Criminal } from './Criminal';

export {DUI} from './DUI';

export { Expungments } from './Expungments';

export { EmailSender } from './EmailSender'

export {Contact} from './Contact';
export {Home} from './Home'
export {PageNotFound} from './PageNotFound'

export const TopCover = ({h1,title, p,bg}) => {
  return (
    <div
        className={`w-full bg-center bg-scroll bg-cover pl-[10%] lg:pl-[10%] other:pl-0 p-6 bg-blend-multiply bg-neutral-300 bg-${bg}`}
      >
        <div className="flex flex-col  w-[30rem]  other:items-center other:w-full">
          <div className="flex p5">
            
          </div>
          <div className="other:p-4">
            <h1 className=" font-serif text-[2.6rem] text-white font-semibol">
            {h1}</h1>
            <ConCard
            className="pt-0"
              b2="text-white border-white"
              b1="text-black bg-orange-300 "
              h1={h1}
              title={title}
            />
            <p className=" font-serif pb-5 text-[1.4rem] text-white font-semibol">
           {p}</p>
          </div>
        </div>
      </div>
  )
}

export const ConCompo = ({h1,title}) => {
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
        lawyerName: title,
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
    <div className='bg-neutral-200 flex justify-center items-center'>
      <div className='flex flex-col w-full max-w-screen-xl p-20 other:p-10'>
        <h1 className='py-14 font-serif text-center text-3xl text-black dark:text-white'>{h1}</h1>

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
  )
}