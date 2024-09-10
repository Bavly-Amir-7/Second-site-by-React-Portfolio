import React from 'react'
import "./contact.css";

export default function Contact() {
  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-mail3'></span>
        Contact us
      </h1>
      <p className='sub-title'>Contact us for more information and get notified when i publish something new.</p>



      <div className="flex">
        <form className='border' action="">
          <label htmlFor="email">Email Address:</label>
          <input type="email" name="" id="email" placeholder="Enter your email address" />

          <label htmlFor="message">Your message:</label>
          <textarea name="" id="message"></textarea>

          <button>Submit</button>


        </form>
        <div className="animation border"></div>
      </div>
    </section>
  )
}
