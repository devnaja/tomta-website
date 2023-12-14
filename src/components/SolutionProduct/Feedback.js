import React from "react";
import user1 from "../../assets/images/team/team-1.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

function FeedbackList() {
  return (
    <div className="text-center px-5 md:px-20 py-5 md:py-10 ">
      <div className="text-title font-bold uppercase mb-3 lg:mb-5">
        What people say about us
      </div>

      <div className="w-full max-w-full lg:flex overflow">
        {lists.map((list, i) => (
          <div className="max-w-4xl border-r border border-gray-400 bg-red-100 rounded p-4 m-4 flex flex-col justify-between ">
            <div className="mb-8">
              <div className="text-title text-xl mb-2">Feedback 1</div>
              <p className="text-desc">{list.text}</p>
            </div>
            <div className="flex items-center m-auto">
              <img
                className="w-10 h-10 rounded-full mr-4 block"
                src={user1}
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-desc">
                <p className="">{list.name}</p>
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
