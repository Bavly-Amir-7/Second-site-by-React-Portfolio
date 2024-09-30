import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // استيراد Link
import './header.css';

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
    <header className='flex'>
      <div className='empty' />
      <button onClick={() => setShowModal(true)} className='menu icon-menu flex'></button>
      <nav>
        <ul className='flex'>
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Articles</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="#">Speaking</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
      </nav>
      <button onClick={() => {
        localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
        setTheme(localStorage.getItem("currentMode"));
      }} className='theme flex'>
        {theme === "dark" ? (
          <span className='icon-moon'></span>
        ) : (
          <span className='icon-sun'></span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal1">
            <li>
              <button className="icon-x1" onClick={() => setShowModal(false)}></button>
            </li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Articles</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="#">Speaking</Link></li>
            <li><Link to="#">Uses</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
