import React from 'react'
import './Rate.css'
export default function Rate({text,length="10px"}) {
  return (
    <div className="design">
        <div className='hh'> 
        <h3>{text}</h3>
        </div>
        <div className='hello'>
          <hr className="line new-line" style={{width:length}}/>
        </div>
    </div>
  )
}

