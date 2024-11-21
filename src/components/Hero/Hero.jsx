import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const imageList = [
  {
    id: 1,
    img: Image1,
    tittle: "Upto 50% off all Men's Wear",
    description:
      "Embrace curiosity, for it ignites the flame of knowledge. With every question asked, we step closer to understanding the world around us. Explore, learn, and never stop wondering",
  },
  {
    id: 2,
    img: Image2,
    tittle: "30% off on all Women's Wear",
    description:
      "Embrace curiosity, for it ignites the flame of knowledge. With every question asked, we step closer to understanding the world around us. Explore, learn, and never stop wondering",
  },
  {
    id: 3,
    img: Image3,
    tittle: "70% off on all Products Sale",
    description:
      "Embrace curiosity, for it ignites the flame of knowledge. With every question asked, we step closer to understanding the world around us. Explore, learn, and never stop wondering",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    Infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    // pauseOnHover:false,
    // pauseOnFocus:false,
  };
  return (
    <>
      <div className="relative overflow-hidden min-h-[500px] sm:min-h-[490px] bg-gray-100 flex justify-center items-center duration-200">
        {/* background pattern */}
        <div className="h-[600px] w-[600px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
        {/* Hero Section */}
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {imageList.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.tittle}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      className="text-sm"
                    >
                      {data.description}
                    </p>
                    <button
                      className="br-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full bg-primary w-[160px]"
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      Order Now
                    </button>
                  </div>
                  {/* image section */}
                  <div className="order-1 sm:order-1">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 la:scale-120   object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Hero;
