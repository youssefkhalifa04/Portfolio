import React from 'react'
import './About.css'
import pic from '../../assets/fullpic.jpeg'
import Rate from './Rate'
export const About = () => {
  return (
    <section>
        <h2 >About me <hr className='line' /></h2>
        <div className="details">
          <img src={pic} className='child-1'/>
          <div className="text-content child-2">
            <p>
            I am an experienced Fullstack Developer with over a decade of professional expertise in the field. Throughout my career,
            I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
            </p>
            <p>
             My passion for frontend and backend development is not only reflected in my extensive experience but also in the enthusiasm and dedication
              I bring to each project.
            </p>
            <ul className="skills-rate">
              <Rate text={"HTML&CSS"} length='400px'/>
              <Rate text={"JavaScript"} length='300px'/>
              <Rate text={"React Js"} length='280px'/>
              <Rate text={"Python"} length='320px'/>
              <Rate text={"C/C++"} length='400px'/>
              <Rate text={"Git&Github"} length='380px'/>
              
            </ul>
          </div>
        </div>
    </section>
  )
}
