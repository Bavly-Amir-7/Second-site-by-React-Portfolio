import React from 'react';
import "./hero.css";
import myImage from "./myPhoto1.jpg";
import computer from "./../../../public/animation/computer.json";
import Lottie from 'lottie-react';
import { motion } from "framer-motion"; 

export default function Hero() {
  return (
    <section className='hero flex'>
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ scale: 0 }} 
            animate={{ scale: 1.1 }} 
            transition={{ damping: 4, type: "spring", stiffness: 100 }} 
            className='avatar' 
            src={myImage} 
            alt='myProfilePhoto' 
          />
          <div className='icon-verified'></div>
        </div>

        <h1 className='title'>Front-End Developer.</h1>
        <p className='sub-title'>
          I am Bavly Amir Makram, living in Giza, Egypt. A front-end developer specializing in React, dedicated to delivering modern and advanced tech solutions in my field.
        </p>
        <div className="icons flex">
          <a href="https://x.com/Bavly_Amir" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-x"></div>
          </a>
          <a href="https://github.com/Bavly-Amir-7" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-github"></div>
          </a>
          <a href="https://www.facebook.com/bavly.amir.35" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-facebook1"></div>
          </a>
          <a href="mailto:bavlyamir707@gmail.com">
            <div className="icon icon-gmail"></div>
          </a>
          <a href="https://leetcode.com/u/bavly_amir7/" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-linkedin"></div>
          </a>
          <a href="https://x.com/Bavly_Amir" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-twitter"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie className='computer' animationData={computer} />
      </div>
    </section>
  );
}
