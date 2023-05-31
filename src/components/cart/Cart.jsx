import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const Cart = () => {
  return (
    <>
      <a href="#" className="product-cart">
        <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffff" }} />
        <span className="product-cant">0</span>
      </a>
    </>
  );
};
