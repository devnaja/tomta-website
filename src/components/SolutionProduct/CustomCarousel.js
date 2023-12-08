import React from "react";
import img1 from '../../assets/images/service-details-1.jpg'
import img2 from '../../assets/images/service-details-2.jpg'
import img3 from '../../assets/images/service-details-3.jpg'
import img4 from '../../assets/images/service-details-4.jpg'

import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

function CustomCarousel() {
  return (
    <>
    <Swiper
      modules={[ Scrollbar]}
      spaceBetween={50}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={3}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      // eslint-disable-next-line
      <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
      <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={img4} alt='image'/></SwiperSlide>
      <SwiperSlide><img src={img1} alt='image'/></SwiperSlide>
      <SwiperSlide><img src={img2} alt='image'/></SwiperSlide>
      <SwiperSlide><img src={img3} alt='image'/></SwiperSlide>
      <SwiperSlide><img src={img4} alt='image'/></SwiperSlide>
    </Swiper>
  </>
  );
}

export default CustomCarousel;
