/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./card.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Spinner from "../spinner/Spinner.jsx";

const Card = ({ id, nombre, imagen, precio }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Link to={`/product/${id}`} key={id}>
        <article className="article">
          <div className="ContainerCard">
            <div className="cardContentMain">
              <div className="ContainerImg">
                {!loading && <Spinner />}
                <img
                  src={imagen}
                  alt={nombre}
                  className="img-product"
                  onLoad={() => setLoading(true)}
                />
              </div>
            </div>
            <div className="infoContainer">
              <div className="infoEntrega">
                <span className="text-span">
                  <FontAwesomeIcon icon={faCarSide} className="svg" />
                  Entrega Inmediata
                </span>
              </div>
              <div className="infoName">
                <h2 className="title-product">{nombre}</h2>
              </div>
              <span className="PriceProduct">${precio}</span>
            </div>
            <div className="ContainerComprar">
              <button className="btn">Comprar</button>
            </div>
            <div className="ContainerAddCar">
              <div>
                <FontAwesomeIcon icon={faCartShopping} className="svg" />
              </div>
              <p className="p-Add">Añadir al carrito</p>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
};

export default Card;
