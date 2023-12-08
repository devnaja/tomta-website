import React from 'react';
import Banner from '../Banner';
import bannerImg from '../../assets/images/banner1.jpg'
import TeamDetails from './description';


function Solution() {
    return ( 
        <div className=''>
            {/* <div className='font-extrabold text-3xl uppercase text-center'>Solution Page</div> */}
            <Banner image={bannerImg} />
            <TeamDetails />
            {/* <CustomCarousel />  */}
        </div>
     );
}

export default Solution;