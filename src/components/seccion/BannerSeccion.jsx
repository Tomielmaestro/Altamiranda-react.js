import { useNavigate } from "react-router-dom";
import "./BannerSeccion.css";
const BannerSeccion = () => {
  const navigate = useNavigate();

  return (
    <div className="banner-container">
      <div className="pages-banner">
        <img
          src="https://imagedelivery.net/coazEmlpsaEeLgEQn76AbA/d134ea4d-4976-472f-d357-951c88d64500/public"
          alt="PC Armadas"
          className="banner-img"
        />
        <div className="info-banner">
          <h2 className="btn-info">Pc Armadas</h2>
          <p className="parrafo-banner">
            Si estás buscando Computadoras destinadas a estaciones de trabajo,
            edición de audio, fotografía/vídeo HD, render, modelado 3D o Pcs
            destinadas a un alto desempeño en tiendas u oficinas, en esta
            sección tendrás tu herramienta perfecta.
          </p>
        </div>
        <div className="btn-banner">
          <button
            onClick={() => navigate("/category/pcarmadas")}
            className="btn-banner-cat"
          >
            Ver todas
          </button>
        </div>
      </div>

      <div className="pages-banner">
        <img
          src="https://imagedelivery.net/coazEmlpsaEeLgEQn76AbA/e1f33871-79c4-42be-b09d-f24e7eadee00/public"
          alt="Pc Gamer"
          className="banner-img"
        />
        <div className="info-banner">
          <h2 className="btn-info">Pc Gamer</h2>
          <p className="parrafo-banner">
            Tenemos tres gamas de Pc Gaming para ofrecerte. Adaptamos los
            productos a tus necesidades y presupuesto de forma que cualquier
            gamer tenga la posibilidad de disfrutar de una experiencia inmersiva
            en cualquier juego.
          </p>
        </div>
        <div className="btn-banner">
          <button
            onClick={() => navigate("/category/pcarmadas")}
            className="btn-banner-cat"
          >
            Ver todas
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSeccion;
