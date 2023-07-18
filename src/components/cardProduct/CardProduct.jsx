/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";
const CardProduct = ({ filtrado }) => {
  console.log(filtrado);

  return (
    <>
      {filtrado.map(({ id, imagen, nombre, precio }) => (
        <article className="article" key={id}>
          <div className="ContainerCard">
            <div className="cardContentMain">
              <div className="ContainerImg">
                <img src={imagen} alt={nombre} className="img-product" />
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
      ))}
    </>
  );
};

export default CardProduct;
