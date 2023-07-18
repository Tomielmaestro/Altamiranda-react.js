import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CategoryProducts from "./pages/Category/CategoryProducts.jsx";
import DetailsProduct from "./pages/Product/DetailsProduct.jsx";
import CategoriesProducts from "./pages/categories/PageCategories.jsx";
import CarritoPage from "./pages/cart/CarritoPage";
import Thankyou from "./pages/thankyou/Thankyou.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<CategoryProducts />} />
      <Route path="/categories/:id" element={<CategoriesProducts />} />
      <Route path="/product/:id" element={<DetailsProduct />} />
      <Route path="/cart/" element={<CarritoPage />} />
      <Route path="/thank-you/:id" element={<Thankyou />} />
    </Routes>
  );
};
export default App;
