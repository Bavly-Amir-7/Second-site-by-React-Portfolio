import React, { useState } from 'react';
import "./main.css";
import { myProjects } from './myProjects';
import { AnimatePresence, motion } from 'framer-motion';
import Swal from 'sweetalert2';

// Function to show project details in modal
const showProjectModal = (project) => {
  // Check if current theme is light or dark
  const isLightMode = document.body.classList.contains('light');

  const projectsHtml = project.projects.map(proj => `
    <div style="
      border: 1px solid ${isLightMode ? '#e0e0e0' : '#444'};
      border-radius: 8px;
      padding: 15px;
      margin: 10px 0;
      text-align: left;
      background: ${isLightMode ? '#fafafa' : '#2a2a2a'};
      color: ${isLightMode ? '#333' : '#e0e0e0'};
    ">
      <h4 style="color: #2196F3; margin-bottom: 10px; font-weight: 600;">${proj.title}</h4>
      <p style="margin-bottom: 10px; line-height: 1.6; color: ${isLightMode ? '#555' : '#ccc'};">${proj.description}</p>
      <p style="margin-bottom: 15px; color: ${isLightMode ? '#666' : '#aaa'};"><strong>Technologies:</strong> ${proj.tech}</p>
      ${proj.url !== '#' ? `<a href="${proj.url}" target="_blank" style="
        background: #2196F3;
        color: white;
        padding: 8px 16px;
        border-radius: 6px;
        text-decoration: none;
        display: inline-block;
        font-weight: 500;
        transition: background 0.3s ease;
      " onmouseover="this.style.background='#1976D2'" onmouseout="this.style.background='#2196F3'">Visit Project</a>` : '<span style="color: #999;">Link not available</span>'}
    </div>
  `).join('');

  Swal.fire({
    title: project.projectTitle,
    html: `
      <div style="text-align: left; color: ${isLightMode ? '#333' : '#e0e0e0'};">
        <p style="margin-bottom: 20px; font-size: 16px; line-height: 1.6; color: ${isLightMode ? '#555' : '#ccc'};">${project.description}</p>
        <div style="
          background: ${isLightMode ? '#f8f9fa' : '#1e1e1e'};
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
          border: 1px solid ${isLightMode ? '#e9ecef' : '#333'};
        ">
          <h3 style="color: ${isLightMode ? '#333' : '#e0e0e0'}; margin-bottom: 15px; font-weight: 600;">Projects:</h3>
          ${projectsHtml}
        </div>
      </div>
    `,
    width: '80%',
    confirmButtonText: 'Close',
    confirmButtonColor: '#2196F3',
    background: isLightMode ? '#ffffff' : '#2d2d2d',
    color: isLightMode ? '#333333' : '#e0e0e0',
    customClass: {
      popup: 'custom-swal-popup',
      title: 'custom-swal-title'
    }
  });
};

export default function Main() {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  return (
    <main className='flex'>
      <section className='flex left-section '>
        <button onClick={() => { setCurrentActive("all"); setArr(myProjects) }} className={currentActive === "all" ? "active" : null}>All projects</button>

        <button onClick={() => {
          setCurrentActive("css");
          const newArr = myProjects.filter((item) => item.category === "Html" || item.category === "Css" || item.category === "Bootstrap");
          setArr(newArr);
        }} className={currentActive === "css" ? "active" : null}>Html, CSS</button>

        <button onClick={() => {
          setCurrentActive("Bootstrap");
          const newArr = myProjects.filter((item) => item.category === "Bootstrap");
          setArr(newArr);
        }} className={currentActive === "Bootstrap" ? "active" : null}>Bootstrap</button>

        <button onClick={() => {
          setCurrentActive("js");
          const newArr = myProjects.filter((item) => item.category === "Js");
          setArr(newArr);
        }} className={currentActive === "js" ? "active" : null}>JavaScript</button>

        <button onClick={() => {
          setCurrentActive("react");
          const newArr = myProjects.filter((item) => item.category === "React");
          setArr(newArr);
        }} className={currentActive === "react" ? "active" : null}>React & MUI</button>

        <button onClick={() => {
          setCurrentActive("Next js");
          const newArr = myProjects.filter((item) => item.category === "Next js");
          setArr(newArr);
        }} className={currentActive === "Next js" ? "active" : null}>Next js</button>
      </section>

      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => (
            <motion.article
              key={item.imgPath}
              layout
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              className='card1'
            >
              <img src={item.imgPath} alt={item.projectTitle} />
              <div className="box">
                <h1 className='title'>{item.projectTitle}</h1>
                <p className='sub-title'>Category: {item.category}</p>
                <p className='description'>{item.description}</p>
                <div className="flex icons">
                  <div className='iconsParent'>
                    <div className='icon-link' onClick={() => item.liveUrl && item.liveUrl !== '#' && window.open(item.liveUrl, '_blank')} style={{ cursor: item.liveUrl && item.liveUrl !== '#' ? 'pointer' : 'default', opacity: item.liveUrl && item.liveUrl !== '#' ? 1 : 0.5 }}></div>
                    <div className='icon-github' onClick={() => item.githubUrl && item.githubUrl !== '#' && window.open(item.githubUrl, '_blank')} style={{ cursor: item.githubUrl && item.githubUrl !== '#' ? 'pointer' : 'default', opacity: item.githubUrl && item.githubUrl !== '#' ? 1 : 0.5 }}></div>
                  </div>
                  <div className="link flex">
                    <button className='theBtn flex' onClick={() => showProjectModal(item)} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>more
                      <span style={{ alignSelf: "center" }} className='icon-arrow-right2'></span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
}
