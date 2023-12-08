import React from "react";
import workflow from "../../assets/images/service-details-1.jpg";
import vertical from "../../assets/images/service-details-2.jpg";
import automation from "../../assets/images/service-details-3.jpg";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


function Product() {
  return (
    <div className="text-center px-5 md:px-20 py-5 md:py-10 bg-secondary text-white ">
      <div className="text-xl lg:text-3xl font-bold uppercase mb-3 lg:mb-5">
        Our Product
      </div>
      <div>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested. Sections 1.10.32 and 1.10.33 from "de
        Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
        original form, accompanied by English versions from the 1914 translation
        by H. Rackham. By Cicero are also reproduced in their exact original
        form, accompanied by English versions from the 1914 translation by H.
        Rackham.
      </div>
      <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={vertical} alt="vertical" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={workflow} alt="workflow" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={automation} alt="automation" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vertical} alt="vertical" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={automation} alt="automation" />
        </SwiperSlide>
      </Swiper>
    </>
    </div>
  );
}

export default Product;
