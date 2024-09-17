import React from 'react'
import './header.css'
import { useState } from "react"
import { useEffect } from 'react';
import { dark } from '@mui/material/styles/createPalette';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");

    }
  }, [theme]);



  return (
    <header className=' flex'>
      <div className='empty' />


      <button onClick={() => { setShowModal(true) }} className='menu icon-menu flex'>

      </button>


      <nav>
        <ul className='flex'>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>

      <button onClick={() => {

        localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark")


        setTheme(localStorage.getItem("currentMode"))


      }
      } className='theme flex'>
        {theme === "dark" ? (<span className='icon-moon'></span>) : (<span className='icon-sun'></span>
        )}


      </button>



      {showModal && (
        <div className="fixed">

          <ul className="modal1">
            <li>
              <button className="icon-x1" onClick={() => setShowModal(false)}>
              </button>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Speaking</a></li>
            <li><a href="#">Uses</a></li>
          </ul>


        </div>
      )}


    </header>

  )
}
