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
                <p className="text-title">Increased Flexibility</p>
                <p className="text-desc ">
                  Mobile warehouse systems provide flexibility in managing
                  inventory and logistics operations. With mobile applications,
                  warehouse staff can access real-time information and perform
                  tasks from various locations within the warehouse or remotely
                </p>
              </div>
            </div>
            <div className="border-2 flex flex-col items-center py-5 gap-3 rounded-3xl shadow-main  transition-all hover:scale-105">
              <img className=" " src={time} alt="admin" />
              <div className=" px-8 py-5 ">
                <p className="text-title">Improved Efficiency</p>
                <p className="text-desc">
                  Real-time data access through mobile devices enables quicker
                  decision-making and enhances overall operational efficiency.
                  Warehouse employees can update inventory, track shipments, and
                  manage orders on the go, reducing the need for manual data
                  entry and paperwork.
                </p>
              </div>
            </div>
            <div className="border-2 flex flex-col items-center py-5 gap-3 rounded-3xl shadow-main  transition-all hover:scale-105">
              <img className="rounded-t-3xl" src={error} alt="customer" />
              <div className="px-8 py-5">
                <p className="text-title">Real-Time Visibility</p>
                <p className="text-desc">
                  Mobile warehouse systems provide real-time visibility into
                  inventory levels, order status, and other critical metrics.
                  This visibility helps businesses make informed decisions,
                  respond quickly to changes, and prevent stockouts or overstock
                  situations.
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
