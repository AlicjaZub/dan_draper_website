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
    <section id="home" className="w-full relative">
      <Slider {...settings}>
        <div>
          <video autoPlay muted loop className="w-full">
            <source src="/test.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>
      <div className="absolute text-white top-1/2 left-36">
        <p>Daniel Draper</p>
        <p>London Art Director</p>
      </div>
    </section>
  );
};

export default Home;
