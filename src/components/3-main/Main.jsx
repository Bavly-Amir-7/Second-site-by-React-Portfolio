import React, { useState } from 'react';
import "./main.css";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";
import img9 from "./images/9.jpg";

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
    projectTitle: "Scss projects",
    category: "Scss",
    imgPath: img4,
    description: "These SCSS projects introduce advanced styling techniques, including variables, mixins, and responsive design."
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
  const [currentActive, setcureentActive] = useState("all");

  const [arr, setarr] = useState(myProjects);

  return (
    <main className='flex'>
      <section className='flex left-section '>

        {/* ******************************************************************* */}
        {/* all projects btn  */}

        <button onClick={() => { setcureentActive("all"); setarr(myProjects) }} className={currentActive === "all" ? "active" : null}>All projects</button>
        {/* ******************************************************************* */}

        {/* ******************************************************************* */}
        {/* Html and css btn  */}

        <button onClick={() => {
          setcureentActive("css");
          setarr([
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
              projectTitle: "Scss projects",
              category: "Scss",
              imgPath: img4,
              description: "These SCSS projects introduce advanced styling techniques, including variables, mixins, and responsive design."
            },
          ]);
        }} className={currentActive === "css" ? "active" : null}>Html, CSS & Scss</button>
        {/* ******************************************************************* */}

        {/* ******************************************************************* */}
        {/* Js projects btn  */}

        <button onClick={() => {
          setcureentActive("js");
          setarr([{
            projectTitle: "Js projects",
            category: "Js",
            imgPath: img5,
            description: "A variety of JavaScript projects that cover algorithms, DOM manipulation, and event-driven programming."
          }]);
        }} className={currentActive === "js" ? "active" : null}>JavaScript</button>
        {/* ******************************************************************* */}

        {/* ******************************************************************* */}
        {/* React projects btn  */}

        <button onClick={() => {
          setcureentActive("react");
          setarr([{
            projectTitle: "React projects",
            category: "React",
            imgPath: img1,
            description: "This project showcases various concepts and applications built using React. It includes hooks, components, and more."
          }]);
        }} className={currentActive === "react" ? "active" : null}>React & MUI</button>
        {/* ******************************************************************* */}

        {/* ******************************************************************* */}
        {/* Next js projects btn  */}

        <button onClick={() => {
          setcureentActive("Next js");
          setarr([{
            projectTitle: "Next js projects",
            category: "Next js",
            imgPath: img6,
            description: "A showcase of projects built using Next.js, featuring server-side rendering and static site generation."
          }]);
        }} className={currentActive === "Next js" ? "active" : null}>Next js</button>
        {/* ******************************************************************* */}
      </section>

      <section className="right-section flex ">
        {arr.map((item) => {
          return (
            <article key={item.imgPath} className='card1'>
              <img width={266} src={item.imgPath} alt={item.projectTitle} />
              <div style={{ width: "266px" }} className="box ">
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
            </article>
          );
        })}
      </section>
    </main>
  );
}
