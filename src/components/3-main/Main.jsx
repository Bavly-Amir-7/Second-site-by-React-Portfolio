import React from 'react'
import "./main.css";
import img1 from "./images/1.jpg"
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

export default function Main() {
  return (
    <main className='flex'>
      <section className=' flex left-section '>
        <button className='active'>All projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>Node & Express</button>
      </section>




      <section className="right-section ">

        <article className='card1 '>
          <img width={266} src={img1} alt="1" />
          <div style={{ width: "266px" }} className="box border">
            <h1 className='title'>page</h1>
            <p className='sub-title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nostrum iure impedit rerum quisquam dolores atque magni ea amet sunt! Eius cumque perferendis, repellat labore culpa non quae nam officiis.</p>

            <div className="flex icons">

              <div className='iconsParent'>
                <div className='icon-link'></div>
                <div className='icon-github'></div>
              </div>

              <div className="link flex">

                <a  className='theBtn flex' href="">more
                  <span style={{ alignSelf: "end" }} className='icon-arrow-right2'></span>
                </a>
              </div>


            </div>
          </div>


        </article>
      </section>

    </main>
  )
}
