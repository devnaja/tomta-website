import React from "react";
import headerImage from "assets/images/rpa1.jpg";

function Header() {
  return (
    <div className="grid lg:grid-cols-2 ">
      <div className="m-auto ">
        <img src={headerImage} alt="About" className="my-5 p-2 bg-black" />
      </div>
      <div className="flex">
        <div className="m-auto lg:mr-20 w-4/5">
          <div className="text-header mb-5">
            What is robotic process automation?
          </div>
          <p className="text-justify text-body">
            RPA stands for Robotic Process Automation. RPA is a technology that
            uses software robots or "bots" to automate repetitive and rule-based
            tasks within business processes. These bots are designed to mimic
            the actions of a human interacting with digital systems, such as
            clicking buttons, entering data, and performing tasks in software
            applications. Software robots can do it faster and more consistently
            than people, without the need to get up and stretch or take a coffee
            break.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
