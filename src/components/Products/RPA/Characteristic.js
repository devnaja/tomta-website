import React from "react";
import repeat from "assets/images/repeat-task.png";
import rule from "assets/images/rule.png";
import scalability from "assets/images/sacalability.png";
import system from "assets/images/system-intergration.png";
import accuracy from "assets/images/accuracy.png";
import userInterface from "assets/images/user-interface.png";

function Characteristic() {
  return (
    <div>
      <div className="container flex flex-col mx-auto my-5 text-center">
        <div className="w-full draggable">
          <div className="container flex flex-col items-center mx-auto">
            <div className="grid w-full grid-cols-1 md:gap-5 xl:gap-10 md:grid-cols-3 ">
              <div className="flex flex-col items-center gap-3">
                <span>
                  <img src={repeat} alt="troley" />
                </span>
                <div className="px-2 xl:px-4 mt-4 xl:mt-8">
                  <p className="text-info mb-2 xl:mb-5 font-semibold">
                    Automate of Repetitive Tasks
                  </p>
                  <p className="text-desc text-center lg:text-justify">
                    RPA is used to automate routine and repetitive tasks that
                    are rule-based and do not require complex decision-making.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <span>
                  <img src={system} alt="system-intergration" />
                </span>
                <div className=" px-2 xl:px-4 mt-4 xl:mt-8">
                  <p className="text-info mb-2 xl:mb-5 font-semibold">
                    Integration with Systems
                  </p>
                  <p className="text-desc text-center lg:text-justify">
                    RPA can integrate with existing software applications and
                    systems without the need for extensive changes to the
                    underlying infrastructure.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span>
                  <img src={accuracy} alt="accuracy" />
                </span>
                <div className=" px-2 xl:px-4 mt-4 xl:mt-8">
                  <p className="text-info mb-2 xl:mb-5 font-semibold">
                    Accuracy and Consistency
                  </p>
                  <p className="text-desc text-center lg:text-justify">
                    RPA bots perform tasks with a high level of accuracy and
                    consistency, reducing the likelihood of errors associated
                    with manual data entry or repetitive tasks.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span>
                  <img src={userInterface} alt="interface" />
                </span>
                <div className=" px-2 xl:px-4 mt-4 xl:mt-8">
                  <p className="text-info mb-2 xl:mb-5 font-semibold">
                    User Interface Interaction
                  </p>
                  <p className="text-desc text-center lg:text-justify">
                    RPA bots mimic human interaction with applications,
                    navigating UI, filling forms, extracting data, and
                    performing actions.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span>
                  <img src={rule} alt="product" />
                </span>
                <div className=" px-2 xl:px-4 mt-4 xl:mt-8">
                  <p className="text-info mb-2 xl:mb-5 font-semibold">
                    Rule-Based Processing
                  </p>
                  <p className="text-desc text-center lg:text-justify">
                    RPA bots follow predefined rules and instructions. They are
                    well-suited for tasks with clear and deterministic steps.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span>
                  <img src={scalability} alt="scalability" />
                </span>
                <div className=" px-2 xl:px-4 mt-4 xl:mt-8">
                  <p className="text-info mb-2 xl:mb-5 font-semibold">
                    Scalability
                  </p>
                  <p className="text-desc text-center lg:text-justify">
                    RPA enables swift and efficient automation scaling, handling
                    high transaction volumes without extensive manual
                    involvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Characteristic;
