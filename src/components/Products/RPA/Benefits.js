import React from "react";
import cost from "assets/images/spending.png";
import time from "assets/images/time.png";
import error from "assets/images/error.png";

function Benefits() {
  return (
    <div className="container flex flex-col mx-auto my-5">
      <div className="w-full draggable">
        <div className=" flex flex-col items-center mx-auto">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-16 ">
            <div className="border-2 flex flex-col items-center py-5 gap-3 rounded-3xl shadow-main transition-all hover:scale-105">
              <img className="rounded-t-3xl" src={cost} alt="sales" />

              <div className="px-8 py-5">
                <p className="text-2xl font-extrabold text-dark-grey-900">
                  Cost Savings
                </p>
                <p className="text-base leading-7 text-dark-grey-600 ">
                  RPA can significantly reduce operational costs by automating
                  repetitive tasks, minimizing the need for manual labor, and
                  increasing overall efficiency.
                </p>
              </div>
            </div>
            <div className="border-2 flex flex-col items-center py-5 gap-3 rounded-3xl shadow-main  transition-all hover:scale-105">
              <img className=" " src={time} alt="admin" />
              <div className=" px-8 py-5 ">
                <p className="text-2xl font-extrabold text-dark-grey-900">
                  Time Efficiency
                </p>
                <p className="text-base leading-7 text-dark-grey-600">
                  Automation leads to faster task completion and quicker
                  turnaround times, allowing businesses to meet deadlines and
                  respond promptly to customer needs.
                </p>
              </div>
            </div>
            <div className="border-2 flex flex-col items-center py-5 gap-3 rounded-3xl shadow-main  transition-all hover:scale-105">
              <img className="rounded-t-3xl" src={error} alt="customer" />
              <div className="px-8 py-5">
                <p className="text-2xl font-extrabold text-dark-grey-900">
                  Error Reduction
                </p>
                <p className="text-base leading-7 text-dark-grey-600">
                  By minimizing human errors in routine tasks, RPA enhances data
                  accuracy, which is crucial for maintaining data integrity and
                  compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
