import React from "react";
import image1 from "assets/images/service-details-1.jpg";

function MissionVission() {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-10">
      {/* <div className="flex items-center">
        <img src={image1} />
      </div> */}
      {/* <div> */}
      <div className="bg-white rounded-3xl p-10 leading-loose tracking-wide text-justify mb-5 lg:mb-0">
        <p className="text-2xl font-bold">Our Mission</p>
        <p className="">
          At the heart of our mission lies a commitment to empower individuals,
          businesses, and entire communities through technology solutions that
          embody accountability, efficiency, and positive impact. We envision a
          world where technology becomes a force for empowerment, a catalyst for
          positive change that resonates across the present and the future.
        </p>
        <p>
          Our mission is a holistic commitment to empowerment, accountability,
          efficiency, and positive impact. As we harness the potential of
          technology, we aim to be a beacon of positive change, leaving a
          lasting and meaningful imprint on the individuals, businesses, and
          communities we serve.
        </p>
      </div>
      <div className="bg-white rounded-3xl leading-loose tracking-wide text-justify p-10">
        <p className="text-2xl font-bold">Our Vision</p>
        <p>
          In the ever-evolving landscape of the tech industry, we aspire to be
          more than just a player; we aim to be a leading force that sets new
          benchmarks for accountability, efficiency, and positive impact. Our
          vision transcends the boundaries of traditional technology, and we are
          committed to shaping a future where innovation is not just about
          meeting today's demands but also about contributing to a sustainable
          and harmonious tomorrow.
        </p>
        <p>
          Our vision is not confined to the present challenges but extends to a
          future where technology becomes an enabler of progress,
          responsibility, and positive transformation. As we strive to be a
          leading force in the tech industry, we invite others to join us on
          this journey towards a sustainable and harmonious tomorrow.
        </p>
      </div>
      {/* </div> */}
    </div>
  );
}

export default MissionVission;
