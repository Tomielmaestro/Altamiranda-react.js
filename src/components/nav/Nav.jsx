import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const HandleInner = (e) => {
    const category = e.target.innerText;
    const id = category.replace(/[\W\d]+/g, "");
    const idCategory = id.toLowerCase();
    navigate(`/category/${idCategory}`);
  };

  return (
    <nav className="nav">
      <div className="nav-top">
        <div className="option">
          <span data-text="span" onClick={HandleInner}>
            pc armadas
          </span>
        </div>
        <div className="option">
          <span data-text="span" onClick={HandleInner}>
            notebook
          </span>
        </div>
        <div className="option">
          <span data-text="span" onClick={HandleInner}>
            placas de video
          </span>
        </div>
        <div className="option">
          <span data-text="span" onClick={HandleInner}>
            monitores
          </span>
        </div>
        <div className="option">
          <span data-text="span" onClick={HandleInner}>
            sillas gamer
          </span>
        </div>
        <div className="option">
          <span data-text="span" onClick={HandleInner}>
            accesorios
          </span>
        </div>
        <div className="option">
          <span data-text="span" onClick={HandleInner}>
            tecnologia
          </span>
        </div>
        <div className="option">
          <span data-text="span" onClick={HandleInner}>
            perifericos
          </span>
        </div>
        <div className="optionDos">
          <div className="btn-left">
            <span data-text="spanDos" className="spanDos" onClick={HandleInner}>
              arma tu pc
            </span>
          </div>
          <div className="btn-right">
            <span
              data-text="spanDos"
              className="spanDos dos"
              onClick={HandleInner}
            >
              marcas
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
