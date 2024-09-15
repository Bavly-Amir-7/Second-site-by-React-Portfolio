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
  },
  {
    projectTitle: "Html projects",
    category: "Html",
    imgPath: img2,
  },

  {
    projectTitle: "Css projects",
    category: "Css",
    imgPath: img3,
  },
  {
    projectTitle: "Scss projects",
    category: "Scss",
    imgPath: img4,
  },
  {
    projectTitle: "Js projects",
    category: "Js",
    imgPath: img5,
  },
  {
    projectTitle: "Next js projects",
    category: "Next js",
    imgPath: img6,
  },



]

export default function Main() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const [currentActive, setcureentActive] = useState("all")

  const [arr, setarr] = useState(myProjects)

  return (
    <main className='flex'>
      <section className=' flex left-section  '>

        {/* ******************************************************************* */}
        {/* all projects btn  */}

        <button onClick={() => { setcureentActive("all"); setarr(myProjects) }} className={currentActive === "all" ? "active" : null}>All projects</button>
        {/* ******************************************************************* */}

        {/* ******************************************************************* */}
        {/* html and css btn  */}


        <button onClick={() => {
          setcureentActive("css"); setarr([
            {
              projectTitle: "html projects",
              category: "html",
              imgPath: img3,
            },
            {
              projectTitle: "css projects",
              category: "css",
              imgPath: img2,
            },
            {
              projectTitle: "Scss projects",
              category: "Scss",
              imgPath: img4,
            },
          ])
        }} className={currentActive === "css" ? "active" : null}>HTML ,CSS & Scss</button>
        {/* ******************************************************************* */}



        {/* ******************************************************************* */}
        {/* Js projects btn  */}



        <button onClick={() => {
          setcureentActive("js"); setarr([{
            projectTitle: "Js projects",
            category: "Js",
            imgPath: img4,
          },])
        }} className={currentActive === "js" ? "active" : null}>JavaScript</button>
        {/* ******************************************************************* */}



        {/* ******************************************************************* */}
        {/* React projects btn  */}


        <button onClick={() => {
          setcureentActive("react"), setarr([{
            projectTitle: "React projects",
            category: "React",
            imgPath: img1,
          },])
        }} className={currentActive === "react" ? "active" : null}>React & MUI</button>
        {/* ******************************************************************* */}



        {/* ******************************************************************* */}
        {/* Next js projects btn  */}


        <button onClick={() => {
          setcureentActive("Next js"), setarr([{
            projectTitle: "Next js projects",
            category: "Next js",
            imgPath: img5,
          },
          ])
        }} className={currentActive === "Next js" ? "active" : null}>Next js </button>
        {/* ******************************************************************* */}
      </section>

      <section className="right-section flex ">
        {arr.map((item) => {
          return (
            <article key={item.imgPath} className='card1'>
              <img width={266} src={item.imgPath} alt="" />
              <div style={{ width: "266px" }} className="box ">
                <h1 className='title'>{item.projectTitle}</h1>
                <p className='sub-title'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nostrum iure impedit rerum quisquam dolores atque magni ea amet sunt! Eius cumque perferendis, repellat labore culpa non quae nam officiis.
                </p>

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
