import React from "react";
import image1 from "assets/images/about.jpg";

const listing = [
  {
    title: "Happy Depavali",
    image: "assets/images/e-invoice5.jpg",
    description:
      "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    title: "Welcome Lunch Technical Team",
    image: "assets/images/e-invoice5.jpg",
    description:
      "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    title: "Badminton Session",
    image: "assets/images/e-invoice5.jpg",
    description:
      "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    title: "Title 1",
    image: "assets/images/e-invoice5.jpg",
    description:
      "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
];
function ListingEvent() {
  return (
    <div className="px-5 md:px-20 py-5 md:py-10">
      <p className="text-xl text-center lg:text-3xl font-bold uppercase mb-3 lg:mb-5">
        Event{" "}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {listing.map((list, i) => (
          <div
            key={i}
            className="flex flex-col bg-white rounded shadow-lg shadow-background"
          >
            <div className="w-full  bg-cover rounded-t">
              <img src={image1} alt="" />
            </div>
            <div className="flex flex-col w-full h-full md:flex-row bg-white">
              <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-secondary text-white rounded md:flex-col md:items-center md:justify-center md:w-2/5">
                <div className="md:text-3xl">Jan</div>
                <div className="md:text-6xl">13</div>
                <div className="md:text-xl">7 pm</div>
              </div>
              <div className="p-4 font-normal text-gray-800 md:w-3/5">
                <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-800">
                  {list.title}
                </h1>
                <p className="leading-normal">{list.description}</p>
                <div className="flex flex-row items-center mt-4 text-gray-700">
                  <div className="w-1/2">Mercedes-Benz Superdome</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListingEvent;
