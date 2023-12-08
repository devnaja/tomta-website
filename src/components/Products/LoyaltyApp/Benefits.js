import React from "react";
import sales from "assets/images/sales-2.png";
import admin from "assets/images/admin.png";
import customer from "assets/images/customer.png";

function Benefits() {
  return (
    <div className="container flex flex-col mx-auto my-5">
      <div className="w-full draggable">
        <div className=" flex flex-col items-center mx-auto">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-16 ">
            <div className="border-2 flex flex-col items-center py-5 gap-3 rounded-3xl shadow-main transition-all hover:scale-105">
              <img className="rounded-t-3xl" src={sales} alt="sales" />

              <div className="px-8 py-5">
                <p className="text-2xl font-extrabold text-dark-grey-900">
                  Sales and Revenue
                </p>
                <p className="text-base leading-7 text-dark-grey-600 ">
                  Loyalty apps drive repeat business by rewarding customer
                  loyalty, leading to a positive impact on sales and revenue.
                </p>
              </div>
            </div>
            <div className="border-2 flex flex-col items-center py-5 gap-3 rounded-3xl shadow-main  transition-all hover:scale-105">
              <img className=" " src={admin} alt="admin" />
              <div className=" px-8 py-5 ">
                <p className="text-2xl font-extrabold text-dark-grey-900">
                  Powerful Admin Panel
                </p>
                <p className="text-base leading-7 text-dark-grey-600">
                  It has a dashboard that gives quick insights, helps manage
                  users, and handles content like images and videos. It also
                  tracks data, ensures security, and allows customization for
                  user preferences.
                </p>
              </div>
            </div>
            <div className="border-2 flex flex-col items-center py-5 gap-3 rounded-3xl shadow-main  transition-all hover:scale-105">
              <img className="rounded-t-3xl" src={customer} alt="customer" />
              <div className="px-8 py-5">
                <p className="text-2xl font-extrabold text-dark-grey-900">
                  Customer Engagement
                </p>
                <p className="text-base leading-7 text-dark-grey-600">
                  A loyalty app allows businesses to directly connect with their
                  customers, offering personalized experiences.
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
