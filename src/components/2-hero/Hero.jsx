import React from 'react';
import "./hero.css";
import myImage from "./myPhoto1.jpg";
import computer from "./../../../public/animation/computer.json";
import Lottie from 'lottie-react'; // Make sure you import Lottie

export default function Hero() {
  return (
    <section className='hero flex'>
      <div className="left-section">
        <div className="parent-avatar flex">
          <img className='avatar' src={myImage} alt='myProfilePhoto' />
          <div className='icon-verified'></div>
        </div>

        <h1 className='title'>Front-End Developer.</h1>
        <p className='sub-title'>
          I am Bavly Amir Makram, living in Giza, Egypt. A front-end developer specializing in React, dedicated to delivering modern and advanced tech solutions in my field.
        </p>
        <div className="icons flex">
          <div className="icon icon-x"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-facebook1"></div>
          <div className="icon icon-gmail"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>


      <div className="right-section animation ">
        <Lottie className='computer' animationData={computer} />
      </div>
    </section>
  );
}
