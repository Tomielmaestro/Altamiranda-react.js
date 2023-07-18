import "./SliderMarca.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useContext } from "react";
// import { ContextProduct } from "../../context/ContextProduct";
import marca from "../../../marcaSlider.json";

const SliderMarca = () => {
  // const { marca } = useContext(ContextProduct);
  // const { marcas } = marca;
  // console.log(marcas);
  const { marcas } = marca;

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 0,
    cssEase: "linear",
    draggable: false,
    dots: false,
    arrows: false,
  };

  return (
    <div className="container-slider-marca">
      <h3 className="title-sliderMarca">las mejores marcas</h3>
      <div className="content-sliderMarca">
        <Slider {...settings} className="slider-marcas">
          {marcas.map(({ id, logo }) => {
            return (
              <div className="contentCard-marca" key={id}>
                <img src={logo} alt={`id:${id}`} className="img-marca" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SliderMarca;
