import React from 'react';
import Banner from '../Banner';
import bannerImg from '../../assets/images/banner1.jpg'
import SolutionDetails from './Solution';
import ProductDetails from './Product';
// import CustomCarousel from './CustomCarousel';
import FeedbackList from './Feedback';


function Solution() {
    return ( 
        <div className=''>
            {/* <Banner image={bannerImg} /> */}
            <SolutionDetails />
            <ProductDetails />
            <FeedbackList />
        </div>
     );
}

export default Solution;