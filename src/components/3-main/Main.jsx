import React, { useState } from 'react';
import "./main.css";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import { AnimatePresence, motion } from 'framer-motion';

const myProjects = [
  {
    projectTitle: "React projects",
    category: "React",
    imgPath: img1,
    description: "This project showcases various concepts and applications built using React. It includes hooks, components, and more."
  },
  {
    projectTitle: "Html projects",
    category: "Html",
    imgPath: img2,
    description: "Explore foundational HTML projects that illustrate the structure and semantic features of web pages."
  },
  {
    projectTitle: "Css projects",
    category: "Css",
    imgPath: img3,
    description: "A collection of CSS projects demonstrating layouts, animations, and design aesthetics for web development."
  },
  {
    projectTitle: "Bootstrap projects",
    category: "Bootstrap",
    imgPath: img4,
    description: "These Bootstrap projects introduce advanced styling techniques, including variables, mixins, and responsive design."
  },
  {
    projectTitle: "Js projects",
    category: "Js",
    imgPath: img5,
    description: "A variety of JavaScript projects that cover algorithms, DOM manipulation, and event-driven programming."
  },
  {
    projectTitle: "Next js projects",
    category: "Next js",
    imgPath: img6,
    description: "A showcase of projects built using Next.js, featuring server-side rendering and static site generation."
  },
];

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
              <img width={266} src={item.imgPath} alt={item.projectTitle} />
              <div style={{ width: "266px" }} className="box">
                <h1 className='title'>{item.projectTitle}</h1>
                <p className='sub-title'>Category: {item.category}</p>
                <p className='description'>{item.description}</p>
                <div className="flex icons">
                  <div className='iconsParent'>
                    <div className='icon-link'></div>
                    <div className='icon-github'></div>
                  </div>
                  <div className="link flex">
                    <a className='theBtn flex' href="#">more
                      <span style={{ alignSelf: "center" }} className='icon-arrow-right2'></span>
                    </a>
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
