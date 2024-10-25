import React from 'react';
import arrow from '../../assets/arrow_icon.svg';
import './CardStyle.css';


export const Card = ({ code, number, title, text }) => {
    return (
        <div className="card">
            <h2>{number}</h2>
            <h1 className='title'>{title}</h1>
            <p className='text'>{text}</p>
            <div className='btn2'>
                <p>Read_More</p> 
                <img src={arrow} className='arrowbtn' />
            </div>
        </div>
    );
  };
  