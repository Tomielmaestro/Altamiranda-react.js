/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "./Slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useContext } from "react";
import { ContextProduct } from "../../context/ContextProduct";

const Slider = () => {
  const { slider } = useContext(ContextProduct);

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ type: "progressbar" }}
      >
        {slider.map(({ id, img, title }) => (
          <SwiperSlide key={id}>
            <img src={img} alt={title} className="img-slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
