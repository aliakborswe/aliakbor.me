"use client";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const SentEmail = () => {
    const [text, setText] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_th30rs9", // Replace with your EmailJS service ID
        "template_2v15o2p", // Replace with your EmailJS template ID
        form.current,
        "IYW68_7AilkEs8Xg1" // Replace with your public key
      )
      .then(
        () => {
          setText("Email sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setText("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <div className='isolate pl-8'>
      <form ref={form} onSubmit={sendEmail}>
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div className='sm:col-span-2'>
            <label
              htmlFor='user_name'
              className='block text-sm/6 font-semibold text-white'
            >
              Name
            </label>
            <div className='mt-2.5'>
              <input
                id='user_name'
                name='user_name'
                type='text'
                autoComplete='given-name'
                required
                className='block w-full rounded-md bg-[#1D293A] px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#15FC08]'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='user_email'
              className='block text-sm/6 font-semibold text-white'
            >
              Email
            </label>
            <div className='mt-2.5'>
              <input
                id='user_email'
                name='user_email'
                type='email'
                autoComplete='email'
                required
                className='block w-full rounded-md bg-[#1D293A] px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#15FC08]'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block text-sm/6 font-semibold text-white'
            >
              Message
            </label>
            <div className='mt-2.5'>
              <textarea
                id='message'
                name='message'
                rows={4}
                required
                className='block w-full rounded-md bg-[#1D293A] px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#15FC08]'
              />
            </div>
          </div>
        </div>
        <p className='text-white mt-5'>{text}</p>
        <div className='mt-10'>
          <button
            type='submit'
            className='block w-full rounded-md bg-[#15FC08] px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15FC08]'
          >
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
};

export default SentEmail;
