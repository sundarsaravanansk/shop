import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <div className="slide">
      <div className="mx-w">
        <Slider {...settings}>
          <div>
            <img src="https://img.freepik.com/free-psd/food-menu-restaurant-facebook-cover-template_106176-729.jpg" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-psd/food-menu-restaurant-facebook-cover-template_106176-729.jpg" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-psd/food-menu-restaurant-facebook-cover-template_106176-729.jpg" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-psd/food-menu-restaurant-facebook-cover-template_106176-729.jpg" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-psd/food-menu-restaurant-facebook-cover-template_106176-729.jpg" />
          </div>
       
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
