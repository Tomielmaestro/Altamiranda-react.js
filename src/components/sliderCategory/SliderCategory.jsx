/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./SliderCategory.css";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase/client";
import { collection, getDocs } from "firebase/firestore";
import Spinner from "../spinner/Spinner.jsx";

const SliderCategory = () => {
  const [categoria, setCategoria] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCategorias = async () => {
      const categoriasCollection = collection(db, "categorias");
      const categoriasSnapshot = await getDocs(categoriasCollection);
      const categoriasList = categoriasSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategoria(categoriasList);
    };
    getCategorias();
  }, []);

  return (
    <>
      <h2 className="title-slider">COMPRA POR CATEGORIA</h2>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-btn-next",
          prevEl: ".swiper-btn-prev",
        }}
        className="swiper-container"
        slidesPerView={5}
      >
        <FontAwesomeIcon className="swiper-btn-prev" icon={faChevronLeft} />

        <FontAwesomeIcon className="swiper-btn-next" icon={faChevronRight} />
        {categoria.map(({ img, id, nombre }) => (
          <SwiperSlide className="card-categorys" key={id}>
            <Link to={`/categories/${nombre}`} className="link-category">
              <div className="card-categoria">
                {!loading && <Spinner />}
                <img
                  src={img}
                  alt={nombre}
                  className="card-categoria-img"
                  onLoad={() => setLoading(true)}
                />
              </div>
              <p className="card-categoria-p">{nombre}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default SliderCategory;
