import React from "react";
import repeat from "assets/images/repeat-task.png";
import rule from "assets/images/rule.png";
import scalability from "assets/images/scalability.png";
import system from "assets/images/system-intergration.png";
import accuracy from "assets/images/accuracy.png";
import userInterface from "assets/images/user-interface.png";

function Characteristic() {
  return (
    <div>
      <div className="container flex flex-col mx-auto my-5 text-center">
        <div className="w-full draggable">
          <div className="container flex flex-col items-center mx-auto">
            <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3 ">
              <div className="flex flex-col items-center gap-3">
                <span>
                  <img src={repeat} alt="troley" />
                </span>
                <p className="text-title font-extrabold">
                  Automation of Repetitive Tasks
                </p>
                {/* <p className="text-desc text-center lg:text-left">
                  RPA is used to automate routine and repetitive tasks that are
                  rule-based and do not require complex decision-making.
                </p> */}
              </div>

              <div className="flex flex-col items-center gap-3">
                <span>
                  <img src={system} alt="system-intergration" />
                </span>
                <p className="text-title font-extrabold">
                  Integration with Systems
                </p>
                {/* <p className="text-desc text-center lg:text-left">
                  RPA can integrate with existing software applications and
                  systems without the need for extensive changes to the
                  underlying infrastructure.
                </p> */}
              </div>
              <div className="flex flex-col items-center gap-3">
                <span>
                  <img src={accuracy} alt="accuracy" />
                </span>
                <p className="text-title font-extrabold">
                  Accuracy and Consistency
                </p>
                {/* <p className="text-desc text-center lg:text-left">
                  RPA bots perform tasks with a high level of accuracy and
                  consistency, reducing the likelihood of errors associated with
                  manual data entry or repetitive tasks.
                </p> */}
              </div>
              <div className="flex flex-col items-center gap-3">
                <span>
                  <img src={userInterface} alt="interface" />
                </span>
                <p className="text-title font-extrabold">
                  User Interface Interaction
                </p>
                {/* <p className="text-desc text-center lg:text-left">
                  RPA bots interact with applications through the user
                  interface, just like a human user. They can navigate through
                  software, fill out forms, extract and process data, and
                  perform other actions.
                </p> */}
              </div>
              <div className="flex flex-col items-center gap-3">
                <span>
                  <img src={scalability} alt="scalability" />
                </span>
                <p className="text-title font-extrabold">Scalability</p>
                {/* <p className="text-desc text-center lg:text-left">
                  RPA allows organizations to scale automation quickly and
                  efficiently. Bots can be deployed to handle large volumes of
                  transactions without the need for significant manual
                  intervention.
                </p> */}
              </div>
              <div className="flex flex-col items-center gap-3">
                <span>
                  <img src={rule} alt="product" />
                </span>
                <p className="text-title font-extrabold">
                  Rule-Based Processing
                </p>
                {/* <p className="text-desc text-center lg:text-left">
                  RPA bots follow predefined rules and instructions. They are
                  well-suited for tasks with clear and deterministic steps.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Characteristic;
