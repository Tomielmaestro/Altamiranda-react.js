/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ListProduct.css";
import { useEffect, useState } from "react";
import Card from "../card/Card.jsx";
import { db } from "../../firebase/client";
import { collection, getDocs, where, query } from "firebase/firestore";

const ListProduct2 = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      const productosCollection = collection(db, "productos");

      const q = query(productosCollection, where("categoria_id", "==", 10));
      const productosSnapshot = await getDocs(q);

      const productosList = productosSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductos(productosList);
    };
    getProductos();
  }, []);

  const settings = {
    infinite: true,
    speed: 250,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: false,
  };

  return (
    <div className="content">
      <Slider {...settings} className="slider-box">
        {productos.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </Slider>
    </div>
  );
};
export default ListProduct2;
