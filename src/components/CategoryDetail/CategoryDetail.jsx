/* eslint-disable react-hooks/rules-of-hooks */
import Card from "../card/Card.jsx";
import { useEffect, useState } from "react";
// import { ContextProduct } from "../../context/ContextProduct.jsx";
import { Link, useParams } from "react-router-dom";
import "./CategoryDetail.css";
import { db } from "../../firebase/client.js";
import { collection, query, where, getDocs } from "firebase/firestore";
const CategoryDetail = () => {
  const { id } = useParams();
  const [productItem, setProductItem] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const productCollection = collection(db, "productos");
      const q = query(productCollection, where("category", "==", id));
      const productSnapshot = await getDocs(q);
      const productList = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductItem(productList);
    };
    getProduct();
  }, [id]);

  return (
    <>
      <div className="ContainerCard-category">
        {productItem.length === 0 ? (
          <Link to="/" className="empty-category">
            No hay productos en esta categoria, volver atrás... 🫶🏼
          </Link>
        ) : (
          productItem.map((item, index) => <Card key={index} {...item} />)
        )}
      </div>
    </>
  );
};
export default CategoryDetail;
