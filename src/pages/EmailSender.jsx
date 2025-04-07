import React, { useState } from 'react'
import toast from 'react-hot-toast'

export const EmailSender = () => {
  const [formData, setFormData] = useState({
    fromName: '',
    fromEmail: '',
    toEmail: '',
    subject: '',
    client_name: '',
    client_address: '',
    state_city_zip: '',
    date: '',
    letterheading: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const loadingToast = toast.loading('Sending email...');

    try {
      const res = await fetch("/.netlify/functions/sendNotification", {
        method: "POST",
        body: JSON.stringify({
          from: `${formData.fromName} <${formData.fromEmail}>`,
          to: formData.toEmail,
          subject: formData.subject,
          parameters: {
            client_name: formData.client_name,
            client_address: formData.client_address,
            state_city_zip: formData.state_city_zip,
            date: formData.date,
            letterheading: formData.letterheading,
            letter_body: formData.message
          },
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to send email');
      }

     
      
      // Show success message and reset form
      toast.success('Email sent successfully!', {
        id: loadingToast
      });
      
      // Reset form
      setFormData({
        fromName: '',
        fromEmail: '',
        toEmail: '',
        subject: '',
        client_name: '',
        client_address: '',
        state_city_zip: '',
        date: '',
        letterheading: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(error.message || 'Failed to send email. Please try again.', {
        id: loadingToast
      });
    }
  }

  return <div>
   
      <form className="flex rounded-md  flex-col p-5 py-10  text-black dark:bg-black bg-white border-[1px] dark:border-white border-black items-center dark:text-white" onSubmit={handleSubmit}>
      <h1 className='text-5xl font-bold pb-6'> Email Sender</h1>
{/* Email from */}
        <div className="w-full">
          <label className="py-3 self-baseline">Email From*</label>

          <div className="flex items-center my-4 space-x-2">
    {/* From Name*/}
            <label className="flex  w-1/3 flex-col " htmlFor="fromName">
              <input className="p-2 rounded-sm text-black bg-transparent border-black border-[1px] dark:border-white dark:text-white" type="text" id="fromName" name="fromName" value={formData.fromName} onChange={handleChange} required />
              From Name
            </label>
    {/* From email*/}
            <label className="flex  w-full flex-col" htmlFor="fromEmail">
              <input className="p-2 rounded-sm  text-black bg-transparent border-[1px] border-black dark:border-white dark:text-white" type="email" id="fromEmail" name="fromEmail" value={formData.fromEmail} onChange={handleChange} required />
              From Email
            </label>
          </div>
        </div>

{/* receipientEmail */}
        <label className="flex flex-col w-full" htmlFor="toEmail">
          Recipient Email*
          <input className="p-2 my-4 text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white" type="email" id="toEmail" name="toEmail" value={formData.toEmail} onChange={handleChange} required />
        </label>
{/* Email Subject */}
        <label className="flex flex-col w-full" htmlFor="subject">
          Email_subject
          <input className="p-2 my-4 text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white" type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
        </label>
{/* Receipient Name And Address */}
        <div className="w-full border-black border-2 my-3 p-2">
          <label className="py-3 self-baseline">Name And Address*</label>
    {/* Recepient Name */}
          <div className="flex items-center flex-col my-4 space-x-2">
            <label className="flex text-center font-bold  w-1/2 flex-col " htmlFor="client_name">
              <input className="p-2 rounded-sm text-black bg-transparent border-black border-[1px] dark:border-white dark:text-white" type="text" id="client_name" name="client_name" value={formData.client_name} onChange={handleChange} />
              Reciepient Name
            </label>
    {/* recepient street address */}
            <label className="flex  w-1/3 flex-col " htmlFor="client_address">
              <input className="p-2 rounded-sm text-black bg-transparent border-black border-[1px] dark:border-white dark:text-white" type="text" id="client_address" name="client_address" value={formData.client_address} onChange={handleChange} />
              Recepient street address
            </label>
    {/* receipient City and Zipcode */}
            <label className="flex w-1/3 flex-col" htmlFor="state_city_zip">
              <input className="p-2 rounded-sm  text-black bg-transparent border-[1px] border-black dark:border-white dark:text-white" type="text" id="state_city_zip" name="state_city_zip" value={formData.state_city_zip} onChange={handleChange} />
              City, State and ZipCode 
            </label>
            
          </div>
        </div>

{/* Date */}
        <label className="flex flex-col w-full" htmlFor="date">
          Date*
          <input className="p-2 my-4  text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white" type="text" name="date" id="date" value={formData.date} onChange={handleChange} required />
        </label>

{/* Letter Heading */}
        <label className="flex flex-col w-full" htmlFor="letterheading">
          Letter Heading*
          <input className="p-2 my-4  text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white" type="text" name="letterheading" id="letterheading" value={formData.letterheading} onChange={handleChange} required />
        </label>

{/* Email Message Body */}

        <label className="flex flex-col w-full" htmlFor="message">
          Message ---Should be in HTML TAG----*
          <textarea cols="30" rows="7" className="p-2 my-4 text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white" type="textarea" id="message" name="message" value={formData.message} onChange={handleChange} required />
        </label>
{/* Submit Button */}
        <input className='items-center px-6 py-2 my-10 text-2xl font-semibold text-white bg-orange-300 rounded hover:bg-orange-500 max-w-48' type="submit" value="Submit Form" />

      </form>
    </div>;
}