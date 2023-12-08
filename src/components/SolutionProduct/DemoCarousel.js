import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/images/service-details-1.jpg'
import img2 from '../../assets/images/service-details-2.jpg'
import img3 from '../../assets/images/service-details-3.jpg'
import img4 from '../../assets/images/service-details-4.jpg'

function DemoCarousel() {
    return ( 
        <Carousel autoPlay showIndicators="false" showThumbs="false" width="50%" className='m-auto'>
                <div>
                    <img src={img1} alt='image' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} alt='image' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} alt='image' />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img4} alt='image' />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
        // <div>My Custom Carousel</div>
     );
}

export default DemoCarousel;