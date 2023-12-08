import React from "react";
import image1 from "assets/images/team/team-1.jpg";
import image2 from "assets/images/team/team-2.jpg";
import image3 from "assets/images/team/team-3.jpg";

function TeamDesc() {
  return (
    <div className="text-left px-5 md:px-20 py-5 md:py-10 bg-background ">
      <div className="grid grid-cols-3">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-primary text-white">
          <div>
            <img src={image1} alt="profile" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">John Doe</div>
              <div className="font-bold text-md mb-2">Web Designer</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-primary text-white">
          <div>
            <img src={image2} alt="profile" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Naja Nadhirah</div>
              <div className="font-bold text-md mb-2">Web Developer</div>
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-primary text-white">
          <div>
            <img src={image3} alt="profile" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Billy Smith</div>
              <div className="font-bold text-md mb-2">Web Developer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamDesc;
