import React from 'react'
import "./contact.css";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";

import  doneAnimation from "./../../../public/animation/done.json" ;
import  contactUs from "./../../../public/animation/contactUs.json" ;

export default function Contact() {

  const [state, handleSubmit] = useForm("mwpejjvn");




  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-mail3'></span>
        Contact us
      </h1>
      <p className='sub-title'>Contact us for more information and get notified when i publish something new.</p>



      <div className="contactContainer flex">
        <form onSubmit={handleSubmit}  >

          <div className='flex'>
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" placeholder="Enter your email address" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className='flex' style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message" placeholder="Enter your message here"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className='submit' disabled={state.submitting}>{state.submitting ? "Submitting..." : "Submit"}</button>

          {state.succeeded && (
            <p className='animationDone flex' style={{ fontSize: "16px", marginTop: "1.7rem" }}>
                <Lottie loop={false} className='doneAnimation' animationData={doneAnimation} />

             
              Your message has been sent successfully!
            </p>
          )}

        </form>
        <div className="animation ">
         <Lottie className='contactAnimation' animationData={contactUs} />
        </div>

      </div>
    </section>
  )
}
