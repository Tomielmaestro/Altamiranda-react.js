import Logo from "../../../public/header_logo_nuevo.png";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Cart } from "../cart/Cart";

export const Header = () => {
  return (
    <div className="container">
      <a href="#" target="_black" className="header_logo">
        <img src={Logo} alt="" className="logo" />
      </a>
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
  );
};
