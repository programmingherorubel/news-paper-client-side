import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment/moment';
import Marquee from 'react-fast-marquee';

const Topbar = () => {
    return (
        <>
                    <div className='text-center mt-5'>
                        <img src={logo} alt="" />
                        <h6 className='text-center mt-3' style={{color:'#706F6F'}}>Journalism Without Fear or Favour</h6>
                        <b>{moment().format("dddd, MMMM D, YYYY")}</b>
                    </div>
            
                    <div className='bg-light d-flex py-4 px-2' >
                        <button className='btn' style={{background:'#D72050',color:'white'}}>Letest</button>
                        <Marquee speed={100}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
                    </div>
                
            </>
    );
};

export default Topbar;