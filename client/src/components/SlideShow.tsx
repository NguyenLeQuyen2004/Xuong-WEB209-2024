import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideShow: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slideStyles = {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Slider {...settings}>
      <div style={slideStyles}>
        <img
          src="https://insieutoc.vn/wp-content/uploads/2021/02/mau-banner-quang-cao-khuyen-mai.jpg"
          alt="Slide 1"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <div>
        <img
          src="https://www.shutterstock.com/image-photo/lifestyle-shopping-concept-young-happy-260nw-1489620941.jpg"
          alt="Slide 2"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      {/* <div>
        <img
          src="https://i.pinimg.com/originals/d2/be/51/d2be51ed235f517a8c8684bcd9343540.png"
          alt="Slide 3"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div> */}
    </Slider>
  );
};

export default SlideShow;
