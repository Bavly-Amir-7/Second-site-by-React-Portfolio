import React, { useState, useEffect } from 'react';
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

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setShowModal(false); // Close mobile menu after clicking
  };

  return (
    <header className='flex'>
      <div className='empty' />
      <button onClick={() => setShowModal(true)} className='menu icon-menu flex'></button>
      <nav>
        <ul className='flex'>
          <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
          <li><button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button></li>
          <li><button onClick={() => scrollToSection('articles')} className="nav-link">Articles</button></li>
          <li><button onClick={() => scrollToSection('speaking')} className="nav-link">Speaking</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
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
            <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
            <li><button onClick={() => scrollToSection('articles')} className="nav-link">Articles</button></li>
            <li><button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button></li>
            <li><button onClick={() => scrollToSection('speaking')} className="nav-link">Speaking</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
          </ul>
        </div>
      )}
    </header>
  );
}
