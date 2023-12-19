import React from "react";

const listing = [
  {
    title: "Title 1",
    image: "../../images/assets/product2.jpg",
    description:
      "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    title: "Title 2",
    image: "../../images/assets/product3.jpg",
    description:
      "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    title: "Title 1",
    image: "../../images/assets/product2.jpg",
    description:
      "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    title: "Title 1",
    image: "../../images/assets/product2.jpg",
    description:
      "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
];
function ListingCareer() {
  return (
    <div className="px-5 md:px-20 py-5 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listing.map((list, i) => (
          <div
            key={list.id}
            className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Img by Meriç Dağlı https://unsplash.com/@meric"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
              <h1 className="text-2xl font-semibold">Nature Image</h1>
              <p className="mt-2">
                This is a beautiful nature image placeholder. You can replace it
                with your own image.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListingCareer;
