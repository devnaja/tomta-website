import React from "react";
import birthday from "assets/images/birthday-voucher-1.png";
import trolley from "assets/images/trolley.png";
import schedule from "assets/images/schedule.png";
import spending from "assets/images/spending.png";
import accumulative from "assets/images/accumulative.png";
import product from "assets/images/product.png";
import firstVisit from "assets/images/first-visit.png";
import share from "assets/images/share.png";

function Features() {
  return (
    <div>
      <div className="container flex flex-col mx-auto my-5">
        <div className="w-full draggable">
          <div className="container flex flex-col items-center mx-auto">
            <div className="grid w-full grid-cols-1 gap-5 md:gap-10 xl:gap-16 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <span>
                  <img src={trolley} alt="troley" />
                </span>
                <p className="text-title">Loyalty Points</p>
                <p className="text-desc ">
                  Earn points from purchases that can be redeemed for physical
                  or digital rewards
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span>
                  <img src={birthday} alt="birthday" />
                </span>
                <p className="text-title">Birthday Vouchers</p>
                <p className="text-desc ">
                  Extra rewards or points throughout customer’s birthday month.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span>
                  <img src={schedule} alt="schedule" />
                </span>
                <p className="text-title">Schedule-A-Campaign</p>
                <p className="text-desc">
                  Schedule a specific time, date or weekend for
                  higher-than-usual rewards
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span>
                  <img src={spending} alt="spending" />
                </span>
                <p className="text-title">Per Spending</p>
                <p className="text-desc">
                  Fixed amounts of points are awarded to purchases in a specific
                  price range that increases uniformly with the total amount
                  spent
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span>
                  <img src={accumulative} alt="accumulative" />
                </span>
                <p className="text-title">Accumulative Spending</p>
                <p className="text-desc">
                  After hitting a spending target, subsequent purchases see
                  bigger rewards
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span>
                  <img src={product} alt="product" />
                </span>
                <p className="text-title">Product Campaign</p>
                <p className="text-desc">
                  Purchase of specific products will award more points
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span>
                  <img src={firstVisit} alt="product" />
                </span>
                <p className="text-title">Social Media Sharing</p>
                <p className="text-desc">
                  Love a great deal? Share it with your friends through social
                  media or message
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span>
                  <img src={share} alt="product" />
                </span>
                <p className="text-title">First Visit Bonus</p>
                <p className="text-desc">
                  Entice shoppers to become members by offering an irresistible
                  offer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;