import Logo from "../../../public/header_logo_nuevo.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Cart } from "../cartWidget/Cart.jsx";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header_logo">
          <img src={Logo} alt="" className="logo" />
        </Link>
        <form className="form">
          <input
            type="text"
            className="input focus"
            placeholder="buscá tus equipos"
            autoComplete="off"
            required
          />
          <button aria-label="Buscar" className="btnSearch">
            <FontAwesomeIcon icon={faMagnifyingGlass} focusable="true" />
          </button>
        </form>
        <a href="#" className="userBtn">
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: "#ffffff" }}
            className="icon-user"
          />
          <span className="textUser">Ingresá</span>
        </a>
        <div className="favorites">
          <a href="#" className="fav">
            <FontAwesomeIcon icon={faHeart} style={{ color: "#ffff" }} />
            <span className="favorite-cant">0</span>
          </a>
        </div>
        <div className="cart">
          <Cart />
        </div>
      </div>
    </header>
  );
};
export default Header;
