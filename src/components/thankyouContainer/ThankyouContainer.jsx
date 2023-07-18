import { useParams } from "react-router-dom";
import "./Thankyou.css";
const ThankyouContainer = () => {
  const { id } = useParams();

  return (
    <div className="thankyou-container">
      <h2 className="thankyou-buy">Gracias por tu compra! 😍</h2>
      <h3 className="thankyou-order">Su orden de compra es: {id}</h3>
    </div>
  );
};

export default ThankyouContainer;
