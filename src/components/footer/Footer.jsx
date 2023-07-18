import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <p className="footer__text">
          Copyright © 2023 Elmaestro
          <a href="https://www.instagram.com/tomii_alt/" target="_black">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
