import React from "react";
import * as data from "data/products.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "style.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function Feedback() {
  const menuList = data;

  return (
    <div>
      <div className="z-0">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {menuList.lists.map((list, i) => (
            <SwiperSlide
              className="flex justify-center items-center w-full"
              key={i}
            >
              <div className="border-2 rounded-2xl bg-white dark:bg-gray-900">
                <p className="text-gray-700 dark:text-gray-300 px-10 pt-10">
                  I absolutely love Tailus! The component blocks are beautifully
                  designed and easy to use, which makes creating a great-looking
                  website a breeze.
                </p>

                <div className="mt-8  gap-4 text-left text-white bg-primary pb-10 rounded-b-2xl">
                  <div className="text-right text-yellow-500 p-5">
                    <FontAwesomeIcon icon={faStar} className="px-1" />
                    <FontAwesomeIcon icon={faStar} className="px-1" />
                    <FontAwesomeIcon icon={faStar} className="px-1" />
                    <FontAwesomeIcon icon={faStar} className="px-1" />
                    <FontAwesomeIcon icon={faStar} className="px-1" />
                  </div>

                  <div className="flex  items-center px-5">
                    {/* <img
                      className="h-12 w-12 rounded-full"
                      src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg"
                      alt=""
                    /> */}
                    <div className="pl-5">
                      <h3 className="text-lg font-medium ">Oketa Fred</h3>
                      <span className="text-sm tracking-wide ">
                        Tomta Tedchnology
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      ;
    </div>
  );
}

export default Feedback;
