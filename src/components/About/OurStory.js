import React from "react";
import coo from "assets/images/coo.png";

function OurStory() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-col  lg:gap-16">
        <div className="bg-primary rounded-xl flex items-center mb-5 lg:mb-0 ">
          <img
            src={coo}
            alt="image"
            loading="lazy"
            className="m-auto rounded-xl "
          />
        </div>
        <div className="m-auto">
          <h2 className="text-3xl text-gray-900 font-extrabold md:text-4xl lg:mb-6">
            Our Story
          </h2>
          <p className=" text-justify">
            Tomta Technology is a leading technology company that specializes in
            providing innovative and cutting-edge technological solutions for
            businesses across various industries.
          </p>
          <p className="text-justify">
            In the ever-evolving landscape of technology, Tomta Technology
            stands tall as a beacon of innovation, setting the pace for the
            industry's future. As a leading technology company, Tomta Technology
            has not only witnessed but actively driven the transformation of
            businesses across diverse industries.
          </p>
          <p className="text-justify">
            What defines Tomta Technology is its ability to adapt and tailor
            solutions to the unique challenges of various industries. Whether
            it's revolutionizing e-commerce platforms, optimizing logistics with
            smart technologies, or enhancing healthcare systems, Tomta
            Technology's solutions are not just innovative; they are industry
            game-changers.
          </p>
          <p className="text-justify">
            Tomta Technology doesn't just consult; it collaborates. Every client
            engagement is an opportunity to build a lasting partnership. The
            team takes the time to understand the intricacies of each business,
            working side by side with clients to co-create solutions that align
            seamlessly with their goals. It's not just about delivering a
            product; it's about empowering businesses to thrive.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
