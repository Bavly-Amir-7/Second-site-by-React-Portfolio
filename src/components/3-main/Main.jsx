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

export default function Main() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const [currentActive, setcureentActive] = useState("all")

  return (
    <main className='flex'>
      <section className=' flex left-section  '>
        <button onClick={() => { setcureentActive("all") }} className={currentActive === "all" ? "active" : null}>All projects</button>
        <button onClick={() => { setcureentActive("css") }} className={currentActive === "css" ? "active" : null}>HTML & CSS</button>
        <button onClick={() => { setcureentActive("js") }} className={currentActive === "js" ? "active" : null}>JavaScript</button>
        <button onClick={() => { setcureentActive("react") }} className={currentActive === "react" ? "active" : null}>React & MUI</button>
        <button onClick={() => { setcureentActive("node") }} className={currentActive === "node" ? "active" : null}>Node & Express</button>
      </section>

      <section className="right-section flex ">
        {images.map((image, index) => {
          return (
            <article key={index} className='card1'>
              <img width={266} src={image} alt={`project-${index + 1}`} />
              <div style={{ width: "266px" }} className="box ">
                <h1 className='title'>Project {index + 1}</h1>
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
