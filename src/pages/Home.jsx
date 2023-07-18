import Header from "../components/header/Header.jsx";
import Nav from "../components/nav/Nav.jsx";
import Slider from "../components/slider/Slider.jsx";
import SliderCategory from "../components/sliderCategory/SliderCategory";
import BannerSeccion from "../components/seccion/BannerSeccion";
import ListProduct2 from "../components/listaProductos/ListProduct2";
import SliderMarca from "../components/sliderMarcas/SliderMarca";
import Footer from "../components/footer/Footer.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Slider />
        <SliderCategory />
        <BannerSeccion />
        <ListProduct2 />
        <SliderMarca />
      </main>
      <Footer />
    </>
  );
};

export default Home;
