import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const bannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "Center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  hright: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <>
      <div
        className="mb-20 bg-gary-100 text-wh"
        data-aos="zoom-in"
        style={bannerImg}
      >
        <div className="conatiner backdrop-blur-sm py-10">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold text-white">
              Get Notified About New Products
            </h1>
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter your email"
              className="w-full p-3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
