import React from "react";
import headerImage from "assets/images/data-analytics-2.jpg";

function Details4() {
  return (
    <section className="relative m-auto py-5 lg:h-screen grid content-center">
      <div className="items-center flex flex-wrap">
        <div className="block lg:hidden w-full md:w-1/2 lg:6/12 m-auto my-3 p-2 bg-black">
          <img
            alt="..."
            className="lg:py-0 w-1/2 m-auto lg:w-full"
            src={headerImage}
          />
        </div>
        <div className="w-full lg:w-5/12 m-auto lg:px-4">
          <h3 className="text-info mb-5 lg:mb-8">Data Analytics</h3>
          <p className="mt-4 text-desc text-justify">
            Tomta empowers businesses by providing data analytics solutions to
            harness the full potential of their data. Our expert team
            specializes in extracting actionable insights from complex datasets,
            enabling clients to make informed decisions and gain a competitive
            edge.
          </p>
          <p className="mt-4 text-desc text-justify">
            {" "}
            We offer comprehensive services, including{" "}
            <span className="font-bold text-primary">
              data cleaning, statistical analysis, and machine learning, to
              uncover patterns, trends, and correlations.
            </span>{" "}
            Tomta's predictive analytics assists in forecasting market trends
            and optimizing resource allocation. Our solutions enhance
            operational efficiency, refine marketing strategies, and aid risk
            assessment in finance.
          </p>
          <p className="mt-4 text-desc text-justify">
            Partner with Tomta to transform your data into a strategic asset,
            driving innovation and business success.
          </p>
        </div>
        <div className="hidden lg:block w-full md:w-1/2 lg:6/12 m-auto p-2 bg-black">
          <img alt="..." className="max-w-full shadow-lg" src={headerImage} />
        </div>
      </div>
    </section>
  );
}

export default Details4;
