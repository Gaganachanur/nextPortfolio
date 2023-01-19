import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Fragment } from 'react';
import Button from '@mui/material/Button';
import Snackbar, { snackbarClasses } from '@mui/material/Snackbar';

export const ContactUs = () => {

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(process.env.YOUR_SERVICE_ID +" service")
    emailjs.sendForm( "service_3kazxwr", "template_0fdnfls", form.current, "CujzgziTt3ohJkVQE")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Fragment>
      <div className="border-spacing-4 shadow-2xl p-10 rounded-xl  dark:text-black dark:bg-gray-100">
            <h3 className="text-2xl py-1 mb-3 font-Michroma">
              Reach Out to me!
            </h3>
           
    <form ref={form} onSubmit={sendEmail}>
    <div className='flex flex-wrap justify-center py-3'>
      <label className='px-3'>Name</label>
      <input className='border-4 py-1 px-10 m-3 rounded-full' required type="text" name="to_name" />
      <label className='px-3'>Email</label>
      <input  className='border-4 py-1 px-10 m-3 rounded-full' required type="email" name="from_name" />
    </div>
    <div className='flex flex-wrap justify-center py-3'>
    <label className='px-3'>Country</label>
      <input  className='border-4 py-1 px-5  m-3 rounded-full' required type='Phone' name="number" />
      <label className='px-3'>What's app</label>
      <input  className='border-4 py-1 px-5  m-3 rounded-full' required type='tel' name="number"placeholder="Ex-9463214582" pattern="[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"/>
    </div>
    <div className='flex flex-wrap justify-center py-3'>
      <label className='px-3'>Message</label>
      <textarea  className='border-4 py-1 px-5 lg:w-1/4 m-3 rounded-full' name="message" />
    </div>
    <div className='flex flex-wrap justify-center py-3'>
      <button  className='flex justify-center cursor-pointer  transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-yellow-500 hover:text-black bg-black text-white p-5 m-3 rounded-full'
       type="submit"
       onClick = {handleClick({
        vertical: 'top',
        horizontal: 'right',
      })}
       >
        Send Mail
       </button>
    </div>  
    </form>
    </div>

    <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Mail sent Successfully"
        key={vertical + horizontal}
      />
   
    </Fragment>
  );
};
