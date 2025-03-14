import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Fragment } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export const ContactUs = () => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const form = useRef();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const notificationBar = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(process.env.YOUR_SERVICE_ID + " service");

   
    emailjs
      .sendForm(
        "service_3kazxwr",
        "template_0fdnfls",
        form.current,
        "CujzgziTt3ohJkVQE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Fragment>
      <div className="border-spacing-4 shadow-2xl p-10 rounded-xl  dark:text-black dark:bg-gray-100">
        <h3 className="text-2xl py-1 mb-3 font-Michroma">Reach Out to me!</h3>

        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-wrap justify-center py-3">
            <label className="px-3">Name</label>
            <input
              className="border-4 py-1 lg:px-10  px-5 m-3 rounded-full"
              required
              type="text"
              name="to_name"
            />
            <label className="px-3">Email</label>
            <input
              className="border-4 py-1 lg:px-10 px-5  m-3 rounded-full"
              required
              type="email"
              name="from_name"
            />
          </div>
          <div className="flex flex-wrap justify-center py-3">
            <label className="px-3">Country</label>
            <input
              className="border-4 py-1 px-5  m-3 rounded-full"
              placeholder="Ex-India"
              required
              type="Phone"
              name="country"
            />
            <label className="px-3">What's app</label>
            <input
              className="border-4 py-1 px-5  m-3 rounded-full"
              required
              type="tel"
              name="mobile"
              placeholder="Ex-9463214582"
              pattern="[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
            />
          </div>
          <div className="flex flex-wrap justify-center py-3">
            <label className="px-3">Message</label>
            <textarea
              placeholder="If your from other country please paste your what's number here"
              className="border-4 py-5 px-5 lg:w-1/4 m-3 rounded-full"
              name="message"
            />
          </div>
          <div className="flex flex-wrap justify-center py-3">
            <button
              className="flex justify-center cursor-pointer  transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-yellow-500 hover:text-black bg-black text-white p-5 m-3 rounded-full"
              type="submit"
              onClick={notificationBar({
                vertical: "top",
                horizontal: "right",
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
        autoHideDuration={6000}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Mail Sent Successfully
        </Alert>
      </Snackbar>
    </Fragment>
  );
};
