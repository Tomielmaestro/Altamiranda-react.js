/* eslint-disable react/jsx-key */
import { useContext } from "react";
import "./Carrito.css";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase/client";
import { collection, addDoc } from "firebase/firestore";

const Carrito = () => {
  const { cart, removeItem, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const vaciarCarrito = () => {
    setCart([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email } = e.target;
    const newOrder = {
      user: {
        name: name.value,
        email: email.value,
      },
      items: cart,
      date: new Date(),
      total: cart.reduce((acc, el) => acc + el.item.precio * el.count, 0),
    };
    const docRef = await addDoc(collection(db, "orders"), newOrder);
    // console.log("Document written with ID: ", docRef.id);
    navigate(`/thank-you/${docRef.id}`);
    name.value = "";
    email.value = "";
    //vaciar carrito despues de comprar
    vaciarCarrito();
  };

  return (
    <>
      {cart.length === 0 ? (
        <Link to={"/"} className="buy-title">
          Seguir Comprando 💪🏼
        </Link>
      ) : (
        <div className="padre-height">
          <div className="container-carrito">
            <div className="cart-list-product">
              {cart.map((product) => (
                <div className="product-cart" key={product.item.id}>
                  <div className="cart-product-img">
                    <img src={product.item.imagen} alt={product.nombre} />
                  </div>
                  <Link
                    to={`/product/${product.item.id}`}
                    className="cart-product-title"
                  >
                    {product.item.nombre}
                  </Link>
                  <span className="cart-product-count">x{product.count}</span>
                  <span className="cart-product-price">
                    ${product.item.precio * product.count}
                  </span>
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="fa-close"
                    onClick={() => removeItem(product.item)}
                  />
                </div>
              ))}
            </div>
          </div>
          <section className="form-container">
            <form className="form" onSubmit={handleSubmit}>
              <button type="submit" id="comprar" className="btn-form-buy">
                comprar
              </button>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="name-form"
                  name="name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="email-form"
                  name="email"
                />
              </div>
              <div className="form-group">
                <span className="total-price">
                  Precio Final:$
                  {cart.reduce((acc, el) => acc + el.item.precio * el.count, 0)}
                </span>
              </div>
            </form>
          </section>
        </div>
      )}
    </>
  );
};

export default Carrito;
