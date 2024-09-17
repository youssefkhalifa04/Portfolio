import React from 'react'
import pic from '../../assets/avatar.jpeg'
import './HeroStyle.css'
export const Hero = () => {
  return (
    <div className='container'>
      <img src={pic} className='hero-img'/>
      <h1><span>I'm youssef Khalifa</span>, fullstack developer based in Tunisia.</h1>
      <p>I am a fullstack developer from Mounastir,Tunisia.</p>
      <div className="btn-container">
        
        <button className='connect'>
          Connect with me
        </button>
        <button className='cv'>
           My resume
        </button>
      </div>
    </div>
  )
}

