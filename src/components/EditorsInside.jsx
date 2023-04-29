import React from 'react';
import card1 from '../assets/1.png'
import card2 from '../assets/2.png'
import card3 from '../assets/3.png'
import { Col } from 'react-bootstrap';

const EditorsInside = () => {
    return (
        <>
        <Col md={4} sm={6} className='mt-3'>
        <img src={card1} alt="" />  
        <h6>21 The Most Stylish Wedding Guest Dresses For Spring</h6> 
        <p style={{color:'gray'}}><i className="mx-2 fa-sharp fa-solid fa-calendar-days"></i>Jan 4, 2022</p>
        </Col>
        <Col md={4} sm={6} className='mt-3'>
            <img src={card2} alt="" />  
            <h6>21 The Most Stylish Wedding Guest Dresses For Spring</h6> 
            <p style={{color:'gray'}}><i className="mx-2 fa-sharp fa-solid fa-calendar-days"></i>Jan 4, 2022</p>
        </Col>
        <Col md={4} sm={6} className='mt-3'>
            <img src={card3} alt="" />  
            <h6>21 The Most Stylish Wedding Guest Dresses For Spring</h6> 
            <p style={{color:'gray'}}><i className="mx-2 fa-sharp fa-solid fa-calendar-days"></i>Jan 4, 2022</p>
        </Col>
    </>
    );
};

export default EditorsInside;