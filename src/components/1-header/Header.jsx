import React from 'react'
import './header.css'
import { useState } from "react"

export default function Header() {
  const [showModal, setShowModal] = useState(false)


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

      <button className='theme flex'>
        <span className='icon-moon-o'></span>
      </button>



      {showModal && (
        <div className="fixed">

          <ul className="modal1">
            <li>
              <button className="icon-close" onClick={() => setShowModal(false)}>
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
