/* eslint-disable no-unused-vars */
import "./ItemDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/client";
import {
  collection,
  getDocs,
  documentId,
  query,
  where,
} from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams();
  const { addItems } = useContext(CartContext);
  const [counter, setCounter] = useState(1);
  const [productItem, setProductItem] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const productsCollection = collection(db, "productos");
      const q = query(productsCollection, where(documentId(), "==", id));
      const productsSnapshot = await getDocs(q);
      const productsList = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductItem(productsList && productsList[0]);
    };
    getProduct();
  }, [id]);

  const { stock } = productItem;

  const handleAddItem = () => counter < stock && setCounter(counter + 1);

  const handleRemoveItem = () => counter > 1 && setCounter(counter - 1);

  const onAdd = (counter) => {
    //verifico que el counter sea menor o igual al stock
    if (counter > stock) {
      alert("No hay stock suficiente");
      return;
    }
    //Actualizo el stock del producto
    productItem.stock -= counter;
    //Actualizo el counter

    setCounter(counter);
    addItems(productItem, counter);
  };

  return (
    <div className="container-detail">
      <div className="breadcrum">
        <div className="title-breadcrum">
          <p>Home/</p>
          <p>Productos/</p>
          <p>Remeras/</p>
        </div>
      </div>
      <div className="detailProduct">
        <div className="title-detail-product">
          <h3 className="title-detail">{productItem.nombre}</h3>
          <FontAwesomeIcon icon={faHeart} className="fa-detail" />
        </div>
        <div className="marca-detail">
          <p className="marca-product">marca:{productItem.marca}</p>
        </div>
        <div className="page-detail">
          <div className="box-img-detail">
            <img
              src={productItem.imagen}
              alt={productItem.nombre}
              className="img-detail"
            />
          </div>
          <div className="box-detail">
            <div className="description-detail">
              <div className="description-detail-product">
                <h4 className="title-description">Descripción</h4>
              </div>
              {<p className="description-product">{productItem.description}</p>}
            </div>
            <div className="description-info">
              <div className="box-price">
                <span className="precio">precio:</span>
                <span className="price">${productItem.precio}</span>
              </div>
              <div className="box-count-stock">
                <div className="box-count">
                  <button className="btn-res" onClick={handleRemoveItem}>
                    -
                  </button>
                  <span className="count">{counter}</span>
                  <button className="btn-sum" onClick={handleAddItem}>
                    +
                  </button>
                </div>
                <div className="box-stock-disponible">
                  <p className="stock-disponible">Stock disponible: {stock}</p>
                </div>
              </div>

              <div className="add-btn">
                <button className="btn-add" onClick={() => onAdd(counter)}>
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
