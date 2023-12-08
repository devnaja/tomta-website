import React from 'react';
import Mission from './Mission';
import History from './History';

function AboutUs() {
    return ( 
        <div className=''>
            {/* <div className='font-extrabold text-3xl uppercase text-center'>About Us Page</div> */}
            <History />
            <Mission />
        </div>
     );
}

export default AboutUs;