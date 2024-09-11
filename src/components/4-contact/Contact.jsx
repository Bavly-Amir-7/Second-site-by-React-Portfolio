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
        <form  action="">

          <div className='flex'>
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="" id="email" placeholder="Enter your email address" />
          </div>

          <div className='flex' style={{marginTop:"24px"}}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="" id="message"  placeholder="Enter your message here"></textarea>
          </div>
            <button className='submit'>Submit</button>



        </form>
        <div className="animation border">animation</div>
      </div>
    </section>
  )
}
