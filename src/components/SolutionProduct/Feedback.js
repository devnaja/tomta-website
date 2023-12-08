import React from "react";
import user1 from "../../assets/images/team/team-1.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// import "../../style.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

const lists = [
  // {
  //   name: "John Doe",
  //   date: '18 Aug 2023',
  //   text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque exercitationem praesentium nihil.",
  // },
  // {
  //   name: "Karen Smith",
  //   date: '26 July 2023',
  //   text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque exercitationem praesentium nihil.",
  // },
  // {
  //   name: "Billy Johnson",
  //   date: '15 April 2023',
  //   text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque exercitationem praesentium nihil.",
  // },
  {
    name: "John Doe",
    date: '3 June 2022',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque exercitationem praesentium nihil.",
  },
  {
    name: "Karen Smith",
    date: '1 Sept 2013',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque exercitationem praesentium nihil.",
  },
  {
    name: "Billy Johnson",
    date: '1 Aug 2023',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque exercitationem praesentium nihil.",
  },
];

function FeedbackList() {
  return (
    <div className="text-center px-5 md:px-20 py-5 md:py-10 ">
      <div className="text-xl lg:text-3xl font-bold uppercase mb-3 lg:mb-5">
        What people say about us
      </div>

      {/* <>
      
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="swiper-slide-feedback"
      >
          {lists.map((list, i) => (
            <SwiperSlide className="swiper">
              <div className="w-full lg:flex">
                <div className="border-r border border-gray-400 bg-red-100 rounded p-4 flex flex-col justify-between ">
                  <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      Can coffee make you a better developer?
                    </div>
                    <p className="text-gray-700 text-base">{list.text}</p>
                  </div>
                  <div className="flex items-center m-auto">
                    <img
                      className="w-10 h-10 rounded-full mr-4 block"
                      src={user1}
                      alt="Avatar of Jonathan Reinink"
                    />
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">{list.name}</p>
                      <p className="text-gray-600">{list.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </> */}
        <div className="w-full max-w-full lg:flex overflow">

       {lists.map((list, i) => (
        <div className="max-w-4xl border-r border border-gray-400 bg-red-100 rounded p-4 m-4 flex flex-col justify-between ">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              Feedback 1
            </div>
            <p className="text-gray-700 text-base">{list.text}</p>
          </div>
          <div className="flex items-center m-auto">
            <img
              className="w-10 h-10 rounded-full mr-4 block"
              src={user1}
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{list.name}</p>
              <p className="text-gray-600">{list.date}</p>
            </div>
          </div>
        </div>
      ))} 
      </div>

    </div>
  );
}

export default FeedbackList;
