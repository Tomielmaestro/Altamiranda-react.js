import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Link to={"/cart"} className="product-cart">
        <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffff" }} />
        <span className="product-cant">{cart.length}</span>
      </Link>
    </>
  );
};
