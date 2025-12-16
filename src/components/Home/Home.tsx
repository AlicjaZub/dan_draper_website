import React from "react";
import Slider from "react-slick";

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  speed: 500,
  waitForAnimate: false,
};

const Home = () => {
  return (
      <section id="home" className="relative w-full overflow-hidden">
        <Slider {...settings}>
          <div className="w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover md:h-screen"
            >
              <source src="/test.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </Slider>


      {/* Text Overlay */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          text-center
          text-white
          px-4
          md:left-12
          md:translate-x-0
          md:text-left
          md:text-sm
        "
      >
        <p className="text-2xl md:text-4xl font-semibold">
          Daniel Draper
        </p>
        <p className="text-sm md:text-lg tracking-wide">
          London Art Director
        </p>
      </div>
    </section>
  );
};

export default Home;
