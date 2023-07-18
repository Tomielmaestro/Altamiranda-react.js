import { useEffect, useState } from "react";
import "./categories.css";
// import { ContextProduct } from "../../context/ContextProduct";
import { Link, useParams } from "react-router-dom";
import Card from "../card/Card";
import { db } from "../../firebase/client";
import { collection, query, where, getDocs } from "firebase/firestore";

const CategoriesProducts = () => {
  const { id } = useParams();
  const idItems = id.replace(/[\W\d]+/g, "").toLowerCase();
  const [Item, setItem] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const productCollection = collection(db, "productos");
      const q = query(productCollection, where("category", "==", idItems));
      const productSnapshot = await getDocs(q);
      const productList = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItem(productList);
    };
    getProduct();
  }, [idItems]);

  // const { products } = useContext(ContextProduct);
  // const { productos } = products;
  // const Item = productos.filter((el) => el.categoria_id == parseInt(id));
  return (
    <>
      <div className="containerCard-categories">
        {Item.length === 0 ? (
          <Link to="/" className="title-categories">
            No hay productos en esta categoria 😟
          </Link>
        ) : (
          Item.map((item, index) => <Card key={index} {...item} />)
        )}
      </div>
    </>
  );
};

export default CategoriesProducts;
